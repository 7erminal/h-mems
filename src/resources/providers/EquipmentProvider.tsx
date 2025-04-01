import { ReactNode, useContext, useState } from "react";
import EquipmentContext from "../contexts/EquipmentContext";
// @ts-ignore
import Api from '../../apis/apis';
// @ts-ignore
import { ROUTES } from '../../apis/bkEndpoints'
import ApplicationContext from '../contexts/ApplicationContext';
import { CostCenter, CostCenterReq, DeviceInclusion, DeviceInclusionReq, Equipment, EquipmentClass, EquipmentClassReq, EquipmentReq } from "../../utils/types/Types";
import { equipmentRequestEmpty } from "../../utils/data/Data";

export const EquipmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const appContext = useContext(ApplicationContext);
    
    const [costCenters, setCostCenters] = useState<Array<CostCenter>>([])
    const [equipmentClasses, setEquipmentClasses] = useState<Array<EquipmentClass>>([])
    const [deviceInclusions, setDeviceInclusions] = useState<Array<DeviceInclusion>>([])
    const [equipment, setEquipment] = useState<Array<Equipment>>([])

    const [costCenterReq, setCostCenterReq] = useState<CostCenterReq>({name: "", description: "", code: ""})
    const [equipmentClassReq, setEquipmentClassReq] = useState<EquipmentClassReq>({name: "", description: "", code: "", priority: "", workWindow: ""})
    const [deviceInclusionReq, setDeviceInclusionReq] = useState<DeviceInclusionReq>({name: "", description: "", code: ""})
    const [equipmentReq, setEquipmentReq] = useState<EquipmentReq>(equipmentRequestEmpty)

    const getCostCenters = async ()=>{
      let resp = false;
      setCostCenters([])
    
      await new Api().get_(ROUTES.getCostCenters).then((response: any)=>{
          console.log("Cost center Response is ...")
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
              setCostCenters([...response.data.result])
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

    const addCostCenter = async ()=>{
      let resp = false;
    
      const params = {
          name: costCenterReq?.name,
          description: costCenterReq?.description,
          code: costCenterReq?.code,
        }
    
        await new Api().post_(params, ROUTES.createCostCenter).then((response: any)=>{
          console.log("Add cost center Response is ...")
          console.log(response)
    
          if(response.status==200){
            if(response.data.isSuccess == true){
              setCostCenterReq({name: "", description: "", code: ""})
              
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


    const getDeviceInclusions = async ()=>{
        let resp = false;
        setDeviceInclusions([])
      
        await new Api().get_(ROUTES.getDevices).then((response: any)=>{
            console.log("Device inclusions Response is ...")
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
                setDeviceInclusions([...response.data.result])
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
  
      const addDeviceInclusion = async ()=>{
        let resp = false;
      
        const params = {
            ...deviceInclusionReq
          }
      
          await new Api().post_(params, ROUTES.createDevice).then((response: any)=>{
            console.log("Add device inclusions Response is ...")
            console.log(response)
      
            if(response.status==200){
              if(response.data.isSuccess == true){
                setDeviceInclusionReq({name: "", description: "", code: ""})
            
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


      const getEquipmentClasses = async ()=>{
        let resp = false;
        setEquipmentClasses([])
      
        await new Api().get_(ROUTES.getEquipmentClasses).then((response: any)=>{
            console.log("Equipment classes Response is ...")
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
                setEquipmentClasses([...response.data.result])
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
  
      const addEquipmentClass = async ()=>{
        let resp = false;
      
        const params = {
            ...equipmentClassReq
          }
      
          await new Api().post_(params, ROUTES.createEquipmentClass).then((response: any)=>{
            console.log("Add equipment class Response is ...")
            console.log(response)
      
            if(response.status==200){
              if(response.data.isSuccess == true){
                setEquipmentClassReq({name: "", description: "", code: "", priority: "", workWindow: ""})
                
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

      const getEquipment = async ()=>{
        let resp = false;
        setEquipment([])
      
        await new Api().get_(ROUTES.getEquipment).then((response: any)=>{
            console.log("Get equipment Response is ...")
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
                setEquipment([...response.data.result])
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
  
      const addEquipment = async ()=>{
        let resp = false;
      
        const params = {
            ...equipmentReq
          }
      
          await new Api().post_(params, ROUTES.createEquipment).then((response: any)=>{
            console.log("Add equipment Response is ...")
            console.log(response)
      
            if(response.status==200){
              if(response.data.isSuccess == true){
                setEquipmentReq(equipmentRequestEmpty)
                
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

    return (
        <EquipmentContext.Provider value={
          { 
            costCenters,
            equipmentClasses,
            deviceInclusions,
            equipment,
            costCenterReq,
            equipmentClassReq,
            deviceInclusionReq,
            setCostCenterReq,
            setEquipmentClassReq,
            setDeviceInclusionReq,
            getCostCenters,
            addCostCenter,
            getEquipmentClasses,
            addEquipmentClass,
            getDeviceInclusions,
            addDeviceInclusion,
            getEquipment,
            addEquipment,
            equipmentReq,
            setEquipmentReq
          }}>
          {children}
        </EquipmentContext.Provider>
      );
}