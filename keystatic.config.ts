import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    path: "./src/content/keystatic",
  },
  collections: {
    settings: collection({
      label: "Site Settings",
      slugField: "name",
      path: "src/content/settings/*",
      format: { data: { scheme: "json" } },
      schema: {
        name: fields.text({ label: "Business Name" }),
        tagline: fields.text({ label: "Tagline" }),
        phone: fields.text({ label: "Phone Number" }),
        email: fields.text({ label: "Email Address" }),
        address: fields.text({ label: "Address" }),
        serviceArea: fields.text({ label: "Service Area" }),
        facebookUrl: fields.text({ label: "Facebook URL" }),
        wildlifeHelpUrl: fields.text({ label: "WildlifeHelp.org URL" }),
      },
    }),
    services: collection({
      label: "Services",
      slugField: "title",
      path: "src/content/services/*",
      format: { data: { scheme: "json" } },
      schema: {
        title: fields.slug({ name: { label: "Service Title" } }),
        description: fields.text({ label: "Description" }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Wildlife", value: "wildlife" },
            { label: "Gunsmith", value: "gunsmith" },
          ],
        }),
        featured: fields.checkbox({ label: "Featured Service" }),
        icon: fields.text({ label: "Icon (emoji)" }),
      },
    }),
    gallery: collection({
      label: "Gallery",
      slugField: "title",
      path: "src/content/gallery/*",
      format: { data: { scheme: "json" } },
      schema: {
        title: fields.slug({ name: { label: "Image Title" } }),
        caption: fields.text({ label: "Caption" }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Wildlife", value: "wildlife" },
            { label: "Gunsmith", value: "gunsmith" },
            { label: "Logo", value: "logo" },
          ],
        }),
        image: fields.text({ label: "Image URL" }),
        alt: fields.text({ label: "Alt Text" }),
      },
    }),
    about: collection({
      label: "About Page",
      slugField: "bio",
      path: "src/content/about/*",
      format: { data: { scheme: "json" } },
      schema: {
        bio: fields.text({ label: "Bio Text" }),
        credentials: fields.array(fields.text({ label: "Credential" }), {
          label: "Credentials",
        }),
        mission: fields.text({ label: "Mission Statement" }),
      },
    }),
  },
});
