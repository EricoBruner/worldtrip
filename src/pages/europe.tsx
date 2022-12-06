import { Box, Flex, FormHelperText, HStack, Image, Text } from "@chakra-ui/react";
import Header from "../components/Header";


export default function Europe() {
  return (
    <>
    <Flex w={'100%'} direction={'column'} align={'center'} >
      <Header />

      <Box 
        bgImage={'url("/images/europeimage.png")'}
        bgRepeat="no-repeat"
        w={'100%'}
        h={'500px'}
        display={'flex'}
        alignItems={'end'}
        paddingBlockEnd={'60px'}
        justifyContent={'center'}
      >
        <Text 
          fontSize={'48px'} 
          fontWeight={'semibold'} 
          color={'gray.50'}
          w={'1160px'} 
        >
          Europa
        </Text>
      </Box>

      <Flex
        w={'1160px'} 
        direction={'column'} 
        align={'center'}
        paddingBlockStart={'80px'}
        paddingBlockEnd={'35px'}
      >
        <Flex w={'100%'}>
          <Text 
            mr={'70px'} 
            textAlign={'justify'} 
            maxW={'600px'}
            fontSize={'24px'}
            fontWeight={'normal'}
          >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <HStack spacing={'42px'}>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'}>
              <Text color={'yellow.900'} fontSize={'48px'} fontWeight={'semibold'}>50</Text>
              <Text fontSize={'24px'} fontWeight={'semibold'}>paises</Text>
            </Box>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'}>
              <Text color={'yellow.900'} fontSize={'48px'} fontWeight={'semibold'}>60</Text>
              <Text fontSize={'24px'} fontWeight={'semibold'}>linguas</Text>
            </Box>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'}>
              <Text color={'yellow.900'} fontSize={'48px'} fontWeight={'semibold'}>27</Text>
              <Text fontSize={'24px'} fontWeight={'semibold'}>cidades +100</Text>
            </Box>
          </HStack>

        </Flex>

        <Flex w={'100%'} direction={'column'} mt={'80px'}>
          <Text align={'left'} fontSize={'36px'} fontWeight={'medium'}>
            Cidades 100+
          </Text>

          <Flex mt={'40px'}>
            <Box 
              bg={'white'} 
              overflow={'hidden'}
            >
              <Image src={'/images/londresimage.png'} />
              <Text>Londres</Text>
              <Text>Reino Unido</Text>
            </Box>
          </Flex>          
        </Flex>
      </Flex>
    </Flex>
    </>
  )
}
