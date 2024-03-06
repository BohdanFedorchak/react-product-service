import { IUseProductRequest } from '@/interfaces/product'
import fetcher from '@/services /fetcher'
import useSWR, { SWRResponse } from 'swr'

export function useProducts(): SWRResponse<IUseProductRequest, Error> {
    return useSWR('/products', fetcher)
}
