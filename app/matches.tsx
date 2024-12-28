import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Matches from '~/components/Matches'
import { router, Stack } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
export default function matches() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack.Screen options={{
                    header: () => (
                        <View style={{ paddingTop: 30, paddingHorizontal: 15, }} className="flex-row text-sm items-center justify-between">
                            <View>
                                <TouchableOpacity className='w-9 h-9 bg-slate-500 items-center justify-center rounded-full' onPress={() => router.back()}>
                                    <Ionicons name="chevron-back" size={24} color="white" />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <Text className=' -tracking-wider text-lg font-bold'>Matches</Text>
                            </View>

                            <View>
                                <TouchableOpacity className='w-9 h-9 bg-slate-500 items-center justify-center rounded-full' onPress={() => { }}>
                                    <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                }} />
                <Matches />
            </ScrollView>
        </SafeAreaView>
    )
}