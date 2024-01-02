import { Box, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";



const ColorModeSwitcher = () => {
    
    const { toggleColorMode } = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

      
        const bg = useColorModeValue('red.500', 'red.200')
        const color = useColorModeValue('white', 'gray.800')
  return (
    <>
    <Box mb={4} bg={bg} color={color}>
    </Box>
    <IconButton 
    variant="ghost"
    color="current"
    pos={"fixed"}
    top={'4'}
    right={'4'}
    zIndex={"overlay"}
    onClick={toggleColorMode}
    icon={<SwitchIcon/>}
    // {...props}>
    >
    </IconButton>
  </>  
  )
}


export default ColorModeSwitcher