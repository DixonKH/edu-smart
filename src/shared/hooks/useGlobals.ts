import {createContext, useCallback, useContext, useState} from 'react';
import { Member } from '../types/member';
import { useLocation, useNavigate } from 'react-router-dom';

interface GlobalInterface {
    authMember: Member | null;
    setAuthMember: (member: Member | null) => void;
    // accessToken: string | null;
    // setAccessToken: (token: string) => void;
}


export const GlobalContext = createContext<GlobalInterface | undefined>(
    undefined
);

export const useGlobals = (): GlobalInterface | undefined => {
    const context = useContext(GlobalContext);
    if(context === undefined) throw new Error("useGlobals must be used within a GlobalProvider");
    return context;
};