export const BASE_URL = process?.env.NEXT_PUBLIC_BASE_URL || "https://alabura.com";

const projectSlugs = ["onecopy-business-ai", "phc-accountability-tracka", "my-landlord-heaven", "gradely", "liveable", "ssaf-logistics", "sims"];

export default async function sitemap() {
  const projects = projectSlugs.map((project) => ({
    url: `${BASE_URL}/project/${project}`,
    lastModified: new Date().toISOString().split('T')[0],
    changefreq: "weekly",
    priority: 0.8
  }));

  const routes = ["", "/", "/#request-consultation", "/#services", "/#technologies", "/#projects", "/about-alabura-usman", "/project"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...projects]
}
