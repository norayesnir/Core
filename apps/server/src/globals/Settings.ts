import type { GlobalConfig } from 'payload/types'

const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  access: {
    read: (_) => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Icon',
            nl: 'Icoon',
          },
          fields: [
            {
              name: 'icon',
              label: {
                en: 'Icon',
                nl: 'Icoon',
              },
              type: 'group',
              fields: [
                {
                  name: 'library',
                  label: {
                    en: 'Library',
                    nl: 'Bibliotheek',
                  },
                  type: 'text',
                  defaultValue: 'material-symbols',
                  admin: {
                    readOnly: true,
                    placeholder: 'material-symbols',
                  },
                },
                {
                  name: 'type',
                  label: {
                    en: 'Type',
                    nl: 'Type',
                  },
                  type: 'select',
                  defaultValue: 'filled',
                  options: [
                    {
                      label: {
                        en: 'Filled',
                        nl: 'Gevuld',
                      },
                      value: 'filled',
                    },
                    {
                      label: {
                        en: 'Outlined',
                        nl: 'Omtrokken',
                      },
                      value: 'outlined',
                    },
                  ],
                },
                {
                  name: 'corners',
                  label: {
                    en: 'Corners',
                    nl: 'Hoeken',
                  },
                  type: 'select',
                  defaultValue: 'none',
                  options: [
                    {
                      label: {
                        en: 'None',
                        nl: 'Geen',
                      },
                      value: '',
                    },
                    {
                      label: {
                        en: 'Rounded',
                        nl: 'Afgerond',
                      },
                      value: 'rounded',
                    },
                    {
                      label: {
                        en: 'Sharp',
                        nl: 'Scherp',
                      },
                      value: 'sharp',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
export default Settings
