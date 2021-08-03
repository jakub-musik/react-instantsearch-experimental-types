// / <reference types="react" />
declare const _default: (
  Composed: import('react').ReactType<any>
) => import('react').FC<any>;
/**
 * connectStats connector provides the logic to build a widget that will
 *  displays algolia search statistics (hits number and processing time).
 * @name connectStats
 * @kind connector
 * @providedPropType {number} nbHits - number of hits returned by Algolia.
 * @providedPropType {number} nbSortedHits - number of sorted hits returned by Algolia.
 * @providedPropType {number} processingTimeMS - the time in ms took by Algolia to search for results.
 */
export default _default;
