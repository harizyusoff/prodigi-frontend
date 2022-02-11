import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Icon,
  Button,
  VStack,
  StackDivider
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCommentDots, FaShoppingCart } from 'react-icons/fa'
import { text } from 'stream/consumers'
import { insurancePlansData } from '../../../mock-data/main'

export default function SearchResult() {
  return (
    <Box>
      <Head>
        <title>Search Result</title>
      </Head>
      <Flex 
        className={'page-banner'}
        h={'400px'}
        direction={'column'}
        align={'center'}
        justify={'center'}>
        <Heading as={'h1'} color={'white'} fontSize={40} fontWeight={'bold'} mb={3}>
          Search Result
        </Heading>
        <Text color={'white'} align={'center'} fontStyle={'italic'}>
          Result based on keyword entered. Showing 1 - 7 of about 7 results
        </Text>
      </Flex>
      <Container
        maxW={'7xl'}
        py={24}>
        <Flex>
          <VStack
            flex={2}
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align={'stretch'}
          >
            {insurancePlansData.map((data, planId) => (
            <Box key={planId}>
              <Box py={30}>
                <Text mb={1} fontSize={'20px'} fontWeight={'semibold'}>{data.title}</Text>
                <Text mb={10}>{data.description}</Text>
                <Link href={data.planDetailsUrl}>
                  <Text cursor={'pointer'} _hover={{textDecoration: 'underline', color: 'proPr.30'}} color={'gray.600'}>View Details</Text>
                </Link>
              </Box>
            </Box>
            ))}
          </VStack>
          <VStack
            flex={1}
            justify={'center'}
            direction={'column'}
            h={'fit-content'}
            borderRadius={6}
            border={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            ml={10}>
            <Box px={10} py={30} w={'full'}>
              <Flex align={'center'} mb={2}><Icon as={FaCommentDots} mr={2} w={5} h={5} /><Text fontSize={18} fontWeight={'semibold'} >Contact Us</Text></Flex>
              <Text>Contact us 24/7 through our Live Chat</Text>
            </Box>
            <Box px={10} pb={30} w={'full'}>
              <Flex align={'center'} mb={2}><Icon as={FaShoppingCart} mr={2} w={5} h={5} /><Text fontSize={18} fontWeight={'semibold'} >Get A Quote</Text></Flex>
              <Text mb={3}>Available insurance quotation for</Text>
              <List spacing={1}>
                <ListItem cursor={'pointer'} _hover={{color: 'proPr.30'}}>
                  <Link href="/products/health-insurance">
                  Health
                  </Link>
                </ListItem>
                <ListItem cursor={'pointer'} _hover={{color: 'proPr.30'}}>
                  Life and Family
                </ListItem>
                <ListItem cursor={'pointer'} _hover={{color: 'proPr.30'}}>
                  Investment
                </ListItem>
              </List>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}