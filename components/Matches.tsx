import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import MatchCard from './MatchCard'
import fixtures from "../utils/fixtures"

export default function Matches() {

    return (
        <View>
            {fixtures.map((fixture, i) => (
                <MatchCard fixture={fixture} key={i} />
            ))}
        </View>
    )
}