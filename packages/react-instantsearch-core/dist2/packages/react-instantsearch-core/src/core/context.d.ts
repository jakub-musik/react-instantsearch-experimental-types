// / <reference types="react" />
import { Store } from '../core/createStore';
import InstantSearch from '../widgets/InstantSearch';
export declare type InstantSearchContext = {
  onInternalStateUpdate: InstantSearch['onWidgetsInternalStateUpdate'];
  createHrefForState: InstantSearch['createHrefForState'];
  onSearchForFacetValues: InstantSearch['onSearchForFacetValues'];
  onSearchStateChange: InstantSearch['onSearchStateChange'];
  onSearchParameters: InstantSearch['onSearchParameters'];
  store: Store;
  widgetsManager: any;
  mainTargetedIndex: string;
};
export declare const instantSearchContext: import('react').Context<
  InstantSearchContext
>;
export declare const InstantSearchConsumer: import('react').Consumer<
  InstantSearchContext
>;
const InstantSearchProvider: import('react').Provider<InstantSearchContext>;
export declare type IndexContext =
  | {
      targetedIndex: string;
    }
  | undefined;
export declare const IndexConsumer: import('react').Consumer<{
  targetedIndex: string;
}>;
const IndexProvider: import('react').Provider<{
  targetedIndex: string;
}>;
