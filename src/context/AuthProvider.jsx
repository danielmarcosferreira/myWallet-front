import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [token, setToken] = useState("")
    const [dados, setDados] = useState([])
    const [finalValue, setFinalValue] = useState("")

    return (
        <AuthContext.Provider value={{token, setToken, dados, setDados, finalValue, setFinalValue}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;