import type { CollectionConfig } from 'payload/types'
import iconField from '../fields/iconSelect/field'

const MenuItem: CollectionConfig = {
  slug: 'menu_item',
  labels: {
    singular: 'Menu Item',
    plural: 'Menu Items',
  },
  typescript: {
    interface: 'MenuItem',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'referenceToPage', 'description'],
    group: 'Navigation',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'externalLink',
      label: 'External Link',
      type: 'checkbox',
      admin: {
        description: 'Check this box if the link is external',
      },
    },
    {
      name: 'referenceToPage',
      label: 'Reference to Page',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: false,
      admin: {
        condition: (_, siblingData) => !siblingData.externalLink,
      },
    },
    {
      name: 'externalUrl',
      label: 'External URL',
      type: 'text',
      admin: {
        placeholder: 'https://example.com',
        condition: (_, siblingData) => siblingData.externalLink,
      },
    },
    {
      name: 'newTab',
      label: 'Open in New Tab?',
      type: 'checkbox',
      admin: {
        description: 'Check this box if the link should open in a new tab',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    iconField,
    {
      name: 'children',
      label: 'Children',
      type: 'relationship',
      relationTo: 'menu_item',
      hasMany: true,
    },
  ],
}

export default MenuItem
