interface QuizData {
    businessType: string;
    businessTypeOther?: string;
    paymentMethods: string[];
    turnover: string;
    name: string;
    contact: string;
    email?: string;
}
export declare function sendQuizNotification(data: QuizData): Promise<void>;
interface ContactData {
    name: string;
    phone: string;
    promoCode?: string;
    sourcePage?: string;
    utmParams?: {
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
    };
}
export declare function sendContactNotification(data: ContactData): Promise<void>;
export {};
