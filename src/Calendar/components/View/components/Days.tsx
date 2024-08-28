import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { endOfMonth } from 'date-fns/endOfMonth';
import { endOfWeek } from 'date-fns/endOfWeek';
import { format } from 'date-fns/format';
import { startOfMonth } from 'date-fns/startOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { useCalendarContext } from '../../../providers/CalendarContext';
import { classNames } from '../../../classNames';
import './Days.css';

function generateCalendar(month: Date) {
  const firstDayOfMonth = startOfMonth(month);
  const lastDayOfMonth = endOfMonth(month);

  const firstDayOfCalendar = startOfWeek(firstDayOfMonth);
  const lastDayOfCalendar = endOfWeek(lastDayOfMonth);

  const calendarDays = eachDayOfInterval({
    start: firstDayOfCalendar,
    end: lastDayOfCalendar,
  });

  return calendarDays;
}

export function Days() {
  const { selectedDate } = useCalendarContext();

  const calendarDays = generateCalendar(selectedDate);

  return (
    <div className={`${classNames.view()}__days`}>
      {calendarDays.map((day) => (
        <button key={day.getTime()}>{format(day, 'd')}</button>
      ))}
    </div>
  );
}
