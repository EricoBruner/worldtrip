import { Text } from "@chakra-ui/react";

interface DescriptionProps {
  children: string;
}

export default function Description({children}: DescriptionProps) {
  return (
    <Text 
      textAlign={'justify'} 
      maxW={'600px'}
      fontSize={['14px','24px']}
      fontWeight={'normal'}
    >
      {children}
    </Text>
  );
}