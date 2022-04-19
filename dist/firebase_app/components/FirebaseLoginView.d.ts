import { FirebaseApp } from "firebase/app";
import { FirebaseAuthDelegate, FirebaseSignInOption, FirebaseSignInProvider } from "../models/auth";
/**
 * @category Firebase
 */
export interface FirebaseLoginViewProps {
    skipLoginButtonEnabled?: boolean;
    logo?: string;
    signInOptions: Array<FirebaseSignInProvider | FirebaseSignInOption>;
    firebaseApp: FirebaseApp;
    authDelegate: FirebaseAuthDelegate;
}
/**
 * Use this component to render a login view based on FirebaseUI, that updates
 * the state of the {@link AuthController} based on the result
 * @constructor
 * @category Firebase
 */
export declare function FirebaseLoginView({ skipLoginButtonEnabled, logo, signInOptions, firebaseApp, authDelegate }: FirebaseLoginViewProps): import("@emotion/react/jsx-runtime").JSX.Element;
