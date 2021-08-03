// / <reference types="react" />
export declare type CustomUserData = {
  [key: string]: any;
};
declare type TrackedFilterRefinement = string | number | boolean;
export declare type QueryRulesProps<TItem = CustomUserData> = {
  trackedFilters: {
    [facetName: string]: (
      facetValues: TrackedFilterRefinement[]
    ) => TrackedFilterRefinement[];
  };
  transformRuleContexts: (ruleContexts: string[]) => string[];
  transformItems: (items: TItem[]) => TItem[];
};
declare const _default: (
  Composed: import('react').ReactType<any>
) => import('react').FC<any>;
export default _default;
