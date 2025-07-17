import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const RootLayout = () => {
  return (
    <Stack  screenOptions={{
        headerStyle : {backgroudColor:"#ddd"},
        headerTintColor :"#333"

    }}>
        <Stack.Screen name="index" options={{title:"Home"}}/>
        <Stack.Screen name="about" options={{title:"About"}}/>
        <Stack.Screen name="Contact" options={{title:"Contact" , headerShown:false}}/>
     
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})