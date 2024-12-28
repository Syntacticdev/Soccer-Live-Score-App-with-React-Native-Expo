import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import StatCard from './StatCard'
import { Fixture } from '~/utils/fixture.type'

export default function Stats({ fixture }: { fixture?: Fixture }) {
    return (
        <View className='flex-1 bg-white p-3 rounded-md my-3'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatCard type="Shot on goal" home={fixture?.home.shotsOnGoal ?? 0} away={fixture?.away.shotsOnGoal ?? 0} />
                <StatCard type="Shots" home={fixture?.home.shots ?? 0} away={fixture?.away.shots ?? 0} />
                <StatCard type="Possession" home={fixture?.home.possession ?? 0} away={fixture?.away.possession ?? 0} />
                <StatCard type="Yellow Cards" home={fixture?.home.yellowCards ?? 0} away={fixture?.away.yellowCards ?? 0} />
                <StatCard type="Corner Kicks" home={fixture?.home.cornerKicks ?? 0} away={fixture?.away.cornerKicks ?? 0} />
                <StatCard type="Goal Kicks" home={fixture?.home.goalKicks ?? 0} away={fixture?.away.goalKicks ?? 0} />
            </ScrollView>
        </View>
    )
}