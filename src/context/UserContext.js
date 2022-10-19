import React, { createContext, useState, useMemo } from 'react';

const UserContext = createContext({
    user: {},
    setUser: () => {},
});

// let datauser = JSON.parse(localStorage.getItem('user'))
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ alert: false, minified: false });
    const value = useMemo(() => ({ user, setUser }), [user]);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

const UserContextConsumer = UserContext.Consumer;
export { UserContext, UserContextProvider, UserContextConsumer };
