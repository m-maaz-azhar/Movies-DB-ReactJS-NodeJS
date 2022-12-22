import Comments from "../Models/Comments";
import IComments from "../Interfaces/IComments";

class CommentsController {
  constructor() {}

  getAllComments(id: string) {
    Comments.find({ movieId: id }, (err: any, comments: IComments) => {
      if (err) {
        return { message: "Error", error: err };
      } else {
        return { ...comments };
      }
    });
  }

  addComment(username: string, movieId: string, comment: string) {
    let newComment = new Comments({
      username: username,
      movieId: movieId,
      comment: comment,
    });
    newComment.save((err) => {
      if (err) {
        return { message: "Error", error: err };
      } else {
        return { success: true, data: newComment };
      }
    });
  }
}

export default CommentsController;
