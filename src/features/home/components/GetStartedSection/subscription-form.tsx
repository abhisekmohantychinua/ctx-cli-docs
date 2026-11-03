import { type FormEvent, type ReactNode, useState } from "react";

import { buttonVariants } from "@/src/components/ui/button";

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
    <form
      className="grid max-w-[30rem] gap-[0.6rem]"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="sr-only" htmlFor="release-updates-email">
        Email address
      </label>
      <input
        className="min-h-[2.75rem] w-full rounded-button border border-input bg-[color-mix(in_srgb,var(--background)_65%,var(--card))] px-[0.85rem] py-[0.65rem] font-sans text-[0.875rem] text-foreground placeholder:text-muted-foreground placeholder:opacity-100 aria-[invalid=true]:border-destructive focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ring"
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
      <button
        className={`${buttonVariants({ variant: "default" })} w-full`}
        type="submit"
      >
        Subscribe to updates
      </button>
      <p
        className="m-0 min-h-[1.25rem] text-xs leading-[1.4] text-muted-foreground"
        id="release-updates-status"
        role="status"
        aria-live="polite"
      >
        {status === "success"
          ? "Thanks! This form isn’t connected to a mailing list yet, so nothing was sent."
          : status === "error"
            ? "Enter a valid email address."
            : "\u00A0"}
      </p>
    </form>
  );
}
