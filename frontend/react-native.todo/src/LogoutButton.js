import * as React from 'react';
import {Button, Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {realmApp} from './RealmApp';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont(); // load FontAwesome font

export function LogoutButton() {
  const navigation = useNavigation();
  const user = realmApp.currentUser;

  // The signOut function calls the logOut function on the currently
  // logged in user and then navigates to the welcome screen
  const signOut = () => {
    if (user) {
      user.logOut();
    }
    navigation.popToTop();
  };

  return (
    <View style= {{margin:10, width:100}}>
      <Button
        title="log out"
        color={'pink'}
        onPress={() => {
          Alert.alert('Log Out', 'Are you sure you want to log out?', [
            {
              text: 'Yes, Log Out',
              style: 'destructive',
              onPress: () => signOut(),
            },
            {text: 'Cancel', style: 'cancel'},
          ]);
        }}
        
      />
    </View>
  );
}