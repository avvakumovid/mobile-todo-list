import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Button, Platform, Text, View } from 'react-native'

const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode: any) => {
    if (Platform.OS === 'android') {
      setShow(false)
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
    setShow(true)
  }

  const showTimepicker = () => {
    showMode('time')
    setShow(true)
  }

  return (
    <View>
      <Button onPress={showDatepicker} title='Show date picker!' />
      <Button onPress={showTimepicker} title='Show time picker!' />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default DatePicker
