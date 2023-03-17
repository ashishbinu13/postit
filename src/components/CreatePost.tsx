import { FloatingLabel, Form, Button } from "react-bootstrap";
export function CreatePost() {
  return (
    <>
      <div className="bg-light bg-opacity-10 bg-gradient p-4 box rounded-3">
        <FloatingLabel
          className="mt-2"
          controlId="floatingTextarea2"
          label="Speak your mind..."
        >
          <Form.Control
            as="textarea"
            placeholder="Speak your mind..."
            style={{ height: "100px", backgroundColor: "white" }}
            value={
              "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat."
            }
          />
        </FloatingLabel>
        <div className="d-flex justify-content-end mt-4">
          <Button variant="outline-primary">Post</Button>
        </div>
      </div>
    </>
  );
}
