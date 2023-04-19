export interface IPosts {
  posts: {
    id: number;
    date: string;
    title: string;
    slug?: string;
    sumary: string;
    content: string;
    featured?: boolean;
  }[];
}

export interface IPostsCard {
  id?: number;
  date: string;
  title: string;
  slug?: string;
  sumary: string;
  content?: string;
  featured?: boolean;
}

export interface IFeaturedPosts {
  id: number;
  title: string;
}
