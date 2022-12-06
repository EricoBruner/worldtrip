import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { CircleIcon } from "../CircleIcon";

interface MenuOptionsProps {
  text: string;
  src: string;
}

export default function MenuOptions({text, src}: MenuOptionsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
<Link href={'/continents/europe'}>
      <Box display={'flex'} flexDirection={['row', 'row', 'row', 'column']} alignItems={'center'}>
        { isWideVersion ? 
          <Image boxSize={'85px'} src={src}/> 
          : <CircleIcon color={'yellow.900'} />
        }
          <Text
            fontSize={['18px','18px','24px']} 
            fontWeight={['medium','semibold']} 
            mt={['0','0','0','24px']}
            color={'gray.700'}
            w={['auto']}
            ml={['8px', '8px', '8px', '0']}
            >
              {text}
          </Text>
      </Box>
    </Link>
  )
}