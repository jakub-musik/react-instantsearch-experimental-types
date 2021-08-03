export declare const shallowEqual: (objA: any, objB: any) => boolean;
export declare const getDisplayName: (Component: any) => any;
export declare const defer: (f: any) => void;
export declare const removeEmptyKey: (obj: object) => object;
export declare const removeEmptyArraysFromObject: (obj: object) => object;
export declare function addAbsolutePositions(
  hits: any,
  hitsPerPage: any,
  page: any
): any;
export declare function addQueryID(hits: any, queryID: any): any;
export declare function find<TItem = any>(
  array: TItem[],
  comparator: (item: TItem) => boolean
): TItem | undefined;
export declare function objectHasKeys(object: object | undefined): boolean;
export declare function omit(
  source: {
    [key: string]: any;
  },
  excluded: string[]
): {};
/**
 * Retrieve the value at a path of the object:
 *
 * @example
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   'test.this.function[0].now.everyone'
 * ); // true
 *
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   ['test', 'this', 'function', 0, 'now', 'everyone']
 * ); // true
 *
 * @param object Source object to query
 * @param path either an array of properties, or a string form of the properties, separated by .
 */
export declare const getPropertyByPath: (
  object: object,
  path: string | string[]
) => any;
export declare function getObjectType(object: unknown): string;
