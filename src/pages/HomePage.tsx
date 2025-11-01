import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">
              Платежный сервис для бизнеса с конвертацией в USDT
            </h1>
            <p className="hero-subtitle">
              Мы сервис с готовыми инструментами для любого бизнеса, который продает товары или услуги и хочет принимать оплаты в рублях с последующей конвертацией в криптовалюту USD₮ (Tether).
            </p>
            <div className="hero-actions">
              <Link to="/quiz" className="button primary">
                Рассчитать комиссию
              </Link>
              <a href="#consultation" className="button secondary">
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Для кого наш сервис */}
      <section className="for-whom">
        <div className="container">
          <h2 className="section-title">Для кого наш сервис</h2>
          <div className="cards-grid">
            <div className="card feature-card animate-fade-in-up delay-100">
              <div className="feature-icon">🛫</div>
              <h3>Туристические компании</h3>
              <p>Продажа туров, билетов, экскурсий</p>
            </div>
            <div className="card feature-card animate-fade-in-up delay-200">
              <div className="feature-icon">💡</div>
              <h3>Консультанты и эксперты</h3>
              <p>Оплата услуг, вебинаров, обучений</p>
            </div>
            <div className="card feature-card animate-fade-in-up delay-300">
              <div className="feature-icon">👨‍💻</div>
              <h3>Фрилансеры</h3>
              <p>Расчеты с заказчиками из России</p>
            </div>
            <div className="card feature-card animate-fade-in-up delay-400">
              <div className="feature-icon">🛒</div>
              <h3>Интернет-магазины</h3>
              <p>Продажа физических и цифровых товаров</p>
            </div>
            <div className="card feature-card animate-fade-in-up delay-100">
              <div className="feature-icon">💱</div>
              <h3>Обменники валют</h3>
              <p>Офлайн и онлайн обменные операции</p>
            </div>
            <div className="card feature-card animate-fade-in-up delay-200">
              <div className="feature-icon">🌍</div>
              <h3>Любой бизнес</h3>
              <p>Которому нужен простой и безопасный прием рублей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Универсальный инструмент */}
      <section className="universal-tool">
        <div className="container">
          <h2 className="section-title">Ваш универсальный инструмент для приема платежей</h2>
          <p className="section-subtitle">Принимайте оплату где угодно и как угодно</p>
          
          <div className="tool-methods">
            <div className="card tool-card">
              <div className="tool-icon">📱</div>
              <h3>Через мобильное приложение или личный кабинет</h3>
              <ul className="tool-list">
                <li>Создавайте счета и платежные ссылки за 1 минуту</li>
                <li>Генерируйте QR-коды для мгновенной оплаты</li>
                <li>Отправляйте клиентам прямо в Telegram, WhatsApp или по email</li>
              </ul>
            </div>
            
            <div className="card tool-card">
              <div className="tool-icon">🛍️</div>
              <h3>При личной встрече</h3>
              <ul className="tool-list">
                <li>Покажите QR-код с экрана телефона</li>
                <li>Клиент сканирует его своим банковским приложением</li>
                <li>Оплата проходит за 10 секунд</li>
              </ul>
            </div>
            
            <div className="card tool-card">
              <div className="tool-icon">💻</div>
              <h3>Удаленно</h3>
              <ul className="tool-list">
                <li>Отправьте платежную ссылку любым удобным способом</li>
                <li>Клиент оплачивает с карты или через СБП</li>
                <li>Вы видите статус оплаты в реальном времени</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Личный кабинет */}
      <section className="personal-cabinet">
        <div className="container">
          <h2 className="section-title">Личный кабинет — полный контроль над бизнес-операциями</h2>
          
          <div className="cabinet-features">
            <div className="card cabinet-card">
              <div className="cabinet-icon">👥</div>
              <h3>Управление клиентами и командой</h3>
              <ul className="cabinet-list">
                <li>База клиентов с историей всех платежей</li>
                <li>Настройка прав доступа для менеджеров</li>
                <li>Назначение ответственных за клиентов</li>
                <li>Автоматические уведомления и напоминания</li>
              </ul>
            </div>
            
            <div className="card cabinet-card">
              <div className="cabinet-icon">💳</div>
              <h3>Процессинг платежей</h3>
              <ul className="cabinet-list">
                <li>Прием рублей через СБП, карты (Visa/Mir/Mastercard)</li>
                <li>Детальная аналитика по всем операциям</li>
                <li>Статусы платежей в реальном времени</li>
                <li>Автоматическое формирование отчетов</li>
              </ul>
            </div>
            
            <div className="card cabinet-card">
              <div className="cabinet-icon">🌍</div>
              <h3>Удобный инструмент для обмена валют</h3>
              <ul className="cabinet-list">
                <li>Мгновенная фиксация курса в момент операции с клиентом</li>
                <li>Показ в местной валюте — рубль/бат, рубль/донг, рубль/любая другая валюта</li>
                <li>Прозрачность для клиента — он видит точную сумму в привычной ему валюте</li>
                <li>Гибкие настройки — работа с любыми валютными парами</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Как работает конвертация */}
      <section className="conversion">
        <div className="container">
          <h2 className="section-title">Как работает конвертация</h2>
          
          <div className="conversion-content">
            <div className="conversion-steps">
              <div className="conversion-step">
                <div className="step-number">1</div>
                <p>Вы принимаете платежи от клиентов через наш сервис</p>
              </div>
              <div className="conversion-step">
                <div className="step-number">2</div>
                <p>Рубли поступают на ваш счет в личном кабинете</p>
              </div>
              <div className="conversion-step">
                <div className="step-number">3</div>
                <p>В конце дня мы фиксируем курс для конвертации по <a href="https://grinex.io/" target="_blank" rel="noopener noreferrer">grinex.io</a></p>
              </div>
              <div className="conversion-step">
                <div className="step-number">4</div>
                <p>Вы получаете USDT на ваш криптокошелек</p>
              </div>
            </div>
            
            <div className="card conversion-formula">
              <h3>Курсообразование</h3>
              <div className="formula-content">
                <p className="formula">Биржевой курс <a href="https://grinex.io/" target="_blank" rel="noopener noreferrer">grinex.io</a> + наша комиссия от 3% до 5%</p>
                <ul className="formula-details">
                  <li>Комиссия зависит от оборота и условий работы</li>
                  <li>Курс фиксируется на момент конвертации</li>
                  <li>Прозрачный расчет без скрытых комиссий</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Примеры расчетов */}
      <section className="examples">
        <div className="container">
          <h2 className="section-title">Примеры работы с локальными валютами</h2>
          
          <div className="examples-grid">
            <div className="card example-card">
              <div className="example-badge">Пример 1</div>
              <h3>Продажа тура в Таиланде</h3>
              <div className="example-calculation">
                <div className="calc-row">
                  <span>Стоимость тура:</span>
                  <strong>50 000 бат</strong>
                </div>
                <div className="calc-row">
                  <span>Текущий курс рубль/бат:</span>
                  <strong>1.85</strong>
                </div>
                <div className="calc-row highlight">
                  <span>Клиент платит:</span>
                  <strong>92 500 рублей</strong>
                </div>
                <p className="example-note">Курс фиксируется в момент оплаты</p>
              </div>
            </div>
            
            <div className="card example-card">
              <div className="example-badge success">Пример 2</div>
              <h3>Конвертация выручки с комиссией 3%</h3>
              <div className="example-calculation">
                <div className="calc-row">
                  <span>За день через сервис:</span>
                  <strong>300 000 рублей</strong>
                </div>
                <div className="calc-row">
                  <span>Курс grinex.io:</span>
                  <strong>90 руб/USDT</strong>
                </div>
                <div className="calc-row">
                  <span>Наш курс (90 + 3%):</span>
                  <strong>92.7 руб/USDT</strong>
                </div>
                <div className="calc-row highlight">
                  <span>Вы получаете:</span>
                  <strong>3 236.25 USDT</strong>
                </div>
              </div>
            </div>
            
            <div className="card example-card">
              <div className="example-badge">Пример 3</div>
              <h3>Конвертация выручки с комиссией 5%</h3>
              <div className="example-calculation">
                <div className="calc-row">
                  <span>За день через сервис:</span>
                  <strong>100 000 рублей</strong>
                </div>
                <div className="calc-row">
                  <span>Курс grinex.io:</span>
                  <strong>95 руб/USDT</strong>
                </div>
                <div className="calc-row">
                  <span>Наш курс (95 + 5%):</span>
                  <strong>99.75 руб/USDT</strong>
                </div>
                <div className="calc-row highlight">
                  <span>Вы получаете:</span>
                  <strong>1 002.51 USDT</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Преимущества для вашего бизнеса</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Все в одном месте — прием платежей, работа с клиентами, конвертация</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Работайте из любой точки мира — все операции удаленно</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Любой сценарий оплаты — онлайн, в чате, при встрече</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Поддержка локальных валют — показывайте цены в валюте страны</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Гибкая комиссия — от 3% до 5% в зависимости от оборота</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Проверенная биржа — работаем с курсом grinex.io</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Мгновенная фиксация курса — защита от колебаний валют</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Масштабируемость — от ИП до компании с отделом продаж</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы автоматизировать прием платежей?</h2>
            <p>Подключите сервис и получите готовое платежное решение для вашего бизнеса!</p>
            <Link to="/quiz" className="button primary large">
              Рассчитать комиссию сейчас
            </Link>
            <p className="cta-note">P.S. Обсуждаем индивидуальные условия комиссии в зависимости от ваших объемов!</p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="consultation">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default HomePage
