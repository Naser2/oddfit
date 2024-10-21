// utils/getTracks.ts
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";
// getTracks.ts


const query = groq`
  *[_type == "track"] {
    ...,
    exercises[]-> 
  }
`;

export default async function getTracks() {
  try {
    const tracks = await sanityClient.fetch(query);
    console.log("GET_TRACKS", tracks); // Add a debug log here
    return { tracks };
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return { tracks: [] };
  }
}