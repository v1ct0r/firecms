import { Entity } from "./entities";
/**
 * @category Models
 */
export declare type EntityLinkBuilder<M = any> = ({ entity }: {
    entity: Entity<M>;
}) => string;
