/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-18'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'omairillbackend'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "process.env.SANITY_PROJECT_ID"

console.log("IN_SANITY_CLI_API_VERSION_INSANITY_ENV_JS", apiVersion,
 "IN_SANITY_CLI_DATASET_INSANITY_ENV_JS", dataset,
  "IN_SANITY_PROJECT_ID_INSANITY_ENV_JS", projectId)
// console.log("IN_CLI_PROJECT_ID_INSANITY_ENV_JS", projectId)
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

// console.log("projectId in Sanity CLI: ", projectId)
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
  api: { projectId, dataset, apiVersion },
  studioHost: 'odfitbackend', // Add this line
})