import { useSanityClient } from "@sanity/astro";

export function getClient() {
  return useSanityClient();
}
