/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `form_submission` - Sends the [form_submission](#form_submission) event
 * - `site_publish` - Sends a [site_publish](#site_publish) event
 * - `page_created` - Send the [page_created](#page_created) event
 * - `page_metadata_updated` - Sends the [page_metadata_updated](#page_metadata_updated) event
 * - `page_deleted` - Sends the [page_deleted](#page_deleted) event
 * - `ecomm_new_order` - Sends the new [ecomm_new_order](#ecomm_new_order) event
 * - `ecomm_order_changed` - Sends the [ecomm_order_changed](#ecomm_order_changed) event
 * - `ecomm_inventory_changed` - Sends the [ecomm_inventory_changed](#ecomm_inventory_changed) event
 * - `user_account_added` - Sends the [user_account_added](#user_account_added) event
 * - `user_account_updated` - Sends the [user_account_updated](#user_account_updated) event
 * - `user_account_deleted` - Sends the [user_account_deleted](#user_account_deleted) event
 * - `collection_item_created` - Sends the [collection_item_created](#collection_item_created) event
 * - `collection_item_changed` - Sends the [collection_item_changed](#collection_item_changed) event
 * - `collection_item_deleted` - Sends the [collection_item_deleted](#collection_item_deleted) event
 * - `collection_item_unpublished` - Sends the [collection_item_unpublished](#collection_item_unpublished) event
 */
export type TriggerType =
    | "form_submission"
    | "site_publish"
    | "page_created"
    | "page_metadata_updated"
    | "page_deleted"
    | "ecomm_new_order"
    | "ecomm_order_changed"
    | "ecomm_inventory_changed"
    | "user_account_added"
    | "user_account_updated"
    | "user_account_deleted"
    | "collection_item_created"
    | "collection_item_changed"
    | "collection_item_deleted"
    | "collection_item_unpublished";

export const TriggerType = {
    FormSubmission: "form_submission",
    SitePublish: "site_publish",
    PageCreated: "page_created",
    PageMetadataUpdated: "page_metadata_updated",
    PageDeleted: "page_deleted",
    EcommNewOrder: "ecomm_new_order",
    EcommOrderChanged: "ecomm_order_changed",
    EcommInventoryChanged: "ecomm_inventory_changed",
    UserAccountAdded: "user_account_added",
    UserAccountUpdated: "user_account_updated",
    UserAccountDeleted: "user_account_deleted",
    CollectionItemCreated: "collection_item_created",
    CollectionItemChanged: "collection_item_changed",
    CollectionItemDeleted: "collection_item_deleted",
    CollectionItemUnpublished: "collection_item_unpublished",
} as const;