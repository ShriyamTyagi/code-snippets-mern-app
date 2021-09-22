const errorHandler = () => (err, req, res, _next) => {
  if (err.isBoom && err.output.statusCode !== 500) {
    console.error(`Validation Failed: ${err.message}`);
    return res.status(err.output.statusCode).send({
      error: { message: err.message },
      is_success: false,
    });
  }

  return res
    .status(500)
    .send({ message: "Oops something went wrong, please try again!" });
};

module.exports = errorHandler;
