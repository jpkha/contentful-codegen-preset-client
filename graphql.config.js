const {processEnv, loadEnvConfig} = require("@next/env") 
// ./graphql.config.js

loadEnvConfig(__dirname);
/** @type {import('graphql-config').IGraphQLConfig} */
module.exports = {
  projects: {
    introspection: {
      schema: {
        "https://graphql.contentful.com/content/v1/spaces/zokhru8rmbo6": {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          },
        },
      },
      extensions: {
        /** @type {import('@graphql-codegen/cli').CodegenConfig} */
        codegen: {
          generates: {
            "./schema.graphql": {
              plugins: ["schema-ast"],
            },
          },
        },
      },
    },
    client: {
      schema: "./schema.graphql",
      documents: ['./**/*.graphql.ts', './**/*.tsx', '!/services/lib/graphql/generated/**/*'],
      extensions: {
        /** @type {import('@graphql-codegen/cli').CodegenConfig} */
        codegen: {
          ignoreNoDocuments: true, // for better experience with the watcher
          generates: {
            "./services/lib/graphql/generated/": {
              preset: "client",
              plugins: [],
              config: {},
            },
          },
        },
      },
    },
  },
};
