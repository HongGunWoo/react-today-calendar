import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { endOfWeek } from 'date-fns/endOfWeek';
import { format } from 'date-fns/format';
import { startOfWeek } from 'date-fns/startOfWeek';
import { classNames } from '../../../classNames';
import './Weekdays.css';

export function Weekdays() {
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  });

  const weekdays = daysOfWeek.map((day) => format(day, 'EE'));

  return (
    <div className={`${classNames.view()}__weekdays`}>
      {weekdays.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}
