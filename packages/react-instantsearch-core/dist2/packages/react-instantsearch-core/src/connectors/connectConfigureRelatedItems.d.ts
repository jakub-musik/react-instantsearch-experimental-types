// / <reference types="react" />
export declare type MatchingPatterns = {
  [attribute: string]: {
    /**
     * The score of the optional filter.
     *
     * @see https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/in-depth/optional-filters/
     */
    score: number;
  };
};
declare const _default: (
  Composed: import('react').ReactType<any>
) => import('react').FC<any>;
export default _default;
