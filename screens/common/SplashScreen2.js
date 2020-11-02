import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';  
export default class SplashScreen2 extends Component<{}>
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 3000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={{uri:'https://png.pngtree.com/png-clipart/20200226/original/pngtree-super-cool-red-black-smoke-effect-png-image_5315810.jpg'}}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                </View>  
             </View> )  
         return( <ImageBackground
            source={require("../../assets/images/green-plant-on-white-wooden-table-36447421.jpg")}
            style={styles.image2}
          > 
             <View style = { styles.MainContainer }>  
                <Text style={{textAlign: 'center'}}> Welcome to Indus</Text>  
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
            </View>  
            </ImageBackground>
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
      image2: {
        height: '100%',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
});  