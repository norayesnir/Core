import type { GlobalConfig } from 'payload/types'

const Settings: GlobalConfig = {
  slug: 'navigation-menu',
  typescript: {
    interface: 'NavigationMenu',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    group: 'Navigation',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'logo',
              label: 'Logo',
              type: 'upload',
              relationTo: 'images',
            },
            {
              name: 'uploadAlternateLogo',
              label: 'Upload Alternate Logo',
              type: 'checkbox',
              admin: {
                description: 'When this is checked, the alternate logo will be used for the opposite theme. For example, if the main logo is used for the light theme, the alternate logo will be used for the dark theme.',
              },
            },
            {
              name: 'alternateLogo',
              label: 'Alternate Logo',
              type: 'upload',
              relationTo: 'images',
              admin: {
                condition: (_, siblingData) => siblingData.uploadAlternateLogo,
              },
            },
          ],
        },
        {
          label: 'Routes',
          fields: [
            {
              name: 'routes',
              label: 'Routes',
              type: 'relationship',
              relationTo: 'menu_item',
              hasMany: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Settings
