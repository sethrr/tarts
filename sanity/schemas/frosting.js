import { FaPepperHot as icon } from 'react-icons/fa';
import { MdCheckBox } from 'react-icons/md';

export default {
  name: 'frosting',
  title: 'Frosting',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'Name of the package',
    },
    {
      name: 'glutenfree',
      title: ' Gluten Free',
      type: 'boolean',
      description: 'Gluten Free',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      glutenfree: 'glutenfree',
    },
    prepare: ({ name, glutenfree }) => ({
      title: `${name} ${glutenfree ? '🌱' : ' '}`,
    }),
  },
};
