import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'poptarts',
  title: 'Poptarts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Poptarts Name',
      type: 'string',
      description: 'Name of the poptart',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
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
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the poptart in cents',
      validation: (Rule) => Rule.min(5000).max(500000),
      inputComponent: PriceInput,
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
      title: 'name',
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
