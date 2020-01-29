const crypto = require('crypto');

export default (req, res) => {
  const hmac = crypto.createHmac('sha1', process.env.GITHUB_WEBHOOK_SECRET);
  hmac.update(JSON.stringify(req.body));

  console.log(`github: ${req.headers['x-hub-signature']}`);
  console.log(`us: ${`sha=${hmac.digest('hex')}`}`);
  if (req.headers['x-hub-signature'] === `sha=${hmac.digest('hex')}`) {
    res.json(req.body.head_commit.modified);
  } else {
    res.json({});
  }
};
