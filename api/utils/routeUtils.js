function handleErrorResponse(err, req, res) {
  console.error(err);
  res.status(err.statusCode || 500).send({message: err.message})
}

function handleResponse(handler) {
  return async (req, res) => {
    try {
      const data = await handler(req, res);

      if (data) {
        return res.json(data)

      } else {
        return res.status(204).send()
      }

    } catch (err) {
      return handleErrorResponse(err, req, res)
    }
  }
}

module.exports = {
  handleResponse
};