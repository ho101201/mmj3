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
                        
                        <Text fontSize={f1} fontWeight="bold" color={fc2} mb="1px">
                            뭐먹지 정보 이용 안내
                        </Text>
                        <Text fontSize={f2} fontWeight="normal" color={fc3}>
                            뭐먹지 이용을 위해 아래의 권한을 허용해주세요
                        </Text>
                        <Box w="100%" h='2px' mt="17px" bg='#303030'/>

                        <Flex alignItems='center' justifyContent="center"  mt="37px" position="relative">
                            <Box h="40px">
                                <Image src={circleY} width="40px" height="40px" alt="circleY"/>
                            </Box>
                            <Box position="absolute">
                                <Image src={file} width="14px" height="11px" alt="file"/>
                            </Box>
                        </Flex>
                        <Text fontSize={f3} color={fc1} fontWeight="bold" mt="5px">저장소</Text>
                        <Text fontSize={f3} color={fc3} fontWeight="light" mt="3px">내 기기에 저장되어 있는 이미지를 이용하여</Text>
                        <Text fontSize={f3} color={fc3} fontWeight="light">데이터를 저장하기위해 저장소 접근이 필요합니다.</Text>

                        <Flex alignItems='center' justifyContent="center" mt="18px">
                            <Box h="40px">
                                <Image src={circleY} width="40px" height="40px" alt="circleY"/>
                            </Box> 
                            <Box position="absolute">
                                <Image src={camera} width="14px" height="11px" alt="camera"/>
                            </Box>
                        </Flex>
                        <Text fontSize={f3} color={fc1} fontWeight="bold" mt="5px">카메라</Text>
                        <Text fontSize={f3} color={fc3} fontWeight="light" maxW="246px" mt="3px" >내 기기에 카메라를 통하여 사진을 등록하기 위해</Text>
                        <Text fontSize={f3} color={fc3} fontWeight="light" maxW="246px" >카메라 접근이 필요합니다.</Text>
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