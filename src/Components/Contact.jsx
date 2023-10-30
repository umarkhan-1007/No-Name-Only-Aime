import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <Box
      w={'full'}
      h={'100vh'}
      scrollBehavior={'smooth'}
      pos={'-webkit-sticky'}
      pt={'5'}
    >
      <Heading
        textAlign={'center'}
        textTransform={'capitalize'}
        size={'md'}
        fontWeight={'medium'}
      >
        get in touch
      </Heading>
      <Heading textAlign={'center'} textTransform={'capitalize'} size={'2xl'}>
        Contact us
      </Heading>
      <HStack pt={'10'}>
        <Stack pl={'20'} w={'full'} gap={'4'}>
          <Heading size={'xl'} textTransform={'capitalize'} fontSize={'2xl'}>
            General customer care & technicl support
          </Heading>
          <Heading
            size={'md'}
            fontWeight={'normal'}
            textTransform={'capitalize'}
            pt={'2'}
            fontSize={'md'}
          >
            as we address the needs of our audince, we are contact form and
            email.
          </Heading>
          <HStack w={'70%'} pt={'4'}>
            <Text fontWeight={'semibold'}>FullName</Text>
            <Input placeholder="Enter your Name" />
          </HStack>
          <HStack w={'70%'} pt={'4'}>
            <Text fontWeight={'semibold'}>Email</Text>
            <Input placeholder="Enter your Email" />
          </HStack>
          <HStack w={'70%'} pt={'4'}>
            <Text fontWeight={'semibold'}>Subject</Text>
            <Input placeholder="Enter your Subject" />
          </HStack>
          <HStack w={'70%'} pt={'4'}>
            <Text fontWeight={'semibold'}>massage</Text>
            <Textarea placeholder="Enter your Massage and Qures" size={'md'} />
          </HStack>
          <Button
            w={'fit-content'}
            variant={'solid'}
            colorScheme="linkedin"
            borderRadius={'md'}
          >
            Submit
          </Button>
        </Stack>
        <Stack w={'70%'}>
          <HStack fontSize={'6xl'}>
            <AiOutlineMail color='red'/>
            <Heading size={'md'}>umarkhan71711@gmail.com</Heading>
          </HStack>
          <Heading
            borderLeft={'5px solid red'}
            w={'fit-content'}
            borderRight={'5px solid red'}
            pl={'4'}
            pr={'4'}
          >
            Find us on Social
          </Heading>
          <HStack>
            <HStack  fontSize={'2xl'} borderRadius={'20'} w={'50'} h={'14'} >
                <AiFillTwitterCircle size={'2xl'} color={'#00acee'}/>
                <AiFillInstagram size={'2xl'} color='red'/>
                <AiFillFacebook size={'2xl'} color='	#1877F2'/>
            </HStack>
        </HStack>
        </Stack>
      </HStack>
    </Box>
  );
};

export default Contact;
