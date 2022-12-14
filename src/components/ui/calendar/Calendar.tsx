import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { View } from 'react-native'
import { Calendar as Cal } from 'react-native-calendars'
import Animated, {
  RollInLeft,
  SlideInLeft,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'

import { ITask } from '@/shared/types'

import { getShortDate } from '@/utils/getShortDate'

import Button from '../button/Button'

import { useScale } from './../../../hooks/useScale'
import RippleButton from './../button/RippleButton'

interface ICalendar {
  setFromData: UseFormSetValue<ITask>
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const Calendar: FC<ICalendar> = ({ setFromData, isShow, setIsShow }) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date())
  const { scaleStyle, setScale } = useScale()
  useEffect(() => {
    setFromData('date', selectedDay.toString())
  }, [selectedDay])
  return (
    <>
      {isShow && (
        <Animated.View
          entering={SlideInLeft}
          exiting={SlideOutRight}
          className='bg-white-200 absolute z-30 top-20 left-0 right-0 bottom-0 '
        >
          <Button
            icon='x'
            className='self-end -mb-4 -mr-4 z-10'
            onPress={() => {
              setIsShow(!isShow)
            }}
          />
          <View className='bg-red'>
            <Cal
              initialDate={selectedDay.toString()}
              onMonthChange={month => {
                setSelectedDay(new Date(month.timestamp))
              }}
              theme={{
                textSectionTitleColor: '#1b2b59',
                monthTextColor: '#1b2b59',
                dayTextColor: '#1b2b59',
                arrowColor: '#cbd7fb',
                selectedDayBackgroundColor: '#cbd7fb',
                todayTextColor: '#cbd7fb',
              }}
              onDayPress={day => {
                setSelectedDay(new Date(day.timestamp))
              }}
            />
          </View>
        </Animated.View>
      )}
    </>
  )
}
