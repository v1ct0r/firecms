import { EntityCollection, EntityCustomView } from "../../models";
export declare type NavigationViewInternal<M> = NavigationViewEntityInternal<M> | NavigationViewCollectionInternal<M> | NavigationViewEntityCustomInternal<M>;
interface NavigationViewEntityInternal<M> {
    type: "entity";
    entityId: string;
    path: string;
    parentCollection: EntityCollection<M>;
}
interface NavigationViewCollectionInternal<M> {
    type: "collection";
    path: string;
    collection: EntityCollection<M>;
}
interface NavigationViewEntityCustomInternal<M> {
    type: "custom_view";
    path: string;
    view: EntityCustomView<M>;
}
export declare function getNavigationEntriesFromPathInternal<M extends {
    [Key: string]: any;
}>(props: {
    path: string;
    collections: EntityCollection[];
    customViews?: EntityCustomView<M>[];
    currentFullPath?: string;
}): NavigationViewInternal<M>[];
export {};
