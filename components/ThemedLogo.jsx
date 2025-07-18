import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/image/ISL WHITE.png'
import LightLogo from '../assets/image/Logo-Black.png'

const ThemedLogo = ({...props}) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo