import type { Field } from 'payload/types'
import iconField from '../fields/iconSelect/field'

const Default: Field = {
  name: 'expandable',
  label: {
    en: 'Expandable Menu Item',
    nl: 'Uitklapbaar menu-item',
  },
  type: 'group',
  admin: {
    condition: (data) => data.template === 'Expandable',
  },
  fields: [
    {
      name: 'icon',
      label: {
        en: 'Icon',
        nl: 'Icoon',
      },
      type: 'group',
      fields: [iconField],
    },
    {
      name: 'children',
      label: {
        en: 'Submenu Items',
        nl: 'Submenu-items',
      },
      type: 'relationship',
      relationTo: 'menu_item',
      hasMany: true,
    },
  ],
}

export default Default
