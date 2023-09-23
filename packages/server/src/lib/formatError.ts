import { GraphQLError, GraphQLFormattedError } from "graphql";
import { DetailedError } from "../resolvers/ApiResponse.js";
import { BaseError, DatabaseError, QueryError } from "@sequelize/core";
import jwt from "jsonwebtoken";
import { ValidationError as SequelizeValidationError } from "class-validator";
import { LuxonError, UnionValidationError, TypeMismatchError, ValidationError as DbValidationError, ParsingError, ErrorCode, ErrorApiResponse, ApiError, isErrorCode, ClientAction } from "@ukdanceblue/common"
import { Writable } from "utility-types";

import { unwrapResolverError } from "@apollo/server/errors"

export interface DbGraphQLFormattedErrorExtensions extends Omit<ApiError, "cause" | "message"> {
  clientActions: ClientAction[];
  internalDetails?: Record<string, string>;
  stacktrace?: string[];
}


export function formatError(originalFormattedError: GraphQLFormattedError, maybeWrappedError: unknown, shouldIncludeSensitiveInfo: boolean): GraphQLFormattedError {
  const error = unwrapResolverError(maybeWrappedError);

  const formattedError: Writable<GraphQLFormattedError & { extensions: DbGraphQLFormattedErrorExtensions }> = {
    ...originalFormattedError,
    message: "Unknown error",
    extensions: {
      code: ErrorCode.Unknown,
      stacktrace: shouldIncludeSensitiveInfo && Array.isArray(originalFormattedError.extensions?.stacktrace) ? originalFormattedError.extensions!.stacktrace.map(s => String(s)) : [],
      clientActions: [],
      internalDetails: {},
    }
  };

  console.log("formatError", error);

  if (error instanceof Error) {
    formattedError.message = error.message;
    if (shouldIncludeSensitiveInfo && formattedError.extensions.stacktrace?.length === 0) {
      formattedError.extensions.stacktrace = error.stack?.split("\n") ?? [];
    }

    if (error instanceof DetailedError) {
      formattedError.extensions.code = error.code ?? ErrorCode.Unknown;
    } else if (error instanceof GraphQLError) {
      Object.assign(formattedError.extensions, error.extensions);
      formattedError.extensions.code = isErrorCode(error.extensions?.code) ? error.extensions.code : ErrorCode.Unknown;
      if (shouldIncludeSensitiveInfo && formattedError.extensions.stacktrace?.length === 0 && Array.isArray(error.extensions?.stacktrace)) {
        formattedError.extensions.stacktrace = error.extensions.stacktrace.map(s => String(s));
      }
      formattedError.extensions.details = `A GraphQLError was thrown originating at ${error.positions?.join(", ")} in ${error.source?.name ?? "unknown source"}.`;
    } else if (error instanceof jwt.NotBeforeError || error instanceof jwt.TokenExpiredError) {
      formattedError.extensions.code = ErrorCode.NotLoggedIn;
      formattedError.extensions.clientActions.push(ClientAction.LOGOUT);
    } else if (error instanceof QueryError) {
      formattedError.extensions.code = ErrorCode.InternalFailure;
    } else if (error instanceof DatabaseError) {
      formattedError.extensions.code = ErrorCode.DatabaseFailure;
      if (shouldIncludeSensitiveInfo) {
        formattedError.extensions.internalDetails!.sql = error.sql;
        formattedError.extensions.internalDetails!.parameters = JSON.stringify(error.parameters);
      }
    } else if (error instanceof SequelizeValidationError) {
      formattedError.extensions.code = ErrorCode.InvalidRequest;
      formattedError.extensions.details = error.toString(false, undefined, undefined, shouldIncludeSensitiveInfo);
    } else if (error instanceof BaseError) {
      formattedError.extensions.code = ErrorCode.DatabaseFailure;
    } else if (error instanceof DbValidationError) {
      formattedError.extensions.code = ErrorCode.InvalidRequest;
      if (error instanceof LuxonError) {
        if (error.explanation && shouldIncludeSensitiveInfo) {
          formattedError.extensions.explanation = error.explanation;
        }
      } else if (error instanceof UnionValidationError) {
        formattedError.extensions.details = error.errors.map(e => e.message).join(", ");
      } else if (error instanceof TypeMismatchError) {
        error
        formattedError.extensions.details = `Expected ${error.expected}, got ${error.actual}`;
      }
    }
  } else if (typeof error === "string") {
    formattedError.message = error;
    formattedError.extensions.code = isErrorCode(error) ? error : ErrorCode.Unknown;
  } else if (typeof error === "object" && error != null) {
    if ("code" in error && isErrorCode(error.code)) {
      formattedError.extensions.code = error.code;
    }
    if ("message" in error && typeof error.message === "string") {
      formattedError.message = error.message;
    }
    if ("details" in error && typeof error.details === "string") {
      formattedError.extensions.details = error.details;
    }
    if ("explanation" in error && typeof error.explanation === "string") {
      formattedError.extensions.explanation = error.explanation;
    }
    if ("stacktrace" in error && Array.isArray(error.stacktrace) && shouldIncludeSensitiveInfo && formattedError.extensions.stacktrace?.length === 0) {
      formattedError.extensions.stacktrace = error.stacktrace.map(s => String(s));
    }
    if ("clientActions" in error && Array.isArray(error.clientActions)) {
      formattedError.extensions.clientActions = error.clientActions;
    }
  }

  if (!shouldIncludeSensitiveInfo) {
    delete formattedError.extensions.internalDetails;
    delete formattedError.extensions.stacktrace;
  }

  return formattedError;
}
