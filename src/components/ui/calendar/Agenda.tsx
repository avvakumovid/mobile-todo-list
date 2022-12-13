import React from 'react'
import { Text, View } from 'react-native'
import { Agenda as Ag } from 'react-native-calendars'

const Agenda: React.FC = () => {
  return (
    <View style={{ height: 600 }}>
      <Ag
        pastScrollRange={5}
        futureScrollRange={5}
        items={{
          '2022-12-12': [
            {
              name: 'item 3 - any js object',
              day: '1',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
          ],
          '2022-12-13': [
            {
              name: 'item 3 - any js object',
              day: '1',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
            {
              name: 'item 1 - any js object',
              day: '0',
              height: 2,
            },
          ],
        }}
        renderItem={item => {
          return (
            <View className='w-full h-10 bg-pink'>
              <Text>{item.name}</Text>
              <Text>{item.day}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Agenda
