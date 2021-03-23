import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, Image, View, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const CourseScreen = ({ route }) => {
    const { data } = route.params
    const CourseContentList = ({ index, content }) => {
        console.log("TCL ~ file: CourseScreen.js ~ line 8 ~ CourseContentList ~ index", index)
        return <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{'0' + (index + 1)}</Text>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#ABASBD' }}>
                    {content.time}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ABASBD' }}>
                    {content.title}
                </Text>
            </View>
            <View style={{ width: 40, height: 40, backgroundColor: '#49cc96', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="play-arrow" />
            </View>
        </View>
    }
    const BottomNavigationBar = () => {
        return (
            <View
                style={{
                    height: 80,
                    bottom: 0,
                    zIndex: 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        height: 60,
                        width: 70,
                        backgroundColor: '#FFEDEE',
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                    }}>
                    <Ionicons name="local-mall" style={{ color: '#FF6670', fontSize: 25 }} />
                </View>
                <View
                    style={{
                        height: 60,
                        backgroundColor: '#6E8AFA',
                        flex: 1,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>
                        Buy Now
              </Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ImageBackground source={data.image} style={{ height: 300, paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
                <Image resizeMode="contain" style={{ width: 100, marginBottom: 10 }} source={require('../assets/bestseller.png')} />
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: -35 }}>Design Thinking</Text>
                <View style={{ top: -25, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="people" size={25} style={{ color: '#616888', marginRight: 5 }} />
                        <Text style={{ color: '#616888', fontWeight: 'bold' }}>{data.students + "k"}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="star" size={25} style={{ color: '#616888', marginRight: 5 }} />
                        <Text style={{ color: '#616888', fontWeight: 'bold' }}>{data.star + "k"}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 25, color: '#616888', fontWeight: 'bold' }}>{'$' + data.price}</Text>
            </ImageBackground>
            <View style={{ flex: 1, marginTop: -35, backgroundColor: '#fff', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>

                <Text style={{ marginTop: 40, marginBottom: 20, marginHorizontal: 20, fontSize: 21, fontWeight: 'bold' }}>Course Content</Text>
                <FlatList showsVerticalScrollIndicator={false} data={data.courseContent} keyExtractor={(index, item) => index.toString()}
                    renderItem={({ item, index }) => <CourseContentList index={index} content={item} />} />
            </View>
            <BottomNavigationBar />
        </SafeAreaView>
    )
}

export default CourseScreen

const styles = StyleSheet.create({})
