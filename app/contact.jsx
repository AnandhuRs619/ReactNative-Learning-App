import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Text style={styles.text}>This is the contact page</Text>
      <Link href="/" style={styles.link}>Back to Home </Link>
    </View>
  ) 
}

export default Contact

        const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        borderBottomWidth: 1,
      
    },
})