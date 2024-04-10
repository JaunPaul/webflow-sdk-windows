/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

export interface DuplicateUserEmail {
    code?: "duplicate_user_email";
    /** Error message */
    message?: string;
    /** Link to more information */
    externalReference?: string;
    /** Array of errors */
    details?: Webflow.ErrorDetailsItem[];
}
