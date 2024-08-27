import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface CalendarContextType {
  selectedDate: Date;
  onSelectedDateChange: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextType | null>(null);

export function CalendarContextProvider({ children }: PropsWithChildren) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onSelectedDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <CalendarContext.Provider value={{ selectedDate, onSelectedDateChange }}>
      {children}
    </CalendarContext.Provider>
  );
}

export const useCalendarContext = () => {
  const calendarContext = useContext(CalendarContext);

  if (!calendarContext) {
    throw new Error(
      'useCalendarContext must be used within a CalendarContextProvider',
    );
  }

  return calendarContext;
};
