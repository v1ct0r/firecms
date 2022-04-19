import React from "react";
import { AuthDelegate, Authenticator, DataSource, EntityCollection, EntityLinkBuilder, FireCMSContext, Locale, Navigation, NavigationBuilder, SchemaResolver, StorageSource } from "../models";
/**
 * @category Core
 */
export interface FireCMSProps<UserType> {
    /**
     * Use this function to return the components you want to render under
     * FireCMS
     * @param props
     */
    children: (props: {
        /**
         * Context of the app
         */
        context: FireCMSContext;
        /**
         * Main color scheme
         */
        mode: "dark" | "light";
        /**
         * Is one of the main processes, auth and navigation resolving, currently
         * loading. If you are building your custom implementation, you probably
         * want to show a loading indicator if this flag is `true`
         */
        loading: boolean;
    }) => React.ReactNode;
    /**
     * Use this prop to specify the views that will be generated in the CMS.
     * You usually will want to create a `Navigation` object that includes
     * collection views where you specify the path and the schema.
     * Additionally you can add custom views to the root navigation.
     * In you need to customize the navigation based on the logged user you
     * can use a `NavigationBuilder`
     */
    navigation: Navigation | NavigationBuilder<UserType> | EntityCollection[];
    /**
     * Do the users need to log in to access the CMS.
     * You can specify an Authenticator function to discriminate which users can
     * access the CMS or not.
     * If not specified, authentication is enabled but no user restrictions
     * apply.
     */
    authentication?: boolean | Authenticator<UserType>;
    /**
     * Used to override schemas based on the collection path and entityId.
     * This resolver allows to override the schema for specific entities, or
     * specific collections, app wide. This overrides schemas all through the app.
     *
     * You can also override schemas in place, when using `useSideEntityController`
     */
    schemaResolver?: SchemaResolver;
    /**
     * Format of the dates in the CMS.
     * Defaults to 'MMMM dd, yyyy, HH:mm:ss'
     */
    dateTimeFormat?: string;
    /**
     * Locale of the CMS, currently only affecting dates
     */
    locale?: Locale;
    /**
     * Connector to your database
     */
    dataSource: DataSource;
    /**
     * Connector to your file upload/fetch implementation
     */
    storageSource: StorageSource;
    /**
     * Delegate for implementing your auth operations.
     * @see useFirebaseAuthDelegate
     */
    authDelegate: AuthDelegate;
    /**
     * Optional link builder you can add to generate a button in your entity forms.
     * The function must return a URL that gets opened when the button is clicked
     */
    entityLinkBuilder?: EntityLinkBuilder;
    /**
     * Default path under the navigation routes of the CMS will be created
     */
    basePath?: string;
    /**
     * Default path under the collection routes of the CMS will be created
     */
    baseCollectionPath?: string;
}
/**
 * If you are using independent components of the CMS
 * you need to wrap them with this main component, so the internal hooks work.
 *
 * @constructor
 * @category Core
 */
export declare function FireCMS<UserType>(props: FireCMSProps<UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
