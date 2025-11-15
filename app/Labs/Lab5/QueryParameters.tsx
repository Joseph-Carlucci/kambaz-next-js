"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <Form.Control
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="mb-2"
        id="wd-query-parameter-a"
      />
      <Form.Control
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="mb-2"
        id="wd-query-parameter-b"
      />
      <a
        className="btn btn-primary"
        id="wd-query-parameter-add"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-primary"
        id="wd-query-parameter-subtract"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        className="btn btn-primary"
        id="wd-query-parameter-multiply"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-primary"
        id="wd-query-parameter-divide"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}