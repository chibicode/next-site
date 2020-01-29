export default (req, res) => {
  res.json(req.body.head_commit.modified);
};
