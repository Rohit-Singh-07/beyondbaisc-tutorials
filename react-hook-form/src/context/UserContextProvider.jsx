import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, SetUser] = useState("user ka data");

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
