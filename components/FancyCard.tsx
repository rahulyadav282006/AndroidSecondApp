import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function TrendingPlaces() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://www.bing.com/th/id/OIP.KwF95sb4LNK4FlqPwhA4iQHaE8?w=231&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
        }}
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Varanasi</Text>
             <Text style={styles.cardLabel}>Varanasi,Uttar Pradesh</Text>
              <Text style={styles.cardDescription}>Varanasi Varanasi — also known as Banaras or Kashi — is one of the oldest continuously
                 inhabited cities in the world, located on the Ganges River in North India.</Text>
              <Text style={styles.cardFooter}>Varanasi</Text>
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
        marginHorizontal:6
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#00000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        color:'#00000',
        fontSize:14,
         marginBottom:6
    },
    cardDescription:{
        color:'#7d5fff',
        fontSize:12,
         marginBottom:12,
         flexShrink:1,
         marginTop:6
    },
    cardFooter:{
        color:'#00000'
    }
})
