import React from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { BiMenuAltLeft} from 'react-icons/bi';
import { Link } from 'react-router-dom';


import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        top={'6'}
        left={'4'}
        pos={'fixed'}
        colorScheme="linkedin"
        p={'0'}
        h={'6'}
        w={'10'}
        onClick={onOpen}
        zIndex={'10'}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={'bold'}>Courses & Catering</DrawerHeader>

          <Button>Shaikh Bilal Sor</Button>

          <DrawerBody>
            <VStack align={'flex'}>
              <Button
                colorScheme="linkedin"
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                colorScheme="linkedin"
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/Courses'}>Courses</Link>
              </Button>
              <Button
                colorScheme="linkedin"
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/Categories'}>Categories</Link>
              </Button>
              <Button
                colorScheme="linkedin"
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/Pages'}>Pages</Link>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack>
              <Button
                colorScheme="linkedin"
                variant={'solid'}
                onClick={onClose}
              >
                <Link to={'/LogIn'}>Log In</Link>
              </Button>
              <Button
                variant={'outline'}
                colorScheme="linkedin"
                onClick={onClose}
              >
                <Link to={'/SignUp'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box
        w={'full'}
        h={'20'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'7'}
        borderBottom={'1px solid black'}
        pos={'sticky'}
        
      >
        <Button variant={'unstyled'}  fontWeight={'bold'}>
          <Link to={'/'}>Home</Link>
        </Button>
        <Button variant={'unstyled'}  fontWeight={'bold'}>
          <Link to={'/Contact'}>Contact</Link>
        </Button>
        <Button variant={'unstyled'}  fontWeight={'bold'}>
          <Link>About</Link>
        </Button>
        <Button variant={'unstyled'}  fontWeight={'bold'}>
          <Link to={'/Disclamer'}>Disclamer</Link>
        </Button>
      </Box>
    </>
  );
};

export default Header;
