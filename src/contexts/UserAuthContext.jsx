import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserAuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = { user };
    return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export default UserAuthContext;
