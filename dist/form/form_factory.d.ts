import { ReactElement } from "react";
import { CMSFormFieldProps, CMSType } from "../models";
/**
 * This factory method renders a form field creating the corresponding configuration
 * from a property. For example if bound to a string property, it will generate
 * a text field.
 *
 * You can use it when you are creating a custom field, and need to
 * render additional fields mapped to properties. This is useful if you
 * need to build a complex property mapping, like an array where each index
 * is a different property.
 *
 * Please note that if you build a custom field in a component, the
 * **validation** passed in the property will have no effect. You need to set
 * the validation in the `EntitySchema` definition.
 *
 * @param name You can use nested names such as `address.street` or `friends[2]`
 * @param property
 * @param context
 * @param includeDescription
 * @param underlyingValueHasChanged
 * @param disabled
 * @param tableMode
 * @param partOfArray
 * @param autoFocus
 * @param shouldAlwaysRerender
 * @category Form custom fields
 */
export declare function buildPropertyField<T extends CMSType = any, M = any>({ name, property, context, includeDescription, underlyingValueHasChanged, disabled, tableMode, partOfArray, autoFocus, shouldAlwaysRerender }: CMSFormFieldProps<M>): ReactElement<CMSFormFieldProps<M>>;
