import { IParams } from './params';
import { IPage } from './page';

export interface IParamsCollection extends IParams {
    remotefilter?: object;
    smartfilter?: object;
    sort?: Array<string>;
    page?: IPage;
    store_cache_method?: 'individual' | 'compact'; // solution for big collections
    /** @deprecated since 2.2 */
    storage_ttl?: number;
    /** @deprecated since 2.2 */
    cachehash?: string; // solution for when we have different resources with a same id
}