import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LeagueCard = ({ isFocused }: { isFocused: boolean }) => {
    return (
        <View className='flex-row gap-2  rounded-mdsm px-2 h-16 items-center'>
            <Image className=' w-12 h-12 rounded-full' source={require("../assets/club_logo/epl.png")} />
            <Text className={`font-semibol text- text-center ${isFocused && "text-white"} `}>Premier League</Text>
        </View>
    )
}

export default LeagueCard

