import { Device, Engineer, Status, WorkOrder, WorkOrderType } from "../types/Types";

export var statuses: Array<Status> = [
    {
        StatusId: 1,
        Status: "ACTIVE"
    },
    {
        StatusId: 2,
        Status: "PENDING"
    },
    {
        StatusId: 3,
        Status: "REJECTED"
    },
    {
        StatusId: 4,
        Status: "DELETED"
    },
    {
        StatusId: 5,
        Status: "CLOSED"
    }
]

export var workOrderTypes: Array<WorkOrderType> = [
    {
        WorkOrderTypeId: 1,
        Type: "MAINTENANCE"
    },
    {
        WorkOrderTypeId: 2,
        Type: "REPAIRS"
    }
]

export var engineers: Array<Engineer> = [
    {
        EngineerId: 1,
        FullName: "Seth Kwaku Sarpong",
        Role: "L1 Software Engineer",
        DateCreated: "2023/04/22",
        DateModified: "2023/08/24"
    },
    {
        EngineerId: 2,
        FullName: "Peace Kilmore",
        Role: "L1 Software Engineer",
        DateCreated: "2023/04/22",
        DateModified: "2023/08/24"
    },
    {
        EngineerId: 3,
        FullName: "Abel Kwame Serchie",
        Role: "L2 Software Engineer",
        DateCreated: "2024/01/20",
        DateModified: "2024/06/24"
    },
    {
        EngineerId: 4,
        FullName: "Pelter Jones",
        Role: "L3 Software Engineer",
        DateCreated: "2020/08/12",
        DateModified: "2021/03/23"
    },
    {
        EngineerId: 5,
        FullName: "Pelter Jones",
        Role: "Senior Engineer",
        DateCreated: "2024/02/02",
        DateModified: "2024/06/24"
    }
];

export var equipment: Array<Device> = [
    {
        SerialNo: "4400383840",
        ModelName: "Galvador",
        ModelNumber: "00229930",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Beastly",
        ECRINo: "01102", 
        EQType: "Incubator",
        ControlNo: "1000122930",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383940",
        ModelName: "Harris Steeves",
        ModelNumber: "440002",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Honors",
        ECRINo: "100232", 
        EQType: "Implant Machine",
        ControlNo: "1000122020",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383941",
        ModelName: "Harris Steeves",
        ModelNumber: "440002",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Honors",
        ECRINo: "100232", 
        EQType: "Implant Machine",
        ControlNo: "1000122222",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383942",
        ModelName: "Harris Steeves",
        ModelNumber: "440002",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Honors",
        ECRINo: "100232", 
        EQType: "Implant Machine",
        ControlNo: "1000562220",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383943",
        ModelName: "Harris Steeves",
        ModelNumber: "440002",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Honors",
        ECRINo: "100232", 
        EQType: "Implant Machine",
        ControlNo: "1000126720",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383944",
        ModelName: "Harris Steeves",
        ModelNumber: "440002",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Honors",
        ECRINo: "100232", 
        EQType: "Implant Machine",
        ControlNo: "1002242222",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383945",
        ModelName: "Harris Steeves",
        ModelNumber: "440002",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Honors",
        ECRINo: "100232", 
        EQType: "Implant Machine",
        ControlNo: "1000123225",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "1200383956",
        ModelName: "Platinum",
        ModelNumber: "103",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Millenium Delivers",
        ECRIName: "Canbry",
        ECRINo: "12002", 
        EQType: "Optimeter",
        ControlNo: "1000123330",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "1200383957",
        ModelName: "Platinum",
        ModelNumber: "103",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Millenium Delivers",
        ECRIName: "Canbry",
        ECRINo: "12002", 
        EQType: "Optimeter",
        ControlNo: "1000125430",
        Class: "A1",
        System: "Unix",
        Status: statuses[1]
    },
    {
        SerialNo: "1200383959",
        ModelName: "Platinum",
        ModelNumber: "103",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Millenium Delivers",
        ECRIName: "Canbry",
        ECRINo: "12002", 
        EQType: "Optimeter",
        ControlNo: "1000122250",
        Class: "A1",
        System: "Unix",
        Status: statuses[1]
    },
    {
        SerialNo: "1200383257",
        ModelName: "Platinum",
        ModelNumber: "103",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Millenium Delivers",
        ECRIName: "Canbry",
        ECRINo: "12002", 
        EQType: "Optimeter",
        ControlNo: "1000122240",
        Class: "A1",
        System: "Unix",
        Status: statuses[1]
    },
    {
        SerialNo: "1200383357",
        ModelName: "Platinum",
        ModelNumber: "103",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Millenium Delivers",
        ECRIName: "Canbry",
        ECRINo: "12002", 
        EQType: "Optimeter",
        ControlNo: "1000142230",
        Class: "A1",
        System: "Unix",
        Status: statuses[1]
    },
    {
        SerialNo: "1200383358",
        ModelName: "Platinum",
        ModelNumber: "103",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Millenium Delivers",
        ECRIName: "Canbry",
        ECRINo: "12002", 
        EQType: "Optimeter",
        ControlNo: "1000122230",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383841",
        ModelName: "Galvador",
        ModelNumber: "00229931",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Beastly",
        ECRINo: "01102", 
        EQType: "Incubator",
        ControlNo: "1000125580",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400383842",
        ModelName: "Galvador",
        ModelNumber: "00249933",
        ManufacturedBy: "Siemens",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Beastly",
        ECRINo: "01102", 
        EQType: "Incubator",
        ControlNo: "1000122950",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367844",
        ModelName: "Suns",
        ModelNumber: "9005339",
        ManufacturedBy: "TLC",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Sepps",
        ECRINo: "1002039", 
        EQType: "Heart Monitor",
        ControlNo: "1000122938",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367844",
        ModelName: "Suns",
        ModelNumber: "9005340",
        ManufacturedBy: "TLC",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Sepps",
        ECRINo: "1002039", 
        EQType: "Heart Monitor",
        ControlNo: "1000122939",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367845",
        ModelName: "Suns",
        ModelNumber: "9005340",
        ManufacturedBy: "TLC",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Sepps",
        ECRINo: "1002040", 
        EQType: "Heart Monitor",
        ControlNo: "1000122941",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367857",
        ModelName: "Suns T1",
        ModelNumber: "9005343",
        ManufacturedBy: "TLC",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Sepps",
        ECRINo: "1003040", 
        EQType: "Heart Monitor",
        ControlNo: "1000122942",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367858",
        ModelName: "Suns T1",
        ModelNumber: "9005343",
        ManufacturedBy: "TLC",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Sepps",
        ECRINo: "1003140", 
        EQType: "Heart Monitor",
        ControlNo: "1000122980",
        Class: "A1",
        System: "Microsoft",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367859",
        ModelName: "Tipa Reeds",
        ModelNumber: "542201110001",
        ManufacturedBy: "Tipa",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Grida",
        ECRINo: "1003145", 
        EQType: "Radiocleptra",
        ControlNo: "1000122964",
        Class: "A2",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367860",
        ModelName: "Tipa Reeds",
        ModelNumber: "542201110001",
        ManufacturedBy: "Tipa",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Grida",
        ECRINo: "1003165", 
        EQType: "Radiocleptra",
        ControlNo: "1003122987",
        Class: "A2",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367860",
        ModelName: "Tipa Reeds",
        ModelNumber: "542201110001",
        ManufacturedBy: "Tipa",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Grida",
        ECRINo: "1003165", 
        EQType: "Radiocleptra",
        ControlNo: "1005422988",
        Class: "A2",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367865",
        ModelName: "Tipa Reeds",
        ModelNumber: "542201110001",
        ManufacturedBy: "Tipa",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Grida",
        ECRINo: "1003168", 
        EQType: "Radiocleptra",
        ControlNo: "1000122939",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367867",
        ModelName: "Tipa Reeds",
        ModelNumber: "542201110001",
        ManufacturedBy: "Tipa",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Grida",
        ECRINo: "1003168", 
        EQType: "Radiocleptra",
        ControlNo: "1000142989",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    },
    {
        SerialNo: "4400367868",
        ModelName: "Tipa Reeds",
        ModelNumber: "542201110001",
        ManufacturedBy: "Tipa",
        SuppliedBy: "Bulldozer Inc",
        ECRIName: "Grida",
        ECRINo: "1003168", 
        EQType: "Radiocleptra",
        ControlNo: "1000122982",
        Class: "A1",
        System: "Unix",
        Status: statuses[0]
    }
]

export var workOrders: Array<WorkOrder> = [
    {
        WorkOrderId: 1, 
        AssignedEngineer: engineers[0],
        Priority: 3,
        Procedure: "Took details and escalated",
        Device: equipment[9],
        Status: statuses[1],
        WorkOrderType: workOrderTypes[1],
        DateCreated: "2022-09-12",
        DateModified: "2024-01-30",
        OpenedDate: "2022-09-12",
        ClosedDate: "",
        Title: 'Faulty Equipment',
        Description: 'Yellow light keeps blinking after starting',
        Cost: 0.0,
        EstimatedCost: 2400
    },
    {
        WorkOrderId: 2, 
        AssignedEngineer: engineers[0],
        Priority: 3,
        Procedure: "All screws intact",
        Device: equipment[2],
        Status: statuses[4],
        WorkOrderType: workOrderTypes[0],
        DateCreated: "2024-10-22",
        DateModified: "2024-10-30",
        OpenedDate: "2024-10-22",
        ClosedDate: "2024-10-30",
        Title: 'Screw Checks',
        Description: 'Check all screws are intact and secured',
        Cost: 120,
        EstimatedCost: 0.0
    },
    {
        WorkOrderId: 3, 
        AssignedEngineer: engineers[1],
        Priority: 1,
        Procedure: "Device to be replaced",
        Device: equipment[3],
        Status: statuses[1],
        WorkOrderType: workOrderTypes[1],
        DateCreated: "2023-10-19",
        DateModified: "2024-10-24",
        OpenedDate: "2023-10-19",
        ClosedDate: "",
        Title: 'Over heating equipment',
        Description: 'The device over heats shortly after startup',
        Cost: 24000,
        EstimatedCost: 25000
    },
    {
        WorkOrderId: 4, 
        AssignedEngineer: engineers[3],
        Priority: 3,
        Procedure: "",
        Device: equipment[12],
        Status: statuses[1],
        WorkOrderType: workOrderTypes[0],
        DateCreated: "2024-11-01",
        DateModified: "2024-11-01",
        OpenedDate: "2024-11-01",
        ClosedDate: "2024-11-30",
        Title: 'Monthly device servicing',
        Description: 'Check oil, lightning and rotation speed',
        Cost: 0.0,
        EstimatedCost: 1345.0
    }
];