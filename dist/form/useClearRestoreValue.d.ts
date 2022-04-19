import { CMSType, Property } from "../models";
/**
 * Hook we use to restore a value after it has been cleared
 * @param property
 * @param value
 * @param setValue
 * @ignore
 */
export declare function useClearRestoreValue<T extends CMSType>({ property, value, setValue }: {
    property: Property<T>;
    value: T;
    setValue: (value: T | null, shouldValidate?: boolean) => void;
}): void;
