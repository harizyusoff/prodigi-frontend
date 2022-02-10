import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Container,
  Flex,
  Button,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Tabs,
  TabList,
  Tab
} from '@chakra-ui/react'
import Head from 'next/head'
import { FaCheckCircle } from 'react-icons/fa'

export default function InsuranceAppForm() {
  const router = useRouter()
  const { plan } = router.query
  const title = String(plan).split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")

  return (
    <Box>
      <Head>
        <title>{title} Form</title>
      </Head>
      <Container
        maxW={'7xl'}
        py={24}>
          <Flex
            direction={'row'}>
            <Flex
              direction={'column'}
              pr={20}>
              <Text fontSize={24} fontWeight={'bold'} textTransform={'capitalize'} mb={2}>{title} Form</Text>
              <Text>
                Get RM88 for the first 222 customers when you subscribe <Text as={'span'} textTransform={'capitalize'}>{title}</Text> at annual payment!
                Enjoy instant medical coverage online - Full benefits
              </Text>
              <Box mt={12}>
                <FormControl mb={6}>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input id='name' type='string' />
                </FormControl>
                <FormControl mb={6}>
                  <FormLabel htmlFor='nric'>NRIC</FormLabel>
                  <Input id='nric' type='number' />
                </FormControl>
                <FormControl mb={6}>
                  <FormLabel htmlFor='email'>Gender</FormLabel>
                  <Tabs variant='unstyled'>
                    <TabList>
                      <Tab
                        px={10}
                        border={1}
                        borderStyle={'solid'}
                        borderColor={'gray.200'}
                        borderTopLeftRadius={6}
                        borderBottomLeftRadius={6}
                        boxShadow={'none'}
                        _selected={{ color: 'white', bg: 'proPr.20', border: '2px solid #6758CA', boxShadow: 'none' }}>
                          Male
                      </Tab>
                      <Tab
                        px={10}
                        border={1}
                        borderStyle={'solid'}
                        borderColor={'gray.200'}
                        borderTopRightRadius={6}
                        borderBottomRightRadius={6}
                        boxShadow={'none'}
                        _selected={{ color: 'white', bg: 'proPr.20', border: '2px solid #6758CA', boxShadow: 'none' }}>
                          Female
                      </Tab>
                    </TabList>
                  </Tabs>
                </FormControl>
                <FormControl mb={6}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input id='email' type='email' />
                </FormControl>
                <FormControl mb={6}>
                  <FormLabel htmlFor='email'>Do you work indoors full-time ?</FormLabel>
                  <FormHelperText mb={4}>Work that is done indoors without the use of heavy machinery or exposure to hazardous conditions</FormHelperText>
                  <Tabs variant='unstyled'>
                    <TabList>
                      <Tab
                        px={10}
                        border={1}
                        borderStyle={'solid'}
                        borderColor={'gray.200'}
                        borderTopLeftRadius={6}
                        borderBottomLeftRadius={6}
                        boxShadow={'none'}
                        _selected={{ color: 'white', bg: 'proPr.20', border: '2px solid #6758CA', boxShadow: 'none' }}>
                          Yes
                      </Tab>
                      <Tab
                        px={10}
                        border={1}
                        borderStyle={'solid'}
                        borderColor={'gray.200'}
                        borderTopRightRadius={6}
                        borderBottomRightRadius={6}
                        boxShadow={'none'}
                        _selected={{ color: 'white', bg: 'proPr.20', border: '2px solid #6758CA', boxShadow: 'none' }}>
                          No
                      </Tab>
                    </TabList>
                  </Tabs>
                </FormControl>
                <FormControl mb={6}>
                  <FormLabel htmlFor='occupation'>Occupation</FormLabel>
                  <Input id='occupation' type='string' />
                </FormControl>
                <FormControl mb={6}>
                  <FormLabel htmlFor='email'>Plans</FormLabel>
                  <Select placeholder='Select option'>
                    <option value='option1'>Plan A</option>
                    <option value='option2'>Plan B</option>
                    <option value='option3'>Plan C</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email'>Select Your Payment Frequency</FormLabel>
                  <Tabs variant='unstyled'>
                    <TabList>
                      <Tab
                        px={10}
                        border={1}
                        borderStyle={'solid'}
                        borderColor={'gray.200'}
                        borderTopLeftRadius={6}
                        borderBottomLeftRadius={6}
                        boxShadow={'none'}
                        _selected={{ color: 'white', bg: 'proPr.20', border: '2px solid #6758CA', boxShadow: 'none' }}>
                          Monthly RM 0.00
                      </Tab>
                      <Tab
                        px={10}
                        border={1}
                        borderStyle={'solid'}
                        borderColor={'gray.200'}
                        borderTopRightRadius={6}
                        borderBottomRightRadius={6}
                        boxShadow={'none'}
                        _selected={{ color: 'white', bg: 'proPr.20', border: '2px solid #6758CA', boxShadow: 'none' }}>
                          Annual RM 0.00
                      </Tab>
                    </TabList>
                  </Tabs>
                </FormControl>
                <Box mt={12}>
                  <Button bgColor={'proY.10'} _hover={{ bgColor: 'proY.20'}} color={'black'} borderRadius={'full'} px={10} py={8}>Apply Now</Button>
                </Box>
              </Box>
            </Flex>
            <Flex
              flex={1}
              justify={'center'}
              direction={'column'}
              minW={'400px'}
              h={'fit-content'}
              p={6}
              borderRadius={6}
              border={1}
              borderStyle={'solid'}
              borderColor={'gray.200'}>
              <Text fontSize={20} fontWeight={'semibold'} textTransform={'capitalize'} mb={2}>Preconditions for insurance coverage</Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={'proG.20'} />
                  Local citizen only
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={'proG.20'} />
                  Age next birthday from 18 to 55
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={'proG.20'} />
                  BMI range 17 to 30
                </ListItem>
              </List>
            </Flex>
          </Flex>
      </Container>
    </Box>
  )
}