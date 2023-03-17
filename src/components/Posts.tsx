import { Button, FloatingLabel, Form } from "react-bootstrap";
import {
  PersonCircle,
  ArrowUpSquare,
  ArrowDownSquare,
} from "react-bootstrap-icons";

export function Posts() {
  return (
    <>
      <h4>Posts</h4>
      <hr />
      <div className="posts-container mt-4 p-4 rounded-3">
        <div className="header d-flex flex-row">
          <span className="user me-2">
            <PersonCircle color="royalblue" size={30}></PersonCircle>
          </span>
          <h5>Post Title</h5>
        </div>
        <div className="body ps-5">
          <p>
            Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi.
          </p>
        </div>
        <div className="footer ps-5  ">
          <span className="me-2">20</span>
          <ArrowUpSquare size={20}></ArrowUpSquare>
          <span className="ms-2 me-2">20</span>
          <ArrowDownSquare size={20}></ArrowDownSquare>
          <span className="ms-4 comments">
            <a href="">Comments</a>
          </span>
        </div>

        {/* <div className="comment-post mt-4 px-5 d-flex flex-row justify-content-center align-items-center">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Type your comment"
            className="me-2 comment-ta"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <Button className="comment-btn">Comment</Button>
        </div> */}
      </div>
    </>
  );
}
