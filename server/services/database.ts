// Простая реализация сохранения в базу данных
// В продакшене здесь должна быть реальная интеграция с БД (PostgreSQL, MongoDB и т.д.)

interface DatabaseRecord {
  type: 'quiz' | 'contact'
  data: any
  timestamp: string
}

// Временное хранилище в памяти (для демо)
// В реальном проекте используйте реальную БД
const memoryStorage: DatabaseRecord[] = []

export async function saveToDatabase(
  type: 'quiz' | 'contact',
  data: any
): Promise<void> {
  const record: DatabaseRecord = {
    type,
    data,
    timestamp: new Date().toISOString(),
  }

  memoryStorage.push(record)

  // Здесь можно добавить интеграцию с реальной БД:
  // - PostgreSQL через pg или Prisma
  // - MongoDB через mongoose
  // - AmoCRM через их API
  // - Bitrix24 через их API

  console.log(`Saved ${type} record to database:`, record)

  // Пример интеграции с AmoCRM (закомментировано):
  // await saveToAmoCRM(type, data)

  // Пример интеграции с Bitrix24 (закомментировано):
  // await saveToBitrix24(type, data)
}

// Функция для получения всех записей (для админки)
export function getAllRecords(): DatabaseRecord[] {
  return memoryStorage
}

// Функция для получения записей по промокоду
export function getRecordsByPromoCode(promoCode: string): DatabaseRecord[] {
  return memoryStorage.filter(
    (record) =>
      record.type === 'contact' && record.data.promoCode === promoCode
  )
}

// Пример интеграции с AmoCRM (требует установки @amocrm/amocrm-api)
/*
import AmoCRM from '@amocrm/amocrm-api'

async function saveToAmoCRM(type: string, data: any) {
  const amoCRM = new AmoCRM({
    domain: process.env.AMOCRM_DOMAIN,
    clientId: process.env.AMOCRM_CLIENT_ID,
    clientSecret: process.env.AMOCRM_CLIENT_SECRET,
    redirectUri: process.env.AMOCRM_REDIRECT_URI,
  })

  // Создание лида
  const lead = await amoCRM.leads.create({
    name: type === 'quiz' ? `Заявка из квиза: ${data.name}` : `Заявка с сайта: ${data.name}`,
    responsible_user_id: getUserIdByPromoCode(data.promoCode), // Автоназначение по промокоду
    custom_fields: [
      {
        id: 123456, // ID поля "Телефон"
        values: [{ value: data.phone || data.contact }],
      },
      // ... другие поля
    ],
  })

  return lead
}
*/

// Пример интеграции с Bitrix24 (требует установки bx24-api)
/*
import Bitrix24 from 'bx24-api'

async function saveToBitrix24(type: string, data: any) {
  const bitrix = new Bitrix24({
    domain: process.env.BITRIX24_DOMAIN,
    clientId: process.env.BITRIX24_CLIENT_ID,
    clientSecret: process.env.BITRIX24_CLIENT_SECRET,
  })

  // Создание лида
  const lead = await bitrix.crm.lead.add({
    TITLE: type === 'quiz' ? `Заявка из квиза: ${data.name}` : `Заявка с сайта: ${data.name}`,
    PHONE: [{ VALUE: data.phone || data.contact }],
    ASSIGNED_BY_ID: getUserIdByPromoCode(data.promoCode), // Автоназначение по промокоду
    // ... другие поля
  })

  return lead
}
*/

