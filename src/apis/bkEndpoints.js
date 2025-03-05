const customerBaseUrl = `https://bems-userserviceuat.azurewebsites.net`;
// const transactionsBaseUrl = `https://solisapimanagement.azure-api.net/transactions`;
// const rewardBaseUrl = `https://solisapimanagement.azure-api.net/loyalty`;
// const transactBaseUrl = `https://solisapimanagement.azure-api.net/uat/transactionservices`;

const authEndpoints = `${customerBaseUrl}/api/auth-services/v1`;

const userEndpoints = `${customerBaseUrl}/api/user-management-services/v1`;


export const ROUTES = {
    // LOGIN
    loginApi: `${authEndpoints}/login`,

    // CREATE INSTITUTION
    createInstitutionApi: `${userEndpoints}/create-institution`,

    // CREATE HOSTPITAL
    createHospitalApi: `${userEndpoints}/create-hospital`,

    // CREATE DEPARTMENT
    createDepartmentApi: `${userEndpoints}/create-department`,

    // GET INSTITUTIONS
    getInstitutionsApi: `${userEndpoints}/institutions`,

    // GET HOSPITALS
    getHospitalsApi: `${userEndpoints}/hospitals`,

    // ADD DEPARTMENT TO HOSPITAL
    addDepartmentToHospital: `${userEndpoints}/create-hospital-department`,

    // GET INSTITUTION HOSPITALS
    getInstitutionHospitalsApi: (institutionId) => `${userEndpoints}/institution-hospitals/${institutionId}`,

    // GET HOSPITAL DEPARTMENTS
    getHospitalDepartmentsApi: (hospitalId) => `${userEndpoints}/hospital-departments/${hospitalId}`,

    // GET DEPARTMENTS
    getDepartmentsApi: `${userEndpoints}/departments`,

    // CREATE PERMISSION
    createPermissionApi: `${userEndpoints}/create-permission`,

    // GET PERMISSIONS
    getPermissionsApi: `${userEndpoints}/permissions`,

    // CREATE GROUP
    createGroupApi: `${userEndpoints}/create-group`,

    // GET GROUPS
    getGroupsApi: `${userEndpoints}/groups`,

    // CREATE ROLE
    createRoleApi: `${userEndpoints}/create-role`,

    // GET ROLES
    getRolesApi: `${userEndpoints}/roles`,

    // CREATE USER
    createUserApi: `${userEndpoints}/create-user`,

    // GET USERS
    getUsersApi: `${userEndpoints}/users`,

    // ADD PERMISSION TO GROUP
    addPermissionToGroupApi: `${userEndpoints}/create-group-permission`,

    // ADD PERMISSION TO ROLE
    addPermissionToRoleApi: `${userEndpoints}/create-role-permission`,



    // LOGIN
    // getCustomerApi: (mobileNumber) => `${customersApiEndPointBase}/customer-details/${mobileNumber}`,
    
}





