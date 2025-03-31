import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(CounterActions.increment());
  };

  const decrement = () => {
    dispatch(CounterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>

      <Button onClick={increment} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};
