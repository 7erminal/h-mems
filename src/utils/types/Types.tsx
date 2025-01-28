export type Status = {
    StatusId: number
    Status: string
}

export type Priority = {
    PriorityCode: string
    PriorityName: string
}

export type Facility = {
    FacilityId: number
    FacilityName: string
    Departments: Array<Department>
}

export type FLocation = {
    Location: string
}

export type Department = {
    DepartmentId: number
    Department: string
    DepartmentPhone: string
}

export type User = {
    UserId: number
    Username: string
    Password: string
    FullName: string
    Department: Department
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
    AssignedTo: User | undefined
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
    OpenedBy: User
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