/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Webflow from "../../../../../api";
import * as core from "../../../../../core";

export const ProductsCreateSkuRequest: core.serialization.Schema<
    serializers.ProductsCreateSkuRequest.Raw,
    Webflow.ProductsCreateSkuRequest
> = core.serialization.object({
    publishStatus: core.serialization.lazy(async () => (await import("../../../..")).PublishStatus).optional(),
    skus: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../..")).Sku)),
});

export declare namespace ProductsCreateSkuRequest {
    interface Raw {
        publishStatus?: serializers.PublishStatus.Raw | null;
        skus: serializers.Sku.Raw[];
    }
}
