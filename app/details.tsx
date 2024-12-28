import { LinearGradient } from 'expo-linear-gradient';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Stats from '~/components/Stats';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import fixtures from "../utils/fixtures"
import { Fixture } from '~/utils/fixture.type';

export default function Details() {
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState("stats")
  const [fixtureData, setFixtureData] = useState<Fixture>()

  useEffect(() => {
    const fixture = fixtures.filter((fixture) => fixture.id === Number(id))
    setFixtureData(fixture[0])
  }, [id])



  return (
    <View className='flex-1  px-2'>
      <StatusBar style="light" />

      <Stack.Screen
        options={{
          title: fixtureData?.home.league,
          headerTitleStyle: {
            color: "white"
          },
          headerStyle: {
            backgroundColor: "blue"
          },
          header: () => (

            <LinearGradient
              colors={['#0648bc', '#150759']}
              start={{ x: 0, y: 0 }} // Start from the left
              end={{ x: 1, y: 0 }}   // End on the right
              style={{ height: 200, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingTop: 30, paddingHorizontal: 10, }}>

              <View className="flex-row text-sm items-center justify-between">
                <View>
                  <TouchableOpacity className='w-9 h-9 bg-slate-500 items-center justify-center rounded-full' onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text className=' -tracking-wider text-white text-lg font-bold'>{fixtureData?.home.league}</Text>
                </View>

                <View>
                  <TouchableOpacity className='w-9 h-9 bg-slate-500 items-center justify-center rounded-full' onPress={() => { }}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                  </TouchableOpacity>
                </View>

              </View>
            </LinearGradient>
          )
        }} />

      <LinearGradient
        colors={['#ffffff', '#ffffff']}
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }}   // End on the right
        style={{ height: 200, borderRadius: 20, marginTop: -100, zIndex: 2, paddingVertical: 10 }}>
        <View className='' style={{ flex: 0.3 }}>
          <Text className="text-center  font-bold">{fixtureData?.home.league}</Text>
          <Text className="text-center">Week 10</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View className='items-center  justify-center' style={{ flex: 0.4 }}>
              <Image className='w-12 h-12 rounded-full' source={require("../assets/club_logo/newcastle.png")} />
              <Text className='font-semibold text-sm text-center'>{fixtureData?.home.team}</Text>
              <Text className='font-semibold text-sm text-center'>Home</Text>
            </View>

            <View className='items-center justify-center' style={{ flex: 0.2 }}>
              <Text className='text-center text-2xl mb-3 font-bold '>1 : 4</Text>
              <Text className="text-center bg-gray-200 px-2">85</Text>
            </View>

            <View className=' items-center justify-center' style={{ flex: 0.4 }}>
              <Image className='w-12 h-12 rounded-full' source={require("../assets/club_logo/chelsea.png")} />
              <Text className='font-semibold text-sm text-center'>{fixtureData?.away.team}</Text>
              <Text className='font-semibold text-sm text-center'>Away</Text>
            </View>
          </View>

        </View>
      </LinearGradient >

      <View className="flex-row mt-5 justify-between">
        <TouchableOpacity onPress={() => setActiveTab("stats")} className={`py-2 px-4 rounded-md ${activeTab == 'stats' ? 'bg-blue-800' : 'bg-white'}`}>
          <View style={{ minWidth: 50 }}>
            <Text className={` text-center ${activeTab == 'stats' ? "text-white" : "text-gray-400"}`}>Stats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("lineups")} className={`py-2 px-4 rounded-md ${activeTab == 'lineups' ? 'bg-blue-800' : 'bg-white'}`}>
          <View style={{ minWidth: 50 }}>
            <Text className={` text-center ${activeTab == 'lineups' ? "text-white" : "text-gray-400"}`}>Line ups</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("summary")} className={`py-2 px-4 rounded-md ${activeTab == 'summary' ? 'bg-blue-800' : 'bg-white'}`}>
          <View style={{ minWidth: 50 }}>
            <Text className={` text-center ${activeTab == 'summary' ? "text-white" : "text-gray-400"}`}>Summary</Text>
          </View>
        </TouchableOpacity>

      </View>
      <Stats fixture={fixtureData} />

    </View>
  );
}
