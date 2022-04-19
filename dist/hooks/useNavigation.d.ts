import { NavigationContext } from "../models";
/**
 * Use this hook to get the navigation of the app.
 * Note that if can be undefined if the navigation has not yet been
 * resolved (you used a {@link NavigationBuilder} and the user is not
 * authenticated.
 *
 * @category Hooks and utilities
 */
export declare function useNavigation(): NavigationContext;
