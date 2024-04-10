/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A collection object
 */
export interface CollectionListArrayItem {
    /** Unique identifier for a Collection */
    id: string;
    /** Name given to the Collection */
    displayName?: string;
    /** The name of one Item in Collection (e.g. ”Blog Post” if the Collection is called “Blog Posts”) */
    singularName?: string;
    /** Slug of Collection in Site URL structure */
    slug?: string;
    /** The date the collection was created */
    createdOn?: Date;
    /** The date the collection was last updated */
    lastUpdated?: Date;
}
