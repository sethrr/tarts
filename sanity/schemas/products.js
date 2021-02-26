export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'productId',
      title: 'Product ID',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: 'true',
      },
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
  },
};
