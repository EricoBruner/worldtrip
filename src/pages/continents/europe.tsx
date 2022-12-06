import { Flex, HStack, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import Banner from "../../components/MainlandPage/Banner";
import CityCard from "../../components/MainlandPage/CityCard";
import Description from "../../components/MainlandPage/Description";
import GeneralInformation from "../../components/MainlandPage/GeneralInformation";

export default function Europe() {
  return (
    <>
    <Flex w={'100%'} direction={'column'} align={'center'} >
      <Header />

      <Banner text={'Europa'}/> 

      <Flex
        w={['100%','1160px']} 
        direction={'column'} 
        align={'center'}
        paddingBlockStart={['24px','80px']}
        paddingBlockEnd={['16px','35px']}
        pl={['16px','0']}
        pr={['16px','0']}
      >
        <Flex w={'100%'} flexDirection={['column', 'row']} gap={['16px','70px']} >
          <Description>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Description> 

          <HStack justifyContent={'center'} spacing={'42px'}>
            <GeneralInformation number={50} text={'países'} />
            <GeneralInformation number={60} text={'linguas'} />
            <GeneralInformation number={27} text={'cidades +100'} />
          </HStack>
        </Flex>

        <Flex w={'100%'} direction={'column'} mt={['32px','80px']}>
          <Text align={'left'} fontSize={['24px','36px']} fontWeight={'medium'}>
            Cidades 100+
          </Text>

          <Flex mt={['20px','40px']} align={['center','flex-start']} justifyContent={'center'} gap={'45px'} flexDirection={'column'}>
            <Flex gap={'45px'} flexDirection={['column', 'column', 'row']}>
              <CityCard 
                urlImage={'/images/londresimage.png'} 
                country={'Londres'}
                city={'Reino Unido'}
                urlCountryFlag={'/images/ellipse1.png'}
              />

              <CityCard 
                urlImage={'/images/londresimage.png'} 
                country={'Londres'}
                city={'Reino Unido'}
                urlCountryFlag={'/images/ellipse1.png'}
              />

              <CityCard 
                urlImage={'/images/londresimage.png'} 
                country={'Londres'}
                city={'Reino Unido'}
                urlCountryFlag={'/images/ellipse1.png'}
              />

              <CityCard 
                urlImage={'/images/londresimage.png'} 
                country={'Londres'}
                city={'Reino Unido'}
                urlCountryFlag={'/images/ellipse1.png'}
              />
            </Flex>

            <Flex gap={'45px'} flexDirection={['column', 'column', 'row']}>
              <CityCard 
                urlImage={'/images/londresimage.png'} 
                country={'Londres'}
                city={'Reino Unido'}
                urlCountryFlag={'/images/ellipse1.png'}
              />

              <CityCard 
                urlImage={'/images/londresimage.png'} 
                country={'Londres'}
                city={'Reino Unido'}
                urlCountryFlag={'/images/ellipse1.png'}
              />
            </Flex>

          </Flex>              
        </Flex>
      </Flex>
    </Flex>
    </>
  )
}
