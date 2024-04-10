/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const Fields: core.serialization.Schema<serializers.Fields.Raw, Webflow.Fields> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("..")).Field)
);

export declare namespace Fields {
    type Raw = serializers.Field.Raw[];
}
