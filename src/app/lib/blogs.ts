
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
};

export const blogs: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-website",
    title: "Why Every Business Needs a Professional Website in 2026",
    description:
      "Discover how a professional website builds trust, attracts customers, and helps your business grow online.",
    category: "Website Development",
    author: "TechBeacon Solutions",
    publishedAt: "2026-11-04",
    readTime: "6 min read",
    image: "/blogs/business-website.jpg",
    featured: true,
    content: [
      {
        heading: "Your Website Is Your Digital Identity",
        paragraphs: [
          "Your website is often the first place potential customers visit when they discover your business.",
          "A professional website helps communicate your services, establish credibility, and make it easier for customers to contact you."
        ]
      },
      {
        heading: "Build Trust With Your Customers",
        paragraphs: [
          "A well-designed website gives your business a professional online presence. It allows visitors to explore your services, understand your brand, and make informed decisions."
        ],
        bullets: [
          "Showcase your products and services.",
          "Display customer testimonials.",
          "Provide clear contact information.",
          "Make your business accessible around the clock."
        ]
      },
      {
        heading: "Turn Visitors Into Customers",
        paragraphs: [
          "A website with clear calls to action can guide visitors towards contacting your business, requesting a quote, or making a purchase."
        ]
      }
    ]
  },
  {
    slug: "how-seo-helps-small-businesses-grow",
    title: "How SEO Helps Small Businesses Grow Online",
    description:
      "Learn how search engine optimization can improve your visibility and help potential customers discover your business.",
    category: "SEO",
    author: "TechBeacon Solutions",
    publishedAt: "2026-11-04",
    readTime: "5 min read",
    image: "/blogs/seo-growth.jpg",
    featured: false,
    content: [
      {
        heading: "What Is SEO?",
        paragraphs: [
          "Search Engine Optimization (SEO) is the process of improving your website so that search engines can understand and display your content for relevant searches."
        ]
      },
      {
        heading: "Why SEO Matters",
        paragraphs: [
          "SEO helps businesses improve their online visibility and attract people who are actively searching for their products or services."
        ],
        bullets: [
          "Improve search visibility.",
          "Reach relevant audiences.",
          "Build long-term online presence.",
          "Improve website usability."
        ]
      }
    ]
  },
  {
    slug: "ai-automation-for-small-business",
    title: "How AI Automation Can Save Time for Small Businesses",
    description:
      "Explore practical ways small businesses can use AI automation to simplify repetitive tasks and improve workflows.",
    category: "AI & Automation",
    author: "TechBeacon Solutions",
    publishedAt: "2026-11-04",
    readTime: "7 min read",
    image: "/blogs/ai-automation.jpg",
    featured: false,
    content: [
      {
        heading: "Understanding AI Automation",
        paragraphs: [
          "AI automation combines artificial intelligence with automated workflows to help businesses handle repetitive tasks more efficiently."
        ]
      },
      {
        heading: "Where Can Businesses Use It?",
        paragraphs: [
          "Small businesses can explore automation across different customer-facing and internal processes."
        ],
        bullets: [
          "Customer enquiry management.",
          "WhatsApp Business responses.",
          "Lead organization and follow-ups.",
          "Routine business reporting."
        ]
      }
    ]
  }
];
