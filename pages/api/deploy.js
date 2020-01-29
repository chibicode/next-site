const crypto = require('crypto');

export default (req, res) => {
  const hmac = crypto.createHmac('sha1', process.env.GITHUB_WEBHOOK_SECRET);
  hmac.update(JSON.stringify(req.body));

  console.log(req.headers.HTTP_X_HUB_SIGNATURE);
  console.log(hmac.digest('hex'));
  if (req.headers.HTTP_X_HUB_SIGNATURE === hmac.digest('hex')) {
    res.json(req.body.head_commit.modified);
  } else {
    res.json({});
  }
};
