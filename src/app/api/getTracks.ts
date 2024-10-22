// utils/getTracks.ts
import { groq } from "next-sanity";
import { sanityClient } from "../../../../../sanity/lib/client";

const query = groq`
  *[_type == "track"] { 
     ...,
    exercises[]-> 
  }
`;

type Data = {
  tracks: any[];
};

export default async function getTracks(): Promise<Data> {
  console.log("GET_TRACKS_CALLED");
  try {
    const tracks: any[] = await sanityClient.fetch(query);
    console.log("GET_TRACKS", tracks);
    return { tracks };
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return { tracks: [] };
  }
}



