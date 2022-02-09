import {
  Box,
  Text,
  Grid,
  GridItem,
  Container,
  Stack,
  SimpleGrid,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Icon,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaCheckCircle, FaStethoscope, FaHeartbeat, FaViruses, FaVial, FaProcedures, FaClinicMedical, FaSyringe } from 'react-icons/fa'

export default function HealthInsurance() {
  return (
    <Box>
      <Flex 
        border={'1px solid'}
        h={'400px'}
        direction={'column'}
        align={'center'}
        justify={'center'}
        bgGradient='linear(to-r, #5C449A, #1879BD)'>
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
            {/* Medical Pass */}
            <Flex
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
              {/* Right Side Ribbon */}
              <Box
                w={'150px'}
                h={'150px'}
                overflow={'hidden'}
                position={'absolute'}
                top={'-10px'}
                right={'-10px'}
                _after={{
                  content: '""',
                  position: 'absolute',
                  display: 'block',
                  zIndex: '-1',
                  border: '5px solid #E0A800',
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  bottom: 0,
                  right: 0
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  display: 'block',
                  zIndex: '-1',
                  border: '5px solid #E0A800',
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  top: 0,
                  left: 0
                }}
                >
                <Text
                  as={'span'}
                  position={'absolute'}
                  display={'block'}
                  w={'240px'}
                  py={'15px'}
                  px={0}
                  // boxShadow={'0 5px 10px rgba(0,0,0,.1)'}
                  bgColor={'#FFBF00'}
                  color={'white'}
                  left={'-25px'}
                  top={'30px'}
                  transform={'rotate(45deg)'}
                  align={'center'}
                  fontWeight={'bold'}
                  textTransform={'uppercase'}
                >
                  New
                </Text>
              </Box>
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/medical-pass'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaStethoscope} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>e-Medical Pass Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
            {/* Cancer Care Pass */}
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
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/cancer-care-pass'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaHeartbeat} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>e-CancerCare Pass Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
            {/* Medical Plus */}
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
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/medical-plus'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaViruses} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Medical Plus Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
            {/* Invest Linked Medical Plus */}
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
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/invest-linked-medical-plus'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaProcedures} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Investment-Linked Medical Plus Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
            {/* Invest Linked Medical Gold */}
            <Flex
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
              {/* Right Side Ribbon */}
              <Box
                w={'150px'}
                h={'150px'}
                overflow={'hidden'}
                position={'absolute'}
                top={'-10px'}
                right={'-10px'}
                _after={{
                  content: '""',
                  position: 'absolute',
                  display: 'block',
                  zIndex: '-1',
                  border: '5px solid #D63031',
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  bottom: 0,
                  right: 0
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  display: 'block',
                  zIndex: '-1',
                  border: '5px solid #D63031',
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  top: 0,
                  left: 0
                }}
                >
                <Text
                  as={'span'}
                  position={'absolute'}
                  display={'block'}
                  w={'240px'}
                  py={'15px'}
                  px={0}
                  // boxShadow={'0 5px 10px rgba(0,0,0,.1)'}
                  bgColor={'#EB4d4B'}
                  color={'white'}
                  left={'-25px'}
                  top={'30px'}
                  transform={'rotate(45deg)'}
                  align={'center'}
                  fontWeight={'bold'}
                  textTransform={'uppercase'}
                >
                  Trending
                </Text>
              </Box>
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/invest-linked-medical-gold'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaSyringe} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Investment-Linked Medical Gold Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
            {/* Invest Linked Medical Platinum */}
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
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/invest-linked-medical-platinum'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaClinicMedical} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Investment-Linked Medical Platinum Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
            {/* Invest Linked Medical Covid-19 */}
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
              <Link href={'/products/health-insurance/[plan]'} as={'/products/health-insurance/invest-linked-medical-covid'}>
                <Flex
                  direction={'column'}
                  align={'center'}>
                  <Icon as={FaVial} w={20} h={20} mb={10} />
                  <Text fontSize={18} fontWeight={'semibold'} align={'center'} mb={5}>Investment-Linked Medical COVID-19 Insurance</Text>
                  <Text mb={3}>A medical plan that provides hospital and surgical benefits, and cashless admission</Text>
                  <List spacing={3} mb={10}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      High annual coverage limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      Hospital admission without payment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No lifetime limit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color={'proG.20'} />
                      No medical check-up required
                    </ListItem>
                  </List>
                </Flex>
              </Link>
              <Button bgColor={'proPr.20'} _hover={{ bgColor: 'proPr.30'}} color={'white'} borderRadius={'full'} px={20}>Apply Online</Button>
            </Flex>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}