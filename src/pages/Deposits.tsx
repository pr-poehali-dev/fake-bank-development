import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Deposits = () => {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(12);
  const rate = 9.5;

  const income = (amount * rate * term / 100 / 12);

  const deposits = [
    {
      name: 'Накопительный',
      rate: '9.5%',
      term: 'От 3 месяцев',
      minAmount: '1 000 ₽',
      features: [
        'Пополнение в любой момент',
        'Частичное снятие без потери процентов',
        'Ежемесячная капитализация',
        'Онлайн управление'
      ],
      icon: 'PiggyBank'
    },
    {
      name: 'Максимальный доход',
      rate: '10.5%',
      term: 'От 6 месяцев',
      minAmount: '100 000 ₽',
      features: [
        'Максимальная ставка на рынке',
        'Без пополнений и снятий',
        'Выплата в конце срока',
        'Автопролонгация'
      ],
      icon: 'TrendingUp'
    },
    {
      name: 'Пенсионный',
      rate: '11%',
      term: 'От 3 месяцев',
      minAmount: '1 000 ₽',
      features: [
        'Повышенная ставка для пенсионеров',
        'Ежемесячные выплаты процентов',
        'Возможность пополнения',
        'Льготные условия'
      ],
      icon: 'Heart'
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Страхование вкладов',
      description: 'Защита до 1.4 млн ₽ по программе АСВ'
    },
    {
      icon: 'Percent',
      title: 'Высокие ставки',
      description: 'До 11% годовых на остаток'
    },
    {
      icon: 'Clock',
      title: 'Без комиссий',
      description: 'Открытие и обслуживание бесплатно'
    },
    {
      icon: 'Smartphone',
      title: 'Онлайн управление',
      description: 'Контроль вклада в мобильном приложении'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Вклады</h1>
            <p className="text-xl mb-8 text-white/90">
              Накопительные счета и вклады до 11% годовых. 
              Застрахованы государством, без скрытых комиссий.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Калькулятор вклада</h2>
              
              <div className="space-y-6">
                <div>
                  <Label>Сумма вклада: {amount.toLocaleString('ru-RU')} ₽</Label>
                  <Slider
                    value={[amount]}
                    onValueChange={([value]) => setAmount(value)}
                    min={10000}
                    max={5000000}
                    step={10000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>10 000 ₽</span>
                    <span>5 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <Label>Срок вклада: {term} мес.</Label>
                  <Slider
                    value={[term]}
                    onValueChange={([value]) => setTerm(value)}
                    min={3}
                    max={36}
                    step={3}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>3 мес.</span>
                    <span>36 мес.</span>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Доход</p>
                      <p className="text-2xl font-bold text-accent">{income.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ставка</p>
                      <p className="text-2xl font-bold">{rate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Итого</p>
                      <p className="text-2xl font-bold">{(amount + income).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Открыть вклад
                </Button>
              </div>
            </Card>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Наши вклады</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {deposits.map((deposit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={deposit.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{deposit.name}</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-accent mb-2">{deposit.rate}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Срок: {deposit.term}</p>
                    <p>Минимум: {deposit.minAmount}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {deposit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Открыть</Button>
              </Card>
            ))}
          </div>

          <div className="bg-muted py-16 -mx-4 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Преимущества</h2>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deposits;