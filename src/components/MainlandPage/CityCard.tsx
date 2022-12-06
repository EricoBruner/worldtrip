import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  urlImage: string;
  country: string;
  city: string;
  urlCountryFlag: string;
}

export default function CityCard({urlImage, country, city, urlCountryFlag }: CityCardProps) {
  return (
    <Box 
      bg={'white'} 
    >
      <Image src={urlImage} />

      <Flex 
        w={'256px'} 
        h={'100px'} 
        border={'1px solid rgb(255, 186, 8, 0.5)'} 
        borderBlockStart={'0'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderRadius={'0 0 4px 4px'}
        pl={'24px'}
        pr={'24px'}
      >
        <Flex 
          flexDirection={'column'} 
          alignItems={'flex-start'} 
          justifyContent={'center'} 
          gap={'12px'} 
        >
          <Text 
            fontFamily={'Barlow'} 
            fontSize={'20px'} 
            fontWeight={'semibold'}
          >
            {country}
          </Text>
          <Text 
            fontFamily={'Barlow'} 
            fontSize={'16px'} 
            fontWeight={'medium'} 
            color={'gray.300'}
          >
            {city}
          </Text>
        </Flex>

        <Image
          borderRadius='full'
          boxSize='30px'
          src={urlCountryFlag}
          alt={country}
        />

      </Flex> 
    </Box>
  );
}