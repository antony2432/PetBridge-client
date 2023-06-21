interface Comment {
  id: string;
  description: string;
  firstName: string;
  imgProf: string;
}

export default interface CommentsPost {
  comment: Comment[];
}
