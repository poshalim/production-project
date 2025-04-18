import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency?: Currency) => void
  onChangeCountry?: (country?: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstname,
    onChangeLastname,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        { data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
