import { useQueryStatusWatcher } from "@hooks/useQueryStatusWatcher";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import type { CreateEventInput } from "@ukdanceblue/common/graphql-client-admin/raw-types";
import { Input } from "antd";
import { useMutation } from "urql";

import { EventOccurrencePicker } from "../components/EventOccurrencePicker";

export function EventCreator() {
  const [{ fetching, error }, createEvent] = useMutation(
    createEventMutationDocument
  );

  useQueryStatusWatcher({
    error,
    loadingMessage: "Creating event...",
    fetching,
  });

  const navigate = useNavigate();

  const form = useForm<CreateEventInput>({
    async onSubmit(values, _formApi) {
      const createdEvent = await createEvent({
        input: values,
      });

      if (createdEvent.data?.createEvent.ok) {
        await navigate({
          to: "/events/$eventId",
          params: { eventId: createdEvent.data.createEvent.data.uuid },
        });
      }
    },
    defaultValues: {
      title: "",
      summary: "",
      location: "",
      description: "",
      occurrences: [],
    },
  });

  return (
    <form.Provider>
      <form.Field
        name="title"
        children={(field) => (
          <Input
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
      <form.Field
        name="summary"
        children={(field) => (
          <Input
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
      <form.Field
        name="occurrences"
        children={(field) =>
          field.state.value.map((occurrence, index) => (
            <EventOccurrencePicker
              defaultOccurrence={occurrence}
              onChange={(occurrence) => {
                const occurrences = [...field.state.value];
                occurrences[index] = occurrence;
                field.handleChange(occurrences);
              }}
            />
          ))
        }
      />
      <form.Field
        name="description"
        children={(field) => (
          <Input.TextArea
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
    </form.Provider>
  );
}
