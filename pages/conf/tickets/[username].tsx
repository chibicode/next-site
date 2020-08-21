import { GetStaticProps, GetStaticPaths } from 'next';
import { SkipNavContent } from '@reach/skip-nav';
import Error from 'next/error';
import { SITE_URL, API_URL, TICKET_IMAGE_URL } from '@lib/constants';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import ConfContent from '@components/conf';

type Props = {
  username: string | null;
  name: string | null;
  ticketNumber: number | null;
};

export default function TicketShare({ username, ticketNumber, name }: Props) {
  if (!username || !ticketNumber) {
    return <Error statusCode={404} />;
  }
  const title = `${name}’s Next.js Conf Ticket`;

  return (
    <Page title={title} hideHeader>
      <SocialMeta
        image={
          username
            ? `${TICKET_IMAGE_URL}/Nextjs-Conf-Ticket.png?username=${username}`
            : '/static/twitter-cards/conf/twitter-card.png'
        }
        title={title}
        description={`Join ${name} for the first global user conference for Next.js. An interactive online experience by the community, free for everyone.`}
        url={`${SITE_URL}/conf/tickets/${username}`}
      />
      <SkipNavContent />
      <ConfContent
        defaultUserData={{
          username,
          name: name || '',
          ticketNumber
        }}
        sharePage
      />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const username = params?.username?.toString() || null;
  if (username) {
    const res = await fetch(`${API_URL}/conf-user?username=${params?.username?.toString()}`);
    if (res.ok) {
      const { name, ticketNumber } = await res.json();
      return {
        props: {
          username: username || null,
          name: name || username || null,
          ticketNumber: ticketNumber || null
        },
        revalidate: 5
      };
    }
  }
  return {
    props: {
      username: null,
      name: null,
      ticketNumber: null
    },
    revalidate: 5
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'unstable_blocking'
  });
};
