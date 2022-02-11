import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
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
  FormHelperText,
  FormErrorMessage,
  Input,
  Select,
  Tabs,
  TabList,
  Tab
} from '@chakra-ui/react'
import Head from 'next/head'
import { FaCheckCircle } from 'react-icons/fa'
import { getDocumentMeta } from '../../../../utils/main'

export default function InsuranceAppForm() {
  const { title } = getDocumentMeta()
  // Default tab state
  const defaultTabColor = {color: '#1A202C', bg: 'white', border: '1px solid #E2E8F0'}
  const [genderTabColor, setGenderTabColor] = useState(defaultTabColor)
  const [workConTabColor, setWorkConTabColor] = useState(defaultTabColor)
  const [paymentTabColor, setPaymentTabColor] = useState(defaultTabColor)

  // Default form state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nric, setNric] = useState('')
  const [gender, setGender] = useState('')
  const [workCondition, setWorkCondition] = useState('')
  const [occupation, setOccupation] = useState('')
  const [insPlan, setInsPlan] = useState('')
  const [payment, setPayment] = useState('')

  const validateName = (value) => {
    let error
    if (!value) {
      error = 'Please enter your full name based on nric'
    }
    /** Can describe any custom validation for the name field
     ** by extending else if condition **/
    return error
  }

  const validateNric = (value) => {
    let error
    if (!value) {
      error = 'Please enter your nric'
    }
    /** Can describe any custom validation for the nric field
     ** by extending else if condition **/
    return error
  }

  const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'Please enter your email address'
    }
    /** Can describe any custom validation for the email field
     ** by extending else if condition **/
    return error
  }

  const validateOccupation = (value) => {
    let error
    if (!value) {
      error = 'Please enter your current occupation'
    }
    /** Can describe any custom validation for the occupation field
     ** by extending else if condition **/
    return error
  }

  const validateInsPlan = (value) => {
    let error
    if (!value) {
      error = 'Please select one plan'
    }
    /** Can describe any custom validation for the insurance plan field
     ** by extending else if condition **/
    return error
  }

  const validateGender = (value) => {
    let error
    if (!value) {
      error = 'Please select your gender'
    }
    /** Can describe any custom validation for the gender field
     ** by extending else if condition **/
    return error
  }

  const validateWorkCondition = (value) => {
    let error
    if (!value) {
      error = 'Please choose the options above'
    }
    /** Can describe any custom validation for the work condition field
     ** by extending else if condition **/
    return error
  }

  const validatePayment = (value) => {
    let error
    if (!value) {
      error = 'Please select multiple monthly payments or a lump sum annual payment'
    }
    /** Can describe any custom validation for the payment field
     ** by extending else if condition **/
    return error
  }

  const onClickApplyNow = (values, actions) => {
    alert("Your form successfully submitted")
  }

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
              <Formik
                initialValues={{ 
                  name: '',
                  email: '',
                  nric: '',
                  gender: '',
                  workCondition: '',
                  occupation: '',
                  insPlan: '',
                  payment: ''
                }}
                onSubmit={onClickApplyNow}>
                {(props) => (
                <Box
                as={'form'}
                mt={12}>
                  <Field name={'name'} validate={validateName}>
                    {({ field, form }) => (
                    <FormControl mb={6} isInvalid={form.errors.name && form.touched.name} isRequired>
                      <FormLabel htmlFor={'name'}>Name</FormLabel>
                      <Input id={'name'} {...field} />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'nric'} validate={validateNric}>
                    {({ field, form }) => (
                    <FormControl mb={6} isInvalid={form.errors.nric && form.touched.nric} isRequired>
                      <FormLabel htmlFor={'nric'}>NRIC</FormLabel>
                      <Input id={'nric'} {...field} />
                      <FormErrorMessage>{form.errors.nric}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'gender'} validate={validateGender}>
                    {({ form }) => (
                    <FormControl mb={6} isInvalid={form.errors.gender && form.touched.gender} isRequired>
                      <FormLabel htmlFor={'gender'}>Gender</FormLabel>
                      <Tabs variant={'unstyled'}>
                        <TabList>
                          <Tab
                            px={10}
                            border={1}
                            borderStyle={'solid'}
                            borderColor={'gray.200'}
                            borderTopLeftRadius={6}
                            borderBottomLeftRadius={6}
                            boxShadow={'none'}
                            value={'male'}
                            onClick={(e: any) => {
                              setGender(e.target.value)
                              setGenderTabColor({color: 'white', bg: '#6758CA', border: '1px solid #6758CA'})
                            }}
                            _selected={{ ...genderTabColor, boxShadow: 'none' }}>
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
                            value={'female'}
                            onClick={(e: any) => {
                              setGender(e.target.value)
                              setGenderTabColor({color: 'white', bg: '#6758CA', border: '1px solid #6758CA'})
                            }}
                            _selected={{ ...genderTabColor, boxShadow: 'none' }}>
                              Female
                          </Tab>
                        </TabList>
                      </Tabs>
                      <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'email'} validate={validateEmail}>
                    {({ field, form }) => (
                    <FormControl mb={6} isInvalid={form.errors.email && form.touched.email} isRequired>
                      <FormLabel htmlFor={'email'}>Email</FormLabel>
                      <Input id={'email'} {...field} />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'workCondition'} validate={validateWorkCondition}>
                    {({ form }) => (
                    <FormControl mb={6} isInvalid={form.errors.workCondition && form.touched.workCondition} isRequired>
                      <FormLabel htmlFor={'workCondition'}>Do you work indoors full-time ?</FormLabel>
                      <FormHelperText mb={4}>Work that is done indoors without the use of heavy machinery or exposure to hazardous conditions</FormHelperText>
                      <Tabs variant={'unstyled'}>
                        <TabList>
                          <Tab
                            px={10}
                            border={1}
                            borderStyle={'solid'}
                            borderColor={'gray.200'}
                            borderTopLeftRadius={6}
                            borderBottomLeftRadius={6}
                            boxShadow={'none'}
                            value={'true'}
                            onClick={(e: any) => {
                              setWorkCondition(e.target.value)
                              setWorkConTabColor({color: 'white', bg: '#6758CA', border: '1px solid #6758CA'})
                            }}
                            _selected={{ ...workConTabColor, boxShadow: 'none' }}>
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
                            value={'false'}
                            onClick={(e: any) => {
                              setWorkCondition(e.target.value)
                              setWorkConTabColor({color: 'white', bg: '#6758CA', border: '1px solid #6758CA'})
                            }}
                            _selected={{ ...workConTabColor, boxShadow: 'none' }}>
                              No
                          </Tab>
                        </TabList>
                      </Tabs>
                      <FormErrorMessage>{form.errors.workCondition}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'occupation'} validate={validateOccupation}>
                    {({ field, form }) => (
                    <FormControl mb={6} isInvalid={form.errors.occupation && form.touched.occupation} isRequired>
                      <FormLabel htmlFor={'occupation'}>Occupation</FormLabel>
                      <Input id={'occupation'} {...field} />
                      <FormErrorMessage>{form.errors.occupation}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'insPlan'} validate={validateInsPlan}>
                    {({ field, form }) => (
                    <FormControl mb={6} isInvalid={form.errors.insPlan && form.touched.insPlan} isRequired>
                      <FormLabel htmlFor={'insPlan'}>Plans</FormLabel>
                      <Select placeholder={'Select option'} {...field}>
                        <option value={'Plan A'}>Plan A</option>
                        <option value={'Plan B'}>Plan B</option>
                        <option value={'Plan C'}>Plan C</option>
                      </Select>
                      <FormErrorMessage>{form.errors.insPlan}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name={'payment'} validate={validatePayment}>
                    {({ form }) => (
                    <FormControl isInvalid={form.errors.payment && form.touched.payment} isRequired>
                      <FormLabel htmlFor={'payment'}>Select Your Payment Frequency</FormLabel>
                      <Tabs variant={'unstyled'}>
                        <TabList>
                          <Tab
                            px={10}
                            border={1}
                            borderStyle={'solid'}
                            borderColor={'gray.200'}
                            borderTopLeftRadius={6}
                            borderBottomLeftRadius={6}
                            boxShadow={'none'}
                            value={'monthly'}
                            onClick={(e: any) => {
                              setPayment(e.target.value)
                              setPaymentTabColor({color: 'white', bg: '#6758CA', border: '1px solid #6758CA'})
                            }}
                            _selected={{ ...paymentTabColor, boxShadow: 'none' }}>
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
                            value={'yearly'}
                            onClick={(e: any) => {
                              setPayment(e.target.value)
                              setPaymentTabColor({color: 'white', bg: '#6758CA', border: '1px solid #6758CA'})
                            }}
                            _selected={{ ...paymentTabColor, boxShadow: 'none' }}>
                              Annually RM 0.00
                          </Tab>
                        </TabList>
                      </Tabs>
                    </FormControl>
                    )}
                  </Field>
                  <Box mt={12}>
                    <Button bgColor={'proY.10'} _hover={{ bgColor: 'proY.20'}} color={'black'} borderRadius={'full'} px={10} py={8} type={'submit'}>Apply Now</Button>
                  </Box>
                </Box>
                )}
              </Formik>
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