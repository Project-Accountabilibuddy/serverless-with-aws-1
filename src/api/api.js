const express = require("express");
const http = require("serverless-http");

const app = express();

app.get("/todos", (req, res) => {
  res.json({
    data: [
      { id: 1, name: "clean up", status: "open" },
      { id: 2, name: "cook", status: "done" },
      { id: 3, name: "party", status: "open" },
    ],
  });
});

app.get("/todos/:id", (req, res) => {
  console.log(req.params);

  const myTodos = [
    { id: 1, name: "clean up", status: "open" },
    { id: 2, name: "cook", status: "done" },
    { id: 3, name: "party", status: "open" },
  ];

  const getTodo = myTodos.find((todo) => todo.id === parseInt(req.params.id));

  res.json({
    data: getTodo,
  });
});

module.exports.handler = http(app);
