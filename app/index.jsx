import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from "../assets/image/Logo-Black.png"
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Home = () => {

  return (
    <ThemedView style={styles.container}>
        <ThemedLogo style={styles.logo} />
        <Spacer height={20}/>
      <ThemedText  style={styles.title}>Home</ThemedText>
      <ThemedText style={styles.text}>Reading List App</ThemedText>
      <Spacer />
  
    <Link href="/login" style={styles.link}>
   <ThemedText>Login 
    </ThemedText>
    </Link>
    <Link href="/register" style={styles.link}>
    <ThemedText>Register
    </ThemedText>
  </Link>
    <Link href="/profile" style={styles.link}>
    <ThemedText>Profile
    </ThemedText>
  </Link>
    
    </ThemedView>
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
        width: 100,
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