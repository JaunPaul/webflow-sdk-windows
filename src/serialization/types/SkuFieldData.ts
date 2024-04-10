/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const SkuFieldData: core.serialization.ObjectSchema<serializers.SkuFieldData.Raw, Webflow.SkuFieldData> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
        price: core.serialization.lazyObject(async () => (await import("..")).SkuFieldDataPrice).optional(),
        skuValues: core.serialization.property(
            "sku-values",
            core.serialization.lazy(async () => (await import("..")).SkuValueList).optional()
        ),
    });

export declare namespace SkuFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
        price?: serializers.SkuFieldDataPrice.Raw | null;
        "sku-values"?: serializers.SkuValueList.Raw | null;
    }
}
