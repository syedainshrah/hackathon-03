const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "product Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "ProductName",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "stockLevel",
      title: "Stock",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
    },
    {
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};

export default productSchema;
