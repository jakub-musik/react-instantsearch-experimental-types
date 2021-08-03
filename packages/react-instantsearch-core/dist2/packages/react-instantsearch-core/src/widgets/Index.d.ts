import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InstantSearchContext, IndexContext } from '../core/context';
declare type Props = {
  indexName: string;
  indexId: string;
};
declare type InnerProps = Props & {
  contextValue: InstantSearchContext;
};
declare type State = {
  indexContext: IndexContext;
};
/**
 * The component that allows you to apply widgets to a dedicated index. It's
 * useful if you want to build an interface that targets multiple indices.
 *
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Index, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
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
 *     <Configure hitsPerPage={5} />
 *     <SearchBox />
 *     <Index indexName="instant_search">
 *       <Hits />
 *     </Index>
 *     <Index indexName="bestbuy">
 *       <Hits />
 *     </Index>
 *   </InstantSearch>
 * );
 */
declare class Index extends Component<InnerProps, State> {
  static propTypes: {
    indexName: PropTypes.Validator<string>;
    indexId: PropTypes.Validator<string>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
  };
  static getDerivedStateFromProps(
    props: InnerProps
  ): {
    indexContext: {
      targetedIndex: string;
    };
  };
  state: {
    indexContext: {
      targetedIndex: string;
    };
  };
  unregisterWidget?: () => void;
  constructor(props: InnerProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: InnerProps): void;
  componentWillUnmount(): void;
  getSearchParameters(searchParameters: any, props: InnerProps): any;
  render(): JSX.Element;
}
declare type IndexWrapperProps = {
  indexName: string;
  indexId?: string;
};
declare const IndexWrapper: React.FC<IndexWrapperProps>;
export declare const IndexComponentWithoutContext: typeof Index;
export default IndexWrapper;
