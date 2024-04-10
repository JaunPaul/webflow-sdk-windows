/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Webflow from "../../../../../../api";
import * as core from "../../../../../../core";

export const ItemsPublishItemResponse: core.serialization.ObjectSchema<
    serializers.collections.ItemsPublishItemResponse.Raw,
    Webflow.collections.ItemsPublishItemResponse
> = core.serialization.object({
    publishedItemIds: core.serialization.list(core.serialization.string()).optional(),
    errors: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ItemsPublishItemResponse {
    interface Raw {
        publishedItemIds?: string[] | null;
        errors?: string[] | null;
    }
}
