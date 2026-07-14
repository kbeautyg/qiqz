export interface LinkRecord {
    slug: string;
    createdAt: string;
    shown: boolean;
    shownAt: string | null;
}
export declare function isValidSlugFormat(slug: string): boolean;
export declare function listLinks(): LinkRecord[];
export declare function createLink(explicitSlug?: string): LinkRecord;
export declare function deleteLink(slug: string): boolean;
export declare function checkAndConsume(slug: string): {
    exists: boolean;
    showPopup: boolean;
};
