export const openSourceAssets = {
  heroPanels: [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      alt: "Mobile development setup with glowing screen",
      source: "Unsplash",
      creditName: "Alex Knight",
      creditUrl: "https://unsplash.com/photos/JalY6rD_X4w"
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
      alt: "Cloud infrastructure visualized from space",
      source: "Unsplash",
      creditName: "NASA",
      creditUrl: "https://unsplash.com/photos/Q1p7bh3SHj8"
    },
    {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
      alt: "Abstract AI network lighting",
      source: "Unsplash",
      creditName: "Google DeepMind",
      creditUrl: "https://unsplash.com/photos/bcc4688e7485"
    }
  ],
  categoryCovers: {
    Mobile:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
    "Full-stack":
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    ML: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1400&q=80"
  },
  iconSet: {
    name: "Lucide",
    url: "https://lucide.dev/",
    license: "ISC"
  }
} as const;

export type ProjectCategory = keyof typeof openSourceAssets.categoryCovers;
