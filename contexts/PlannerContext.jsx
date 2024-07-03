import React, { createContext, useContext, useState, useMemo } from "react";
import { startOfDay, endOfDay, startOfWeek } from "date-fns";
import { getLabelsForView } from "@/lib/utils";

// Default context value without type annotations
const defaultContextValue = {
  viewMode: "week",
  timeLabels: [],
  dateRange: { from: startOfWeek(new Date()), to: endOfDay(new Date()) },
  currentDateRange: { from: startOfDay(new Date()), to: endOfDay(new Date()) },
  setDateRange: (dateRange) => {
    console.log(dateRange);
  },
};

const PlannerContext = createContext(defaultContextValue);

export const PlannerProvider = ({ children }) => {
  const [dateRange, setDateRange] = useState({
    from: startOfDay(new Date()),
    to: endOfDay(new Date()),
  });

  const viewMode = useMemo(() => {
    const days =
      (Number(dateRange.to) - Number(dateRange.from)) / (1000 * 3600 * 24);
    if (days < 1) return "day";
    if (days <= 7) return "week";
    if (days <= 31) return "month";
    return "year";
  }, [dateRange]);

  const timeLabels = useMemo(() => {
    return getLabelsForView(viewMode, {
      start: dateRange.from ?? startOfDay(new Date()),
      end: dateRange.to ?? endOfDay(new Date()),
    });
  }, [viewMode, dateRange]);

  const value = {
    timeLabels,
    dateRange,
    setDateRange,
    viewMode,
    currentDateRange: dateRange,
  };

  return (
    <PlannerContext.Provider value={value}>
      {children}
    </PlannerContext.Provider>
  );
};

export const useCalendar = () => {
  return useContext(PlannerContext);
};
