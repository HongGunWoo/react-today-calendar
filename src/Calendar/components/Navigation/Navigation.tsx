import { useCalendarContext } from '../../providers/CalendarContext';
import { PropsWithChildren, ReactNode } from 'react';
import { addMonths, addYears, subMonths, subYears } from 'date-fns/fp';
import { classNames } from '../../classNames';

export interface NavigationProps extends PropsWithChildren {
  prevYearLabel?: ReactNode;
  prevMonthLabel?: ReactNode;
  nextMonthLabel?: ReactNode;
  nextYearLabel?: ReactNode;
}

export const Navigation = ({
  prevYearLabel = '«',
  prevMonthLabel = '‹',
  nextMonthLabel = '›',
  nextYearLabel = '»',
}: NavigationProps) => {
  const { selectedDate, onSelectedDateChange } = useCalendarContext();

  const handlePrevYearClick = () => {
    const prevYear = subYears(1, selectedDate);
    onSelectedDateChange(prevYear);
  };

  const handlePrevMonthClick = () => {
    const prevMonth = subMonths(1, selectedDate);
    onSelectedDateChange(prevMonth);
  };

  const handleNextMonthClick = () => {
    const nextMonth = addMonths(1, selectedDate);
    onSelectedDateChange(nextMonth);
  };

  const handleNextYearClick = () => {
    const nextYear = addYears(1, selectedDate);
    onSelectedDateChange(nextYear);
  };

  const handleTitleClick = () => {
    onSelectedDateChange(new Date());
  };

  const navigationTitle = formatTitleDate(new Date());

  return (
    <div className={classNames.navigation()}>
      <button onClick={handlePrevYearClick}>{prevYearLabel}</button>
      <button onClick={handlePrevMonthClick}>{prevMonthLabel}</button>
      <button onClick={handleTitleClick}>{navigationTitle}</button>
      <button onClick={handleNextMonthClick}>{nextMonthLabel}</button>
      <button onClick={handleNextYearClick}>{nextYearLabel}</button>
    </div>
  );
};

function formatTitleDate(date: Date, locale?: Intl.LocalesArgument) {
  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  }).format(date);

  return formattedDate;
}
