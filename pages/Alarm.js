import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    Spacer,
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

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">알림</Text>
                <Link href='/Home' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} alt="btnX" />
                </Link>
            </Flex>
{/* 
            <Flex m="10px" h="96px" direction="column" bg="gray.200" borderBottom="1px solid #F6F6F6">
                <Flex direction="column" mt="5px" pr="10px" pl="10px" bg="gray.300" justifyContent="flex-start">
                    <Text fontWeight="bold" fontSize={f1} >회원가입 완료</Text>
                    <Text fontWeight="medium" fontSize={f2} >가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                    <Text fontSize="10px" color="#A4A4A4" mt="17px">1시간전</Text>
                </Flex>
                <Spacer/>
                <Box w="100%" h="1px" bg="red"/>
            </Flex> */}

            <Flex direction="column" mt="15px" pr="20px" pl="20px" justifyContent="flex-start">
                <Text fontWeight="bold" fontSize={f1} >회원가입 완료</Text>
                <Text fontWeight="medium" fontSize={f2} >가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                <Text fontSize="10px" color="#A4A4A4" mb="17px">1시간전</Text>
            </Flex>
            <Box w="vw" h="1px" ml="10px" mr="10px" bg="#F6F6F6"/>

            <Flex direction="column" mt="15px" pr="20px" pl="20px" justifyContent="flex-start">
                <Text fontWeight="bold" fontSize={f1} >회원가입 완료</Text>
                <Text fontWeight="medium" fontSize={f2} >가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                <Text fontSize="10px" color="#A4A4A4" mb="17px">1시간전</Text>
            </Flex>
            <Box w="vw" h="1px" ml="10px" mr="10px" bg="#F6F6F6"/>


        </div>
    )
  }