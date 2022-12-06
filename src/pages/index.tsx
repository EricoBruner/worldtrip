import { Box, Divider, Flex, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Header from "../components/Header";
import SlidePagination from "../components/SlidePagination";
import MenuOptions from "../components/MenuOptions";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
    <Flex w={'100%'} direction={'column'} align={'center'} >
      <Header />

      <Box 
        bgImage={'url("/images/home-banner.jpg")'}
        bgPosition={['50% 33%','50% 31%']}
        bgRepeat="no-repeat"
        w={'100%'} 
      >
        <HStack h={['163px','250px','368.21px']} >
          <Stack ml={['16px','20px','140px']}>
            <Text 
              color={'gray.50'} 
              fontWeight={'medium'} 
              fontSize={['20px','36px']}
            >
              5 Continente, <Divider w={'0'}/> infinitas possibilidades.
            </Text>
            <Text
              color={'gray.100'} 
              fontWeight={'normal'} 
              fontSize={['14px','20px']}
            >  
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          { isWideVersion && 
            <Image padding={'130px 0 0 150px'} marginLeft={'200px'} src={'/images/airplane.svg'} />
          }
        </HStack>
      </Box>

      <Flex 
        mt={['36px','80px']} 
        gap={['27px','35px','130px']} 
        w={['275px','100%']}
        ml={['auto']}
        mr={['auto']}
        alignItems={['center']}
        justifyContent={['center']}
        flexWrap={'wrap'}
      >
        <MenuOptions src={'/images/cocktail.svg'} text={'vida noturna'}/>
        <MenuOptions src={'/images/surf.svg'} text={'praia'}/>
        <MenuOptions src={'/images/building.svg'} text={'moderno'}/>
        <MenuOptions src={'/images/museum.svg'} text={'clássico'}/>
        <MenuOptions src={'/images/earth.svg'} text={'e mais...'}/>
      </Flex>

      <Divider 
        borderColor={'gray.700'} 
        borderWidth={'1px'} 
        mt={['36px','50px','80px']}
        w={['60px','70px','80px','90px']} 
      />

      <Stack 
        textAlign={'center'} 
        mt={['24px','36px','48px','60px']} 
        fontWeight={'medium'} 
        fontSize={['20px','28px','36px']}
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Stack>

      <SlidePagination />
    </Flex>
    </>
  )
}
