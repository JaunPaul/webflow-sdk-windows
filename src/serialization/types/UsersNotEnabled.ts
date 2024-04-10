/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const UsersNotEnabled: core.serialization.ObjectSchema<
    serializers.UsersNotEnabled.Raw,
    Webflow.UsersNotEnabled
> = core.serialization.object({
    code: core.serialization.stringLiteral("users_not_enabled").optional(),
    message: core.serialization.string().optional(),
    externalReference: core.serialization.string().optional(),
    details: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).ErrorDetailsItem))
        .optional(),
});

export declare namespace UsersNotEnabled {
    interface Raw {
        code?: "users_not_enabled" | null;
        message?: string | null;
        externalReference?: string | null;
        details?: serializers.ErrorDetailsItem.Raw[] | null;
    }
}
