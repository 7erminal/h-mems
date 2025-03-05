import React, { ReactNode, useContext, useEffect, useState } from 'react';
// @ts-ignore
import Api from '../../apis/apis';
// @ts-ignore
import { ROUTES } from '../../apis/bkEndpoints'
import InstitutionContext from '../contexts/InstitutionContext';
import ApplicationContext from '../contexts/ApplicationContext';
import { Department, GroupC, Hospital, Institution, PermissionC, RoleC } from '../../utils/types/Types';

export const InstitutionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const appContext = useContext(ApplicationContext);
    
    const [institutionName, setInstitutionName] = useState('')
    const [institutionType, setInstitutionType] = useState('Government')
    const [institutionDescription, setInstitutionDescription] = useState('')
    const [institutionCode, setInstitutionCode] = useState('')
    const [institutionPhoneNumber, setInstitutionPhoneNumber] = useState('')
    const [institutionEmail, setInstitutionEmail] = useState('')
    const [institutionCountry, setInstitutionCountry] = useState('')
    const [institutionRegion, setInstitutionRegion] = useState('')
    const [institutionCity, setInstitutionCity] = useState('')
    const [institutionAddress, setInstitutionAddress] = useState('')
    const [institutionDistrict, setInstitutionDistrict] = useState('')
    const [institutionSubDistrict, setInstitutionSubDistrict] = useState('')
    const [institutionWebsite, setInstitutionWebsite] = useState('')

    const [hospitalName, setHospitalName] = useState('')
    const [hospitalType, setHospitalType] = useState('General')
    const [hospitalDescription, setHospitalDescription] = useState('')
    const [hospitalInstitution, setHospitalInstitution] = useState('')
    const [hospitalCode, setHospitalCode] = useState('')
    const [hospitalPhoneNumber, setHospitalPhoneNumber] = useState('')
    const [hospitalEmail, setHospitalEmail] = useState('')
    const [hospitalCountry, setHospitalCountry] = useState('')
    const [hospitalRegion, setHospitalRegion] = useState('')
    const [hospitalCity, setHospitalCity] = useState('')
    const [hospitalAddress, setHospitalAddress] = useState('')
    const [hospitalDistrict, setHospitalDistrict] = useState('')
    const [hospitalSubDistrict, setHospitalSubDistrict] = useState('')
    const [hospitalWebsite, setHospitalWebsite] = useState('')

    const [departmentName, setDepartmentName] = useState('')
    const [departmentDescription, setDepartmentDescription] = useState('')

    const [permissionName, setPermissionName] = useState('')
    const [permissionDescription, setPermissionDescription] = useState('')

    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')

    const [roleName, setRoleName] = useState('')
    const [roleDescription, setRoleDescription] = useState('')

    // Data holding objects
    const [institutions, setInstitutions] = useState<Array<Institution>>([])
    const [selectedInstitution, setSelectedInstitution] = useState<Institution>()
    const [hospitals, setHospitals] = useState<Array<Hospital>>([])
    const [selectedHospital, setSelectedHospital] = useState<Hospital>()
    const [selectedPermission, setSelectedPermission] = useState<PermissionC>()
    const [selectedGroup, setSelectedGroup] = useState<GroupC>()
    const [selectedRole, setSelectedRole] = useState<RoleC>()
    const [departments, setDepartments] = useState<Array<Department>>([])
    const [permissions, setPermissions] = useState<Array<PermissionC>>([])
    const [groups, setGroups] = useState<Array<GroupC>>([])
    const [roles, setRoles] = useState<Array<RoleC>>([])

    // const [selectedDepartment, setSelectedDepartment] = useState<Institution>()

    const [selectedDepartment, setSelectedDepartment] = useState<Department>()

    const [hospitalId, setHospitalId] = useState('')
    const [departmentId, setDepartmentId] = useState('')

    const addInstitution = async ()=>{
        let resp = false;

        const params = {
            name: institutionName,
            description: institutionDescription,
            type: institutionType,
            code: institutionCode,
            contact: {
              email: institutionEmail,
              phoneNumber: institutionPhoneNumber
            },
            address: {
              country: institutionCountry,
              region: institutionRegion,
              city: institutionCity,
              address: institutionAddress,
              district: institutionDistrict,
              subDistrict: institutionSubDistrict
            },
            website: institutionWebsite
          }

          appContext?.loadingShow()
          await new Api().post_(params, ROUTES.createInstitutionApi).then((response: any)=>{
            appContext?.loadingClose()
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                setInstitutionName('')
                setInstitutionType('Government')
                setInstitutionDescription('')
                setInstitutionCode('')
                setInstitutionPhoneNumber
                setInstitutionEmail('')
                setInstitutionCountry('')
                setInstitutionRegion('')
                setInstitutionCity('')
                setInstitutionAddress('')
                setInstitutionDistrict('')
                setInstitutionSubDistrict('')
                setInstitutionWebsite('')
                resp = true
              } else {
                appContext?.setErrorMessage("Error adding institution: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred adding institution. 200 not returned.")
                appContext?.setErrorMessage("Error adding institution")
            }
          }).catch((error: any) => {
            appContext?.loadingClose()
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error adding institution")
        })

        return resp;
    }

    const addHospital = async ()=>{
        let resp = false;

        const params = {
            name: hospitalName,
            institutionId: hospitalInstitution,
            description: hospitalDescription,
            type: hospitalType,
            code: hospitalCode,
            contact: {
              email: hospitalEmail,
              phoneNumber: hospitalPhoneNumber
            },
            address: {
              country: hospitalCountry,
              region: hospitalRegion,
              city: hospitalCity,
              address: hospitalAddress,
              district: hospitalDistrict,
              subDistrict: hospitalSubDistrict
            },
            website: hospitalWebsite
          }

          await new Api().post_(params, ROUTES.createHospitalApi).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                setHospitalName('')
                setHospitalType('General')
                setHospitalInstitution('')
                setHospitalDescription('')
                setHospitalCode('')
                setHospitalPhoneNumber
                setHospitalEmail('')
                setHospitalCountry('')
                setHospitalRegion('')
                setHospitalCity('')
                setHospitalAddress('')
                setHospitalDistrict('')
                setHospitalSubDistrict('')
                setHospitalWebsite('')
                resp = true
              } else {
                appContext?.setErrorMessage("Error adding institution: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred adding institution. 200 not returned.")
                appContext?.setErrorMessage("Error adding institution")
            }
          }).catch((error: any) => {
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error adding institution")
        })

        return resp;
    }

    const addDepartment = async ()=>{
        let resp = false;

        const params = {
            name: departmentName,
            description: departmentDescription,
          }

          await new Api().post_(params, ROUTES.createDepartmentApi).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                setDepartmentName('')
                setDepartmentDescription('')
                
                resp = true
              } else {
                appContext?.setErrorMessage("Error adding institution: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred adding institution. 200 not returned.")
                appContext?.setErrorMessage("Error adding institution")
            }
          }).catch((error: any) => {
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error adding institution")
        })

        return resp;
    }

    const addDepartmentToHospital = async ()=>{
        let resp = false;

        const params = {
            hospitalId: selectedHospital?.id,
            departmentId: selectedDepartment?.id,
          }

          await new Api().post_(params, ROUTES.addDepartmentToHospital).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                setHospitalId('')
                setDepartmentId('')
                
                resp = true
              } else {
                appContext?.setErrorMessage("Error adding institution: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred adding institution. 200 not returned.")
                appContext?.setErrorMessage("Error adding institution")
            }
          }).catch((error: any) => {
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error adding institution")
        })

        return resp;
    }

    useEffect(()=>{
        console.log("Institutions are now")
        console.log(institutions)
    },[institutions])

    const getInstitutions = async ()=>{
        let resp = false;
        setInstitutions([])

        await new Api().get_(ROUTES.getInstitutionsApi).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                console.log("Response for institutions is ")
                console.log(response.data.result)
                // for(var i=0; i<response.data.result.length; i++){
                //     console.log("Each institution to be inserted is ")
                //     console.log(response.data.result[i])
                //     console.log(institutions)
                //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
                // }
                setInstitutions([...response.data.result])
                resp = true
              } else {
                appContext?.setErrorMessage("Error getting institution: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred adding institution. 200 not returned.")
                appContext?.setErrorMessage("Error adding institution")
            }
          }).catch((error: any) => {
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error getting institutions")
        })

        return resp;
    }

    const getHospitals = async ()=>{
        let resp = false;
        setHospitals([])

        await new Api().get_(ROUTES.getHospitalsApi).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                console.log("Response for hospitals is ")
                console.log(response.data.result)
                // for(var i=0; i<response.data.result.length; i++){
                //     console.log("Each institution to be inserted is ")
                //     console.log(response.data.result[i])
                //     console.log(institutions)
                //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
                // }
                setHospitals([...response.data.result])
                resp = true
              } else {
                appContext?.setErrorMessage("Error getting hospitals: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred adding institution. 200 not returned.")
                appContext?.setErrorMessage("Error adding institution")
            }
          }).catch((error: any) => {
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error getting hospitals")
        })

        return resp;
    }

    const getDepartments = async ()=>{
        let resp = false;
        setDepartments([])

        await new Api().get_(ROUTES.getDepartmentsApi).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)

            if(response.status==200){
              if(response.data.isSuccess == true){
                console.log("Response for departments is ")
                console.log(response.data.result)
                // for(var i=0; i<response.data.result.length; i++){
                //     console.log("Each institution to be inserted is ")
                //     console.log(response.data.result[i])
                //     console.log(institutions)
                //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
                // }
                setDepartments([...response.data.result])
                resp = true
              } else {
                appContext?.setErrorMessage("Error getting departments: "+response.data.errorMessage)
            }
            } else {
                console.log("An error occurred getting departments. 200 not returned.")
                appContext?.setErrorMessage("Error getting departments")
            }
          }).catch((error: any) => {
          // appContext?.setIsLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            appContext?.setErrorMessage("Error getting departments")
        })

        return resp;
    }

    const addGroup = async ()=>{
      let resp = false;
  
      const params = {
          name: groupName,
          description: groupDescription,
        }
  
        await new Api().post_(params, ROUTES.createGroupApi).then((response: any)=>{
          console.log("Response is ...")
          console.log(response)
  
          if(response.status==200){
            if(response.data.isSuccess == true){
              setGroupName('')
              setGroupDescription('')
              
              resp = true
            } else {
              appContext?.setErrorMessage("Error adding group: "+response.data.errorMessage)
          }
          } else {
              console.log("An error occurred adding group. 200 not returned.")
              appContext?.setErrorMessage("Error adding group")
          }
        }).catch((error: any) => {
        // appContext?.setIsLoading(false)
          console.log("Error returned is ... ")
          console.log(error)
          appContext?.setErrorMessage("Error adding group")
      })
  
      return resp;
  }

    const getGroups = async ()=>{
      let resp = false;
      setGroups([])

      await new Api().get_(ROUTES.getGroupsApi).then((response: any)=>{
          console.log("Response is ...")
          console.log(response)

          if(response.status==200){
            if(response.data.isSuccess == true){
              console.log("Response for groups is ")
              console.log(response.data.result)
              // for(var i=0; i<response.data.result.length; i++){
              //     console.log("Each institution to be inserted is ")
              //     console.log(response.data.result[i])
              //     console.log(institutions)
              //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
              // }
              setGroups([...response.data.result])
              resp = true
            } else {
              appContext?.setErrorMessage("Error getting groups: "+response.data.errorMessage)
          }
          } else {
              console.log("An error occurred getting groups. 200 not returned.")
              appContext?.setErrorMessage("Error getting groups")
          }
        }).catch((error: any) => {
        // appContext?.setIsLoading(false)
          console.log("Error returned is ... ")
          console.log(error)
          appContext?.setErrorMessage("Error getting groups")
      })

      return resp;
  }

  const addPermission = async ()=>{
    let resp = false;

    const params = {
        name: permissionName,
        description: permissionDescription,
      }

      await new Api().post_(params, ROUTES.createPermissionApi).then((response: any)=>{
        console.log("Response is ...")
        console.log(response)

        if(response.status==200){
          if(response.data.isSuccess == true){
            setPermissionName('')
            setPermissionDescription('')
            
            resp = true
          } else {
            appContext?.setErrorMessage("Error adding permission: "+response.data.errorMessage)
        }
        } else {
            console.log("An error occurred adding permission. 200 not returned.")
            appContext?.setErrorMessage("Error adding permission")
        }
      }).catch((error: any) => {
      // appContext?.setIsLoading(false)
        console.log("Error returned is ... ")
        console.log(error)
        appContext?.setErrorMessage("Error adding permission")
    })

    return resp;
}

const getPermissions = async ()=>{
  let resp = false;
  setPermissions([])

  await new Api().get_(ROUTES.getPermissionsApi).then((response: any)=>{
      console.log("Response is ...")
      console.log(response)

      if(response.status==200){
        if(response.data.isSuccess == true){
          console.log("Response for permissions is ")
          console.log(response.data.result)
          // for(var i=0; i<response.data.result.length; i++){
          //     console.log("Each institution to be inserted is ")
          //     console.log(response.data.result[i])
          //     console.log(institutions)
          //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
          // }
          setPermissions([...response.data.result])
          resp = true
        } else {
          appContext?.setErrorMessage("Error getting permissions: "+response.data.errorMessage)
      }
      } else {
          console.log("An error occurred getting permissions. 200 not returned.")
          appContext?.setErrorMessage("Error getting permissions")
      }
    }).catch((error: any) => {
    // appContext?.setIsLoading(false)
      console.log("Error returned is ... ")
      console.log(error)
      appContext?.setErrorMessage("Error getting permissions")
  })

  return resp;
}

const addRole = async ()=>{
  let resp = false;

  const params = {
      name: roleName,
      description: roleDescription,
    }

    await new Api().post_(params, ROUTES.createRoleApi).then((response: any)=>{
      console.log("Response is ...")
      console.log(response)

      if(response.status==200){
        if(response.data.isSuccess == true){
          setRoleName('')
          setRoleDescription('')
          
          resp = true
        } else {
          appContext?.setErrorMessage("Error adding role: "+response.data.errorMessage)
      }
      } else {
          console.log("An error occurred adding role. 200 not returned.")
          appContext?.setErrorMessage("Error adding role")
      }
    }).catch((error: any) => {
    // appContext?.setIsLoading(false)
      console.log("Error returned is ... ")
      console.log(error)
      appContext?.setErrorMessage("Error adding role")
  })

  return resp;
}

const getRoles = async ()=>{
  let resp = false;
  setRoles([])

  await new Api().get_(ROUTES.getRolesApi).then((response: any)=>{
      console.log("Response is ...")
      console.log(response)

      if(response.status==200){
        if(response.data.isSuccess == true){
          console.log("Response for roles is ")
          console.log(response.data.result)
          // for(var i=0; i<response.data.result.length; i++){
          //     console.log("Each institution to be inserted is ")
          //     console.log(response.data.result[i])
          //     console.log(institutions)
          //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
          // }
          setRoles([...response.data.result])
          resp = true
        } else {
          appContext?.setErrorMessage("Error getting roles: "+response.data.errorMessage)
      }
      } else {
          console.log("An error occurred getting roles. 200 not returned.")
          appContext?.setErrorMessage("Error getting roles")
      }
    }).catch((error: any) => {
    // appContext?.setIsLoading(false)
      console.log("Error returned is ... ")
      console.log(error)
      appContext?.setErrorMessage("Error getting roles")
  })

  return resp;
}

const addPermissionToGroup = async ()=>{
  let resp = false;

  const params = {
      permissionId: selectedPermission?.id,
      groupId: selectedGroup?.id,
    }

    await new Api().post_(params, ROUTES.addPermissionToGroupApi).then((response: any)=>{
      console.log("Response is ...")
      console.log(response)

      if(response.status==200){
        if(response.data.isSuccess == true){
          setSelectedPermission(undefined)
          setSelectedGroup(undefined)
          
          resp = true
        } else {
          appContext?.setErrorMessage("Error adding permission to group: "+response.data.errorMessage)
      }
      } else {
          console.log("An error occurred adding permission to group. 200 not returned.")
          appContext?.setErrorMessage("Error adding permission to group")
      }
    }).catch((error: any) => {
    // appContext?.setIsLoading(false)
      console.log("Error returned is ... ")
      console.log(error)
      appContext?.setErrorMessage("Error adding permission to group")
  })

  return resp;
}

const addPermissionToRole = async ()=>{
  let resp = false;

  const params = {
      roleId: selectedRole?.id,
      permissionId: selectedPermission?.id,
    }

    await new Api().post_(params, ROUTES.addPermissionToRoleApi).then((response: any)=>{
      console.log("Response is ...")
      console.log(response)

      if(response.status==200){
        if(response.data.isSuccess == true){
          setSelectedRole(undefined)
          setSelectedPermission(undefined)
          
          resp = true
        } else {
          appContext?.setErrorMessage("Error adding permission to role: "+response.data.errorMessage)
      }
      } else {
          console.log("An error occurred adding permission to role. 200 not returned.")
          appContext?.setErrorMessage("Error adding permission to role")
      }
    }).catch((error: any) => {
    // appContext?.setIsLoading(false)
      console.log("Error returned is ... ")
      console.log(error)
      appContext?.setErrorMessage("Error adding permission to role")
  })

  return resp;
}

const addUser = async ()=>{
  let resp = false;

  const params = {
      name: departmentName,
      description: departmentDescription,
    }

    await new Api().post_(params, ROUTES.createUserApi).then((response: any)=>{
      console.log("Response is ...")
      console.log(response)

      if(response.status==200){
        if(response.data.isSuccess == true){
          setDepartmentName('')
          setDepartmentDescription('')
          
          resp = true
        } else {
          appContext?.setErrorMessage("Error adding institution: "+response.data.errorMessage)
      }
      } else {
          console.log("An error occurred adding institution. 200 not returned.")
          appContext?.setErrorMessage("Error adding institution")
      }
    }).catch((error: any) => {
    // appContext?.setIsLoading(false)
      console.log("Error returned is ... ")
      console.log(error)
      appContext?.setErrorMessage("Error adding institution")
  })

  return resp;
}

    return (
        <InstitutionContext.Provider value={
          { 
            institutionName,
            setInstitutionName,
            institutionType,
            setInstitutionType,
            institutionDescription,
            setInstitutionDescription,
            institutionCode,
            setInstitutionCode,
            institutionPhoneNumber,
            setInstitutionPhoneNumber,
            institutionEmail,
            setInstitutionEmail,
            institutionCountry,
            setInstitutionCountry,
            institutionRegion,
            setInstitutionRegion,
            institutionCity,
            setInstitutionCity,
            institutionAddress,
            setInstitutionAddress,
            institutionDistrict,
            setInstitutionDistrict,
            institutionSubDistrict,
            setInstitutionSubDistrict,
            institutionWebsite,
            setInstitutionWebsite,
            addInstitution,
            getInstitutions,
            institutions,
            selectedInstitution,
            setSelectedInstitution,
            hospitalName,
            setHospitalName,
            hospitalType,
            setHospitalType,
            hospitalDescription,
            setHospitalDescription,
            hospitalCode,
            setHospitalCode,
            hospitalPhoneNumber,
            setHospitalPhoneNumber,
            hospitalEmail,
            setHospitalEmail,
            hospitalCountry,
            setHospitalCountry,
            hospitalRegion,
            setHospitalRegion,
            hospitalCity,
            setHospitalCity,
            hospitalAddress,
            setHospitalAddress,
            hospitalDistrict,
            setHospitalDistrict,
            hospitalSubDistrict,
            setHospitalSubDistrict,
            hospitalWebsite,
            setHospitalWebsite,
            hospitalInstitution,
            setHospitalInstitution,
            getHospitals,
            addHospital,
            hospitals,
            selectedHospital,
            setSelectedHospital,
            departments,
            getDepartments,
            departmentName,
            setDepartmentName,
            departmentDescription,
            setDepartmentDescription,
            addDepartment,
            selectedDepartment,
            hospitalId,
            departmentId,
            setSelectedDepartment,
            setHospitalId,
            setDepartmentId,
            addDepartmentToHospital,
            addUser,
            addPermission,
            getPermissions,
            addRole,
            getRoles,
            addPermissionToRole,
            addPermissionToGroup,
            getGroups,
            addGroup,
            permissionName,
            setPermissionName,
            permissionDescription,
            setPermissionDescription,
            groupName,
            setGroupName,
            groupDescription,
            setGroupDescription,
            roleName,
            setRoleName,
            roleDescription,
            setRoleDescription,
            permissions,
            groups,
            roles,
            selectedPermission,
            setSelectedPermission,
            selectedGroup,
            setSelectedGroup,
            selectedRole,
            setSelectedRole
          }}>
          {children}
        </InstitutionContext.Provider>
      );
}