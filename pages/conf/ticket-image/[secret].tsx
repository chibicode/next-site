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
    // This page is only meant to be accessed from our API to generate the image,
    // so protect the page path on production using the secret
    paths: [`/conf/ticket-image/${process.env.TICKET_IMAGE_SECRET || 'preview'}`],
    fallback: false
  });
};
