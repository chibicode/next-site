import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/useConfData';
import Registration from './registration';
import Ticket from './ticket';
import Layout from './layout';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({
  defaultUserData,
  sharePage,
  defaultPageState = 'registration'
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState
      }}
    >
      <Layout
        inner={pageState !== 'registration' || !!sharePage}
        confLogoLink={!sharePage && pageState === 'ticket' ? '/' : undefined}
      >
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
