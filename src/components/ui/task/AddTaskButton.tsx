import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import { PressableProps } from 'react-native'
import { SharedValue, withTiming } from 'react-native-reanimated'

import Button from '../button/Button'

interface IAddTaskButton extends PressableProps {
  className?: string
  scale: SharedValue<number>
}

const AddTaskButton: FC<IAddTaskButton> = ({ className, scale }) => {
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    return () => {
      setIsShow(false)
    }
  }, [])
  return (
    <>
      <Button
        className={cn(
          'absolute z-10 w-12 h-12 rounded-full bg-blue-200 items-center justify-center bottom-8 right-8',
          className
        )}
        style={{
          elevation: 5,
          shadowColor: '#096bff',
        }}
        isShowBg={false}
        bgSize={48}
        onPress={() => {
          scale.value = withTiming(isShow ? 1 : 0)
          setIsShow(prev => !prev)
          //  dispatch(
          //    setTask({
          //      id: Math.random().toString(),
          //      task: 'ASDASDsad asdasda asdasd',
          //      isDone: false,
          //      category: data[0],
          //    })
          //  )
        }}
      >
        <Feather name='plus' size={20} color='#fff' />
      </Button>
    </>
  )
}

export default AddTaskButton
