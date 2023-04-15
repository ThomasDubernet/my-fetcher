import FetchOptions from '../FetchOptions'

type PutAction = (url: string, data: any, config: RequestInit) => Promise<any>

export default PutAction
