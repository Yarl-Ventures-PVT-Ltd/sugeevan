import { articles } from '../data/articles';

export async function getArticles() {
    return articles;
}

export async function getArticle(slug: string) {
    return articles.find((article) => article.slug === slug);
}
