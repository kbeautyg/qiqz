interface DatabaseRecord {
    type: 'quiz' | 'contact';
    data: any;
    timestamp: string;
}
export declare function saveToDatabase(type: 'quiz' | 'contact', data: any): Promise<void>;
export declare function getAllRecords(): DatabaseRecord[];
export declare function getRecordsByPromoCode(promoCode: string): DatabaseRecord[];
export {};
