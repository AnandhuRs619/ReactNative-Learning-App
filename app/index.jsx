import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from "../assets/image/ISL WHITE.png"
import { Link } from 'expo-router';

const Home = () => {

  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>Reading List App</Text>
  
    <Link href="/about" style={styles.link}>About Page</Link>
    <Link href="/contact" style={styles.link}>Contact Page</Link>
    
    </View>
  );
}

export default Home

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
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        boxShadow : '4px 4px 4px 4px rgba(0, 0, 0, 0.1)'
    },
    logo: {
        marginVertical: 20,
        width: 300,
        height: 100,


    },
    link: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        borderBottomWidth: 1,
      
    },
})