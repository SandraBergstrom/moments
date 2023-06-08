import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrenUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrenUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrenUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrenUserContext.Provider>
  );
};
