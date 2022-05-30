import { ReactNode } from "react";
import { FirebaseApp } from "firebase/app";
import { FirebaseAuthDelegate, FirebaseSignInOption, FirebaseSignInProvider } from "../models/auth";
/**
 * @category Firebase
 */
export interface FirebaseLoginViewProps {
    logo?: string;
    allowSkipLogin?: boolean;
    signInOptions: Array<FirebaseSignInProvider | FirebaseSignInOption>;
    firebaseApp: FirebaseApp;
    authDelegate: FirebaseAuthDelegate;
    /**
     * Prevent users from creating new users in when the `signInOptions` value
     * is `password`. This does not apply to the rest of login providers.
     */
    disableSignupScreen?: boolean;
    /**
     * Display this component when no user is found a user tries to log in
     * when the `signInOptions` value is `password`.
     */
    NoUserComponent?: ReactNode;
}
/**
 * Use this component to render a login view, that updates
 * the state of the {@link AuthController} based on the result
 * @constructor
 * @category Firebase
 */
export declare function FirebaseLoginView({ allowSkipLogin, logo, signInOptions, firebaseApp, authDelegate, NoUserComponent, disableSignupScreen }: FirebaseLoginViewProps): import("@emotion/react/jsx-runtime").JSX.Element;
