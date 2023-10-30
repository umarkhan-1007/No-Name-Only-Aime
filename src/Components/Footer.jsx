import React from 'react';
import {
  Text,
  Button,
  HStack,
  Heading,
  Input,
  VStack,
  Link,
} from '@chakra-ui/react';
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <HStack h={'52'} w={'full'} bg={'blackAlpha.900'}>
      <VStack w={'50%'}>
        <Heading
          fontSize={'2xl'}
          colorScheme="linkedin"
          color={'white'}
          textTransform={'uppercase'}
        >
          Subscribe to get updates
        </Heading>
        <HStack borderBottom={'1px solid white'} w={'50%'}>
          <Input
            h={'8'}
            border={'none'}
            placeholder="Eenter Emain Heare.."
            outline={'none'}
            w={'full'}
          />
          <AiOutlineSend color="white" size={'24'} />
        </HStack>
      </VStack>
      <VStack
        w={'50%'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
      >
        <Heading textColor={'white'} textTransform={'uppercase'}>
          No Name Only Aim
        </Heading>
        <Text
          textColor={'white'}
          textTransform={'capitalize'}
          textAlign={'center'}
        >
          all rights received
        </Text>
      </VStack>
      <VStack w={'50%'} color={'white'}>
        <HStack >
          <AiFillYoutube />
          <Text>
            <Link href="https://nonameonlyaim.blogspot.com/">YouTube</Link>
          </Text>
        </HStack>
        <HStack>
          <AiFillInstagram/>
          <Text>
            <Link href="https://nonameonlyaim.blogspot.com/">Instagram</Link>
          </Text>
        </HStack>
        <HStack>
          <AiFillGithub/>
          <Text>
            <Link href="https://nonameonlyaim.blogspot.com/">Git hub</Link>
          </Text>
        </HStack>
        <HStack>
          <FaTelegramPlane/>
          <Text>
            <Link href="https://nonameonlyaim.blogspot.com/">Telegram</Link>
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Footer;
