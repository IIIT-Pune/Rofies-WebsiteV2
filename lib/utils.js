import { clsx } from "clsx";
import {
  differenceInDays,
  eachDayOfInterval,
  eachHourOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  endOfDay,
  format,
  getWeekOfMonth,
  isSameDay,
  isSameMonth,
  isSameWeek,
  isWithinInterval,
  startOfDay,
} from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const calculateNewDates = (viewMode, index, currentIndex, dateRange) => {
  let start = new Date(dateRange.from);
  let end = new Date(dateRange.to);
  const delta = (currentIndex - index) * -1;
  switch (viewMode) {
    case "day":
      start.setHours(start.getHours() + delta);
      end.setHours(end.getHours() + delta);
      break;
    case "week":
      start.setDate(start.getDate() + delta);
      end.setDate(end.getDate() + delta);
      break;
    case "month":
      start.setDate(start.getDate() + delta);
      end.setDate(end.getDate() + delta);
      break;
    case "year":
      start = new Date(dateRange.from);
      start.setMonth(index);
      end = new Date(start);
      end.setMonth(start.getMonth() + 1);
      break;
  }
  return { start, end };
};

export const filterAppointments = (appt, index, dateRange, viewMode) => {
  const apptDate = new Date(appt.start);
  if (
    !dateRange.from ||
    !dateRange.to ||
    !isWithinInterval(apptDate, { start: dateRange.from, end: dateRange.to })
  ) {
    return false;
  }
  return isAppointmentInSlot(apptDate, index, viewMode, dateRange);
};

const isAppointmentInSlot = (apptDate, index, viewMode, dateRange) => {
  if (!dateRange.from) return false;

  switch (viewMode) {
    case "day":
      return (
        apptDate.getHours() === index && isSameDay(apptDate, dateRange.from)
      );
    case "week":
      return (
        apptDate.getDay() -
          (6 -
            differenceInDays(
              new Date(dateRange.to),
              new Date(dateRange.from),
            )) ===
          index && isSameWeek(apptDate, dateRange.from)
      );
    case "month":
      return (
        getWeekOfMonth(apptDate) === index &&
        isSameMonth(apptDate, dateRange.from)
      );
    case "year":
      return apptDate.getMonth() === index;
    default:
      return false;
  }
};

export const getLabelsForView = (viewMode, dateRange) => {
  switch (viewMode) {
    case "day":
      return eachHourOfInterval({
        start: startOfDay(dateRange.start),
        end: endOfDay(dateRange.end),
      }).map((hour) => format(hour, "HH:mm"));
    case "week":
      return eachDayOfInterval({
        start: dateRange.start,
        end: dateRange.end,
      }).map((day) => `${format(day, "ccc ")} the ${format(day, "do")}`);
    case "month":
      return eachWeekOfInterval({
        start: startOfMonth(dateRange.start),
        end: endOfMonth(dateRange.end),
      }).map((week) => `${format(week, "wo")} week of ${format(week, "MMM")}`);
    case "year":
      return eachMonthOfInterval({
        start: startOfYear(dateRange.start),
        end: endOfYear(dateRange.end),
      }).map((month) => format(month, "MMM"));
    default:
      return [];
  }
};
