export interface RateLimiter {
    isLimited(key: string): boolean;
    recordAttempt(key: string): void;
    reset(key: string): void;
}
export declare function createRateLimiter(maxAttempts: number, windowMs: number): RateLimiter;
