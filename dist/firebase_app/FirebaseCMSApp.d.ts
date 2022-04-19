import { FirebaseCMSAppProps } from "./FirebaseCMSAppProps";
/**
 * This is the default implementation of a FireCMS app using the Firebase services
 * as a backend.
 * You can use this component as a full app, by specifying collections and
 * entity schemas.
 *
 * This component is in charge of initialising Firebase, with the given
 * configuration object.
 *
 * If you are building a larger app and need finer control, you can use
 * {@link FireCMS}, {@link Scaffold}, {@link SideEntityDialogs}
 * and {@link NavigationRoutes} instead.
 *
 * @param props
 * @constructor
 * @category Firebase
 */
export declare function FirebaseCMSApp({ name, logo, toolbarExtraWidget, authentication, schemaOverrideHandler, navigation, textSearchController, allowSkipLogin, signInOptions, firebaseConfig, onFirebaseInit, primaryColor, secondaryColor, fontFamily, dateTimeFormat, locale, HomePage, basePath, baseCollectionPath, LoginViewProps }: FirebaseCMSAppProps): import("@emotion/react/jsx-runtime").JSX.Element;
