interface Comment {
  id: string;
  description: string;
  firstName: string;
}

export default interface CommentsPost {
  comment: Comment[];
 
}