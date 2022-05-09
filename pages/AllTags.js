import { 
    Flex,
    Text,
    Link,
    Wrap,

    Tag,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import btnX from './images/btnX.png';


export default function Tags() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
 
    return(
        <div>
           <Flex w="vw" h="42px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">전체 태그</Text>
                <Link href='/Review' position="absolute" right="11px" w="20px" h="20px"> 
                    <Image src={btnX} alt="btnX"/>
                </Link>
            </Flex> 
            <Flex mr="10px" ml="10px" mt="30px" alignItems="center">
                <Wrap >
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px">점심식사</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px">혼밥</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px">직장인</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px">데이트</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px">연인</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px">모던한</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" p="6px" mr="5px"> 숨은맛집</Tag>
                </Wrap>
            </Flex>
   
        </div>
    )
};        