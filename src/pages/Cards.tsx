import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Cards = () => {

  const cards = [
    {
      name: 'Премиум',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      cashback: 'До 10%',
      interest: '8% на остаток',
      price: 'Бесплатно',
      features: [
        'Кэшбэк до 10% в категориях на выбор',
        '8% годовых на остаток до 300 000 ₽',
        'Бесплатное обслуживание',
        'Снятие наличных без комиссии',
        'Apple Pay и Google Pay'
      ]
    },
    {
      name: 'Классик',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      cashback: 'До 5%',
      interest: '5% на остаток',
      price: 'Бесплатно',
      features: [
        'Кэшбэк до 5% на все покупки',
        '5% годовых на остаток',
        'Бесплатное обслуживание',
        'Снятие наличных в банкоматах банка',
        'Мобильный банк'
      ]
    },
    {
      name: 'Молодёжная',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      cashback: 'До 7%',
      interest: '6% на остаток',
      price: 'Бесплатно',
      features: [
        'Кэшбэк до 7% на развлечения',
        '6% годовых на остаток',
        'Для клиентов до 25 лет',
        'Скидки у партнёров до 30%',
        'Бесплатные переводы'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: '3D-Secure защита всех транзакций'
    },
    {
      icon: 'Zap',
      title: 'Моментальный выпуск',
      description: 'Оформление и доставка за 2 дня'
    },
    {
      icon: 'Globe',
      title: 'Без границ',
      description: 'Работает в 200+ странах мира'
    },
    {
      icon: 'Percent',
      title: 'Без комиссий',
      description: 'Переводы между своими счетами бесплатно'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Дебетовые карты</h1>
            <p className="text-xl mb-8 text-white/90">
              Выберите карту с выгодным кэшбэком и процентами на остаток. 
              Бесплатное обслуживание и доставка по всей России.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Оформить карту
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 p-6 flex flex-col justify-between text-white"
                  style={{ background: card.image }}
                >
                  <div>
                    <Icon name="CreditCard" size={40} className="mb-2" />
                    <p className="text-2xl font-bold">{card.name}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm opacity-80">Кэшбэк</p>
                      <p className="text-2xl font-bold">{card.cashback}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-80">{card.interest}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">Обслуживание</p>
                    <p className="text-2xl font-bold text-accent">{card.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Оформить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества наших карт</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cards;