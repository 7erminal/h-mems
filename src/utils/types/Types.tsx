export type Address = {
    country: string
    region: string
    city: string
    address: string
    district: string
    subDistrict: string
}

export type Contact = {
    email: string
    phoneNumber: string
}

export type User = {
    id: number | undefined
    address: Address | undefined
    token: string | undefined
    fullName: string | undefined
    email: string | undefined
    phoneNumber: string | undefined
    Department: Department | undefined
    hospital: string | undefined
    roles: Array<string> | undefined
}

export type Status = {
    StatusId: number
    Status: string
}

export type Priority = {
    PriorityCode: string
    PriorityName: string
}

export type Institution = {
    id: string
    name: string
    status: string
    type: string
    address: Address | undefined
    code: string
    contact: Contact | undefined
    description: string
    createdDate: string
    website: string
}

export type Hospital = {
    id: string
    institutionName: string
    name: string
    status: string
    type: string
    address: Address | undefined
    code: string
    contact: Contact | undefined
    description: string
    createdDate: string
    website: string
}

export type Facility = {
    FacilityId: number
    FacilityName: string
    Departments: Array<DepartmentT>
}

export type FLocation = {
    Location: string
}

export type Department = {
    id: string
    name: string
    description: string
    status: string
    createdDate: string
}

export type DepartmentT = {
    DepartmentId: number
    Department: string
    DepartmentPhone: string
}

export type UserT = {
    UserId: number
    Username: string
    Password: string
    FullName: string
    Department: DepartmentT
    Phone: string
}

export type Device = {
    SerialNo: string
    ModelName: string
    ModelNumber: string
    ManufacturedBy: string
    SuppliedBy: string
    ECRINo: string
    ECRIName: string
    EQType: string
    ControlNo: string
    Class: string
    System: string
    Status: Status
    AssignedTo: UserT | undefined
    DevicePriorityState: Priority
    DateCreated: string
    DateModified: string
}

export type Engineer = {
    EngineerId: number
    FullName: string
    Role: string
    DateCreated: string
    DateModified: string
}

export type WorkOrderType = {
    WorkOrderTypeId: number
    Type: string
}

export type WorkOrder = {
    WorkOrderId: number
    AssignedEngineer: Engineer
    Priority: number
    Procedure: string
    Device: Device
    Status: Status
    WorkOrderType: WorkOrderType
    DateCreated: string
    DateModified: string
    OpenedDate: string
    ClosedDate: string
    Title: string,
    Description: string
    Cost: number
    EstimatedCost: number
    OpenedBy: UserT
    Notes: Array<Note>
}

export type WorkOrderFilters = {
    limit: number
    statusFilter: string
    typeFilter: string
    title: string
}

export type Note = {
    Note: string
    dateCreated: string
    dateModified: string
    Attachment: string
    Resolved: boolean
    Duration: string
}

export type PermissionC = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
}

export type RoleC = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
}

export type GroupC = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
}

export type CostCenterReq = {
    name: string
    description: string
    code: string
}

export type CostCenter = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
    code: string
}

export type DeviceInclusionReq = {
    name: string
    description: string
    code: string
}

export type DeviceInclusion = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
    code: string
}

export type EquipmentClassReq = {
    name: string
    description: string
    code: string
    priority: string
    workWindow: string
}

export type EquipmentClass = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
    code: string
}

export type Equipment = {
    id: string
    name: string
    status: string
    description: string
    createdDate: string
    code: string
}
export type EquipmentReq = {
    assetNumber: string
    serialNumber: string
    classId: string
    equipmentType: string
    ecriNumber: string
    make: string
    model: string
    manufacturer: string
    supplier: string
    system: string
    deviceInclusionId: string
    deviceInclusionType: string
    ecriRevisionNumber: string
    purchaseDate: string
    serviceStartDate: string
    serviceExpiryDate: string
    warrantyExpiryDate: string
    currency: string
    cost: number
    lifeExpectancy: string
    country: string
    region: string
    district: string
    subDistrict: string
    institutionId: string
    hospitalId: string
    hospitalDepartmentId: string
    costCenterId: string
    location: string
    building: string
    floor: string
    room: string
    space: string
    notes: string
}
