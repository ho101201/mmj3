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

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    return(
        <div>
            <Flex className='cover' bg="white">
                <Flex className='header'>
                    <Text className='headerTitle'>알림</Text>
                    <Link href='/Home' className='headerIcon' position="absolute" right="11px">
                        <Image src={btnX} alt="btnX" />
                    </Link>
                </Flex>

                <Flex className='alarmBox'>
                    <Text className='alarm_tilte'>회원가입 완료</Text>
                    <Text className='alarm_detail'>가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                    <Text className='alarm_arrivedTime'>1시간전</Text>
                </Flex>

                <Box className='borderline_padding'>
                    <Box className='borderlineG'/>
                </Box>


                <Flex className='alarmBox'>
                    <Text className='alarm_tilte' >회원가입 완료</Text>
                    <Text className='alarm_detail' >가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                    <Text className='alarm_arrivedTime'>1시간전</Text>
                </Flex>

                <Box className='borderline_padding'>
                    <Box className='borderlineG'/>
                </Box>
            </Flex>
        </div>
    )
  }