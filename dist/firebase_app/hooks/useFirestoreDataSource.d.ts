import { DataSource } from "../../models";
import { Firestore } from "firebase/firestore";
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
/**
 * Recursive function that converts Firestore data types into CMS or plain
 * JS types.
 * FireCMS uses Javascript dates internally instead of Firestore timestamps.
 * This makes it easier to interact with the rest of the libraries and
 * bindings.
 * Also, Firestore references are replaced with {@link EntityReference}
 * @param data
 * @category Firestore
 */
export declare function firestoreToCMSModel<M>(data: any): any;
export declare function cmsToFirestoreModel(data: any, firestore: Firestore): any;
