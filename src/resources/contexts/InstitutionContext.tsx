import { createContext, Dispatch, SetStateAction } from 'react';
import { Department, Hospital, Institution } from '../../utils/types/Types';

type InstitutionContextProps = {
    institutionName: string
    setInstitutionName: Dispatch<SetStateAction<string>>
    institutionType: string
    setInstitutionType: Dispatch<SetStateAction<string>>
    institutionDescription: string
    setInstitutionDescription: Dispatch<SetStateAction<string>>
    institutionCode: string
    setInstitutionCode: Dispatch<SetStateAction<string>>
    institutionPhoneNumber: string
    setInstitutionPhoneNumber: Dispatch<SetStateAction<string>>
    institutionEmail: string
    setInstitutionEmail: Dispatch<SetStateAction<string>>
    institutionCountry: string
    setInstitutionCountry: Dispatch<SetStateAction<string>>
    institutionRegion: string
    setInstitutionRegion: Dispatch<SetStateAction<string>>
    institutionCity: string
    setInstitutionCity: Dispatch<SetStateAction<string>>
    institutionAddress: string
    setInstitutionAddress: Dispatch<SetStateAction<string>>
    institutionDistrict: string
    setInstitutionDistrict: Dispatch<SetStateAction<string>>
    institutionSubDistrict: string
    setInstitutionSubDistrict: Dispatch<SetStateAction<string>>
    institutionWebsite: string
    setInstitutionWebsite: Dispatch<SetStateAction<string>>
    addInstitution: ()=>Promise<boolean>
    getInstitutions: ()=>Promise<boolean>
    institutions: Array<Institution>
    selectedInstitution: Institution | undefined
    setSelectedInstitution: Dispatch<SetStateAction<Institution | undefined>>

    hospitalName: string
    setHospitalName: Dispatch<SetStateAction<string>>
    hospitalType: string
    setHospitalType: Dispatch<SetStateAction<string>>
    hospitalDescription: string
    setHospitalDescription: Dispatch<SetStateAction<string>>
    hospitalCode: string
    setHospitalCode: Dispatch<SetStateAction<string>>
    hospitalPhoneNumber: string
    setHospitalPhoneNumber: Dispatch<SetStateAction<string>>
    hospitalEmail: string
    setHospitalEmail: Dispatch<SetStateAction<string>>
    hospitalCountry: string
    setHospitalCountry: Dispatch<SetStateAction<string>>
    hospitalRegion: string
    setHospitalRegion: Dispatch<SetStateAction<string>>
    hospitalCity: string
    setHospitalCity: Dispatch<SetStateAction<string>>
    hospitalAddress: string
    setHospitalAddress: Dispatch<SetStateAction<string>>
    hospitalDistrict: string
    setHospitalDistrict: Dispatch<SetStateAction<string>>
    hospitalSubDistrict: string
    setHospitalSubDistrict: Dispatch<SetStateAction<string>>
    hospitalWebsite: string
    setHospitalWebsite: Dispatch<SetStateAction<string>>
    hospitalInstitution: string
    setHospitalInstitution: Dispatch<SetStateAction<string>>
    addHospital: ()=>Promise<boolean>
    getHospitals: ()=>Promise<boolean>
    hospitals: Array<Hospital>
    selectedHospital: Hospital | undefined
    setSelectedHospital: Dispatch<SetStateAction<Hospital | undefined>>
    departments: Array<Department>
    getDepartments: ()=>Promise<boolean>
    departmentName: string
    setDepartmentName: Dispatch<SetStateAction<string>>
    departmentDescription: string
    setDepartmentDescription: Dispatch<SetStateAction<string>>
    addDepartment: ()=>Promise<boolean>
    selectedDepartment: Department | undefined
    hospitalId: string
    departmentId: string
    setSelectedDepartment: Dispatch<SetStateAction<Department | undefined>>
    setHospitalId: Dispatch<SetStateAction<string>>
    setDepartmentId: Dispatch<SetStateAction<string>>
    addDepartmentToHospital: ()=>Promise<boolean>

  }
  

const InstitutionContext = createContext<InstitutionContextProps | undefined>(undefined);

export default InstitutionContext;