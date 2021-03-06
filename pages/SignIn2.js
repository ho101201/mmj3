import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    useMediaQuery,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import arrowL from './images/arrowL.png';
import circleY from './images/EllipseY.png';
import file from './images/file.png';
import camera from './images/camera.png';

  
export default function SignIn2() {

    const [heightIssue] = useMediaQuery(
        "(min-height: 305px)"
      );

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [btnHover, setbtnHover] = useState();


    return(
        <div>
            <Flex className='cover'>

                {/* header */}
                <Flex className='header'>
                    <Flex ml="8px" alignItems="center">
                        <Link href='/SignIn'>
                            <Flex className='header_arrowL'>
                                <Image src={arrowL} alt="arrowL"/>
                            </Flex>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text className='headerTitle' position="absolute">
                        회원가입
                    </Text>
                </Flex>

                {/* container */} 
                <Flex className='doubleBox_bg'>
                    <Flex className='doubleBox_container'>
                        
                        <Text className='signIn_h1'>
                            뭐먹지 정보 이용 안내
                        </Text>
                        <Text className='signIn_p1'>
                            뭐먹지 이용을 위해 아래의 권한을 허용해주세요
                        </Text>
                        
                        <Box className='borderlineB' mt="17px" />

                        <Flex alignItems='center' justifyContent="center" mt="37px" position="relative">
                            <Flex className='yellowIcon_bg'>
                                <Image src={circleY} alt="circleY"/>
                            </Flex>
                            <Flex className='yellowIcon'>
                                <Image src={file} alt="file"/>
                            </Flex>
                        </Flex>

                        <Text className='signIn_h2' mt="5px">저장소</Text>
                        <Text className='signIn_p2' mt="3px">내 기기에 저장되어 있는 이미지를 이용하여</Text>
                        <Text className='signIn_p2'>데이터를 저장하기위해 저장소 접근이 필요합니다.</Text>

                        <Flex alignItems='center' justifyContent="center" mt="18px">
                            <Flex className='yellowIcon_bg'>
                                <Image src={circleY} alt="circleY"/>
                            </Flex> 
                            <Flex className='yellowIcon'>
                                <Image src={camera} alt="camera"/>
                            </Flex>
                        </Flex>
                        <Text className='signIn_h2' mt="5px">카메라</Text>
                        <Text className='signIn_p2' maxW="246px" mt="3px" >내 기기에 카메라를 통하여 사진을 등록하기 위해</Text>
                        <Text className='signIn_p2' maxW="246px" >카메라 접근이 필요합니다.</Text>
                    </Flex>

                    {/* button */}
                    <Spacer/>
                    <Box pr="15px" pl="15px" w="100vw" h="40px" bottom="40px" mt="20px" position="sticky">
                        <Link href='/SignIn3' >
                            <Button w="100%" borderRadius="full" bg="#303030" fontSize={f1} fontWeight="light" color="#ffffff" onMouseOver={()=>setbtnHover} >
                                허용하기
                            </Button>
                        </Link>
                    </Box>
                </Flex>
                
            </Flex>

        </div>
    )
}