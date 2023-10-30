import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  HStack,
} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <>
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src="https://i.ytimg.com/vi/hd-XYftq3TQ/mqdefault.jpg" />
            <p className="legend">Application From Felling</p>
          </div>
          <div>
            <img src="https://i.ytimg.com/vi/QVMj91pbFiM/mqdefault.jpg" />
            <p className="legend">Pharmacy Colleges</p>
          </div>
          <div>
            <img src="https://i.ytimg.com/vi/OoQFWuYiSb0/mqdefault.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Box>
      <Container minH={'100vh'} maxW={'container.xl'} top={'10'}>
        <Heading
          textTransform={'uppercase'}
          borderBottom={'1px'}
          w={'fit-content'}
          m={'auto'}
          pt={'20'}
        >
          Hot Update
        </Heading>
        <Box display={'flex'} flexWrap={'wrap'} gap={'10'} w={'100%'} pt={'10'} pb={'10'}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.ytimg.com/vi/s33qnwgbOyQ/mqdefault.jpg"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                textTransform={'uppercase'}
                borderBottom={'1px solid black'}
                w={'fit-content'}
              >
                Previous year Cutoff{' '}
              </Heading>
              <Text>
                B.A 1 B.A English Medium (Grant) Round 1 Round 2 2 B.A English
                Medium (Non-Grant) Round 1 Round 2 3 B.A Marathi Medium (Grant)
                Round 1 Round 2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup
              spacing="2"
              display={'flex'}
              justifyContent={'center'}
              w={'full'}
            >
              <Button variant="solid" colorScheme="blue">
                Read More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.ytimg.com/vi/s33qnwgbOyQ/mqdefault.jpg"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                textTransform={'uppercase'}
                borderBottom={'1px solid black'}
                w={'fit-content'}
              >
                Previous year Cutoff{' '}
              </Heading>
              <Text>
                B.A 1 B.A English Medium (Grant) Round 1 Round 2 2 B.A English
                Medium (Non-Grant) Round 1 Round 2 3 B.A Marathi Medium (Grant)
                Round 1 Round 2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup
              spacing="2"
              display={'flex'}
              justifyContent={'center'}
              w={'full'}
            >
              <Button variant="solid" colorScheme="blue">
                Read More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.ytimg.com/vi/s33qnwgbOyQ/mqdefault.jpg"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                textTransform={'uppercase'}
                borderBottom={'1px solid black'}
                w={'fit-content'}
              >
                Previous year Cutoff{' '}
              </Heading>
              <Text>
                B.A 1 B.A English Medium (Grant) Round 1 Round 2 2 B.A English
                Medium (Non-Grant) Round 1 Round 2 3 B.A Marathi Medium (Grant)
                Round 1 Round 2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup
              spacing="2"
              display={'flex'}
              justifyContent={'center'}
              w={'full'}
            >
              <Button variant="solid" colorScheme="blue">
                Read More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.ytimg.com/vi/s33qnwgbOyQ/mqdefault.jpg"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                textTransform={'uppercase'}
                borderBottom={'1px solid black'}
                w={'fit-content'}
              >
                Previous year Cutoff{' '}
              </Heading>
              <Text>
                B.A 1 B.A English Medium (Grant) Round 1 Round 2 2 B.A English
                Medium (Non-Grant) Round 1 Round 2 3 B.A Marathi Medium (Grant)
                Round 1 Round 2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup
              spacing="2"
              display={'flex'}
              justifyContent={'center'}
              w={'full'}
            >
              <Button variant="solid" colorScheme="blue">
                Read More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.ytimg.com/vi/s33qnwgbOyQ/mqdefault.jpg"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                textTransform={'uppercase'}
                borderBottom={'1px solid black'}
                w={'fit-content'}
              >
                Previous year Cutoff{' '}
              </Heading>
              <Text>
                B.A 1 B.A English Medium (Grant) Round 1 Round 2 2 B.A English
                Medium (Non-Grant) Round 1 Round 2 3 B.A Marathi Medium (Grant)
                Round 1 Round 2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup
              spacing="2"
              display={'flex'}
              justifyContent={'center'}
              w={'full'}
            >
              <Button variant="solid" colorScheme="blue">
                Read More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.ytimg.com/vi/s33qnwgbOyQ/mqdefault.jpg"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                textTransform={'uppercase'}
                borderBottom={'1px solid black'}
                w={'fit-content'}
              >
                Previous year Cutoff{' '}
              </Heading>
              <Text>
                B.A 1 B.A English Medium (Grant) Round 1 Round 2 2 B.A English
                Medium (Non-Grant) Round 1 Round 2 3 B.A Marathi Medium (Grant)
                Round 1 Round 2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup
              spacing="2"
              display={'flex'}
              justifyContent={'center'}
              w={'full'}
            >
              <Button variant="solid" colorScheme="blue">
                Read More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </Box>
      </Container>
    </>
  );
};

export default Home;
