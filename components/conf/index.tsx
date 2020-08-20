import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/useConfData';
import Registration from './registration';
import Ticket from './ticket';
import Layout from './layout';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
};

export default function Conf({ defaultUserData, sharePage }: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>('registration');

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState
      }}
    >
      <Layout inner={pageState !== 'registration' || !!sharePage}>
        {pageState === 'registration' && !sharePage ? (
          <Registration />
        ) : (
          <Ticket
            username={userData.username}
            name={userData.name}
            ticketNumber={userData.ticketNumber}
            sharePage={sharePage}
          />
        )}
      </Layout>
    </ConfDataContext.Provider>
  );
}
