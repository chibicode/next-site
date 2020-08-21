import { SkipNavContent } from '@reach/skip-nav';
import { SITE_URL } from '@lib/constants';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import ConfContent from '@components/conf';
import { useRouter } from 'next/router';

export default function Conf() {
  const { query } = useRouter();
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page title="Next.js Conf" hideHeader>
      <SocialMeta
        image="/static/twitter-cards/conf/twitter-card.png"
        title="Next.js Conf"
        url={`${SITE_URL}/conf`}
        description="The first global user conference for Next.js. An interactive online experience by the community, free for everyone."
      />
      <SkipNavContent />
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
    </Page>
  );
}
