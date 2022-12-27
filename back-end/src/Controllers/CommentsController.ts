import Comments from "../Models/Comments";
import IComments from "../Interfaces/IComments";

class CommentsController {
  getAllComments(id: string) {
    return new Promise((resolve, reject) => {
      Comments.find({ movieId: id }, (err: any, comments: IComments) => {
        if (err) {
          reject({ message: "Error", error: err });
        } else {
          resolve(comments);
        }
      });
    });
  }

  addComment(username: string, movieId: string, comment: string) {
    return new Promise((resolve, reject) => {
      let newComment = new Comments({
        username: username,
        movieId: movieId,
        comment: comment,
      });
      newComment.save((err) => {
        if (err) {
          reject({ message: "Error", error: err });
        } else {
          resolve({ success: true, data: newComment });
        }
      });
    });
  }
}

export default CommentsController;
