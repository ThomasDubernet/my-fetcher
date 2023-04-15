import FetchOptions from '../FetchOptions'

type PostAction = (url: string, data: any, config: RequestInit) => Promise<any>

export default PostAction
