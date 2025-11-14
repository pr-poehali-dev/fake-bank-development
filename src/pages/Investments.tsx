import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Investments = () => {
  const products = [
    {
      icon: 'TrendingUp',
      title: 'ИИС',
      subtitle: 'Индивидуальный инвестиционный счёт',
      return: 'До 15% годовых',
      risk: 'Средний',
      features: [
        'Налоговый вычет до 52 000 ₽ в год',
        'Доступ к бирже',
        'Низкие комиссии',
        'Помощь инвестиционного советника'
      ]
    },
    {
      icon: 'LineChart',
      title: 'Брокерский счёт',
      subtitle: 'Торговля на бирже',
      return: 'До 20% годовых',
      risk: 'Высокий',
      features: [
        'Акции российских и иностранных компаний',
        'Облигации и фонды',
        'Вывод средств в любой момент',
        'Мобильное приложение для торговли'
      ]
    },
    {
      icon: 'Shield',
      title: 'Структурные продукты',
      subtitle: 'Защита капитала',
      return: 'До 25% годовых',
      risk: 'Низкий',
      features: [
        '100% защита вложений',
        'Доход зависит от индекса',
        'Срок от 1 года',
        'Минимальная сумма от 50 000 ₽'
      ]
    },
    {
      icon: 'Wallet',
      title: 'ПИФы',
      subtitle: 'Паевые инвестиционные фонды',
      return: 'До 18% годовых',
      risk: 'Средний',
      features: [
        'Управление профессионалами',
        'Диверсификация рисков',
        'От 1 000 ₽',
        'Погашение паев без комиссии'
      ]
    }
  ];

  const assets = [
    { name: 'Акции', allocation: 40, color: 'bg-blue-500' },
    { name: 'Облигации', allocation: 30, color: 'bg-green-500' },
    { name: 'Золото', allocation: 15, color: 'bg-yellow-500' },
    { name: 'Валюта', allocation: 15, color: 'bg-purple-500' }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опытные консультанты',
      description: 'Индивидуальная стратегия для каждого клиента'
    },
    {
      icon: 'Lock',
      title: 'Надёжность',
      description: 'Лицензия профессионального участника рынка'
    },
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'Откройте счёт за 5 минут онлайн'
    },
    {
      icon: 'DollarSign',
      title: 'Низкие комиссии',
      description: 'Одни из самых выгодных тарифов на рынке'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Инвестиции</h1>
            <p className="text-xl mb-8 text-white/90">
              Приумножайте капитал с помощью профессиональных инвестиционных инструментов. 
              Доходность до 25% годовых с защитой от рисков.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Начать инвестировать
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Инвестиционные продукты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={product.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Доходность</p>
                    <p className="text-lg font-bold text-accent">{product.return}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Риск</p>
                    <p className="text-lg font-bold">{product.risk}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full">Подробнее</Button>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Рекомендуемое распределение активов</h2>
              <p className="text-center text-muted-foreground mb-8">
                Сбалансированный портфель для умеренного риска
              </p>
              
              <div className="space-y-4 mb-8">
                {assets.map((asset, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{asset.name}</span>
                      <span className="text-muted-foreground">{asset.allocation}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`${asset.color} h-3 rounded-full transition-all`}
                        style={{ width: `${asset.allocation}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ожидаемая доходность</p>
                    <p className="text-2xl font-bold text-accent">12-15%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Горизонт инвестирования</p>
                    <p className="text-2xl font-bold">3-5 лет</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Минимальная сумма</p>
                    <p className="text-2xl font-bold">10 000 ₽</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-muted py-16 -mx-4 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Почему мы</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;