import { CMSType, Property } from "../../models";
interface FieldDescriptionPopoverProps<T extends CMSType> {
    property: Property<T>;
}
/**
 * Render the field description for a property
 * @category Form custom fields
 */
export declare function FieldDescription<T extends CMSType>({ property }: FieldDescriptionPopoverProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
