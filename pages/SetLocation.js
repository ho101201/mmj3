import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import Search_Icons from './images/Search_Icons.png';
  import location from './images/location.png';

  export default function SetLoc() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    return(
        <div>
            <Flex className='cover' bg="white">
                <Flex className='header' border="none">
                    <Text className='headerTitle'>위치 설정</Text>
                    <Link href='/Home'  className='headerIcon' position="absolute" right="11px">
                        <Image src={btnX} alt="btnX"/>
                    </Link>
                </Flex>
                <Flex className='header' p="5px">
                    <Box className='headerIcon' mr="10px" ml="12px">
                        <Image src={Search_Icons} alt="search"/>
                    </Box>
                    <Input fontSize={f2} color="#A4A4A4" placeholder='동명(읍,면)으로 검색 (ex. 문정동)' bg="#F6F6F6" mr="5px" h="30px" border="none"/>
                </Flex>
                <Flex justifyContent="center" mt="16px" alignItems="center">
                    <Flex w="11px" h="13px" mr="6px">
                        <Image src={location} alt="location"/>
                    </Flex>
                    <Text fontSize={f2} color={fc3}>내 주변 지역으로 검색</Text>
                </Flex>
            </Flex>

        </div>
    )
  }