export interface Movie {
  id: number;
  title: string;
  watched: boolean;
  reaction: 'like' | 'dislike' | null;
}