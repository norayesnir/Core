import type { Field } from 'payload/types'

const Default: Field = {
  name: 'defaultFields',
  label: 'Default Fields',
  type: 'group',
  admin: {
    condition: (data) => data.template === 'Default',
  },
  fields: [
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'images',
    },
  ],
}

export default Default
