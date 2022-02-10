import {
  chakra,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

/** Dynamic social media button can be used for any social media.
 ** Just specifically provide label and href to any social media following
 ** up with the icon which can be in react component or image asset
**/
export default function SocialButton ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}