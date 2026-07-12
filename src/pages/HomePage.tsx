import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../components/Quiz'
import './HomePage.css'

const RATES = [
  { pair: 'USDT/RUB', value: '91.42 ₽', delta: '+0.18%', up: true },
  { pair: 'USDT/USD', value: '1.00 $', delta: '+0.01%', up: true },
  { pair: 'USDT/EUR', value: '0.92 €', delta: '−0.03%', up: false },
]

const STATS = [
  { value: '$480M+', label: 'Оборот в USDT / мес' },
  { value: '37', label: 'Стран присутствия' },
  { value: '12 400+', label: 'Активных счетов' },
  { value: '0.4%', label: 'Комиссия от' },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Приём платежа', desc: 'Карта, СБП, банковский перевод или крипта напрямую.' },
  { num: '02', title: 'Конвертация', desc: 'Фиксируем курс, конвертируем в USDT. Спред от 0.4%.' },
  { num: '03', title: 'Вывод', desc: 'USDT на кошелёк TRC20/ERC20 или обратно в фиат — за 14 минут в среднем.' },
]

const TARIFFS = [
  {
    name: 'START',
    rate: '1.2%',
    range: 'До $10 000 / мес',
    features: ['Вывод TRC20 / ERC20', 'Поддержка в чате', 'Подключение за 1 день'],
    recommended: false,
    ctaText: 'Пройти квиз',
  },
  {
    name: 'BUSINESS',
    rate: '0.7%',
    range: '$10 000 – 250 000 / мес',
    features: ['Приоритетный вывод от 10 минут', 'Персональный менеджер', 'API для автоматизации'],
    recommended: true,
    ctaText: 'Пройти квиз',
  },
  {
    name: 'ENTERPRISE',
    rate: 'от 0.4%',
    range: 'Свыше $250 000 / мес',
    features: ['Индивидуальные условия', 'Выделенная инфраструктура', 'SLA на расчёты'],
    recommended: false,
    ctaText: 'Обсудить условия',
  },
]

const TRUST_ITEMS = [
  { code: 'SEG', title: 'Сегрегация средств', desc: 'Клиентские активы хранятся отдельно от операционных средств компании.' },
  { code: 'AML', title: 'Контроль AML/KYC', desc: 'Каждая операция проходит проверку по риск-моделям.' },
  { code: '24/7', title: 'Мониторинг 24/7', desc: 'Круглосуточный контроль транзакций и техническая поддержка.' },
  { code: 'SLA', title: 'Резервная инфраструктура', desc: 'Геораспределённые узлы и резерв на случай сбоев.' },
]

const FAQ = [
  { q: 'Как быстро проходит конвертация в USDT?', a: 'В среднем 10–15 минут после подтверждения платежа. Крупные объёмы могут занимать больше времени из-за дополнительной проверки.' },
  { q: 'Какая сеть используется для вывода?', a: 'Поддерживаем TRC20 и ERC20. TRC20 — минимальная комиссия сети, рекомендуем по умолчанию.' },
  { q: 'Что влияет на размер комиссии?', a: 'Ежемесячный объём платежей и способ вывода. Точную ставку показывает квиз выше.' },
  { q: 'Можно ли работать как физическое лицо?', a: 'Да. Лимиты и список документов отличаются от условий для бизнеса.' },
  { q: 'Что если курс изменится во время обработки?', a: 'Курс фиксируется в момент подтверждения платежа — дальнейшие колебания не влияют на сумму конвертации.' },
  { q: 'Как оставить заявку?', a: 'Пройдите короткий квиз выше — свяжемся в течение рабочего дня.' },
]

const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="home-page">
      {/* Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-live">
              <span className="live-dot" />
              <span className="hero-live-text">Инфраструктура платежей · Fiat → USDT</span>
            </div>

            <div>
              <div className="hero-strike">Банковский перевод — вчера.</div>
              <h1 className="hero-title">
                <span className="text-gradient">USDT</span> — сегодня.
              </h1>
            </div>

            <p className="hero-description">
              KURS принимает платежи и рассчитывается в USDT — для бизнеса и частных лиц. Без звонка менеджеру и обещаний «перезвоним завтра».
            </p>

            <div className="hero-buttons">
              <Link to="/#quiz" className="btn btn-primary btn-large">
                Оставить заявку →
              </Link>
              <a href="#process" className="btn btn-secondary btn-large">
                Как это работает
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="rates-panel bracket-frame">
              <div className="rates-panel-head">
                <span className="rates-panel-label">Курсы · Онлайн</span>
                <span className="live-dot" />
              </div>
              {RATES.map((rate) => (
                <div className="rates-row" key={rate.pair}>
                  <span className="rates-pair">{rate.pair}</span>
                  <div className="rates-value-wrap">
                    <span className="rates-value">{rate.value}</span>
                    <span className={`rates-delta ${rate.up ? 'up' : 'down'}`}>{rate.delta}</span>
                  </div>
                </div>
              ))}
              <div className="rates-footer">
                <div>
                  <div className="rates-footer-label">Расчёт в среднем</div>
                  <div className="rates-footer-value">14 мин</div>
                </div>
                <div className="rates-footer-item-right">
                  <div className="rates-footer-label">Аптайм</div>
                  <div className="rates-footer-value">99.98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-caption">Цифры</div>
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Процесс</div>
            <h2 className="section-title">Три шага между платежом и USDT.</h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div className="process-card" key={step.num}>
                <div className="process-num-bg">{step.num}</div>
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="section quiz-section">
        <div className="container">
          <div className="quiz-section-header">
            <div className="section-badge">Подбор тарифа</div>
            <h2 className="section-title">Узнайте комиссию за 5 шагов.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Честный расчёт. Без звонка менеджеру.</p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Tariffs */}
      <section id="tariffs" className="section tariffs-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Тарифы</div>
            <h2 className="section-title">Комиссия становится ниже, а не «зависит».</h2>
          </div>
          <div className="tariffs-grid">
            {TARIFFS.map((tier) => (
              <div key={tier.name} className={`tariff-card ${tier.recommended ? 'recommended' : ''}`}>
                {tier.recommended && <div className="tariff-badge">Рекомендуем</div>}
                <div className="tariff-name">{tier.name}</div>
                <div className={`tariff-rate ${tier.recommended ? 'accent' : ''}`}>{tier.rate}</div>
                <div className="tariff-range">{tier.range}</div>
                <div className="tariff-features">
                  {tier.features.map((feat) => (
                    <div className="tariff-feature" key={feat}>
                      <span className="tariff-feature-dot" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <a href="#quiz" className={`btn ${tier.recommended ? 'btn-primary' : 'btn-outline'} tariff-cta`}>
                  {tier.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="section trust-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Инфраструктура</div>
            <h2 className="section-title">Построено, чтобы не падать.</h2>
          </div>
          <div className="trust-grid">
            {TRUST_ITEMS.map((item) => (
              <div className="trust-item" key={item.code}>
                <div className="trust-code">{item.code}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2 className="cta-title">Хватит ждать перевод три дня.</h2>
          <div className="cta-actions">
            <a href="#quiz" className="btn btn-primary btn-large">Оставить заявку</a>
            <span className="cta-note">Ответ в течение рабочего дня</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Вопросы</div>
            <h2 className="section-title">Если коротко.</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((item, index) => (
              <div key={item.q} className="faq-row">
                <button className="faq-row-head" onClick={() => toggleFaq(index)}>
                  <div className="faq-row-left">
                    <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-q">{item.q}</span>
                  </div>
                  <div className={`faq-toggle ${openFaq === index ? 'open' : ''}`}>
                    <span className="faq-toggle-h" />
                    <span className="faq-toggle-v" />
                  </div>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
