import {
    CreateInstanceAction,
    DeleteAction,
    GetAction,
    PatchAction,
    PostAction,
    PutAction,
} from './actions'

export default interface MyFetcher {
    get: GetAction
    post: PostAction
    put: PutAction
    patch: PatchAction
    delete: DeleteAction
    create: CreateInstanceAction
}
