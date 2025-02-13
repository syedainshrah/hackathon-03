import { client } from "../lib/client"; // Ensure correct path for sanity client

export async function getProducts() {
    return await client.fetch(
        `*[_type == "product"]{
            _id,
            ProductName,
            price,
            description,
            "imageUrl": image.asset->url,
            category,
            stockLevel
        }`
    );
}
