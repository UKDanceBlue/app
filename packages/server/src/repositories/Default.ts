import { Container } from "@freshgum/typedi";
import type { PrismaClient } from "@prisma/client";
import type {
  Args,
  Operation,
  Result as PrismaResult,
} from "@prisma/client/runtime/library";
import type * as runtime from "@prisma/client/runtime/library";
import {
  InvariantError,
  NotFoundError,
  UnknownError,
} from "@ukdanceblue/common/error";
import { AsyncResult } from "ts-results-es";
import { Result } from "ts-results-es";
import { Err, Ok } from "ts-results-es";
import { isPromise } from "util/types";

import { toPrismaError } from "#error/prisma.js";
import {
  type FieldLookup,
  type FindManyParams,
  parseFindManyParams as parseFindManyParamsFunc,
} from "#lib/queryFromArgs.js";

import {
  type AsyncRepositoryResult,
  handleRepositoryError,
  type RepositoryError,
  type SimpleUniqueParam,
} from "./shared.js";

type Transaction = Omit<PrismaClient, runtime.ITXClientDenyList>;

export interface WithTxParam {
  tx?: Transaction;
}

export interface WithByParam<UniqueParam> {
  by: UniqueParam;
}

export interface FindOneParams<UniqueParam>
  extends WithByParam<UniqueParam>,
    WithTxParam {}
export interface FindAndCountParams<Field extends string>
  extends FindManyParams<Field>,
    WithTxParam {}
export type FindAllParams = WithTxParam;
export interface CreateParams<T> extends WithTxParam {
  init: Args<T, "create">["data"];
}
export interface UpdateParams<T, UniqueParam>
  extends WithByParam<UniqueParam>,
    WithTxParam {
  init: Args<T, "update">["data"];
}
export interface DeleteParams<UniqueParam>
  extends WithByParam<UniqueParam>,
    WithTxParam {}
export interface CreateMultipleParams<T> extends WithTxParam {
  data: {
    init: Args<T, "createMany">["data"];
  }[];
}
export interface DeleteMultipleParams<UniqueParam> extends WithTxParam {
  data: {
    by: UniqueParam;
  }[];
}

// We do this no-op with pick to prevent typescript from resolving the type
// This means that autocomplete will give use FindOneResult<T> instead of { id: string; uuid: string; ... }
type AliasedPrismaResult<T, A, F extends Operation> = Pick<
  NonNullable<Awaited<PrismaResult<T, A, F>>>,
  keyof NonNullable<Awaited<PrismaResult<T, A, F>>>
>;
export type FindOneResult<T, A> = AliasedPrismaResult<T, A, "findUnique">;
export interface FindAndCountResult<
  T,
  A extends Args<T, "findMany"> = Args<T, "findMany">,
> {
  total: number;
  selectedRows: PrismaResult<T, A, "findMany">;
}
export type FindAllResult<T, A> = AliasedPrismaResult<T, A, "findMany">;
export type CreateResult<T, A> = AliasedPrismaResult<T, A, "create">;
export type UpdateResult<T, A> = AliasedPrismaResult<T, A, "update">;
export type DeleteResult<T, A> = AliasedPrismaResult<T, A, "delete">;
export type CreateMultipleResult<T, A> = AliasedPrismaResult<
  T,
  A,
  "createMany"
>;
export type DeleteMultipleResult<T, A> = AliasedPrismaResult<
  T,
  A,
  "deleteMany"
>;

interface BaseRepository<
  T,
  UniqueParam,
  Field extends string,
  Include extends Args<T, "findUnique">["include"],
> {
  uniqueToWhere(by: UniqueParam): Args<T, "findUnique">["where"];
  findOne?(params: FindOneParams<UniqueParam>): AsyncRepositoryResult<
    FindOneResult<
      T,
      {
        include?: Include;
      }
    >
  >;

  findAndCount?(
    params: FindAndCountParams<Field>
  ): AsyncRepositoryResult<FindAndCountResult<T>>;

  findAll?(params: FindAllParams): AsyncRepositoryResult<FindAllResult<T>>;

  create?(params: CreateParams<T>): AsyncRepositoryResult<CreateResult<T>>;

  update?(
    params: UpdateParams<T, UniqueParam>
  ): AsyncRepositoryResult<UpdateResult<T>>;

  delete?(
    params: DeleteParams<UniqueParam>
  ): AsyncRepositoryResult<DeleteResult<T>>;

  createMultiple?(
    params: CreateMultipleParams<T>
  ): AsyncRepositoryResult<CreateMultipleResult<T>>;

  deleteMultiple?(
    params: DeleteMultipleParams<UniqueParam>
  ): AsyncRepositoryResult<DeleteMultipleResult<T>>;
}

export function buildDefaultRepository<
  T,
  UniqueParam,
  Field extends string,
  Include extends Args<T, "findUnique">["include"],
>(tableName: string, fieldLookup: FieldLookup<T, Field>) {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-declaration-merging
  interface DefaultRepository
    extends BaseRepository<T, UniqueParam, Field, Include> {}
  // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
  abstract class DefaultRepository {
    public static readonly fields: Field[] = Object.keys(
      fieldLookup
    ) as Field[];

    constructor(protected readonly prisma: PrismaClient) {
      Container.setValue(`${tableName}Repository`, this);
    }

    static simpleUniqueToWhere<U extends SimpleUniqueParam>(
      by: U
    ): Exclude<U, SimpleUniqueParam> extends never
      ? Args<T, "findUnique">["where"]
      : Args<T, "findUnique">["where"] | null {
      if ("id" in by) {
        return { id: by.id };
      } else if ("uuid" in by) {
        return { uuid: by.uuid };
      }
      return null;
    }

    protected handleQueryError<D>(
      promise: Promise<D>,
      handleNotFound?: false
    ): AsyncRepositoryResult<D>;
    protected handleQueryError<D>(
      promise: Promise<D>,
      handleNotFound: ConstructorParameters<typeof NotFoundError>[0]
    ): AsyncRepositoryResult<NonNullable<D>>;
    protected handleQueryError<D>(
      promise: Promise<D>,
      handleNotFound:
        | false
        | ConstructorParameters<typeof NotFoundError>[0] = false
    ): AsyncRepositoryResult<D> {
      return handleNotFound
        ? this.mapToNotFound(this.promiseToAsyncResult(promise), handleNotFound)
        : this.promiseToAsyncResult(promise);
    }

    protected async handleTransactionError<D>(
      callback: (tx: Transaction) => Promise<Result<D, RepositoryError>>
    ): Promise<Result<D, RepositoryError>> {
      let result: Result<D, RepositoryError> = Err(
        new InvariantError("Transaction not completed")
      );
      await this.prisma.$transaction(async (tx) => {
        try {
          result = await callback(tx);
          if (result.isErr()) {
            throw new Error("Rollback");
          }
        } catch (error) {
          result = handleRepositoryError(error);
          throw error;
        }
      });
      return result;
    }

    protected promiseToAsyncResult<T>(
      promise: Promise<T>
    ): AsyncRepositoryResult<T> {
      return new AsyncResult<T, RepositoryError>(
        promise.then(
          (v) => Ok(v),
          (error) =>
            Err(toPrismaError(error).unwrapOr(new UnknownError("Unknown")))
        )
      );
    }

    protected resultToAsyncResult<T, E>(
      val: Result<T, E> | Promise<Result<T, E>> | AsyncResult<T, E>
    ): AsyncResult<T, E> {
      if (isPromise(val)) {
        val = new AsyncResult(val);
      }
      if (Result.isResult(val)) {
        val = val.toAsyncResult();
      }
      return val;
    }

    protected mapToNotFound<T, E>(
      val:
        | Result<T | null | undefined, E>
        | Promise<Result<T | null | undefined, E>>
        | AsyncResult<T | null | undefined, E>,
      params: ConstructorParameters<typeof NotFoundError>[0]
    ): AsyncResult<T, E | NotFoundError> {
      return this.resultToAsyncResult(val).andThen((v) =>
        v
          ? Ok(v)
          : Err(
              new NotFoundError({
                what: "field",
                where: `${tableName}Repository`,
                sensitive: false,
                ...params,
              })
            )
      );
    }

    protected parseFindManyParams(
      param: FindManyParams<(typeof DefaultRepository.fields)[number]>
    ) {
      return parseFindManyParamsFunc(param, fieldLookup);
    }

    public abstract uniqueToWhere(
      by: UniqueParam
    ): Args<T, "findUnique">["where"];
  }

  return DefaultRepository;
}
