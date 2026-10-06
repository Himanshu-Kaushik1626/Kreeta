import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/account/", "/pay/"],
      },
    ],
    sitemap: "https://kreetanursingservice.com/sitemap.xml",
  };
}
