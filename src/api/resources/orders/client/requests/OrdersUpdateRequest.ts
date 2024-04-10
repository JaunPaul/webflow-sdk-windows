/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         comment: "Example comment to myself",
 *         shippingProvider: "Shipping Company, Co.",
 *         shippingTracking: "tr00000000001",
 *         shippingTrackingUrl: "https://www.shippingcompany.com/tracking/tr00000000001"
 *     }
 */
export interface OrdersUpdateRequest {
    /** Arbitrary data for your records */
    comment?: string;
    /** Company or method used to ship order */
    shippingProvider?: string;
    /** Tracking number for order shipment */
    shippingTracking?: string;
    /** URL to track order shipment */
    shippingTrackingUrl?: string;
}
