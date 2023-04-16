export interface IPosts {
  posts: {
    id: number;
    date: string;
    title: string;
    sumary: string;
    content: string;
  }[];
}

export interface IPostsCard {
  date: string;
  title: string;
  sumary: string;
  content?: string;
}
