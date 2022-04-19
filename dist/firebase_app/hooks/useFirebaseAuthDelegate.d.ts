import { FirebaseApp } from "firebase/app";
import { FirebaseAuthDelegate, FirebaseSignInOption, FirebaseSignInProvider } from "../models/auth";
interface FirebaseAuthHandlerProps {
    firebaseApp?: FirebaseApp;
    signInOptions: Array<FirebaseSignInProvider | FirebaseSignInOption>;
}
/**
 * Use this hook to build an {@link AuthDelegate} based on Firebase Auth
 * @category Firebase
 */
export declare const useFirebaseAuthDelegate: ({ firebaseApp, signInOptions }: FirebaseAuthHandlerProps) => FirebaseAuthDelegate;
export {};
