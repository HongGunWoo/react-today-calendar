import { PropsWithChildren } from 'react';
import { classNames } from './classNames';
import { CalendarContextProvider } from './providers/CalendarContext';
import { Navigation, View } from './components';

export function Calendar({ children }: PropsWithChildren) {
  return (
    <CalendarContextProvider>
      <div className={classNames.base()}>{children}</div>
    </CalendarContextProvider>
  );
}

Calendar.Navigation = Navigation;
Calendar.View = View;
