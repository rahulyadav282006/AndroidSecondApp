import { Linking, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink :string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What Will Be The Future ?
        </Text>
      </View>
      <Image
      source={{
        uri:'https://www.w3schools.com/howto/img_mountains_wide.jpg'

      }
      }
      style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={2}>
            Many different kinds of people use React Native: from advanced iOS developers to React beginners,
             to people getting started programming for the first time in their career

        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
        onPress={()=> openWebsite('https://devdocs.io/react_native/')}
        >
            <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
          <TouchableOpacity
        onPress={()=> openWebsite('https://github.com/rahulyadav282006/MyAppReactnative')}
        >
            <Text style={styles.socialLinks}>Follow Me</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#34ace0',
        elevation:3,
           shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingVertical:16,
        paddingHorizontal:20
    }
})