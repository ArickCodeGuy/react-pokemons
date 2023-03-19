import { UICounterProps } from './types';

import './style.scss';

const MAX_VALUE = 1000;
const MIN_VALUE = 1;

export function UICounter(props: UICounterProps) {
  function setValue(newValue: number) {
    if (newValue > MAX_VALUE) {
      newValue = MAX_VALUE;
    }

    if (newValue < MIN_VALUE) {
      newValue = MIN_VALUE;
    }

    if (newValue !== props.value) {
      props.updateValue(newValue);
    }
  }

  function handleInput(newValue: string) {
    const number = parseInt(newValue);
    if (isNaN(number)) return;

    setValue(number);
  }

  return (
    <div className="Counter">
      <div
        className="Counter__btn Counter__btn--minus"
        onClick={() => setValue(props.value - 1)}
      />
      <input
        className="Counter__input"
        value={props.value}
        onChange={(e) => handleInput(e.target.value)}
      />
      <div
        className="Counter__btn Counter__btn--plus"
        onClick={() => setValue(props.value + 1)}
      />
    </div>
  );
}
