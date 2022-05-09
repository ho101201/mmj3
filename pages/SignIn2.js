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
import arrowL from './images/arrowL.svg';
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

    const [btnHover, setbtnHover] = useState();


    return(
        <div>
                {/* header */}
                <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                    <Flex ml="18px" alignItems="center">
                        <Link href='/SignIn' mt="4px">
                            <Image src={arrowL} alt="arrowL"/>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                        회원가입
                    </Text>
                </Flex>

                {/* container */} 
                <Flex w="100%" h="100vh" bg="#FAFAFA" direction="column" alignItems="center" p="10px">
                    <Flex direction="column" m="10px" mt="10px" p="10px" borderRadius="30px" w="100%" h="394px" alignItems="center" justifyContent="center" bg="white">
                        <Text fontSize={f1} fontWeight="bold"  mt="15px" mb="1px">
                            뭐먹지 정보 이용 안내
                        </Text>
                        <Text fontSize={f2} fontWeight="normal">
                            뭐먹지 이용을 위해 아래의 권한을 허용해주세요
                        </Text>
                        <Box w="100%" h='2px' mt="17px" bg='#303030' />

                        <Flex alignItems='center' justifyContent="center"  mt="37px" position="relative">
                            <Box h="40px">
                                <Image src={circleY} width="40px" height="40px" alt="circleY"/>
                            </Box>
                            <Box position="absolute">
                                <Image src={file} width="14px" height="11px" alt="file"/>
                            </Box>
                        </Flex>
                        <Text fontSize={f3} fontWeight="bold" mt="5px">저장소</Text>
                        <Text fontSize={f3} fontWeight="light" mt="3px" >내 기기에 저장되어 있는 이미지를 이용하여</Text>
                        <Text fontSize={f3} fontWeight="light">데이터를 저장하기위해 저장소 접근이 필요합니다.</Text>

                        <Flex alignItems='center' justifyContent="center" mt="18px">
                            <Box h="40px">
                                <Image src={circleY} width="40px" height="40px" alt="circleY"/>
                            </Box> 
                            <Box position="absolute">
                                <Image src={camera} width="14px" height="11px" alt="camera"/>
                            </Box>
                        </Flex>
                        <Text fontSize={f3} fontWeight="bold" mt="5px">카메라</Text>
                        <Text fontSize={f3} fontWeight="light" maxW="246px" mt="3px" >내 기기에 카메라를 통하여 사진을 등록하기 위해</Text>
                        <Text fontSize={f3} fontWeight="light" maxW="246px"  >카메라 접근이 필요합니다.</Text>
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


        </div>
    )
}