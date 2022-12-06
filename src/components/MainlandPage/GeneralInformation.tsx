import { Box, Text } from "@chakra-ui/react";

interface DescriptionProps {
  number: number;
  text: string;
}

export default function GeneralInformation({number, text}: DescriptionProps) {
  return (
    <Box flexDirection={'column'} display={'flex'} alignItems={'center'}>
      <Text color={'yellow.900'} fontSize={['24px','48px']} fontWeight={'semibold'}>{number}</Text>
      <Text fontSize={['18px','24px']} fontWeight={'semibold'}>{text}</Text>
    </Box>
  );
}