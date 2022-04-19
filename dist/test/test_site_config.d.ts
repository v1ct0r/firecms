import { FirebaseCMSAppProps } from "../firebase_app";
export declare const productSchema: import("../models").EntitySchema<{
    name: string;
    main_image: string;
    available: boolean;
    price: import("../models").CMSType;
    currency: string;
    public: boolean;
    brand: string;
    description: string;
    amazon_link: string;
    images: any[];
    related_products: any[];
    publisher: any;
    available_locales: any[];
    uppercase_name: string;
    added_on: Date;
}>;
export declare const siteConfig: FirebaseCMSAppProps;
export declare const usersSchema: import("../models").EntitySchema<{
    first_name: unknown;
    last_name: unknown;
    email: unknown;
    phone: unknown;
    liked_products: unknown;
    picture: {
        [x: string]: {};
    };
}>;
export declare const exerciseJointMovementSchema: import("../models").EntitySchema<{
    joint: unknown;
    movement: import("../models").CMSType;
    maximal_performed_extent: unknown;
    enforced: unknown;
}>;
