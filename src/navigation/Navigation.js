import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ContactsScreen from '../screens/ContactsScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {loggedOut} from '../redux/actions/authActions';



const Stack = createStackNavigator()
function Navigation({auth, loggedOut}) {
   return(
      <NavigationContainer>
          {
            auth.login ?
            //show contact
            <Stack.Navigator>
              <Stack.Screen  
                name="Contacts" 
                options={{
                  headerRight:()=>(
                    <TouchableOpacity style={{marginRight:20}}
                      onPress={loggedOut}
                    >
                       <Text>Logout</Text>
                    </TouchableOpacity>
                  )
                }}
                component={ContactsScreen}
              />
            </Stack.Navigator>
            :
            //show login & register
            <Stack.Navigator>
              <Stack.Screen 
                name="Login" 
                options={{header: () =>null}}
                component={LoginScreen}
              />
              <Stack.Screen  
                name="Register"
                options={{header:()=>null}}
                component={RegisterScreen}
              />
            </Stack.Navigator>
          }
      </NavigationContainer>
   );
}


const mapStateTopProp = (state)=>{
  return {auth:state}
}

export default connect(mapStateTopProp, {loggedOut})(Navigation);
