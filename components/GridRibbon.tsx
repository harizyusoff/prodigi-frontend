import {
  Box,
  Text
} from '@chakra-ui/react'

const ribbonStyled = (addOnStyle) => {
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

export default function GridRibbon({ribbonTitle}) {
  // Default ribbon color - Purple
  let mainRibbonColor = '#6758CA';
  let backRibbonColor = '#52469E';

  // Title 'Trending' set ribbon color - Red
  if (ribbonTitle === 'Trending') {
    mainRibbonColor = '#EB4d4B';
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
      _after={ribbonStyled({bottom: 0, right: 0, border: `5px solid ${backRibbonColor}`})}
      _before={ribbonStyled({top: 0, left: 0, border: `5px solid ${backRibbonColor}`})}
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
        {ribbonTitle}
      </Text>
    </Box>
  )
}