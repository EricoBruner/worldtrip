import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function SlidePagination() {
  return (
    <Box  
      mt={['20px','35px', '43px', '52px']}
      mb={['24px','32px','40px']}
      w={['100%', '100%', '100%', '100%', '1240px']}
      h={['250px','450px']}
    >
      <Swiper
        autoHeight={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Flex 
            bgImage={'url("/images/continentimage.png")'}
            bgRepeat="no-repeat"
            h={['250px','450px']}
            justify={'center'}
            direction={'column'}
          > 
                <Text color={'gray.50'} fontSize={['24px','36px','40px','48px']} fontWeight={'bold'}>
                  <Link href={'continents/europe'}>
                    Europa
                  </Link>
                </Text>
                <Text color={'gray.100'} fontSize={['14px','18px','20px','24px']} fontWeight={'bold'}>
                  <Link href={'continents/europe'}>
                    O continente mais antigo.
                  </Link>
                </Text>
              
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex 
            bgImage={'url("/images/northamericaimage.png")'}
            bgRepeat="no-repeat"
            h={['250px','450px']}
            justify={'center'}
            direction={'column'}
          >
              <Text color={'gray.50'} fontSize={['24px','36px','40px','48px']} fontWeight={'bold'}>
                América do Norte
              </Text>
              <Text color={'gray.100'} fontSize={['14px','18px','20px','24px']} fontWeight={'bold'}>
                O continente mais belo.
              </Text>
          </Flex>
        </SwiperSlide>

      </Swiper>
    </Box>
  );
}