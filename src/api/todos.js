module.exports.handler = (event, ctx, done) => {
  console.log("GET ALL TODOS: ", event);

  const todos = [
    { id: 1, name: "clean up", status: "open" },
    { id: 1, name: "cook", status: "done" },
  ];
  done(null, {
    statusCode: 200,
    body: JSON.stringify({ data: todos }),
  });
};
