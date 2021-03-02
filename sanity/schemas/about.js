import { MdStore as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  icon,
  fields: [
    {
        name: 'storeInfo',
        title: 'Store Info',
        type: 'text',
      },
      {
        name: 'biography',
        title: 'Baker Bio',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        option: {
          hotspot: 'true',
        },
      },
  ],
};
