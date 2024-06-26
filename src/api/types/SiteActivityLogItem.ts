/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

export interface SiteActivityLogItem {
    id?: string;
    createdOn?: Date;
    lastUpdated?: Date;
    event?: string;
    resourceOperation?: Webflow.SiteActivityLogItemResourceOperation;
    user?: string;
    resourceId?: string;
    resourceName?: string;
    newValue?: string;
    previousValue?: string;
    payload?: Record<string, unknown>;
}
