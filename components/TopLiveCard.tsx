import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const { width, height } = Dimensions.get("window")

const TopLiveCard = () => {
    return (
        <LinearGradient
            colors={['#0648bc', '#150759']}
            start={{ x: 0, y: 0 }} // Start from the left
            end={{ x: 1, y: 0 }}   // End on the right
            style={{ width: width * 0.8, height: 200, borderRadius: 20, paddingVertical: 10 }}>
            <View className='' style={{ flex: 0.3 }}>
                <Text className="text-center text-white font-bold">Premier Leage</Text>
                <Text className="text-center text-gray-100 ">Week 10</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View className='items-center  justify-center' style={{ flex: 0.4 }}>
                        <Image className='w-12 h-12 rounded-full' source={require("../assets/club_logo/newcastle.png")} />
                        <Text className='font-semibold text-sm text-white text-center'>Newcastle</Text>
                        <Text className='font-semibold text-sm text-white text-center'>Home</Text>
                    </View>

                    <View className='items-center justify-center' style={{ flex: 0.2 }}>
                        <Text className='text-center text-2xl mb-3 font-bold text-white'>1 : 4</Text>
                        <Text className="text-center bg-gray-200 px-2">85</Text>
                    </View>

                    <View className=' items-center justify-center' style={{ flex: 0.4 }}>
                        <Image className='w-12 h-12 rounded-full' source={require("../assets/club_logo/chelsea.png")} />
                        <Text className='font-semibold text-sm text-white text-center'>Chelsea</Text>
                        <Text className='font-semibold text-sm text-white text-center'>Away</Text>
                    </View>
                </View>

            </View>
        </LinearGradient >
    )
}

export default TopLiveCard

const styles = StyleSheet.create({})