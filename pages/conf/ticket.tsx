import { SkipNavContent } from '@reach/skip-nav';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import ConfContent from '@components/conf';

export default function Ticket() {
  return (
    <Page title="Next.js Conf" hideHeader>
      <SocialMeta
        image="/static/twitter-cards/conf/twitter-card.png"
        title="Next.js Conf"
        url="https://nextjs.org/conf"
        description="The first Next.js global user conference"
      />
      <SkipNavContent />
      <ConfContent
        defaultUserData={{
          id: 'e9bb985f0cfb0721ffc3f100411765c9af9a7fa1',
          ticketNumber: 1,
          name: 'Shu Uesugi',
          username: 'chibicode'
        }}
        defaultPageState="ticket"
      />
    </Page>
  );
}
