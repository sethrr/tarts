import { MdStore as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'storeSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'featuredTarts',
      title: 'Featured Poptarts',
      type: 'array',
      of: [ {type: 'reference', to: [{type: 'poptarts'}]}]
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
