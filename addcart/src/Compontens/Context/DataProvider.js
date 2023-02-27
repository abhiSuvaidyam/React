import React, { createContext, useState } from "react";

export const dataContext = createContext('')

const DataProvider = ({ children }) => {
    const [value, setValue] = useState('')
    return (
        <>
            <dataContext.Provider value={{setValue,value}}>
                {children}
            </dataContext.Provider>
        </>
    );
};

export default DataProvider;