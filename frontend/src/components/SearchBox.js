import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
      setKeyword("");
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="flex">
      <Row>
        <Col md={8}>
          <Form.Control
            type="text"
            name="q"
            placeholder="Search Products.."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          ></Form.Control>
        </Col>
        <Col sm={2}>
          <Button type="submit" variant="outline-success" className="p-2">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
