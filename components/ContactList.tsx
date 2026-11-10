import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Shailesh Yadav',
            status:'Giving Security to Your App ',
            imageUrl:'https://www.bing.com/th/id/OIP.9V0r2qALmCn9-BrnoDSw4AHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        },
           {
            uid:2,
            name:'Abhisek Yadav',
            status:'Making Banking Smooth',
            imageUrl:'https://th.bing.com/th/id/OIP.oaKLO57moGlgwzgw1F8eKAHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3',
        },
           {
            uid:2,
            name:'Sonu Singh',
            status:'A Extra Ordinary Man',
            imageUrl:'https://th.bing.com/th/id/OIP.q3PCy9_yU0L6Kf87-Ot96wHaNf?w=184&h=336&c=7&r=0&o=7&pid=1.7&rm=3',
        },
           {
            uid:2,
            name:'Kundan Mishra',
            status:'Giving Knowledge of Shayari ',
            imageUrl:'https://th.bing.com/th/id/OIP._o0Zv3UpA32rt7nCspInTwHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3',
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({uid ,name ,status ,imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}  
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
                 </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor: '#8e44ad',
        padding:8,
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60 / 2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus:{
        fontSize:12
    }
})