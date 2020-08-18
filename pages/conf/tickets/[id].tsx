import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SocialMeta from '@components/social-meta';

type Props = {
  id: string | null;
};

export default function TicketShare({ id }: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push('/conf');
  });
  return (
    <>
      <SocialMeta
        image={
          id
            ? `https://next-conf-ticket.vercel.app/Nextjs-Conf-Ticket.png?id=${id}`
            : '/static/twitter-cards/conf/twitter-card.png'
        }
        title="Next.js Conf"
        description="The first Next.js global user conference"
        url={id ? `https://nextjs.org/conf/tickets/${id}` : 'https://nextjs.org/conf'}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return Promise.resolve({
    props: {
      id: params?.id?.toString() || null
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'unstable_blocking'
  });
};
