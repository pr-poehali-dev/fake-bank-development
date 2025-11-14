import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import LoginDialog from '@/components/LoginDialog';
import OpenAccountDialog from '@/components/OpenAccountDialog';

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Карты', icon: 'CreditCard', path: '/cards' },
    { name: 'Кредиты', icon: 'Wallet', path: '/credits' },
    { name: 'Вклады', icon: 'PiggyBank', path: '/deposits' },
    { name: 'Ипотека', icon: 'Home', path: '/mortgage' },
    { name: 'Инвестиции', icon: 'TrendingUp', path: '/investments' },
    { name: 'О банке', icon: 'Building2', path: '/about' },
    { name: 'Контакты', icon: 'Phone', path: '/contacts' }
  ];

  return (
    <>
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ПремиумБанк</span>
            </button>
            
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setLoginOpen(true)}>Войти</Button>
              <Button onClick={() => setAccountOpen(true)}>Открыть счёт</Button>
            </div>
          </div>
        </div>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <OpenAccountDialog open={accountOpen} onOpenChange={setAccountOpen} />
    </>
  );
};

export default Header;
