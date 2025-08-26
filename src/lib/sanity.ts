import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = import.meta.env.VITE_SANITY_DATASET as string | undefined;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION as string | undefined;
const token = import.meta.env.VITE_SANITY_TOKEN as string | undefined; // Optional. Avoid exposing in client builds.
const useCdn = true;

export const sanityClient = projectId && dataset ? createClient({
  projectId,
  dataset,
  apiVersion: apiVersion || '2024-01-01',
  useCdn,
  token,
}) : null;

export const hasSanity = Boolean(sanityClient);


