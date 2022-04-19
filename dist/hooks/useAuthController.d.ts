import { AuthController, User } from "../models";
/**
 * Hook to retrieve the AuthContext.
 *
 * Consider that in order to use this hook you need to have a parent
 * `FireCMS`
 *
 * @see AuthController
 * @category Hooks and utilities
 */
export declare function useAuthController<UserType extends User = User>(): AuthController<UserType>;
