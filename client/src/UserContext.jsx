import axios from "axios";
import { useEffect, useState } from "react";
import {createContext} from "react";
import React from "react";

export const UserContext =createContext({});

export function UserContextProvider({children}){
    const [user, setUser] =useState(null);
    useEffect (() => {
        if (!user){
            axios.get('/profile')
        }
    },[]) ;
    return(
      <UserContext.Provider value ={{user, setUser}}>
       {children}
       </UserContext.Provider>
    );
}