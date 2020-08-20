import { SkipNavContent } from '@reach/skip-nav';
import { SITE_URL } from '@lib/constants';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import ConfContent from '@components/conf';

export default function Conf() {
  return (
    <Page title="Next.js Conf" hideHeader>
      <SocialMeta
        image="/static/twitter-cards/conf/twitter-card.png"
        title="Next.js Conf"
        url={`${SITE_URL}/conf`}
        description="The first Next.js global user conference"
      />
      <SkipNavContent />
      <ConfContent defaultUserData={{}} />
    </Page>
  );
}
