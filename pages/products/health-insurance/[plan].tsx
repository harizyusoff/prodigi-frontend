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
import { FaHandHoldingUsd, FaHistory, FaViruses, FaCreditCard, FaCarCrash, FaReceipt, FaBed, FaHospital, FaInfinity } from 'react-icons/fa'

export default function HealthInsurance() {
  const router = useRouter()
  const { plan } = router.query
  const title = String(plan).split("-").join(" ")

  return (
    <Box>
      <Flex 
        h={'400px'}
        direction={'column'}
        align={'center'}
        justify={'center'}
        bgGradient='linear(to-r, #5C449A, #1879BD)'>
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
          <Flex
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
            <Icon as={FaViruses} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Covid-19 Cover</Text>
            <Text mb={3}>Get covered for reimbursement claims on Covid-19 hospitalisation and vaccine side-effects</Text>
          </Flex>
          <Flex
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
            <Icon as={FaHistory} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Instant Approval</Text>
            <Text mb={3}>No medical check-up required. Simply answer 3 health questions for immediate cover</Text>
          </Flex>
          <Flex
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
            <Icon as={FaHandHoldingUsd} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>From RM1.74 Per Day</Text>
            <Text mb={3}>Enjoy further savings on premiums of up to 30% when you select a deductible of up to RM5,000</Text>
          </Flex>
          <Flex
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
            <Icon as={FaCreditCard} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Cashless Hospital Admissions</Text>
            <Text mb={3}>Guarantee Letters are just one call away with our 24/7 hotline</Text>
          </Flex>
          <Flex
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
            <Icon as={FaCarCrash} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Accidents & Emergencies</Text>
            <Text mb={3}>No cap on coverage for emergency accidental outpatient treatment claimable up to your annual limit</Text>
          </Flex>
          <Flex
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
            <Icon as={FaReceipt} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Outpatient Benefits</Text>
            <Text mb={3}>Extensive outpatient medical coverage for cancer, kidney dialysis, pre- and post-hospitalisation treatments</Text>
          </Flex>
          <Flex
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
            <Icon as={FaBed} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>he Best Hospitals At Affordable Premiums</Text>
            <Text mb={3}>Gain access to one of the largest network of panel hospitals in Malaysia with 140 medical centres across the country boasting best-in-class healthcare specialists</Text>
          </Flex>
          <Flex
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
            <Icon as={FaHospital} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Premium Room Choices</Text>
            <Text mb={3}>Generous Room & Board coverage up to RM300, providing the benefit of choice for single rooms & suites</Text>
          </Flex>
          <Flex
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
            <Icon as={FaInfinity} w={20} h={20} mb={10} />
            <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Unlimited Lifetime Cover</Text>
            <Text mb={3}>Be worry-free about insufficient medical cover with unlimited renewal of your annual limit every year during the tenure of this policy</Text>
          </Flex>
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
            <Button bgColor={'proY.10'} _hover={{ bgColor: 'proY.20'}} color={'black'} borderRadius={'full'} px={10} py={8}>Apply Online</Button>
          </Box>
        </Container>
      </Flex>
    </Box>
  )
}