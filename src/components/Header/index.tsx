import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex 
      as={'header'} 
      h={['50px','100px']} 
      w={'100%'}
      justify={'center'}
    >
      <Image src={'/logo.svg'} alt={'worldtrip'} w={['81px','180px']} />
    </Flex>
  );
}