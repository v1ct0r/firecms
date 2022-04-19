import { AuthController, DataSource, EntityCollection, Locale, Navigation, NavigationBuilder, NavigationContext, StorageSource } from "../../models";
export declare function useBuildNavigationContext<UserType>({ basePath, baseCollectionPath, authController, navigationOrBuilder, dateTimeFormat, locale, dataSource, storageSource }: {
    basePath: string;
    baseCollectionPath: string;
    authController: AuthController<UserType>;
    navigationOrBuilder: Navigation | NavigationBuilder<UserType> | EntityCollection[];
    dateTimeFormat?: string;
    locale?: Locale;
    dataSource: DataSource;
    storageSource: StorageSource;
}): NavigationContext;
