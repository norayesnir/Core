# Rinsly Core
## Payload x Nuxt
Rinsly Core is a Payload x Nuxt boilerplate for building websites and web applications. The goal is to provide a solid foundation that can be updated and extended without having outdated old projects.
In this repo, you will find the core basic setup for a Nuxt project with Payload CMS. This setup includes the following:

- Nuxt
- - Nuxt Image
- - Nuxt Fonts
- - Nuxt Eslint
- - Pinia
- - Tailwind CSS
- - Tailwind Container queries
- - Icon
- - Apollo

- Payload CMS

- Eslint
- Prettier
- Husky

## Requirements
- Node.js 
- Yarn 
- Vercel storage

## Getting Started
1. Clone the repository
```bash
# Make a new project directory
mkdir project-name

# Change into the project directory
cd project-name

# Clone the repository
git clone git@github.com:norayesnir/core.git tmp

# Copy the files from the tmp directory to the project directory
rsync -av tmp/ .

# Remove the tmp directory
rm -rf tmp
```

2. Install dependencies
```bash
# Install dependencies
yarn install
```

3. Create a `.env` file in the root of the project and add the following environment variables

| Variable                      | Default                   | Description                                                 |
| ----------------------------- | ------------------------- | ----------------------------------------------------------- |
| `NITRO_HOST`                  | `0.0.0.0`                 | Host for Nuxt's Nitro server                                |
| `NITRO_PORT`                  | `3000`                    | Port used by Nitro's server                                 |
| `PAYLOAD_PUBLIC_SITE_NAME`    | `Nuxt x Payload Template` | The title of the site (used for page title templates, etc.) |
| `PAYLOAD_PUBLIC_SITE_URL`     | `https://localhost:3000`  | URL of the site, including protocol                         |
| `PAYLOAD_PUBLIC_PORT`         | `3001`                    | Port used by Payload's Express app                          |
| `PAYLOAD_PUBLIC_API_ROUTE`    | `/_payload`               | Route used for Payload's API                                |
| `PAYLOAD_PUBLIC_UPLOAD_ROUTE` | `/media`                  | Route used for Payload's upload collections                 |
| `DATABASE_NAME`               | `nuxt-payload`            | The name of the MongoDB database                            |
| `PAYLOAD_SECRET`              | -                         | A secret key used for encrypting Payload data/sessions      |
| `DATABASE_URI`                | -                         | The URI of the Vercel storage database                      |

4. Start the development server
```bash
# Start the development server 
yarn dev
```

This will start a turbo monorepo development server that runs both the Nuxt and Payload servers. The Nuxt server will be available at `http://localhost:3000` and the Payload server will be available at `http://localhost:3001`.

## Deployment
To deploy the project, you can use Vercel. You can deploy the project by running the following command:

```bash
# Deploy the project 
vercel
```

## License 
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



