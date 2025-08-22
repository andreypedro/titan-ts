import Product from "./types/Product";

export interface Result {
  productId: string;
  isValid: boolean;
  errors: string[];
}

export function validateProduct(prod: any): Result[] {
  const result: Result[] = [];
  const errors: string[] = [];

  if (typeof prod.id !== "number") {
    errors.push("id inválido");
  }

  if (prod.name.trim() === "") {
    errors.push("nome vazio");
  }

  const isCategory = Array.isArray(prod.children) && prod.children.length > 0;

  if (!isCategory && (typeof prod.price !== "number" || prod.price <= 0)) {
    errors.push("preço inválido");
  }

  const errorsResult: Result = {
    productId: prod.id,
    isValid: errors.length === 0 && !isCategory,
    errors,
  };

  result.push(errorsResult);

  if (isCategory) {
    for (let child of prod.children) {
      const childResult = validateProduct(child);

      result.push(...childResult);
    }
  }

  return result;
}
