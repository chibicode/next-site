const crypto = require('crypto');
const fetch = require('node-fetch');

export default async (req, res) => {
  const hmac = crypto.createHmac('sha1', process.env.GITHUB_WEBHOOK_SECRET);
  hmac.update(JSON.stringify(req.body));

  if (req.headers['x-hub-signature'] === `sha1=${hmac.digest('hex')}`) {
    if (
      req.body.ref === 'refs/heads/canary' &&
      req.body.head_commit &&
      req.body.head_commit.modified &&
      req.body.head_commit.modified.some(x => x.startsWith('docs/'))
    ) {
      await fetch(process.env.GITHUB_WEBHOOK);
      return res.json({ ok: true });
    }
  }
  return res.json({});
};
