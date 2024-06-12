import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { viteBundler } from '@payloadcms/bundler-vite'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import * as Collections from './collections'
import * as Globals from './globals'

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  debug: process.env.NODE_ENV !== 'production',
  admin: {
    user: Collections.Users.slug,
    bundler: viteBundler(),
  },
  editor: slateEditor({}),
  collections: Object.values(Collections),
  globals: Object.values(Globals),
  typescript: {
    outputFile: path.resolve(__dirname, '../types.d.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  rateLimit: {
    trustProxy: true,
    skip(req) {
      return req.user
    }
  },
  upload: {
    limits: {
      fileSize: 20000000,
    },
  },
})
