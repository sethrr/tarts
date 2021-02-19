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
     {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      option: {
        hotspot: 'true',
      },
    },
  ],
};
