import { AuthController, ConfigurationPersistence, DataSource, EntityCollection, Locale, Navigation, NavigationBuilder, NavigationContext, SchemaOverrideHandler, StorageSource } from "../../models";
export declare function useBuildNavigationContext<UserType>({ basePath, baseCollectionPath, authController, navigationOrBuilder, schemaOverrideHandler, dateTimeFormat, locale, dataSource, storageSource, userConfigPersistence }: {
    basePath: string;
    baseCollectionPath: string;
    authController: AuthController<UserType>;
    navigationOrBuilder: Navigation | NavigationBuilder<UserType> | EntityCollection[];
    schemaOverrideHandler: SchemaOverrideHandler | undefined;
    dateTimeFormat?: string;
    locale?: Locale;
    dataSource: DataSource;
    storageSource: StorageSource;
    userConfigPersistence?: ConfigurationPersistence;
}): NavigationContext;
export declare function getSidePanelKey(path: string, entityId?: string): string;
