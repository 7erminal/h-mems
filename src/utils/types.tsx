type DownloaderData = {
    isDownloadable: boolean
    downloaderType: string
    title: string
}

type CorrectionOBJ = {
    active: boolean
    title: string
}

type ReconBalanceData = {
    data: Array<Array<string>>
    narration: string
    statusCode: number
    sessionId: string
    isDownloadable: DownloaderData
    stateNarration: string
    accountNumberIndex: number
    allowCorrection: CorrectionOBJ
    sit: string
}