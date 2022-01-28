import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import { LogoutButton } from './LogoutButton';
import { WelcomeView } from './WelcomeView';
import { TasksView } from './TasksView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeView} options={{ title: '', headerTitleStyle: { fontSize: 20, fontFamily: '', paddingLeft: 10, paddingBottom:10 }, headerStyle: { backgroundColor: '#FEFFFE', shadowColor:'transparent'} }} />
          <Stack.Screen
            name="Tasks"
            component={TasksView}
            options={{
              headerRight: () => {
                return <LogoutButton />;
              },
              headerLeft: ()=> null,
              headerTitleContainerStyle:{padding:15}
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built by ARJDoroteo
        </Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 10,
    textAlign: 'center',
  },
  footer: {
    margin: 20,
  },
});

export default App;
