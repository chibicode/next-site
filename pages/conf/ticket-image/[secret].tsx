import TicketImage from '@components/conf/ticket-image';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function TicketOnlyPage() {
  return <TicketImage />;
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  return Promise.resolve({
    props: {}
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [`/conf/ticket-image/${process.env.TICKET_IMAGE_SECRET || 'preview'}`],
    fallback: false
  });
};
