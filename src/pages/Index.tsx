import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [rates, setRates] = useState({
    USD: { buy: 92.50, sell: 93.20 },
    EUR: { buy: 99.80, sell: 100.50 },
    GBP: { buy: 116.30, sell: 117.10 }
  });

  const handleOpenAccount = () => {
    alert('Спасибо за интерес! Форма открытия счёта в разработке.');
  };

  const handleLogin = () => {
    alert('Форма входа в разработке.');
  };

  const handleNavClick = (section: string) => {
    alert(`Раздел "${section}" в разработке.`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prev => ({
        USD: {
          buy: +(prev.USD.buy + (Math.random() - 0.5) * 0.2).toFixed(2),
          sell: +(prev.USD.sell + (Math.random() - 0.5) * 0.2).toFixed(2)
        },
        EUR: {
          buy: +(prev.EUR.buy + (Math.random() - 0.5) * 0.3).toFixed(2),
          sell: +(prev.EUR.sell + (Math.random() - 0.5) * 0.3).toFixed(2)
        },
        GBP: {
          buy: +(prev.GBP.buy + (Math.random() - 0.5) * 0.4).toFixed(2),
          sell: +(prev.GBP.sell + (Math.random() - 0.5) * 0.4).toFixed(2)
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const navigation = [
    { name: 'Карты', icon: 'CreditCard' },
    { name: 'Кредиты', icon: 'Wallet' },
    { name: 'Вклады', icon: 'PiggyBank' },
    { name: 'Ипотека', icon: 'Home' },
    { name: 'Инвестиции', icon: 'TrendingUp' },
    { name: 'О банке', icon: 'Building2' },
    { name: 'Контакты', icon: 'Phone' }
  ];

  const products = [
    {
      icon: 'CreditCard',
      title: 'Дебетовые карты',
      description: 'Кэшбэк до 10%, бесплатное обслуживание',
      rate: 'До 8% на остаток'
    },
    {
      icon: 'Wallet',
      title: 'Кредиты наличными',
      description: 'Решение за 2 минуты онлайн',
      rate: 'От 4.9% годовых'
    },
    {
      icon: 'PiggyBank',
      title: 'Накопительные счета',
      description: 'Пополняйте и снимайте без ограничений',
      rate: 'До 9.5% годовых'
    },
    {
      icon: 'Home',
      title: 'Ипотека',
      description: 'Одобрение за 1 день',
      rate: 'От 5.8% годовых'
    }
  ];

  const advantages = [
    { icon: 'Shield', text: 'Защита данных по стандартам ЦБ РФ' },
    { icon: 'Clock', text: 'Круглосуточная поддержка 24/7' },
    { icon: 'Smartphone', text: 'Все операции в мобильном приложении' },
    { icon: 'Award', text: 'Лучший банк года по версии Forbes' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ПремиумБанк</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleLogin}>Войти</Button>
              <Button onClick={handleOpenAccount}>Открыть счёт</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary via-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Банк для вашего будущего
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in">
              Современные финансовые решения для бизнеса и частных лиц. 
              Откройте счёт онлайн за 5 минут без визита в отделение.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={handleOpenAccount}>
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => alert('Подробнее о банке в разработке.')}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Курсы валют</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="RefreshCw" size={16} className="animate-spin" />
              <span>Обновляется в реальном времени</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(rates).map(([currency, { buy, sell }]) => (
              <Card key={currency} className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">{currency}</span>
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Покупка:</span>
                    <span className="font-semibold text-foreground">{buy.toFixed(2)} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Продажа:</span>
                    <span className="font-semibold text-foreground">{sell.toFixed(2)} ₽</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Наши продукты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите финансовое решение, которое подходит именно вам
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow bg-white group hover:border-accent cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon name={product.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                <div className="text-accent font-semibold text-lg">{product.rate}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-accent" />
                </div>
                <p className="text-foreground font-medium">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Откройте счёт в ПремиумБанк за 5 минут и получите доступ ко всем возможностям
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={handleOpenAccount}>
            Открыть счёт онлайн
          </Button>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={24} />
                <span className="text-xl font-bold">ПремиумБанк</span>
              </div>
              <p className="text-white/70 text-sm">
                Генеральная лицензия ЦБ РФ № 1234
              </p>
            </div>
            
            {[
              {
                title: 'Продукты',
                items: ['Карты', 'Кредиты', 'Вклады', 'Ипотека']
              },
              {
                title: 'Компания',
                items: ['О банке', 'Карьера', 'Новости', 'Пресс-центр']
              },
              {
                title: 'Поддержка',
                items: ['Контакты', 'Отделения', 'FAQ', 'Безопасность']
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 ПремиумБанк. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Icon name="Facebook" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;