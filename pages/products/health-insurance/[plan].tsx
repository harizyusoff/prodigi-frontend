import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Icon,
  Button
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { benefitsData } from '../../../mock-data/main'
import { getDocumentMeta } from '../../../utils/main'

export default function HealthInsurancePlanDetails() {
  const { title, plan } = getDocumentMeta()

  return (
    <Box>
      <Head>
        <title>{title} Plan Details</title>
      </Head>
      <Flex 
        className={'page-banner'}
        h={'400px'}
        direction={'column'}
        align={'center'}
        justify={'center'}>
        <Heading as={'h1'} color={'white'} fontSize={40} fontWeight={'bold'} mb={3} textTransform={'capitalize'}>
          {title}
        </Heading>
        <Text color={'white'}>
          A hospital and surgical insurance plan that provides comprehensive medical coverage
        </Text>
      </Flex>
      <Container
        maxW={'7xl'}
        pt={24}>
        <Text fontSize={30} fontWeight={'semibold'} align={'center'} mb={24}>
          Key Benefits
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {benefitsData.map((data, benefitId) => (
          <Flex
            key={benefitId}
            direction={'column'}
            border={1}
            align={'center'}
            justify={'center'}
            px={5}
            py={20}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            borderRadius={8}
          >
            <Icon as={data.icon} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>{data.title}</Text>
            <Text mb={3}>{data.description}</Text>
          </Flex>
          ))}
        </SimpleGrid>
        <Text align={'center'} my={24}>
          Premium will be increased on the first day of the next policy year, in accordance to the age you attained the policy. Claims are on a reimbursement basis for Covid-19 with no cashless facility. Benefits are subject to terms & conditions. Please view the downloads section below for more details
        </Text>
      </Container>
      <Flex direction={'column'} py={24} bgColor={'proPr.20'}>
        <Container maxW={'7xl'}>
          <Text fontSize={30} fontWeight={'semibold'} align={'center'} mb={12} w={'full'} color={'white'}>
            Cover your medical needs with Prodigi's {title}
          </Text>
          <Box w={'full'} textAlign={'center'}>
            <Link href={'/products/health-insurance/[plan]/submission'} as={`/products/health-insurance/${plan}/submission`}>
              <Button bgColor={'proY.10'} _hover={{ bgColor: 'proY.20'}} color={'black'} borderRadius={'full'} px={10} py={8}>Apply Online</Button>
            </Link>
          </Box>
        </Container>
      </Flex>
    </Box>
  )
}