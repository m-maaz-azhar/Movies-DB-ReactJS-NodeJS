import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

import "./style.scss";

export default function Movie() {
  let { id } = useParams();

  let session = localStorage.getItem("movies-db-session");

  const [Movie, setMovie] = useState(null);
  const [CommentText, setCommentText] = useState("");
  const [Comments, setComments] = useState([null]);

  let username = localStorage.getItem("movies-db-username");

  useEffect(() => {
    fetch(`http://localhost:8080/moviebyid?id=${id}`)
      .then((res) => {
        res.json().then((data) => {
          setMovie(...data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://localhost:8080/comments?id=${id}`)
      .then((res) => {
        res.json().then((data) => {
          setComments(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "movies-db-session": session,
      },
      body: JSON.stringify({
        id: id,
        comment: CommentText,
        username: username,
      }),
    })
      .then((res) => {
        res.json().then(({data}) => {
          console.log(data,Comments)
          setComments([...Comments, data]);
          setCommentText("");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      {Movie && (
        <main>
          <div className="details">
            <div className="row">
              <div>
                <img src={Movie.poster} alt="" />
              </div>
              <div>
                <h1>{Movie.title}</h1>
                <ul>
                  <li>Initial release: {Movie.initial_release}</li>
                  <li>Director: {Movie.director}</li>
                  <li>Producers: {Movie.producers}</li>
                  <li>Genre : {Movie.genre}</li>
                </ul>
                <div className="trailer">
                  <h1>Trailer: </h1>
                  <iframe
                    height={330}
                    src={Movie.trailer}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="trailer"
                  />
                </div>
              </div>
            </div>
            <div className="story-line">
              <h1>Storyline</h1>
              <p>{Movie.storyline}</p>
            </div>
            <div className="cast">
              <h1>CAST</h1>
              <ul>
                {Movie.cast.split(",").map((cast, index) => {
                  return <li key={index}>{cast}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="review">
            <span>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-star-fill"
                fill="#BD0224"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <h2>Add a comment !</h2>
            <textarea
              disabled={session ? false : true}
              placeholder={
                session ? "What is your view?" : "Please Login First to comment"
              }
              value={CommentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <br />
            <button onClick={handleComment} disabled={session && CommentText !== "" ? false : true} type="submit">
              SUBMIT
            </button>
            <br />
            <br />
            <hr />
            <br />
            <div className="comments">
              <h2>Comments</h2>
              {Comments &&
                Comments?.map((comment, index) => {
                  return (
                    <div key={index}>
                      <div className="comment">
                        <div className="row">
                          <div>
                            <h4>{comment?.username}</h4>
                            <p>{comment?.comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
