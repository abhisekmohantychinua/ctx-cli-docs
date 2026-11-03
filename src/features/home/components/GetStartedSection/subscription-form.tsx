import { type FormEvent, type ReactNode, useState } from "react";

import { cn } from "cn";
import { Button } from "@/src/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function SubscriptionForm(): ReactNode {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <form className="subscription-form" onSubmit={handleSubmit} noValidate>
      <Field data-invalid={status === "error"} className="gap-2">
        <FieldLabel className="sr-only" htmlFor="release-updates-email">
          Email address
        </FieldLabel>
        <Input
          id="release-updates-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby="release-updates-status"
          required
        />
        {status !== "idle" && (
          <FieldDescription
            className={cn(
              "m-0 min-h-5 text-xs leading-[1.4]",
              status === "error" && "text-destructive",
            )}
            id="release-updates-status"
            role="status"
            aria-live="polite"
          >
            {status === "success"
              ? "Thanks! This form isn’t connected to a mailing list yet, so nothing was sent."
              : status === "error"
                ? "Enter a valid email address."
                : "\u00A0"}
          </FieldDescription>
        )}
      </Field>
      <Button className="w-full" type="submit">
        Subscribe to updates
      </Button>
    </form>
  );
}
