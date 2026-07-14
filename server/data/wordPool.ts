// Пул слов-кандидатов для маркерных ссылок (см. server/services/linksStore.ts).
// Слова подобраны так, чтобы выглядеть как органичные разделы сайта
// (транслит рус. бизнес-лексики + англ. SaaS-термины), а не как "demo1", "link2" и т.п.

export const RESERVED_SLUGS: string[] = [
  // существующие страницы приложения (см. src/App.tsx) — никогда не выдавать как маркерную ссылку
  'product',
  'calculate',
  'process',
  'pricing-details',
  'contacts',
  'quiz',
  'support',
  'faq',
  'contact-support',
  'social',
  'privacy',
  'terms',
  'offer',
  'about',
  // служебные
  'admin',
  'api',
]

export const WORD_POOL: string[] = [
  // Транслит RU бизнес-лексики
  'kabinet', 'lk', 'moikabinet', 'litsenzii', 'dogovor', 'dogovory', 'schet', 'scheta',
  'zayavka', 'zayavki', 'zayavlenie', 'otchet', 'otchety', 'svodka', 'obzor',
  'dostup', 'portal', 'uchet', 'balans', 'operator', 'klient', 'partner', 'partnerka',
  'agent', 'agenty', 'manager', 'sotrudnik', 'otdel', 'filial', 'sklad', 'dostavka',
  'zakaz', 'zakazy', 'oplata', 'platezh', 'platezhi', 'tarif', 'tarify', 'uslugi',
  'statistika', 'arhiv', 'istoriya', 'operatsii', 'tranzaktsii', 'transaktsii',
  'kurs', 'kursy', 'obmen', 'konvertatsiya', 'kalkulyator', 'limit', 'limity',
  'komissiya', 'vyplaty', 'popolnenie', 'vyvod', 'integratsiya', 'referal', 'referaly',
  'bonus', 'bonusy', 'promokod', 'promokody', 'skidka', 'akciya', 'novosti', 'versii',
  'plany', 'uslovia', 'garantii', 'otzyvy', 'keysy', 'primery', 'instrukciya',
  'rukovodstvo', 'verifikatsiya', 'aktivatsiya', 'registraciya', 'vhod', 'nastroyki',
  'profil', 'akkaunt', 'dokumenty', 'spravka', 'pomosch', 'konsultaciya', 'soglasie',
  'podklyuchenie', 'servis', 'servisy', 'monitoring', 'upravlenie', 'nastroika',
  'dannye', 'analitika', 'resurs', 'resursy', 'moduli', 'funkcii', 'vozmozhnosti',
  'reshenie', 'reshenia', 'protsedura', 'shablon', 'shablony', 'forma', 'formy',
  'podderzhka', 'novichkam', 'start', 'bystryi-start',

  // Англ. SaaS/бизнес-термины
  'usage', 'dashboard', 'overview', 'insights', 'metrics', 'reports', 'billing',
  'invoices', 'invoice', 'payments', 'transactions', 'history', 'activity', 'wallet',
  'balance', 'funds', 'withdraw', 'deposit', 'transfer', 'exchange', 'rate', 'rates',
  'limits', 'fees', 'plan', 'plans', 'upgrade', 'subscription', 'subscribe', 'trial',
  'demo', 'sandbox', 'docs', 'guide', 'tutorial', 'resources', 'changelog', 'updates',
  'release', 'roadmap', 'health', 'uptime', 'api-docs', 'webhook', 'webhooks',
  'integration', 'integrations', 'connect', 'sync', 'settings', 'preferences',
  'profile', 'account', 'security', 'verify', 'verification', 'confirm',
  'confirmation', 'activate', 'session', 'access', 'login', 'signin', 'onboarding',
  'setup', 'config', 'team', 'members', 'roles', 'permissions', 'audit', 'logs',
  'export', 'import', 'backup', 'notifications', 'alerts', 'feedback', 'review',
  'reviews', 'testimonials', 'partners', 'affiliate', 'referral', 'rewards',
  'loyalty', 'gift', 'offer-details', 'deal', 'deals', 'case', 'cases', 'download',
  'files', 'media', 'gallery', 'showcase',
]
