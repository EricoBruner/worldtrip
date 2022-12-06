import { Box, Text } from "@chakra-ui/react";

interface BannerProps {
  text: string;
}

export default function Banner({text}: BannerProps) {
  return (
    <Box 
      bgImage={'url("/images/europeimage.png")'}
      bgSize={'cover'}
      bgRepeat="no-repeat"
      w={'100%'}
      h={['150px','500px']}
      display={'flex'}
      alignItems={['center','end']}
      paddingBlockEnd={['0','60px']}
      justifyContent={'center'}
    >
      <Text 
        fontSize={['28px','48px']} 
        fontWeight={'semibold'} 
        color={'gray.50'}
        w={['auto','1160px']} 
      >
        {text}
      </Text>
    </Box>
  );
}