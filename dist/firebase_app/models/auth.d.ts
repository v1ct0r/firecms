import { User as FirebaseUser } from "firebase/auth";
import { AuthDelegate } from "../../models";
/**
 * @category Firebase
 */
export declare type FirebaseSignInProvider = "password" | "anonymous" | "google.com" | "facebook.com" | "github.com" | "twitter.com" | "microsoft.com" | "apple.com";
/**
 * @category Firebase
 */
export declare type FirebaseSignInOption = {
    provider: FirebaseSignInProvider;
    scopes?: string[];
    customParameters?: Record<string, string>;
};
/**
 * @category Firebase
 */
export declare type FirebaseAuthDelegate = AuthDelegate<FirebaseUser> & {
    authLoading: boolean;
    googleLogin: () => void;
    anonymousLogin: () => void;
    appleLogin: () => void;
    facebookLogin: () => void;
    githubLogin: () => void;
    microsoftLogin: () => void;
    twitterLogin: () => void;
    emailPasswordLogin: (email: string, password: string) => void;
    fetchSignInMethodsForEmail: (email: string) => Promise<string[]>;
    createUserWithEmailAndPassword: (email: string, password: string) => void;
    /**
     * Has the user skipped the login process
     */
    loginSkipped?: boolean;
    /**
     * Skip login
     */
    skipLogin?: () => void;
};
