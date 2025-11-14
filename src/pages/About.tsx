import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const About = () => {
  const stats = [
    { value: '15+', label: 'Лет на рынке' },
    { value: '5М+', label: 'Клиентов' },
    { value: '500+', label: 'Отделений' },
    { value: '10К+', label: 'Сотрудников' }
  ];

  const awards = [
    {
      icon: 'Award',
      title: 'Банк года 2024',
      organization: 'Forbes'
    },
    {
      icon: 'Star',
      title: 'Лучший интернет-банк',
      organization: 'Банки.ру'
    },
    {
      icon: 'Trophy',
      title: 'Народный рейтинг',
      organization: 'Лидер отрасли'
    },
    {
      icon: 'Medal',
      title: 'Премия за инновации',
      organization: 'ЦБ РФ'
    }
  ];

  const values = [
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Мы создаём продукты, которые решают реальные задачи наших клиентов'
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Безопасность средств и данных клиентов — наш главный приоритет'
    },
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Внедряем передовые технологии для удобства клиентов'
    },
    {
      icon: 'Heart',
      title: 'Социальная ответственность',
      description: 'Поддерживаем образование, культуру и благотворительность'
    }
  ];

  const team = [
    {
      name: 'Александр Иванов',
      position: 'Председатель правления',
      description: '25 лет в банковской сфере'
    },
    {
      name: 'Елена Петрова',
      position: 'Директор по развитию',
      description: 'MBA, эксперт в финтех'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Технический директор',
      description: 'Лидер цифровой трансформации'
    },
    {
      name: 'Ольга Смирнова',
      position: 'Директор по клиентскому сервису',
      description: 'Эксперт в области качества обслуживания'
    }
  ];

  const timeline = [
    { year: '2009', event: 'Основание банка' },
    { year: '2012', event: 'Запуск мобильного приложения' },
    { year: '2016', event: '1 миллион клиентов' },
    { year: '2019', event: 'Лучший интернет-банк года' },
    { year: '2024', event: '5 миллионов клиентов' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">О банке</h1>
            <p className="text-xl mb-8 text-white/90">
              ПремиумБанк — современный финансовый институт с 15-летней историей. 
              Мы помогаем миллионам людей достигать финансовых целей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Наша миссия</h2>
            <Card className="p-8 text-center">
              <p className="text-xl text-foreground leading-relaxed">
                Мы создаём простые и удобные финансовые решения, которые помогают людям 
                достигать целей, развивать бизнес и уверенно смотреть в будущее. 
                Наша задача — сделать банковские услуги доступными, понятными и выгодными для каждого.
              </p>
            </Card>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-muted py-16 -mx-4 px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Награды и достижения</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {awards.map((award, index) => (
                  <Card key={index} className="p-6 text-center bg-white">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={award.icon} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Руководство</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-accent mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">История развития</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20" />
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-4">
                      <p className="text-2xl font-bold text-accent mb-2">{item.year}</p>
                      <p className="text-foreground">{item.event}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-accent absolute left-1/2 transform -translate-x-1/2" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Присоединяйтесь к нам</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Станьте частью команды, которая меняет банковскую индустрию
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Вакансии
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;