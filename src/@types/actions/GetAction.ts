import FetchOptions from '../FetchOptions'

type GetAction = (url: string, config: RequestInit) => Promise<any>

export default GetAction
