import Product from "./types/Product";
import { readJson } from "./utils/FileReader";
import { Result, validateProduct } from "./validator";

async function main() {
  const products = await readJson<Product[]>("./data");

  let validCount = 0;
  const errorMessages: string[] = [];

  for (let product of products) {
    const result: Result[] = validateProduct(product);

    result.forEach((res) => {
      if (res.isValid) {
        validCount++;
      }

      if (res.errors.length > 0) {
        const id = res.productId;
        const errorDescription = res.errors.join(", ");

        errorMessages.push(`Produto ${id}: ${errorDescription}`);
      }
    });
  }

  console.log(`Produtos válidos: ${validCount}`);
  console.log("Erros encontrados:");

  errorMessages.forEach((error) => {
    console.log(` - ${error}`);
  });
}

main();
