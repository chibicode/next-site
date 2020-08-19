import { createContext, useContext } from 'react';

export type PageState = 'registration' | 'ticket';

export type UserData = {
  id?: string;
  ticketNumber?: number;
  alreadyExists?: boolean;
  username?: string;
  name?: string;
};

export type TicketGenerationState = 'default' | 'loading';

type ConfDataContextType = {
  userData: UserData;
  ticketGenerationState: TicketGenerationState;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setPageState: React.Dispatch<React.SetStateAction<PageState>>;
  setTicketGenerationState: React.Dispatch<React.SetStateAction<TicketGenerationState>>;
};

export const ConfDataContext = createContext<ConfDataContextType | null>(null);

export default function useConfData() {
  const result = useContext(ConfDataContext);
  if (!result) {
    throw new Error();
  }
  return result;
}
