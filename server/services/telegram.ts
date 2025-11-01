import TelegramBot from 'node-telegram-bot-api'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

let bot: TelegramBot | null = null

if (BOT_TOKEN && CHAT_ID) {
  bot = new TelegramBot(BOT_TOKEN)
}

interface QuizData {
  businessType: string
  businessTypeOther?: string
  paymentMethods: string[]
  turnover: string
  name: string
  contact: string
  email?: string
}

const businessTypeLabels: Record<string, string> = {
  tourism: '🛫 Туризм (туры, билеты, экскурсии)',
  consulting: '💡 Консультации и образование (услуги, вебинары, коучинг)',
  ecommerce: '🛒 Интернет-магазин (товары или цифровые продукты)',
  freelance: '👨‍💻 Фриланс / Услуги (расчеты с заказчиками)',
  exchange: '💱 Обменник валют (офлайн или онлайн)',
  other: '🏢 Другое',
}

const paymentMethodLabels: Record<string, string> = {
  bank_transfer: '💳 Банковский перевод (по реквизитам)',
  payment_systems: '🧾 Платежные системы (Юмани, Киви и т.д.)',
  cards: '🌐 Карты (онлайн-эквайринг)',
  sbp: '📱 СБП (Система быстрых платежей)',
  cash: '💰 Наличные',
  crypto: '🔄 Криптовалюты (USDT, BTC и др.)',
  difficulties: '❌ Испытываю трудности с приемом платежей из России',
}

const turnoverLabels: Record<string, string> = {
  '0-500k': 'До 500 тыс. рублей',
  '500k-2m': '500 тыс. – 2 млн рублей',
  '2m-5m': '2 – 5 млн рублей',
  '5m+': 'Более 5 млн рублей',
}

export async function sendQuizNotification(data: QuizData): Promise<void> {
  if (!bot || !CHAT_ID) {
    console.log('Telegram bot not configured. Skipping notification.')
    console.log('Quiz data:', JSON.stringify(data, null, 2))
    return
  }

  const businessType =
    data.businessType === 'other' && data.businessTypeOther
      ? `🏢 Другое (${data.businessTypeOther})`
      : businessTypeLabels[data.businessType] || data.businessType

  const paymentMethods = data.paymentMethods
    .map((method) => paymentMethodLabels[method] || method)
    .join('\n')

  const turnover = turnoverLabels[data.turnover] || data.turnover

  const hasDifficulties = data.paymentMethods.includes('difficulties')

  let message = `✅ *Новая заявка из квиза!*\n\n`
  message += `---\n\n`
  message += `📊 *Сфера:* ${businessType}\n\n`
  message += `💳 *Принимает платежи:*\n${paymentMethods}\n\n`
  message += `📈 *Оборот:* ${turnover}\n\n`
  message += `👤 *Контакт:* ${data.name}\n`
  message += `📞 ${data.contact}`
  if (data.email) {
    message += `\n📧 ${data.email}`
  }
  message += `\n\n---\n\n`

  if (hasDifficulties) {
    message += `💡 *Запрос на решение проблемы с платежами из РФ.*`
  }

  try {
    await bot.sendMessage(CHAT_ID, message, { parse_mode: 'Markdown' })
  } catch (error) {
    console.error('Error sending Telegram notification:', error)
    throw error
  }
}

interface ContactData {
  name: string
  phone: string
  promoCode?: string
  sourcePage?: string
  utmParams?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
  }
}

export async function sendContactNotification(data: ContactData): Promise<void> {
  if (!bot || !CHAT_ID) {
    console.log('Telegram bot not configured. Skipping notification.')
    console.log('Contact data:', JSON.stringify(data, null, 2))
    return
  }

  let message = `📞 *Новая заявка с сайта!*\n\n`
  message += `---\n\n`
  message += `👤 *Имя:* ${data.name}\n`
  message += `📞 *Телефон:* ${data.phone}\n`

  if (data.promoCode) {
    message += `🎫 *Промокод:* ${data.promoCode}\n`
    // Здесь можно добавить логику получения имени агента по промокоду
    // const agentName = await getAgentByPromoCode(data.promoCode)
    // if (agentName) {
    //   message += `👥 *Агент:* ${agentName}\n`
    // }
  }

  if (data.sourcePage) {
    message += `📍 *Страница:* ${data.sourcePage}\n`
  }

  if (data.utmParams) {
    const utmParts: string[] = []
    if (data.utmParams.utm_source) utmParts.push(`source: ${data.utmParams.utm_source}`)
    if (data.utmParams.utm_medium) utmParts.push(`medium: ${data.utmParams.utm_medium}`)
    if (data.utmParams.utm_campaign) utmParts.push(`campaign: ${data.utmParams.utm_campaign}`)
    if (utmParts.length > 0) {
      message += `🔗 *UTM:* ${utmParts.join(', ')}\n`
    }
  }

  message += `\n---\n\n`
  message += `⚡ *Срочно перезвонить!*`

  try {
    await bot.sendMessage(CHAT_ID, message, { parse_mode: 'Markdown' })
  } catch (error) {
    console.error('Error sending Telegram notification:', error)
    throw error
  }
}

