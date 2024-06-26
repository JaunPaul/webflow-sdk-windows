/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../..";

/**
 * @example
 *     {
 *         publishStatus: Webflow.PublishStatus.Staging,
 *         product: {
 *             id: "580e63fc8c9a982ac9b8b745",
 *             lastPublished: new Date("2023-03-17T18:47:35.560Z"),
 *             lastUpdated: new Date("2023-03-17T18:47:35.560Z"),
 *             createdOn: new Date("2023-03-17T18:47:35.560Z"),
 *             isArchived: false,
 *             isDraft: false,
 *             fieldData: {
 *                 name: "My new item",
 *                 slug: "my-new-item",
 *                 skuProperties: [{
 *                         id: "ff42fee0113744f693a764e3431a9cc2",
 *                         name: "Color",
 *                         enum: [{
 *                                 id: "64a74715c456e36762fc39a1",
 *                                 name: "Royal Blue",
 *                                 slug: "royal-blue"
 *                             }]
 *                     }]
 *             }
 *         },
 *         sku: {
 *             id: "580e63fc8c9a982ac9b8b745",
 *             lastPublished: new Date("2023-03-17T18:47:35.560Z"),
 *             lastUpdated: new Date("2023-03-17T18:47:35.560Z"),
 *             createdOn: new Date("2023-03-17T18:47:35.560Z"),
 *             fieldData: {
 *                 name: "My new item",
 *                 slug: "my-new-item",
 *                 price: {
 *                     value: 100,
 *                     unit: "USD"
 *                 }
 *             }
 *         }
 *     }
 */
export interface ProductsCreateRequest {
    publishStatus?: Webflow.PublishStatus;
    product: Webflow.Product;
    sku: Webflow.Sku;
}
