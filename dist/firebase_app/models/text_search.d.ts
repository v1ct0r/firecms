import { SearchIndex } from "algoliasearch";
/**
 * Use this controller to return a list of ids from a search index, given a
 * `path` and a `searchString`.
 * Firestore does not support text search directly so we need to rely on an external
 * index, such as Algolia.
 * Note that you will get text search requests for collections that have the
 * `textSearchEnabled` flag set to `true`.
 * @see performAlgoliaTextSearch
 * @category Firebase
 */
export declare type FirestoreTextSearchController = (props: {
    path: string;
    searchString: string;
}) => Promise<readonly string[]> | undefined;
/**
 * Utility function to perform a text search in an algolia index,
 * returning the ids of the entities.
 * @param index
 * @param query
 * @category Firebase
 */
export declare function performAlgoliaTextSearch(index: SearchIndex, query: string): Promise<readonly string[]>;
