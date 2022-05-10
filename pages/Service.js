import { 
    Flex,
    Text,
    Spacer,
    Link,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import arrowR from './images/arrowR.png';
import arrowL from './images/arrow-left.png';


export default function Service() {

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
            <Flex direction="column" h="100vh" bg="#FAFAFA">

                <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD" bg="white">
                    <Text fontSize={f1} color={fc2} fontWeight="bold" align="center">고객센터</Text>
                    <Link href='/Profile' position="absolute" left="11px" w="20px" h="20px">
                        <Image src={arrowL} alt="arrowL"/>
                    </Link>
                </Flex> 
                
                <Link href='/Announcement' mt="10px">
                    <Flex p="10px" h="50px"  borderBottom="1px solid #F6F6F6" bg="white">
                        <Text fontWeight="bold" fontSize={f2} color={fc2}>공지사항</Text>
                        <Spacer/>
                        <Flex w="7px" h="10px">
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>

                <Link >
                    <Flex p="10px" h="50px" borderBottom="1px solid #F6F6F6"  bg="white">
                        <Text fontWeight="bold" fontSize={f2} color={fc2} >FAQ</Text>
                        <Spacer/>
                        <Flex w="7px" h="10px">
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>

                <Link>
                    <Flex p="10px" h="50px" mt="10px" mb="10px" borderBottom="1px solid #F6F6F6" bg="white">
                        <Text fontWeight="bold" fontSize={f2} color={fc2}>피드백 및 지원</Text>
                        <Spacer/>
                        <Flex w="7px" h="10px">
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>

                <Link>
                    <Flex p="10px" h="50px" borderBottom="1px solid #F6F6F6" bg="white">
                        <Text fontWeight="bold" fontSize={f2} color={fc2} >서비스 이용약관</Text>
                        <Spacer/>
                        <Flex w="7px" h="10px">
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>

                <Link>
                    <Flex p="10px" h="50px" borderBottom="1px solid #F6F6F6" bg="white"> 
                        <Text fontWeight="bold" fontSize={f2 }color={fc2}>개인정보 처리방침</Text>
                        <Spacer/>
                        <Flex w="7px" h="10px">
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>

                <Link>
                    <Flex p="10px" h="50px" borderBottom="1px solid #F6F6F6" bg="white">
                        <Text fontWeight="bold" fontSize={f2} color={fc2} >위치기반 서비스 이용약관</Text>
                        <Spacer/>
                        <Flex w="7px" h="10px">
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>
            </Flex>

        </div>
    )
}