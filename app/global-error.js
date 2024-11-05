"use client";

import * as Sentry from "@sentry/nextjs";

// A custom error boundary component that wraps your app's main component
export default function GlobalError({ error, resetErrorBoundary }) {
  // Report the error to Sentry
  Sentry.captureException(error);

  return (
    <div role="alert">
      <p>An unexpected error occurred:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
