interface QuizData {
    role?: string;
    roleLabel?: string;
    volume?: string;
    volumeLabel?: string;
    methods?: string[];
    methodsLabel?: string;
    payout?: string;
    payoutLabel?: string;
    urgency?: string;
    urgencyLabel?: string;
    tariffName?: string;
    tariffRate?: string;
    name: string;
    contact: string;
    company?: string;
    agreeToTerms?: boolean;
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
