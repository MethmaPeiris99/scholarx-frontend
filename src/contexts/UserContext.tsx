import React, { createContext, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';
import type { Profile } from '../types';
import { API_URL } from './../constants';

export interface UserContextType {
  user: Profile | null;
  setUserContext: (user: Profile | null) => void;
  getUser: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Profile | null>(null);

  const setUserContext = (user: Profile | null): void => {
    setUser(user);
  };

  const getUser = (): void => {
    axios
      .get(`${API_URL}/me/profile`, { withCredentials: true })
      .then((response: AxiosResponse<Profile>) => {
        setUser(response.data);
      })
      .catch((error) => {
        if (error.response.status !== 401) {
          console.error({
            message: 'Something went wrong when fetching the user',
            description: error.toString(),
          });
        } else {
          console.error({
            message: 'User not authenticated',
            description: error.toString(),
          });
          setUser(null);
        }
      });
  };

  return (
    <UserContext.Provider value={{ user, setUserContext, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
