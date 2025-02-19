import { useForm } from "@tanstack/react-form";
import { useMutation } from "urql";

import type { InputOf } from "#gql/index.js";
import { type ResultOf } from "#gql/index.js";
import { useQueryStatusWatcher } from "#hooks/useQueryStatusWatcher.js";

import { personCreatorDocument } from "../../../../documents/person.js";

export function usePersonCreatorForm(
  afterSubmit:
    | ((
        ret: ResultOf<typeof personCreatorDocument>["createPerson"] | undefined
      ) => void | Promise<void>)
    | undefined
) {
  // Form
  const [{ fetching, error }, createPerson] = useMutation(
    personCreatorDocument
  );
  const { resetWatcher } = useQueryStatusWatcher({
    error,
    fetching,
    loadingMessage: "Saving person...",
  });

  const Form = useForm<InputOf<typeof personCreatorDocument>>({
    defaultValues: {
      name: "",
      linkblue: "",
      email: "",
      captainOf: [],
      memberOf: [],
    },
    validators: {
      onChange: ({ value: values }) => {
        const memberOfCount: Record<string, number> = {};
        for (const { id: uuid } of values.memberOf ?? []) {
          memberOfCount[uuid] = (memberOfCount[uuid] ?? 0) + 1;
        }
        const captainOfCount: Record<string, number> = {};
        for (const { id: uuid } of values.captainOf ?? []) {
          captainOfCount[uuid] = (captainOfCount[uuid] ?? 0) + 1;
        }

        for (const uuid of Object.keys(memberOfCount)) {
          if ((memberOfCount[uuid] ?? 0) > 1) {
            return "Cannot be a member of a team more than once";
          }
        }
        for (const uuid of Object.keys(captainOfCount)) {
          if ((captainOfCount[uuid] ?? 0) > 1) {
            return "Cannot be a captain of a team more than once";
          }
        }

        for (const uuid of values.memberOf ?? []) {
          if (values.captainOf?.includes(uuid)) {
            return "Cannot be a captain and member of a team";
          }
        }

        return undefined;
      },
    },
    onSubmit: async ({ value: values }) => {
      if (!values.email) {
        throw new Error("Email is required");
      }

      const { data } = await createPerson({
        input: {
          name: values.name || null,

          linkblue: values.linkblue?.toLowerCase() || null,
          email: values.email,
          captainOf: values.captainOf ?? [],
          memberOf: values.memberOf ?? [],
        },
      });

      resetWatcher();

      return afterSubmit?.(data?.createPerson);
    },
  });

  return {
    formApi: Form,
  };
}
