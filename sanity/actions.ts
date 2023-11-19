import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Light } from "@/types/light";

export const getLights = async (): Promise<Light[]> => {
  // slug and image are sanity schema properties so we need to pull out the desired fields
  return client.fetch(
    groq`*[_type == "light"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,      
      "image": image.asset->url,
      category,
      company,
      watt,
      description,
    }`
  );
};

export const getLight = async (slug: string): Promise<Light> => {
  return client.fetch(
    groq`*[_type == "light" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,      
      "image": image.asset->url,
      category,
      company,
      watt,
      description,
    }`,
    { slug }
  );
};
