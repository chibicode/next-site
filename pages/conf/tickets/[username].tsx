import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SocialMeta from '@components/social-meta';

type Props = {
  username: string | null;
};

export default function TicketShare({ username }: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push('/conf');
  });
  return (
    <>
      <SocialMeta
        image={
          username
            ? `https://next-conf-ticket.vercel.app/Nextjs-Conf-Ticket.png?username=${username}`
            : '/static/twitter-cards/conf/twitter-card.png'
        }
        title="Next.js Conf"
        description="The first Next.js global user conference"
        url={username ? `https://nextjs.org/conf/tickets/${username}` : 'https://nextjs.org/conf'}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return Promise.resolve({
    props: {
      username: params?.username?.toString() || null
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'unstable_blocking'
  });
};
