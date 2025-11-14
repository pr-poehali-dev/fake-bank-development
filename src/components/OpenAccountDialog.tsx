import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface OpenAccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OpenAccountDialog = ({ open, onOpenChange }: OpenAccountDialogProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accountType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заявка отправлена! Мы свяжемся с вами по номеру ${formData.phone}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Открыть счёт онлайн</DialogTitle>
          <DialogDescription>
            Заполните форму и получите доступ к банковским услугам за 5 минут
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="lastName">Фамилия</Label>
            <div className="relative">
              <Icon name="User" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="lastName"
                placeholder="Иванов"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstName">Имя</Label>
            <div className="relative">
              <Icon name="User" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="firstName"
                placeholder="Иван"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <div className="relative">
              <Icon name="Phone" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="ivan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountType">Тип счёта</Label>
            <Select value={formData.accountType} onValueChange={(value) => setFormData({ ...formData, accountType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип счёта" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debit">Дебетовая карта</SelectItem>
                <SelectItem value="savings">Накопительный счёт</SelectItem>
                <SelectItem value="investment">Инвестиционный счёт</SelectItem>
                <SelectItem value="business">Бизнес-счёт</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-muted p-4 rounded-lg space-y-2">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Без визита в отделение
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Решение за 2 минуты
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Доставка карты в течение 3 дней
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Отправить заявку
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OpenAccountDialog;
