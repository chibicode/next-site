const crypto = require('crypto');

export default (req, res) => {
  const hmac = crypto.createHmac('sha1', process.env.GITHUB_WEBHOOK_SECRET);
  hmac.update(JSON.stringify(req.body));
  if (req.headers['x-hub-signature'] === `sha1=${hmac.digest('hex')}`) {
    res.json(req.body.head_commit.modified);
  } else {
    res.json({});
  }
};