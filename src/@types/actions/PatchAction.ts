import FetchOptions from '../FetchOptions'

type PatchAction = (url: string, data: any, config: RequestInit) => Promise<any>

export default PatchAction
