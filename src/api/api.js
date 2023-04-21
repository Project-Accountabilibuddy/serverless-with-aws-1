module.exports.handler = (event, ctx, done) => {
  done(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: "HEY NICK!" }),
  });
};
