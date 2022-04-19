import { FirebaseApp } from "firebase/app";
/**
 * @category Firebase
 */
export interface InitialiseFirebaseResult {
    firebaseConfigLoading: boolean;
    firebaseApp?: FirebaseApp;
    configError?: string;
    firebaseConfigError?: Error;
}
/**
 * Function used to initialise Firebase, either by using the provided config,
 * or by fetching it by Firebase Hosting, if not specified.
 *
 * It works as a hook that gives you the loading state and the used
 * configuration.
 *
 * You most likely only need to use this if you are developing a custom app
 * that is not using {@link FirebaseCMSApp}. You can also not use this component
 * and initialise Firebase yourself.
 *
 * @param onFirebaseInit
 * @param firebaseConfig
 * @category Firebase
 */
export declare function useInitialiseFirebase({ firebaseConfig, onFirebaseInit }: {
    onFirebaseInit?: ((config: object) => void) | undefined;
    firebaseConfig: Object | undefined;
}): InitialiseFirebaseResult;
