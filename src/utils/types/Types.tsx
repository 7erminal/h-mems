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