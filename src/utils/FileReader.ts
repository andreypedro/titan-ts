import { readFile } from "node:fs/promises";
import { resolve } from "path";

export async function readJson<T>(path: string): Promise<T> {
  const filePath = resolve(__dirname, "..", "data", "products.json");
  const raw = await readFile(filePath, "utf-8");
  const jsonData: unknown = JSON.parse(raw);

  if (!Array.isArray(jsonData)) {
    console.error("O arquivo JSON não contém um array na raiz.");
    process.exit(1);
  }

  return jsonData as T;
}
