import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import Header from '@/components/Header';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
  };

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Тверская, д. 10',
      metro: 'м. Тверская',
      hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
      phone: '+7 (495) 123-45-67'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, д. 50',
      metro: 'м. Невский проспект',
      hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
      phone: '+7 (812) 123-45-67'
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Ленина, д. 25',
      metro: 'м. Площадь 1905 года',
      hours: 'Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-17:00',
      phone: '+7 (343) 123-45-67'
    },
    {
      city: 'Новосибирск',
      address: 'Красный проспект, д. 35',
      metro: 'м. Красный проспект',
      hours: 'Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-17:00',
      phone: '+7 (383) 123-45-67'
    }
  ];

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '8 (800) 100-20-30',
      description: 'Бесплатно по России 24/7'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@premiumbank.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: 'MessageCircle',
      title: 'Онлайн-чат',
      value: 'Чат на сайте',
      description: 'Средний ответ: 2 минуты'
    },
    {
      icon: 'Globe',
      title: 'Социальные сети',
      value: '@premiumbank',
      description: 'Мы в Telegram, VK, Instagram'
    }
  ];

  const faqs = [
    {
      question: 'Как открыть счёт?',
      answer: 'Оставьте заявку на сайте, и мы свяжемся с вами в течение часа. Или посетите любое отделение с паспортом.'
    },
    {
      question: 'Какие документы нужны?',
      answer: 'Для физических лиц — только паспорт РФ. Для ИП и юридических лиц — уточните список у менеджера.'
    },
    {
      question: 'Работаете ли вы в выходные?',
      answer: 'Да, наши отделения работают в субботу и воскресенье с 10:00 до 18:00. Онлайн-банк доступен 24/7.'
    },
    {
      question: 'Как связаться со службой поддержки?',
      answer: 'Позвоните по номеру 8 (800) 100-20-30, напишите в онлайн-чат или отправьте письмо на info@premiumbank.ru.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl mb-8 text-white/90">
              Мы всегда на связи. Выберите удобный способ связи с нами — 
              звонок, email, онлайн-чат или визит в отделение.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                <p className="text-accent font-semibold mb-1">{contact.value}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить
                </Button>
              </form>
            </Card>

            <div>
              <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-bold mb-2 flex items-start gap-2">
                      <Icon name="HelpCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm pl-7">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Наши отделения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-accent">{office.city}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="MapPin" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{office.address}</p>
                      <p className="text-muted-foreground">{office.metro}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.hours}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-muted-foreground flex-shrink-0" />
                    <p className="font-semibold">{office.phone}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Построить маршрут
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Реквизиты банка</h2>
          <Card className="max-w-2xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Полное наименование</p>
                <p className="font-semibold">ПАО «ПремиумБанк»</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ИНН</p>
                <p className="font-semibold">7700000000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">БИК</p>
                <p className="font-semibold">044525000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">К/С</p>
                <p className="font-semibold">30101810000000000000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ОГРН</p>
                <p className="font-semibold">1027700000000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Генеральная лицензия</p>
                <p className="font-semibold">№ 1234 ЦБ РФ</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contacts;