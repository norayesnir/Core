import type { CollectionConfig } from 'payload/types'
import * as MenuItemTemplates from '../menu-items'

const MenuItem: CollectionConfig = {
  slug: 'menu_item',
  labels: {
    singular: {
      en: 'Menu Item',
      nl: 'Menu Item',
    },
    plural: {
      en: 'Menu Items',
      nl: 'Menu Items',
    },
  },
  typescript: {
    interface: 'MenuItem',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    useAsTitle: 'title',
    group: {
      en: 'Navigation',
      nl: 'Navigatie',
    },
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        nl: 'Titel',
      },
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'template',
      label: {
        en: 'Template',
        nl: 'Sjabloon',
      },
      type: 'select',
      required: true,
      access: {
        update: ({ req: { user } }) => {
          return user.role === 'admin'
        },
      },
      options: Object.keys(MenuItemTemplates),
      admin: {
        description: {
          en: 'Select a template for this menu item',
          nl: 'Selecteer een sjabloon voor dit menu-item',
        },
        position: 'sidebar',
      },
    },
    ...Object.values(MenuItemTemplates),
  ],
}

export default MenuItem
