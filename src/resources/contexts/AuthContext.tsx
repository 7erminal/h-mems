import { Dispatch, SetStateAction, createContext } from 'react';
import { User } from '../../utils/types/Types';

type AuthContextProps = {
    username: string
    setUsername: Dispatch<SetStateAction<string>>
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    password: string
    setPassword: Dispatch<SetStateAction<string>>
    isLoggedIn: boolean
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
    LoginOTPValidatred: ()=>void
    signIn: ()=>Promise<boolean>
    logOut: ()=>Promise<boolean>
    toggleIsLoggedIn: (val: boolean)=>void
    user: User | undefined
  }
  

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;