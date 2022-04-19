import { AuthController, Entity, FireCMSContext, Permissions, PermissionsBuilder } from "../../models";
export declare function canEdit<M extends {
    [Key: string]: any;
}, UserType>(permission: PermissionsBuilder<M, UserType> | Permissions | undefined, entity: Entity<M>, authController: AuthController<UserType>, path: string, context: FireCMSContext<UserType>): boolean;
export declare function canCreate<M extends {
    [Key: string]: any;
}, UserType>(permission: PermissionsBuilder<M, UserType> | Permissions | undefined, authController: AuthController<UserType>, path: string, context: FireCMSContext<UserType>): boolean;
export declare function canDelete<M extends {
    [Key: string]: any;
}, UserType>(permission: PermissionsBuilder<M, UserType> | Permissions | undefined, entity: Entity<M>, authController: AuthController<UserType>, path: string, context: FireCMSContext<UserType>): boolean;
