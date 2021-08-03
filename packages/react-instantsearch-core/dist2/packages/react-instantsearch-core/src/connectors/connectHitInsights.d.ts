// / <reference types="react" />
declare type InsightsClient = (
  method: InsightsClientMethod,
  payload: InsightsClientPayload
) => void;
declare type InsightsClientMethod =
  | 'clickedObjectIDsAfterSearch'
  | 'convertedObjectIDsAfterSearch';
declare type InsightsClientPayload = {
  index: string;
  queryID: string;
  eventName: string;
  objectIDs: string[];
  positions?: number[];
};
declare const _default: (
  insightsClient: InsightsClient
) => (Composed: import('react').ReactType<any>) => import('react').FC<any>;
export default _default;
