import {
    DeleteAction,
    GetAction,
    PatchAction,
    PostAction,
    PutAction,
} from './@types/actions'

const createInstance = (baseUrl: string, defaultConfig: RequestInit) => {
    const { headers, ...rest } = defaultConfig

    const fetch = async (url: string, config: RequestInit) => {
        const promise = window.fetch(baseUrl + url, {
            ...rest,
            ...config,
            headers: {
                ...headers,
                ...config.headers,
            },
        })

        const response = await promise
        if (!response.ok) {
            return Promise.reject(await response.json())
        } else {
            return response.json()
        }
    }

    const get: GetAction = async (url: string, config: RequestInit) => {
        return fetch(url, {
            ...config,
            method: 'GET',
        })
    }

    const post: PostAction = async (
        url: string,
        data: string | FormData,
        config: RequestInit
    ) => {
        return fetch(url, {
            ...config,
            method: 'POST',
            body: data,
        })
    }

    const put: PutAction = async (
        url: string,
        data: string | FormData,
        config: RequestInit
    ) => {
        return fetch(url, {
            ...config,
            method: 'PUT',
            body: data,
        })
    }

    const patch: PatchAction = async (
        url: string,
        data: string | FormData,
        config: RequestInit
    ) => {
        return fetch(url, {
            ...config,
            method: 'PATCH',
            body: data,
        })
    }

    const remove: DeleteAction = async (url: string, config: RequestInit) => {
        return fetch(url, {
            ...config,
            method: 'DELETE',
        })
    }

    return {
        get,
        post,
        put,
        patch,
        delete: remove,
    }
}

export default createInstance
