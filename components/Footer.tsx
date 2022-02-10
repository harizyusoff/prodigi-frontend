import {
  Box,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import SocialButton from './SocialButton'

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text fontSize={14} color={'#4A5528'}>© 2022 Prodiginow. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}