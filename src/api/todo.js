module.exports.handler = (event, ctx, done) => {
  console.log(event.pathParameters);

  console.log("GET SPECIFIC TODO: ", event);

  const myTodos = [
    { id: 1, name: "clean up", status: "open" },
    { id: 2, name: "cook", status: "done" },
    { id: 3, name: "party", status: "open" },
  ];

  const getTodo = myTodos.find(
    (todo) => todo.id === parseInt(event.pathParameters.id)
  );

  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1,
        name: "clean up",
        status: "open",
      },
    }),
  });
};
