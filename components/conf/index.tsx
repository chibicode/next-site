import { useState } from 'react';
import {
  PageState,
  ConfDataContext,
  UserData,
  TicketGenerationState
} from '@lib/hooks/useConfData';
import Registration from './registration';
import Ticket from './ticket';
import Layout from './layout';

type Props = {
  defaultUserData: UserData;
  defaultPageState: PageState;
};

export default function Conf({ defaultUserData, defaultPageState }: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);
  const [ticketGenerationState, setTicketGenerationState] = useState<TicketGenerationState>(
    'default'
  );

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState,
        ticketGenerationState,
        setTicketGenerationState
      }}
    >
      <Layout inner={pageState !== 'registration'}>
        {pageState === 'registration' ? <Registration /> : <Ticket />}
      </Layout>
    </ConfDataContext.Provider>
  );
}
