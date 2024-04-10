/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const UserWebhookPayloadTriggerType: core.serialization.Schema<
    serializers.UserWebhookPayloadTriggerType.Raw,
    Webflow.UserWebhookPayloadTriggerType
> = core.serialization.enum_(["user_account_added", "user_account_updated", "user_account_deleted"]);

export declare namespace UserWebhookPayloadTriggerType {
    type Raw = "user_account_added" | "user_account_updated" | "user_account_deleted";
}