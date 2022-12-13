import { useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export const useScale = () => {

    const [isFool, setIsFool] = useState(false)

    const scaleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: withTiming(isFool ? 1 : 0)
            }
        ]
    }))

    const setScale = () => {
        setIsFool(!isFool)
    }

    return {
        scaleStyle,
        setScale
    }
}