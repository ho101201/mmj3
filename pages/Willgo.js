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
  import starF from './images/starF.png';
  import starB from './images/starB.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';

  export default function WillGo() {

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
            <Flex direction='column' bg="#FAFAFA" h="100vh">

                <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD" bg="white">
                    <Text fontSize={f1} color={fc2} fontWeight="bold" align="center">가볼래요</Text>
                    <Link href='/Profile' position="absolute" right="11px" w="20px" h="20px">
                        <Image src={btnX} alt="btnX"/>
                    </Link>
                </Flex>

                <Flex direction="column" bg="white" mb="10px">
                    <Flex direction='row' p="10px" alignItems="center" h="126px">
                        <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                            <Image src={p1} alt="p1"/>
                        </Flex>
                        <Flex direction="column" ml='10px'>
                            <Text fontWeight="bold" fontSize={f2} color={fc2}>카츠단길</Text>
                            <Flex direction="row" mb='10px' alignItems="center">
                                <Flex w="13px" h="13px">
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text fontSize={f2} color={fc2} ml="4px">4.5</Text>
                                <Text fontSize={f2} color={fc5} ml="4px"> (10)</Text>
                            </Flex>
                            <Text fontSize={f2} color={fc2}>신천/잠실 · 한식코스</Text>
                        </Flex>
                        <Spacer/>
                        <Flex w="30px" h="30px">
                            <Image src={starF} alt="starF"/>
                        </Flex>
                    </Flex>
                    <Box bg="#F6F6F6" h="1px" ml="10px" mr="10px" />
                    <Link href='/Memo'>
                        <Flex p="10px" h="52px" alignItems="center">
                            <Text fontSize={f2} color={fc2}>가고싶은 이유가 있나요?</Text>
                            <Spacer/>
                            <Flex w="7px" h="10px">
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>
                </Flex>

                <Flex direction="column" bg="white"  mb="10px">
                    <Flex direction='row' p="10px" alignItems="center" h="126px">
                        <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                            <Image src={p1} alt="p1"/>
                        </Flex>
                        <Flex direction="column" ml='10px'>
                            <Text fontWeight="bold" fontSize={f2} color={fc2}>카츠단길</Text>
                            <Flex direction="row" mb='10px' alignItems="center">
                                <Flex w="13px" h="13px">
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text fontSize={f2} color={fc2} ml="4px">4.5</Text>
                                <Text fontSize={f2} color={fc5} ml="4px"> (10)</Text>
                            </Flex>
                            <Text fontSize={f2} color={fc2}>신천/잠실 · 한식코스</Text>
                        </Flex>
                        <Spacer/>
                        <Flex w="30px" h="30px">
                            <Image src={starF} alt="starF"/>
                        </Flex>
                    </Flex>
                    <Box bg="#F6F6F6" h="1px" ml="10px" mr="10px" />
                    <Link href='/Memo'>
                        <Flex p="10px" h="52px" alignItems="center">
                            <Text fontSize={f2} color={fc2}>가고싶은 이유가 있나요?</Text>
                            <Spacer/>
                            <Flex w="7px" h="10px">
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>
                </Flex>
            
            </Flex>

        </div>
    )
  }