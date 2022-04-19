import { Entity, EntitySchema, EntityStatus } from "../../models";
export declare function CustomIdField<M, UserType>({ schema, status, onChange, error, entity }: {
    schema: EntitySchema<M>;
    status: EntityStatus;
    onChange: Function;
    error: boolean;
    entity: Entity<M> | undefined;
}): import("@emotion/react/jsx-runtime").JSX.Element;
