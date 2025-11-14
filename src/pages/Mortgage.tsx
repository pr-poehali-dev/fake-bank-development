import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Mortgage = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [initialPayment, setInitialPayment] = useState(1000000);
  const [term, setTerm] = useState(180);
  const rate = 5.8;

  const loanAmount = propertyPrice - initialPayment;
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);

  const programs = [
    {
      icon: 'Home',
      title: 'Готовое жильё',
      rate: 'От 5.8%',
      payment: 'От 15%',
      features: ['Вторичный рынок', 'Срок до 30 лет', 'Сумма до 30 млн ₽', 'Одобрение за 1 день']
    },
    {
      icon: 'Building',
      title: 'Новостройка',
      rate: 'От 4.9%',
      payment: 'От 10%',
      features: ['Аккредитованные ЖК', 'Господдержка', 'Электронная регистрация', 'Ипотечные каникулы']
    },
    {
      icon: 'Gift',
      title: 'Семейная ипотека',
      rate: 'От 6%',
      payment: 'От 15%',
      features: ['Для семей с детьми', 'До 12 млн ₽', 'Государственная поддержка', 'Льготные условия']
    },
    {
      icon: 'Building2',
      title: 'Загородная недвижимость',
      rate: 'От 6.5%',
      payment: 'От 20%',
      features: ['Дома и таунхаусы', 'Участки с домами', 'До 30 лет', 'Без комиссий']
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Заявка онлайн',
      description: 'Заполните анкету за 5 минут'
    },
    {
      number: '2',
      title: 'Одобрение',
      description: 'Получите решение за 1 день'
    },
    {
      number: '3',
      title: 'Выбор жилья',
      description: 'Найдите подходящую квартиру'
    },
    {
      number: '4',
      title: 'Сделка',
      description: 'Оформим документы за вас'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Ипотека</h1>
            <p className="text-xl mb-8 text-white/90">
              Выгодные ставки от 4.9% годовых. Одобрение за 1 день, 
              первый взнос от 10%. Без скрытых комиссий.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Ипотечный калькулятор</h2>
              
              <div className="space-y-6">
                <div>
                  <Label>Стоимость недвижимости: {propertyPrice.toLocaleString('ru-RU')} ₽</Label>
                  <Slider
                    value={[propertyPrice]}
                    onValueChange={([value]) => {
                      setPropertyPrice(value);
                      if (initialPayment > value * 0.9) {
                        setInitialPayment(Math.floor(value * 0.2));
                      }
                    }}
                    min={1000000}
                    max={30000000}
                    step={100000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>1 млн ₽</span>
                    <span>30 млн ₽</span>
                  </div>
                </div>

                <div>
                  <Label>Первоначальный взнос: {initialPayment.toLocaleString('ru-RU')} ₽ ({((initialPayment / propertyPrice) * 100).toFixed(0)}%)</Label>
                  <Slider
                    value={[initialPayment]}
                    onValueChange={([value]) => setInitialPayment(value)}
                    min={Math.floor(propertyPrice * 0.1)}
                    max={Math.floor(propertyPrice * 0.9)}
                    step={50000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>{((propertyPrice * 0.1) / 1000000).toFixed(1)} млн ₽</span>
                    <span>{((propertyPrice * 0.9) / 1000000).toFixed(1)} млн ₽</span>
                  </div>
                </div>

                <div>
                  <Label>Срок кредита: {(term / 12).toFixed(0)} лет</Label>
                  <Slider
                    value={[term]}
                    onValueChange={([value]) => setTerm(value)}
                    min={12}
                    max={360}
                    step={12}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>1 год</span>
                    <span>30 лет</span>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ежемесячный платёж</p>
                      <p className="text-2xl font-bold text-accent">{monthlyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Сумма кредита</p>
                      <p className="text-2xl font-bold">{loanAmount.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ставка</p>
                      <p className="text-2xl font-bold">{rate}%</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Подать заявку
                </Button>
              </div>
            </Card>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Программы ипотеки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={program.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ставка:</span>
                    <span className="font-semibold text-accent">{program.rate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Взнос:</span>
                    <span className="font-semibold">{program.payment}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, idx) => (
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

          <div className="bg-muted py-16 -mx-4 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Как получить ипотеку</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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

export default Mortgage;