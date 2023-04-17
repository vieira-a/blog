export interface IPosts {
  posts: {
    id: number;
    date: string;
    title: string;
    sumary: string;
    content: string;
    featured?: boolean;
  }[];
}

export interface IPostsCard {
  date: string;
  title: string;
  sumary: string;
  content?: string;
  featured?: boolean;
}

export interface IFeaturedPosts {
  id: number;
  title: string;
}
