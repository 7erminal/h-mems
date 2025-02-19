import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
// @ts-ignore
import AppFunctions from "../../functions/helpers";
import AuthContext from '../contexts/AuthContext';
// @ts-ignore
import Api from '../../apis/apis';
// @ts-ignore
import { ROUTES } from '../../apis/bkEndpoints'
import ApplicationContext from "../contexts/ApplicationContext";
import { User } from '../../utils/types/Types';
// import { jwtDecode } from 'jwt-decode';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const appContext = useContext(ApplicationContext);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [startTimer, setStartTimer] = useState(false)
    const [user, setUser] = useState<User>()

    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(()=>{
      console.log("Is logged in ? "+isLoggedIn)
  
      // Check if user is logged in
      if(isLoggedIn==true){
        console.log("Fetching profile")
        setStartTimer(!startTimer)
      }
    },[isLoggedIn])

    

    useEffect(()=>{
        console.log("About to start timer "+startTimer)
        if(isLoggedIn == true){
          console.log("Timer starting...")
        //   const username = sessionStorage.getItem("username");
        //   const password = sessionStorage.getItem("password")
          intervalIdRef.current = setInterval(()=>loginGetToken(), 29000);
          console.log("Timer started")
    
          // Clear the interval when the component unmounts
          return () => {
            if (intervalIdRef.current) {
              clearInterval(intervalIdRef.current);
            }
          };
        }
    
      },[startTimer])

      const toggleIsLoggedIn = (value: boolean) => {
        console.log("Changing logged in status from "+isLoggedIn+" to "+value)
        setIsLoggedIn(value)
      }

    const LoginOTPValidatred = () => {
        setIsLoggedIn(true)
        sessionStorage.setItem("isLoggedIn", "true")
        // handleClose()
  
        setTimeout(()=>{
          console.log("Url obtained is ")
          console.log(sessionStorage.getItem("url"))
          if(sessionStorage.getItem("url") != "" && sessionStorage.getItem("url") != null){
            // navigate(sessionStorage.getItem("url")!)
          } else {
            sessionStorage.setItem("url", "/1/")
            // navigate('/')
          }
        },300)
  
        
      }

      const loginGetToken = ()=>{
        console.log("Going to get the token")
        // const finalMsisdn = new AppFunctions().formatNumber(username);

        const params = {
          email: sessionStorage.getItem('email'),
          password: sessionStorage.getItem('password'),
        }

        new Api().post_(params, ROUTES.loginApi).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                console.log("Success response")
                // sessionStorage.setItem("mobileNumber", finalMsisdn);
                sessionStorage.setItem("token", response.data.result.token!)
                
              }
            } 
        }).catch((error: any) => {
            console.log("Error returned is ... ")
            console.log(error)
        })
      }

    const signIn = async () => {

        let resp = false;

          // appContext?.setIsLoading(true)
        const params = {
            email: email,
            password: password,
        }

        console.log("About to send "+ROUTES.loginApi+ " as the url")

        appContext?.loadingShow()

        await new Api().post_(params, ROUTES.loginApi).then((response: any)=>{
          appContext?.loadingClose()
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                console.log("Success response")

                setUser(response.data.result)
                sessionStorage.setItem("email", email)
                sessionStorage.setItem("password", password)
                sessionStorage.setItem("token", response.data.result.token!)

                toggleIsLoggedIn(true)
                setStartTimer(!startTimer)

                setEmail('')
                setPassword('')
                
                setTimeout(()=>{
                  // appContext?.setShowSuccess(false)
                  // appContext?.setSuccessMessage('')
                  // handleShow()
                  LoginOTPValidatred();
                  // navigate('/')
                },800)

                resp = true

                // appContext?.setShowSuccess(true)
                // appContext?.setSuccessMessage(response.data.displayMessage)
                
              } else {
                console.log("Failed response")

                setTimeout(()=>{
                  // appContext?.setShowError(false)
                  // appContext?.setErrorMessage('')
                },5000)
                // appContext?.setShowError(true)
                appContext?.setErrorMessage(response.data.displayMessage)
              }
            } else {
              console.log("response has an error")
              // appContext?.setShowError(true)
              // appContext?.setErrorMessage("Something went wrong")
            }
        }).catch((error: any) => {
          appContext?.loadingClose()
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
        })
        

        // navigate('/')
        return resp
    }

    // interface JwtPayload {
    //     exp?: number; // Expiry time in seconds since the epoch
    //   }
    
    //   const isTokenExpired = (token: string): boolean => {
    //     try {
    //       const { exp } = jwtDecode<JwtPayload>(token);
    //       if (!exp) {
    //         return true;
    //       }
    //       return Date.now() >= exp * 1000;
    //     } catch (error) {
    //       return true;
    //     }
    //   }

    const logOut = async () => {

        console.log("Log out confirmed")
        sessionStorage.removeItem("isLoggedIn")
        sessionStorage.removeItem("mobileNumber")
        sessionStorage.removeItem("profileName")
        sessionStorage.removeItem("leadId")
        sessionStorage.removeItem("url")
        sessionStorage.removeItem("token")
        setUser(undefined)
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }

        setIsLoggedIn(false);

        return true
    }

    return (
        <AuthContext.Provider value={
          { 
            user,
            username,
            setUsername,
            email,
            setEmail,
            password,
            setPassword,
            isLoggedIn,
            setIsLoggedIn,
            LoginOTPValidatred,
            signIn,
            logOut,
            toggleIsLoggedIn
          }}>
          {children}
        </AuthContext.Provider>
      );
}