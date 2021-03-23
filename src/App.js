
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import CourseScreen from './screen/CourseScreen';
import HomeScreen from './screen/HomeScreen';


const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: null, headerStyle: { elevation: 0 } }}>
        <Stack.Screen name="Home" children={() => <HomeScreen />} options={{
          headerLeft: () => <Ionicons name="sort" size={25} style={{ marginLeft: 10 }} />,
          headerRight: () => <Image source={require('./assets/faizan.png')} style={{ width: 40, height: 40, borderRadius: 30, marginRight: 20 }} />
        }} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} options={({ navigation }) => ({
          headerTransparent: true,
          headerLeft: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack('Home')}>
            <Ionicons name="arrow-back" size={30} style={{ marginLeft: 20 }} />
          </TouchableOpacity>),
          headerRight: () => <Ionicons name="more-vert" size={30} style={{ marginRight: 20 }} />
        })} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
