import { Locale } from "./locales";
import { DataSource } from "./datasource";
import { StorageSource } from "./storage";
import { NavigationContext } from "./navigation";
import { SideEntityController } from "./side_entity_controller";
import { AuthController } from "./auth";
import { EntityLinkBuilder } from "./entity_link_builder";
import { User } from "./user";
import { SnackbarController } from "../hooks";
/**
 * Context that includes the internal controllers and contexts used by the app.
 * Some controllers and context included in this context can be accessed
 * directly from their respective hooks.
 * @category Hooks and utilities
 * @see useFireCMSContext
 */
export interface FireCMSContext<UserType extends User = User> {
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
     * Connector to your database, e.g. your Firestore database
     */
    dataSource: DataSource;
    /**
     * Used storage implementation
     */
    storageSource: StorageSource;
    /**
     * Context that includes the resolved navigation and utility methods and
     * attributes.
     * @see useNavigation
     */
    navigationContext: NavigationContext;
    /**
     * Controller to open the side dialog displaying entity forms
     * @see useSideEntityController
     */
    sideEntityController: SideEntityController;
    /**
     * Used auth controller
     */
    authController: AuthController<UserType>;
    /**
     * Builder for generating utility links for entities
     */
    entityLinkBuilder?: EntityLinkBuilder;
    /**
     * Use this controller to display snackbars
     */
    snackbarController: SnackbarController;
}
