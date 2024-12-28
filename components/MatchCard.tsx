import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Fixture } from '~/utils/fixture.type'

const MatchCard = ({ fixture }: { fixture: Fixture }) => {
    return (
        <Link href={{ pathname: "/details", params: { id: fixture.id } }} asChild>
            <TouchableOpacity>
                <View className='h-20  flex-row rounded-md  shadow-transparent '>
                    <View style={{ flex: 0.375 }} className='flex-1 flex-row gap-2 items-center'>
                        <Text style={{ flex: 0.7 }} className=' text-center min-w-16 font-semibold text-sm flex-shrink text-wrap '>{fixture.home.team}</Text>
                        <Image className=' w-12 h-12 rounded-full' source={fixture.home.logo !== "" ? fixture.home.logo : require("../assets/club_logo/newcastle.png")} />
                    </View>

                    <View className='items-center justify-center' style={{ flex: 0.25 }}>
                        <Text className='text-center text-sm font-bold'>23: 30</Text>
                        <Text className="text-center ">Jan 2</Text>
                    </View>
                    <View style={{ flex: 0.375 }} className='flex-1 pl-3 flex-row gap-2 items-center '>
                        <Image className=' w-12 h-12 rounded-full' source={fixture.away.logo !== "" ? fixture.away.logo : require("../assets/club_logo/newcastle.png")} />
                        <Text style={{ flex: 0.7 }} className=' text-center w-16 font-semibold text-sm flex-shrink text-wrap '>{fixture.away.team}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>

    )
}

export default MatchCard

const styles = StyleSheet.create({})