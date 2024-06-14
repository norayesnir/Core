import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

console.log('🏃‍ Generating GraphQL possibleTypes...');

fetch(`${process.env.PAYLOAD_PUBLIC_SITE_URL}${process.env.PAYLOAD_PUBLIC_API_ROUTE}/graphql`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    variables: {},
    query: `{
      __schema {
        types {
          kind
          name
          possibleTypes {
            name
          }
        }
      }
    }`,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    return res.json();
  })
  .then((response) => {
    const { data } = response;
    if (!data || !data.__schema) {
      throw new Error('Invalid response structure');
    }

    const possibleTypes = data.__schema.types.reduce((acc, { name, possibleTypes }) => {
      if (possibleTypes) {
        acc[name] = possibleTypes.map((subtype) => subtype.name);
      }
      return acc;
    }, {});

    try {
      writeFileSync('./graphql/possibleTypes.json', JSON.stringify(possibleTypes, null, 2));
      console.log('✅ GraphQL possibleTypes generated.');
    } catch (err) {
      console.error('Error writing possibleTypes.json:', err);
    }
  })
  .catch((err) => {
    console.error('Error fetching or processing GraphQL schema:', err);
  });

