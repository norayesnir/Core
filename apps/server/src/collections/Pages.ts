import type { CollectionConfig } from 'payload/types'
import * as PageTemplates from '../pages'
import { livePreviewBreakpoints } from '../utils'

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'template', 'id'],
    livePreview: {
      url: ({ data }) => {
        if (data.template === 'Home') {
          return process.env.PAYLOAD_PUBLIC_SITE_URL
        } else {
          return `${process.env.PAYLOAD_PUBLIC_SITE_URL}/${data.title.toLowerCase()}`
        }
      },
      breakpoints: livePreviewBreakpoints,
    },
  },
  access: {
    create: ({ req: { user } }) => {
      return user.role === 'admin'
    },
    read: () => true,
    delete: ({ req: { user } }) => {
      return user.role === 'admin'
    },
  },
  versions: true,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page',
          fields: Object.values(PageTemplates),
        },
      ],
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description:
          'This field is  automatically generated based on the title. To change it, edit the title field.',
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            siblingData.slug = siblingData.title
              .toLowerCase()
              .replace(/ /g, '-')
          },
        ],
        beforeValidate: [
          ({ data, siblingData }) => {
            if (!siblingData.slug && siblingData.title) {
              // Ensure slug is generated if it's missing and title exists
              data.slug = siblingData.title.toLowerCase().replace(/ /g, '-')
            }
          },
        ],
      },
    },
    {
      name: 'template',
      type: 'select',
      required: true,
      access: {
        update: ({ req: { user } }) => {
          return user.role === 'admin'
        },
      },
      options: Object.keys(PageTemplates),
      admin: {
        description:
          'A template must be selected to display relevant page fields. Changing the template on existing pages will result in data loss.',
        position: 'sidebar',
      },
    },
    {
      name: 'route',
      type: 'text',
      hidden: true,
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData['route']
          },
        ],
        afterRead: [
          ({ data }) => {
            switch (data.template) {
              case 'Home':
                return '/'
              default:
                return `/${data.title.toLowerCase().replace(/ /g, '-')}`
            }
          },
        ],
      },
    },
  ],
}

export default Pages
