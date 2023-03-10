import React, { createContext, useState } from "react";

export const dataContext = createContext('')

const DataProvider = ({ children }) => {
    const [value, setValue] = useState('')
    const [get, setget] = useState('')
    // console.log(value)
    return (
        <>
            <dataContext.Provider value={{setValue,value,setget,get}}>
                {children}
            </dataContext.Provider>
        </>
    );
};

export default DataProvider;