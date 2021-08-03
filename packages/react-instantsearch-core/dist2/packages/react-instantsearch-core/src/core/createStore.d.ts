declare type SearchState = any;
declare type ResultsState = any;
declare type ResultsFacetsValues = any;
declare type Listener = () => void;
declare type State = {
  widgets: SearchState;
  metadata: any[];
  results: ResultsState | null;
  resultsFacetValues: ResultsFacetsValues | null;
  error: Error | null;
  searching: boolean;
  isSearchStalled: boolean;
  searchingForFacetValues: boolean;
};
export default function createStore(
  initialState: State
): {
  getState(): State;
  setState(nextState: State): void;
  subscribe(listener: Listener): () => void;
};
export declare type Store = ReturnType<typeof createStore>;
export {};
