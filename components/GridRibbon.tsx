import {
  Box,
  Text
} from '@chakra-ui/react'

// Reusable ribbon style accepting addon styling
const ribbonStyle = (addOnStyle) => {
  return {
    content: '""',
    position: 'absolute',
    display: 'block',
    zIndex: '-1',
    border: '5px solid #52469E',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    ...addOnStyle
  }
}

/** GridRibbon component is the UI to label insurance plans in 
 ** the insurance catalog page or any page that contain any remark 
 ** (i.e New, Trending, etc) in the grid. This component accepting 
 ** string prop named as label
**/
export default function GridRibbon({label}) {
  // Default ribbon color - Purple
  let mainRibbonColor = '#6758CA'
  let backRibbonColor = '#52469E'

  // Label 'Trending' set ribbon color - Red
  if (label === 'Trending') {
    mainRibbonColor = '#EB4d4B'
    backRibbonColor = '#D63031'
  }

  return (
    <Box
      w={'150px'}
      h={'150px'}
      overflow={'hidden'}
      position={'absolute'}
      top={'-10px'}
      right={'-10px'}
      _after={ribbonStyle({bottom: 0, right: 0, border: `5px solid ${backRibbonColor}`})}
      _before={ribbonStyle({top: 0, left: 0, border: `5px solid ${backRibbonColor}`})}
      >
      <Text
        as={'span'}
        position={'absolute'}
        display={'block'}
        w={'240px'}
        py={'15px'}
        px={0}
        bgColor={mainRibbonColor}
        color={'white'}
        left={'-25px'}
        top={'30px'}
        transform={'rotate(45deg)'}
        align={'center'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
      >
        {label}
      </Text>
    </Box>
  )
}