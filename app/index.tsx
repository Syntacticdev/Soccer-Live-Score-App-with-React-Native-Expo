import { Stack, Link, router } from 'expo-router';
import { Alert, Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { LinearGradient } from 'expo-linear-gradient';
import TopLiveCard from '~/components/TopLiveCard';
import LeagueCard from '~/components/LeagueCard';
import React, { useState } from 'react';
import Matches from '~/components/Matches';


export default function Home() {
  const { width, height } = Dimensions.get("window")
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const [searchIsOpen, setSearchIsOpen] = useState(false)

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic'>
        <StatusBar style="auto" />
        <View className=" bg-white flex-1 px-4">
          <Stack.Screen options={{
            title: "",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
              fontFamily: "LexendDeca-Black",
              fontSize: 16,
            },
            headerSearchBarOptions: {
              placeholder: "Find League",
              placement: "stacked",
              onOpen: () => setSearchIsOpen(true),
              onClose: () => setSearchIsOpen(false),
              onChangeText: (event) => console.log(event.nativeEvent.text)
            },
            headerLeft: () => searchIsOpen ? null : (
              <View className="flex-row items-center ">
                <Image className=' mr-4 w-12 h-12 rounded-full ' resizeMode='contain' width={20} height={20} source={require("../assets/user.png")} />

                <Text style={{ fontFamily: "LexendDeca-Black", fontSize: 18 }} className=' font-bold '>Score Now</Text>
              </View>
            )
          }} />

          <View className='mt-5'>
            <FlatList
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-2" />}
              horizontal data={Array.from({ length: 10 }).map((_, i) => i)}
              bounces={true}
              renderItem={({ item, index }) => (
                <LinearGradient
                  colors={focusedIndex === index ? ['#0648bc', '#150759'] : ['#d4dbdc', '#d4dbdc']}
                  style={{ borderRadius: 8 }}
                  onTouchStart={() => setFocusedIndex(index)}
                  onTouchEnd={() => setFocusedIndex(0)}
                >
                  <LeagueCard isFocused={focusedIndex === index} />
                </LinearGradient>
              )} />
          </View>


          <View>
            <Text className=' font-black text-xl my-3 '>Live match</Text>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-2" />}
              horizontal data={Array.from({ length: 10 }).map((_, i) => i)}
              snapToInterval={width * 0.8}
              bounces={true}
              renderItem={() => (
                <TopLiveCard />
              )} />
          </View>

          <View className=' flex-row justify-between items-center my-5'>
            <Text className=' font-black text-xl'>Matches</Text>

            <TouchableOpacity onPress={() => router.navigate("/matches")}>
              <Text>View All</Text>
            </TouchableOpacity>
          </View>

          <Matches />
        </View >
      </ScrollView>

    </View>
  );
}
