import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatCard = ({ type, home, away }: { type: string, home: number, away: number }) => {
    return (
        <View >
            <View className="flex-row px-2 my-2 justify-between ">
                <View>
                    <Text>{home}</Text>
                </View>
                <View>
                    <Text>{type}</Text>
                </View>
                <View>
                    <Text>{away}</Text>
                </View>
            </View>
            <View className=' flex-row justify-between '>
                <View className='flex' style={{ flex: 0.45 }}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBar, { width: `${home / (home + away) * 100}%`, right: 0, position: "absolute" }]} />
                    </View>

                </View>

                <View className='flex' style={{ flex: 0.45 }}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBar, { width: `${away / (home + away) * 100}%` }]} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StatCard

const styles = StyleSheet.create({
    progressContainer: {
        position: "relative",
        height: 8,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#29088b',
        borderRadius: 5
    },
    progressText: {
        marginTop: 5,
        textAlign: 'center',
    },
})