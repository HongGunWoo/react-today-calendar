import { classNames } from '../../classNames';
import { Days } from './components/Days';
import { Weekdays } from './components/Weekdays';

export function View() {
  return (
    <div className={classNames.view()}>
      <Weekdays />
      <Days />
    </div>
  );
}
