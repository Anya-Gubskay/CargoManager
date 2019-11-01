module.exports = ({page, pageSize}) => {
  const offset = page * pageSize;
  const limit = offset + pageSize;

  return {
    limit,
    offset
  }
};