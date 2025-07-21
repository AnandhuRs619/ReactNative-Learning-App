import { Pressable, StyleSheet, Text, View } from 'react-native'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Color'
import ThemedButton from '../../components/ThemedButton'


const Login = () => {
const handleSubmit = ()=>{
    console.log("Login Submitted")
}

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Login to your Account 
        </ThemedText>

        <ThemedButton onPress ={handleSubmit}>
        <Text style={{color:'#f2f2f2'}}>
        Login
        </Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href={'/register'}>
        <ThemedText style={{textAlign:"center"}}>
            SignUp
        </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30'
    },
    btn:{
        backgroundColor:Colors.primary,
        padding: 15,
        borderRadius:5,
    },
    pressed:{
        opacity: 0.8,

    }
})