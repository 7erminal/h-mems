import { createContext } from 'react';

type ApplicationContextProps = {
    // showError: boolean
    // setShowError: Dispatch<SetStateAction<boolean>>
    // errorMessage: string
    // setErrorMessage: Dispatch<SetStateAction<string>>
    // showSuccess: boolean
    // setShowSuccess: Dispatch<SetStateAction<boolean>>
    // successMessage: string
    // setSuccessMessage: Dispatch<SetStateAction<string>>
    // setIsLoading: Dispatch<SetStateAction<boolean>>
    // isLoading: boolean
    showSideNav: (page: string)=>void
    // handleLoadingClose: ()=>void
    currentPage: string
  }

const ApplicationContext = createContext<ApplicationContextProps | undefined>(undefined);

export default ApplicationContext;