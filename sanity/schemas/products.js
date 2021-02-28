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
    {
      name: 'frosting',
      title: 'Frosting',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'frosting' }] }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      frosting0: 'frosting.0.name',
      frosting1: 'frosting.1.name',
      frosting2: 'frosting.2.name',
    },
    prepare: ({ title, media, ...frosting }) => {
      const frosts = Object.values(frosting).filter(Boolean);

      return {
        title,
        media,
        subtitle: frosts.join(', '),
      };
    },
  },
};
