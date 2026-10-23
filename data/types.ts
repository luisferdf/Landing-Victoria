export type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Profile = {
  name: string;
  firstName: string;
  roles: string[];
  tagline: string;
  about: {
    title: string;
    blocks: { heading: string; text: string }[];
  };
  personalData: { label: string; value: string }[];
  photo: Image;
  cvUrl: string;
  contact: {
    city: string;
    email: string;
    phone: string;
    instagramUrl: string;
    mapEmbedUrl: string;
  };
};

export type ExperienceItem = {
  id: string;
  kind: "work" | "project" | "education";
  date: string;
  title: string;
  organization: string;
  description: string[];
  tags: string[];
};

export type SoftwareGroup = {
  category: "Software" | "Representación manual" | "Idiomas";
  description: string;
  items: { name: string; icon?: string }[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover: Image;
  gallery: Image[];
  externalLink?: { label: string; url: string };
};
