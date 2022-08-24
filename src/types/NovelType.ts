import { Category } from "./CategoryType";

export type NovelType = {
    id: string;
    title: string;
    slug: string;
    imagesUrl: string;
    rate: number;
    description: string;
    country_id: string;
    status: string;
    createdAt: Date;
    artist_id: string;
    author_id: string;
    categories: Category[];
    artist: { name: string };
    author: { name: string };
    origin: { name: string };
    views: number;
}









