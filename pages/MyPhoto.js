import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    Grid,
    GridItem,
    useRadio,
    useRadioGroup,
    HStack 
    
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState,
} from 'react';
 
import arrowL from './images/arrow-left.png';

import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';
import p6 from './images/photo/photoEx6.png';
import p7 from './images/photo/photoEx7.png';
import p8 from './images/photo/photoEx8.png';
import p9 from './images/photo/photoEx9.png';

// 라디오 버튼 스타일
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          border="1px solid #E1E1E1"
          borderRadius='full'
          fontSize="10px"
          fontWeight={500}

          _checked={{
            bg: '#F6E229',
            borderColor: 'none',
          }}
          _focus={{
            
          }}
          width="40px"
          height="25px"
          
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {props.children}
        </Box>
      </Box>
    )
  }

export default function RPhoto() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const options = ['전체', '업체', '방문자','음식', '매장' ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'catalog',
        defaultValue: '전체',
        onChange: console.log,
      })

    const group = getRootProps()
    

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">사진</Text>
                <Link href='/Profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} alt="arrowF"/>
                </Link>
            </Flex> 

            <HStack {...group} mt="31px" ml="10px">
                {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                    <RadioCard key={value} {...radio}>
                        {value}
                    </RadioCard>
                    )
                })}
            </HStack>

            <Flex m="10px" direction="column">
                
                <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" mt='13px' mb="46px" gap={1} >
                    <GridItem>
                        <Image src={p9} alt="p9"/>
                    </GridItem>
                    <GridItem>
                        <Image src={p4} alt="p4"/>
                    </GridItem>
                    <GridItem>
                        <Image src={p8} alt="p8"/>
                    </GridItem>
                    <GridItem mt='-5px'>
                        <Image src={p7} alt="p7"/>
                    </GridItem>
                    <GridItem mt='-5px'>
                        <Image src={p3} alt="p3"/>
                    </GridItem>
                    <GridItem mt='-5px'>
                        <Image src={p5} alt="p5"/>
                    </GridItem>
                    <GridItem mt='-10px'>
                        <Image src={p6} alt="p6"/>
                    </GridItem>
                    <GridItem mt='-10px'>
                        <Image src={p2} alt="p2"/>
                    </GridItem>
                    <GridItem mt='-10px'>
                        <Image src={p1} alt="p1"/>
                    </GridItem>
                    <GridItem mt='-15px'>
                        <Image src={p9} alt="p9"/>
                    </GridItem>
                    <GridItem mt='-15px'>
                        <Image src={p4} alt="p4"/>
                    </GridItem>
                    <GridItem mt='-15px'>
                        <Image src={p8} alt="p8"/>
                    </GridItem>
                </Grid>

            </Flex>

        </div>
    )
}


