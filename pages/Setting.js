import { 
    Flex,
    Text,
    Link,
    Spacer,
    Switch
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import arrowL from './images/arrow-left.png';




  export default function Setting() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">앱 설정</Text>
                <Link href='/Profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} alt="arrowL"/>
                </Link>
            </Flex>
            
            <Flex w="vw" h="50px" ml="10px" mr="10px" direction="row" alignItems="center" border="1px solid #F6F6F6">
                <Text fontWeight="bold" fontSize={f2} >앱 푸시 알림</Text>
                <Spacer/>
                <Switch size="lg" colorScheme="yellow" />
            </Flex>

            <Flex w="vw" h="50px" ml="10px" mr="10px" direction="row" alignItems="center" border="1px solid #F6F6F6">
                <Text fontWeight="bold" fontSize={f2} >마케팅/이벤트 알림</Text>
                <Spacer/>
                <Switch size="lg" colorScheme="yellow"/>
            </Flex>

            <Flex w="vw" h="50px" ml="10px" mr="10px" direction="row" alignItems="center" border="1px solid #F6F6F6">
                <Text fontWeight="bold" fontSize={f2} >버전 정보</Text>
                <Spacer/>
                <Text fontSize={f2} color="#565656">최신버전</Text>
            </Flex>
        </div>
    )
  }