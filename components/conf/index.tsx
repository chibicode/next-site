import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/useConfData';
import Layout from './layout';
import Form from './form';
import Contact from './contact';
import Hero from './hero';

export default function Conf() {
  const [userData, setUserData] = useState<UserData>({});
  const [pageState, setPageState] = useState<PageState>('registration');
  return (
    <ConfDataContext.Provider value={{ userData, setUserData, pageState, setPageState }}>
      <Layout>
        <Hero />
        <Form />
        <Contact />
      </Layout>
    </ConfDataContext.Provider>
  );
}
