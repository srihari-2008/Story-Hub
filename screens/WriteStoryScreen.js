import React from 'react';
import {Text,View,TouchableOpacity,TextInput,Image,StyleSheet,Button} from 'react-native';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
   constructor(){
     super()
     this.state={
       title:"",
       author:"",
       story:"",
     }
   }


  render() {
    return (
      <View style={styles.container}>
      <View>
        <Image
            source = {require("write.png")}
            style= {{width:100, height:100}}/>
            </View>
           
        <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold"}}>Story Hub</Text>
        <View style={styles.inputView}>
         <TextInput style={styles.inputBox} placeholder="Story Title"
         onChangeText={(text)=>{
          this.setState({
            title:text
          })
         }}
         value={this.state.title}
         />
         </View>
         <View style={styles.inputView}>
                  <TextInput style={styles.inputBox} placeholder="Author"
                  onChangeText={(text)=>{
                    this.setState({
                     author:text
                    })
                   }}
                   value={this.state.author}
                  />
                  </View>
                 <View style={styles.inputView}>
               
                <TextInput
      style={styles.textArea}
      placeholder="Write Your Story"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
      onChangeText={(text)=>{
        this.setState({
          story:text
        })
       }}
       value={this.state.story}
    />

     <View style={styles.inputView}>
       <TouchableOpacity
          style={styles.submitButton}
         
            >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

 </View>
</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },
  
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 10
  },
  
  textArea: {
    height: 130,
    justifyContent: "flex-start",
    width : 300,
    borderWidth: 1.5,
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:30,
    alignSelf: 'center',
    marginTop: 130

  },
  submitButtonText:{

    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    color: 'white'
  }
});
