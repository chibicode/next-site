const crypto = require('crypto');
const fetch = require('node-fetch');

export default (req, res) => {
  const hmac = crypto.createHmac('sha1', process.env.GITHUB_WEBHOOK_SECRET);
  hmac.update(JSON.stringify(req.body));
  if (req.headers['x-hub-signature'] === `sha1=${hmac.digest('hex')}`) {
    if (
      req.body.ref === 'refs/heads/leo-patch-1' &&
      req.body.head_commit.modified.some(x => x.startsWith('docs/'))
    ) {
      fetch(process.env.GITHUB_WEBHOOK).then(() => res.json({}));
    } else {
      res.json({});
    }
  } else {
    res.json({});
  }
};
