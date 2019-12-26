import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <Spinner animation="border" role="status" className="my-3">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Loading;
