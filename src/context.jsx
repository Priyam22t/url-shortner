/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  // 🔹 TEMPORARY MOCK USER (Supabase disabled)
  const user = {
    id: "temp-user-id",
    role: "authenticated",
    email: "test@test.com",
  };

  const loading = false;
  const isAuthenticated = true;

  // dummy function so app doesn't break
  const fetchUser = () => {};

  return (
    <UrlContext.Provider
      value={{ user, fetchUser, loading, isAuthenticated }}
    >
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;
