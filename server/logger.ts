type LogLevel = "info" | "warn" | "error";

type LogPayload = Record<string, unknown>;

export function log(level: LogLevel, event: string, payload: LogPayload = {}) {
  const entry = {
    ts: new Date().toISOString(),
    level,
    event,
    ...payload,
  };

  const serialized = JSON.stringify(entry);
  if (level === "error") {
    console.error(serialized);
    return;
  }
  console.log(serialized);
}
