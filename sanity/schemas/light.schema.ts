const lightSchema = {
  name: "light",
  type: "document",
  title: "Light",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      // validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        list: ["chandelier", "wall", "pendant", "outdoor", "cob", "other"],
      },
    },
    {
      name: "company",
      type: "string",
      title: "Company",
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        list: ["janet", "havells", "other"],
      },
      initialValue: "janet",
    },
    {
      name: "watt",
      type: "array",
      title: "Watt",
      of: [{ type: "number" }],
      validation: (Rule: { required: () => any }) => Rule.required().min(0),
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [{ type: "block" }],
    },
  ],
};

export default lightSchema;
