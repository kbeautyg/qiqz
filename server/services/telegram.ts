import TelegramBot from 'node-telegram-bot-api'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

let bot: TelegramBot | null = null

if (BOT_TOKEN && CHAT_ID) {
  bot = new TelegramBot(BOT_TOKEN)
}

interface QuizData {
  role?: string
  roleLabel?: string
  volume?: string
  volumeLabel?: string
  methods?: string[]
  methodsLabel?: string
  payout?: string
  payoutLabel?: string
  urgency?: string
  urgencyLabel?: string
  tariffName?: string
  tariffRate?: string
  name: string
  contact: string
  company?: string
  agreeToTerms?: boolean
}

export async function sendQuizNotification(data: QuizData): Promise<void> {
  if (!bot || !CHAT_ID) {
    console.log('Telegram bot not configured. Skipping notification.')
    console.log('Quiz data:', JSON.stringify(data, null, 2))
    return
  }

  let message = `✅ *Новая заявка из квиза!*\n\n`
  message += `---\n\n`
  message += `👥 *Кто:* ${data.roleLabel || data.role || '—'}\n\n`
  message += `📈 *Объём:* ${data.volumeLabel || data.volume || '—'}\n\n`
  message += `💳 *Приём платежей:* ${data.methodsLabel || (data.methods || []).join(', ') || '—'}\n\n`
  message += `🔁 *Вывод:* ${data.payoutLabel || data.payout || '—'}\n\n`
  message += `⏱ *Сроки подключения:* ${data.urgencyLabel || data.urgency || '—'}\n\n`
  message += `🏷 *Тариф:* ${data.tariffName || '—'} (${data.tariffRate || '—'})\n\n`
  message += `👤 *Контакт:* ${data.name}\n`
  message += `📞 ${data.contact}`
  if (data.company) {
    message += `\n🏢 ${data.company}`
  }
  message += `\n\n---\n\n`
  message += `📄 *Согласие с офертой:* ${data.agreeToTerms ? 'да' : 'нет'}`

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

