import { AuthController, AuthDelegate, Authenticator, DataSource, Locale, StorageSource } from "../../models";
export declare function useBuildAuthController<UserType>({ authDelegate, authentication, dateTimeFormat, locale, dataSource, storageSource }: {
    authDelegate: AuthDelegate;
    authentication?: boolean | Authenticator<UserType>;
    dateTimeFormat?: string;
    locale?: Locale;
    dataSource: DataSource;
    storageSource: StorageSource;
}): AuthController<UserType>;
