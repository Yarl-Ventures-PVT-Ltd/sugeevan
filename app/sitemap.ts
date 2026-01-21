import { MetadataRoute } from 'next';
import { getArticles } from '../lib/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getArticles();
    const articleUrls = articles.map((article) => ({
        url: `https://www.sugeevan.com/insights/${article.slug}`,
        lastModified: new Date(), // Ideally real date but current date is fine for now
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: 'https://www.sugeevan.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...articleUrls,
    ];
}
