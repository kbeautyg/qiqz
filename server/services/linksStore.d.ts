export interface LinkRecord {
    slug: string;
    createdAt: string;
    telegramUsername: string | null;
    submittedAt: string | null;
}
export declare function isValidSlugFormat(slug: string): boolean;
export declare function normalizeUsername(rawUsername: string): string;
export declare function isValidUsername(username: string): boolean;
export declare function listLinks(): LinkRecord[];
export declare function createLink(explicitSlug?: string): LinkRecord;
export declare function deleteLink(slug: string): boolean;
export declare function getLink(slug: string): LinkRecord | undefined;
export declare function submitUsername(slug: string, username: string): LinkRecord | undefined;
