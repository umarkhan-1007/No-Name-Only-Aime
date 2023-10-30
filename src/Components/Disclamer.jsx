import { Stack, Heading,Text, Input, Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Disclamer = () => {
  return (
    <Stack w={'full'} h={'100vh'}>
        <Heading textAlign={'center'} size={'3xl'}>Disclaimer</Heading>
        <Heading>WEBSITE DISCLAIMER</Heading>
        <Text>The information provided by No name Only aim (“we,” “us” or “our”) on https://nonameonlyaim.blogspot.com/ (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</Text>
        <Heading>EXTERNAL LINKS DISCLAIMER</Heading>
        <Text>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</Text>
        <Heading>PROFESSIONAL DISCLAIMER</Heading>
        <Text>The Site cannot and does not contain pharmaceutical advice. The pharmaceutical information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of pharmaceutical advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.</Text>
        <Heading>AFFILIATES DISCLAIMER (optional if we promote)</Heading>
        <Text>The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn advertising fees by linking to Amazon.com and affiliated websites.</Text>
        <HStack alignItems={'center'}>
        <Input  placeholder='SEARCH YOUR QUESTION' w={'70%'}/> <Button colorScheme='linkedin'>Search</Button>
        </HStack>
    </Stack>
  )
}

export default Disclamer
