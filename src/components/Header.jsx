import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import { BiGhost, BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={"0"}
                w={"10"} h={"10"} borderRadius={"full"}
                zIndex={"overlay"}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen}
                placement='left'
                onClose={onClose}>

                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            Video Hub
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack alignItems={"flex-start"}>

                                {/* Home button  */}
                                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                    <Link to="/">Home</Link>
                                </Button>

                                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                    <Link to="/videos">Videos</Link>
                                </Button>
                                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                    <Link to="/videos?category=free">Free Videos</Link>
                                </Button>
                                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                    <Link to="/upload">Upload Video</Link>
                                </Button>
                            </VStack>

                            <HStack pos="absolute" bottom={"10"} left={"0"} width={"full"} justifyContent={'space-evenly'}>
                                <Button onClick={onClose} colorScheme='purple'>
                                    < Link to={'/login'}>Log In</Link>
                                </Button>
                                <Button onClick={onClose} colorScheme='purple' variant={"outline"}>
                                    <Link Link to={'/signup'}>Sign up</Link>
                                </Button>
                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>

    )
}

export default Header