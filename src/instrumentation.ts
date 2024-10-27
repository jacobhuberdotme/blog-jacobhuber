// src/instrumentation.ts (or at root if not using src)
import { registerOTel } from '@vercel/otel';

export function register() {
  // Registers OpenTelemetry to monitor the app
  registerOTel('blog-jacobhuber');
}

// need to integrate: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
// https://vercel.com/docs/observability/otel-overview