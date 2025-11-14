import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Credits = () => {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(24);
  const rate = 4.9;

  const monthlyPayment = (amount * (rate / 100 / 12) * Math.pow(1 + rate / 100 / 12, term)) / (Math.pow(1 + rate / 100 / 12, term) - 1);

  const creditTypes = [
    {
      icon: 'Wallet',
      title: 'Наличными',
      rate: 'От 4.9%',
      amount: 'До 5 млн ₽',
      term: 'До 7 лет',
      features: ['Без справок и поручителей', 'Решение за 2 минуты', 'Деньги сразу на карту']
    },
    {
      icon: 'ShoppingCart',
      title: 'Потребительский',
      rate: 'От 5.5%',
      amount: 'До 3 млн ₽',
      term: 'До 5 лет',
      features: ['На любые цели', 'Досрочное погашение без комиссии', 'Онлайн оформление']
    },
    {
      icon: 'Car',
      title: 'Автокредит',
      rate: 'От 3.9%',
      amount: 'До 7 млн ₽',
      term: 'До 5 лет',
      features: ['Первый взнос от 0%', 'Страховка в подарок', 'Одобрение за 1 час']
    },
    {
      icon: 'Briefcase',
      title: 'Рефинансирование',
      rate: 'От 4.5%',
      amount: 'До 5 млн ₽',
      term: 'До 7 лет',
      features: ['Объедините все кредиты', 'Снизьте ежемесячный платёж', 'Без визита в банк']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Кредиты</h1>
            <p className="text-xl mb-8 text-white/90">
              Выгодные условия кредитования от 4.9% годовых. 
              Быстрое решение без справок и скрытых комиссий.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Калькулятор кредита</h2>
              
              <div className="space-y-6">
                <div>
                  <Label>Сумма кредита: {amount.toLocaleString('ru-RU')} ₽</Label>
                  <Slider
                    value={[amount]}
                    onValueChange={([value]) => setAmount(value)}
                    min={50000}
                    max={5000000}
                    step={50000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>50 000 ₽</span>
                    <span>5 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <Label>Срок кредита: {term} мес.</Label>
                  <Slider
                    value={[term]}
                    onValueChange={([value]) => setTerm(value)}
                    min={6}
                    max={84}
                    step={6}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>6 мес.</span>
                    <span>84 мес.</span>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ежемесячный платёж</p>
                      <p className="text-2xl font-bold text-accent">{monthlyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ставка</p>
                      <p className="text-2xl font-bold">{rate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Переплата</p>
                      <p className="text-2xl font-bold">{((monthlyPayment * term) - amount).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Оформить заявку
                </Button>
              </div>
            </Card>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Виды кредитов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditTypes.map((credit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={credit.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{credit.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ставка:</span>
                    <span className="font-semibold text-accent">{credit.rate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Сумма:</span>
                    <span className="font-semibold">{credit.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-semibold">{credit.term}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {credit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Credits;