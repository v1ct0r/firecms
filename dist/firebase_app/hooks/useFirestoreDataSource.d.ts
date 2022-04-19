import { DataSource } from "../../models";
import { FirebaseApp } from "firebase/app";
import { FirestoreTextSearchController } from "../models/text_search";
/**
 * @category Firebase
 */
export interface FirestoreDataSourceProps {
    firebaseApp?: FirebaseApp;
    textSearchController?: FirestoreTextSearchController;
}
/**
 * Use this hook to build a {@link DataSource} based on Firestore
 * @param firebaseApp
 * @param textSearchController
 * @category Firebase
 */
export declare function useFirestoreDataSource({ firebaseApp, textSearchController }: FirestoreDataSourceProps): DataSource;
