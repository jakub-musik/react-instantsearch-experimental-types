import { Component } from 'react';
import PropTypes from 'prop-types';
import { InstantSearchContext, IndexContext } from '../core/context';
import { Store } from '../core/createStore';
import { PlainSearchParameters, SearchParameters } from 'algoliasearch-helper';
import { MultiResponse } from '../types/algoliasearch';
import { ConnectorDescription } from '../core/createConnector';
declare type ResultsState = {
  metadata: never[];
  state: PlainSearchParameters;
  rawResults: MultiResponse;
};
declare type InstantSearchManager = {
  store: Store;
  widgetsManager: any;
  getWidgetsIds(): any;
  getSearchParameters(
    ...args: any[]
  ): {
    mainParameters: SearchParameters;
    derivedParameters: SearchParameters;
  };
  onSearchForFacetValues(...args: any[]): any;
  onExternalStateUpdate(...args: any[]): any;
  transitionState: any;
  updateClient: any;
  updateIndex: any;
  clearCache(): void;
  skipSearch(...args: any[]): any;
};
declare type SearchClient = {
  search: (requests: Array<{}>) => Promise<{}>;
  searchForFacetValues: (requests: Array<{}>) => Promise<{}>;
};
declare type SearchState = any;
declare type Props = {
  refresh: boolean;
  indexName: string;
  searchClient: SearchClient;
  createURL?: (searchState: SearchState, knownKeys: any) => string;
  onSearchStateChange?: (searchState: SearchState) => void;
  searchState?: SearchState;
  onSearchParameters?: (
    getSearchParameters: ConnectorDescription['getSearchParameters'],
    context: {
      ais: InstantSearchContext;
      multiIndexContext: IndexContext;
    },
    props: object,
    searchState: SearchState
  ) => void;
  widgetsCollector?: (args: {
    getSearchParameters: ConnectorDescription['getSearchParameters'];
    getMetadata: ConnectorDescription['getMetadata'];
    searchState: SearchState;
    context: {
      ais: InstantSearchContext;
      multiIndexContext: IndexContext;
    };
    props: object;
  }) => void;
  stalledSearchDelay?: number;
  resultsState?:
    | ResultsState
    | {
        [indexId: string]: ResultsState;
      };
};
declare type State = {
  isControlled: boolean;
  instantSearchManager: InstantSearchManager;
  contextValue: InstantSearchContext;
};
/**
 * @description
 * `<InstantSearch>` is the root component of all React InstantSearch implementations.
 * It provides all the connected components (aka widgets) a means to interact
 * with the searchState.
 * @kind widget
 * @name <InstantSearch>
 * @requirements You will need to have an Algolia account to be able to use this widget.
 * [Create one now](https://www.algolia.com/users/sign_up).
 * @propType {string} indexName - Main index in which to search.
 * @propType {boolean} [refresh=false] - Flag to activate when the cache needs to be cleared so that the front-end is updated when a change occurs in the index.
 * @propType {object} [searchClient] - Provide a custom search client.
 * @propType {func} [onSearchStateChange] - Function to be called everytime a new search is done. Useful for [URL Routing](guide/Routing.html).
 * @propType {object} [searchState] - Object to inject some search state. Switches the InstantSearch component in controlled mode. Useful for [URL Routing](guide/Routing.html).
 * @propType {func} [createURL] - Function to call when creating links, useful for [URL Routing](guide/Routing.html).
 * @propType {SearchResults|SearchResults[]} [resultsState] - Use this to inject the results that will be used at first rendering. Those results are found by using the `findResultsState` function. Useful for [Server Side Rendering](guide/Server-side_rendering.html).
 * @propType {number} [stalledSearchDelay=200] - The amount of time before considering that the search takes too much time. The time is expressed in milliseconds.
 * @propType {{ Root: string|function, props: object }} [root] - Use this to customize the root element. Default value: `{ Root: 'div' }`
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox />
 *     <Hits />
 *   </InstantSearch>
 * );
 */
declare class InstantSearch extends Component<Props, State> {
  static defaultProps: {
    stalledSearchDelay: number;
    refresh: boolean;
  };
  static propTypes: {
    indexName: PropTypes.Validator<string>;
    searchClient: PropTypes.Validator<
      PropTypes.InferProps<{
        search: PropTypes.Validator<(...args: any[]) => any>;
        searchForFacetValues: PropTypes.Requireable<(...args: any[]) => any>;
        addAlgoliaAgent: PropTypes.Requireable<(...args: any[]) => any>;
        clearCache: PropTypes.Requireable<(...args: any[]) => any>;
      }>
    >;
    createURL: PropTypes.Requireable<(...args: any[]) => any>;
    refresh: PropTypes.Requireable<boolean>;
    searchState: PropTypes.Requireable<object>;
    onSearchStateChange: PropTypes.Requireable<(...args: any[]) => any>;
    onSearchParameters: PropTypes.Requireable<(...args: any[]) => any>;
    widgetsCollector: PropTypes.Requireable<(...args: any[]) => any>;
    resultsState: PropTypes.Requireable<object>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    stalledSearchDelay: PropTypes.Requireable<number>;
  };
  static getDerivedStateFromProps(
    nextProps: Props,
    prevState: State
  ): Partial<State>;
  isUnmounting: boolean;
  constructor(props: Props);
  componentDidUpdate(prevProps: Props): void;
  componentWillUnmount(): void;
  createHrefForState(searchState: SearchState): string;
  onWidgetsInternalStateUpdate(searchState: SearchState): void;
  onSearchStateChange(searchState: any): void;
  onSearchParameters(
    getSearchParameters: ConnectorDescription['getMetadata'],
    context: {
      ais: InstantSearchContext;
      multiIndexContext: IndexContext;
    },
    props: object,
    getMetadata: ConnectorDescription['getMetadata']
  ): void;
  onSearchForFacetValues(searchState: any): void;
  getKnownKeys(): any;
  render(): JSX.Element;
}
export default InstantSearch;
