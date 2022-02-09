
import { Container, Box, Button, Heading, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      <Container maxW={'7xl'}>
      <Head>
        <title>Prodiginow Insurance</title>
        <meta name="description" content="Insurance for your need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Flex
          h={'90vh'}
          align={'center'}
          justify={'center'}
          direction={'column'}>
            <Heading mb={8}>Welcome to Prodiginow Insurance</Heading>
            <Link href={'/products/health-insurance'}>
              <Button bgColor={'proY.10'} _hover={{ bgColor: 'proY.20'}} color={'black'} borderRadius={'full'} px={10} py={8}>View Products</Button>
            </Link>
        </Flex>
      </Container>
    </Box>
  )
}
