export type Blog = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  author: {
    name: string;
    activity: string;
    avatar: string;
  };
  _createdAt: string;
};