import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import {loginEmailAccount} from '../redux/actions/authActions';



class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: ""
    }
 }

 handleUpdateState = (name, value)=>{
   this.setState({
     [name]:value
   })
 }

 handleOnSubmit = ()=>{
    this.props.loginEmailAccount(this.state.email, this.state.password)
 }
  render() {
    const {navigation, auth} = this.props
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <View style={styles.LoginHeaderContainer}>
          {/* <Image style={styles.Image} source={require("./assets/signup.png")} /> */}
          <Text style={styles.LoginHeader}>Log in</Text>
        </View>
        <View >
          {
            auth.error.login &&
            <Text style={{color: 'red'}}>{auth.error.login}</Text>
          }
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            value={this.state.email}
            onChange={(text)=>{
              this.handleUpdateState('email', text)
            }}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
              onChange={(text)=>{
                this.handleUpdateState('password', text)
              }}
            placeholder="Password"
          />
           <Text style={styles.ForgotPassword}>Forgot Password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}
             onPress={(this.handleOnSubmit)}
          >
             <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have account?</Text>
          <TouchableOpacity onPress={()=>{
             navigation.navigate("Register")
          }}>
            <Text style={styles.SignupText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 5
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height:50,
    marginTop: 20,
    placeholderTextColor: "#CCCDC6"
  },
  LoginHeaderContainer: {
    marginBottom: 30,
    // marginVertical: 10,
    // justifyContent: "center",
    // alignItems: "center"
  },
  LoginHeader: {
    fontSize: 50,
    color: "#5082d9",
    fontWeight: "bold",
    height: 70,
    fontStyle: ""
  },
  ForgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8"
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  noAccountText: {
    marginRight: 6,
    fontSize: 16,
  },
  SignupText: {
    marginRight: 10,
    fontSize: 16,
    color: "#5100ad"
  },
  // Image: {
  //   width: 100,
  //   height: 100,
  //   marginVertical: 4,
  //   alignSelf: "center",
  //   borderRadius: 50
  // },
});

const mapStateTopProp = (state)=>{
  return {auth:state}
}

export default connect(mapStateTopProp,{loginEmailAccount})(LoginScreen);

