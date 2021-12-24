export interface ICategory {
    id: number;
    title: string;
    slug: string;
    content: string;
}

export type ICategoryListItem = Omit<ICategory, 'content'>
