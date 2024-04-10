/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const CollectionListArrayItem: core.serialization.ObjectSchema<
    serializers.CollectionListArrayItem.Raw,
    Webflow.CollectionListArrayItem
> = core.serialization.object({
    id: core.serialization.string(),
    displayName: core.serialization.string().optional(),
    singularName: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    createdOn: core.serialization.date().optional(),
    lastUpdated: core.serialization.date().optional(),
});

export declare namespace CollectionListArrayItem {
    interface Raw {
        id: string;
        displayName?: string | null;
        singularName?: string | null;
        slug?: string | null;
        createdOn?: string | null;
        lastUpdated?: string | null;
    }
}
