import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";
import clsx from "clsx";

import { generateProgressPercentage } from '../utils/generate-progress-percentage';
import dayjs from "dayjs";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps  extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountCompleted?: number;
  date: Date;
};

export function HabitDay({amountOfHabits = 0, amountCompleted = 0, date, ...rest}: HabitDayProps){
    const amouthAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0;
    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);

    return(
      <TouchableOpacity
        className={clsx('rounded-lg border-2 m-1', {
          ['bg-zinc-800 border-zinc-700'] : amouthAccomplishedPercentage === 0,
          ['bg-violet-900 border-violet-700']: amouthAccomplishedPercentage > 0 && amouthAccomplishedPercentage < 20,
          ['bg-violet-800 border-violet-600']: amouthAccomplishedPercentage >= 20 && amouthAccomplishedPercentage < 40,
          ['bg-violet-700 border-violet-500']: amouthAccomplishedPercentage >= 40 && amouthAccomplishedPercentage < 60,
          ['bg-violet-600 border-violet-500']: amouthAccomplishedPercentage >= 60 && amouthAccomplishedPercentage < 80,
          ['bg-violet-500 border-violet-400']: amouthAccomplishedPercentage >= 80,
          ['border-white border-3'] : isCurrentDay
        })}

        style={{ width: DAY_SIZE, height: DAY_SIZE }}
        activeOpacity={0.7}
        {...rest}
      />
  );
}