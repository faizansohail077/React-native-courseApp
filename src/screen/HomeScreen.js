import React from 'react'
import { Dimensions, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import courses from '../data/courses'
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const HomeScreen = () => {
    const navigation = useNavigation()
    const CourseCard = ({ course }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("CourseScreen", { data: course })} >
                <ImageBackground source={course.image}
                    style={{ marginVertical: 10, marginHorizontal: 5, borderRadius: 50, width: windowWidth / 2 - 30, height: windowHeight / 3, overflow: 'hidden', paddingTop: 25, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 5 }}>{course.name}</Text>
                    <Text style={{ color: '#8f95b2', fontWeight: '600' }}>
                        {course.totalCourse + 'Courses'}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 20 }}>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Hey Faizan</Text>
                <Text style={{ fontSize: 22, color: '#616888', marginTop: 15 }}>Find a course You want to learn</Text>
                <View style={{ height: 60, marginTop: 35, paddingTop: 10, paddingBottom: 10, paddingLeft: 15, opacity: 0.7, backgroundColor: 'black', borderRadius: 30, alignItems: 'center', flexDirection: 'row' }}>
                    <Icon name="search" size={30} />
                    <TextInput style={{ fontSize: 18, marginLeft: 5 }} placeholder="Search for anything" />
                </View>
                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Catagories</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6E8AFA' }}>Show All</Text>
                </View>

            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <FlatList showsVerticalScrollIndicator={false} data={courses} keyExtractor={(index, item) => index.toString()}
                    renderItem={({ item }) => <CourseCard course={item} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
