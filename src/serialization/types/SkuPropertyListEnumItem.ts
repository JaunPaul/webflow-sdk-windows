/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const SkuPropertyListEnumItem: core.serialization.ObjectSchema<
    serializers.SkuPropertyListEnumItem.Raw,
    Webflow.SkuPropertyListEnumItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
});

export declare namespace SkuPropertyListEnumItem {
    interface Raw {
        id?: string | null;
        name?: string | null;
        slug?: string | null;
    }
}
