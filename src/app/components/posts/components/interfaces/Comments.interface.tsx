export default interface CommentsProps {
  firstName: string;
  datePublication: string;
  description: string;
  imagen: string | null;
  id: string;
  userId: string; 
  likes: number;
  comments: [];
}