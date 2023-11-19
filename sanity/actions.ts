import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Light } from "@/types/light";

export const getLights = async (category?: string | null): Promise<Light[]> => {
  // base condition to fetch all lights
  const conditions = [`*[_type== "light"`];

  // if category is provided, add it to the conditions
  if (category) {
    conditions.push(`category == "${category}"`);
  }

  const query = conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})]`
    : `${conditions[0]}]`;

  // slug and image are sanity schema properties so we need to pull out the desired fields
  return client.fetch(
    groq`${query}{
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
