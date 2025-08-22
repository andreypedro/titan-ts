import { readFileSync } from "fs";

export function readJsonSync<T>(path: string): T {
  const data = readFileSync(path);
  return JSON.parse(data as unknown as string) as T;
}
