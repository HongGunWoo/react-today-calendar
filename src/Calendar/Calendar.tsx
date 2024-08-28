import { PropsWithChildren } from 'react';
import { classNames } from './classNames';
import { Navigation } from './components/Navigation/Navigation';
import { CalendarContextProvider } from './providers/CalendarContext';

export function Calendar({ children }: PropsWithChildren) {
  return (
    <CalendarContextProvider>
      <div className={classNames.base()}>{children}</div>
    </CalendarContextProvider>
  );
}

Calendar.Navigation = Navigation;
