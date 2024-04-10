/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const ProductAndSkUsList: core.serialization.ObjectSchema<
    serializers.ProductAndSkUsList.Raw,
    Webflow.ProductAndSkUsList
> = core.serialization.object({
    items: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ProductAndSkUs))
        .optional(),
    pagination: core.serialization.lazyObject(async () => (await import("..")).Pagination).optional(),
});

export declare namespace ProductAndSkUsList {
    interface Raw {
        items?: serializers.ProductAndSkUs.Raw[] | null;
        pagination?: serializers.Pagination.Raw | null;
    }
}