/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const FormFieldValue: core.serialization.ObjectSchema<serializers.FormFieldValue.Raw, Webflow.FormFieldValue> =
    core.serialization.object({
        displayName: core.serialization.string().optional(),
        type: core.serialization.lazy(async () => (await import("..")).FormFieldValueType).optional(),
        placeholder: core.serialization.string().optional(),
        userVisible: core.serialization.boolean().optional(),
    });

export declare namespace FormFieldValue {
    interface Raw {
        displayName?: string | null;
        type?: serializers.FormFieldValueType.Raw | null;
        placeholder?: string | null;
        userVisible?: boolean | null;
    }
}
