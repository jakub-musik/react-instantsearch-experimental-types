import algoliasearch, { Response as SearchResponseV3 } from 'algoliasearch';
import { SearchResponse as SearchResponseV4 } from '@algolia/client-search';
declare type DummySearchClientV4 = {
  readonly addAlgoliaAgent: (segment: string, version?: string) => void;
};
declare type SearchResponse<THit> = ReturnType<
  typeof algoliasearch
> extends DummySearchClientV4
  ? SearchResponseV4<THit>
  : SearchResponseV3<THit>;
export interface MultiResponse<THit = any> {
  results: Array<SearchResponse<THit>>;
}
export {};
