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
  Button
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import GridRibbon from '../../components/GridRibbon'
import { insurancePlansData } from '../../mock-data/main'

export default function HealthInsurance() {
  return (
    <Box>
      <Head>
        <title>Health Insurance</title>
      </Head>
      <Flex
        className={'page-banner'}
        h={'400px'}
        direction={'column'}
        align={'center'}
        justify={'center'}>
        <Heading as={'h1'} color={'white'} fontSize={40} fontWeight={'bold'} mb={3}>
          Health Insurance
        </Heading>
        <Text color={'white'} w={'350px'} align={'center'}>
          Unbelievable health insurance solution covers for medical expenses in the future
        </Text>
      </Flex>
      <Container
        maxW={'7xl'}
        py={24}>
        <Box>
          <SimpleGrid columns={[1, 2, 3]} spacing={5}>
            {insurancePlansData.map((data, planId) => (
            <Flex
              key={planId}
              position={'relative'}
              direction={'column'}
              border={1}
              align={'center'}
              justify={'center'}
              px={5}
              py={20}
              borderStyle={'solid'}
              borderColor={'gray.200'}
              borderRadius={8}
              cursor={'pointer'}
            >
              {/* Ribbon: Display ribbon when remark about insurance plan existed */}
              {data.remark ? (
                <GridRibbon label={data.remark} />
              ) : (
                <></>
              )}
              {/* Insurance Lists Grid */}
              <Link href={'/products/health-insurance/[plan]'} as={data.planDetailsUrl}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={data.icon} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>{data.title}</Text>
                  <Text mb={3}>{data.description}</Text>
                  <List spacing={3} mb={10}>
                    {data.benefits.map((benefit, benefitId) => (
                      <ListItem key={benefitId}>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                        {benefit}
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              </Link>
              <Link href={'/products/health-insurance/[plan]/submission'} as={data.applyOnlineUrl}>
                <Button bgColor={'proY.10'} _hover={{ bgColor: 'proY.20'}} color={'black'} borderRadius={'full'} px={10} py={8}>Apply Online</Button>
              </Link>
            </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}