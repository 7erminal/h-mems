export type Status = {
    StatusId: number
    Status: string
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
}

export type Engineer = {
    EngineerId: number
    FullName: string
    Role: string
    DateCreated: string
    DateModified: string
}

export type WorkOrder = {
    WorkOrderId: string
    AssignedEngineer: Engineer
    Priority: number
    Procedure: string
    Device: Device
    Status: Status
    WorkOrderType: string
    DateCreated: string
    DateModified: string
    Title: string,
    Description: string
}

export type WorkOrderFilters = {
    limit: number
    statusFilter: string
    typeFilter: string
    title: string
}