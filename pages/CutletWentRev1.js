import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    Spacer,
    Grid,
    GridItem
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import arrowL from './images/arrow-left.png';
  import starF from './images/starF.png';
  import starB from './images/starB.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';
  import del from './images/del.png';


  export default function Rev1() {

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
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD" >
                <Text fontSize={f1} color={fc2} fontWeight="bold" align="center">가봤어요</Text>
                <Link href='/CutletInfo' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} alt="btnX"/>
                </Link>
            </Flex>

            <Flex direction='row' p="10px" alignItems="center" h="126px">
                <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                    <Image src={p1} alt="p1"/>
                </Flex>
                <Flex direction="column" ml='10px'>
                    <Text fontWeight="bold" fontSize={f2}>카츠단길</Text>
                    <Flex direction="row" mb='10px' alignItems="center">
                        <Flex w="13px" h="13px">
                            <Image src={starF} alt="starF"/>
                        </Flex>
                        <Text fontSize={f2} fontWeight="bold" ml="5px">4.5</Text>
                        <Text fontWeight="medium" fontSize={f2} color={fc3} ml="3px">(10)</Text>
                    </Flex>
                    <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
            </Flex> 

            <Link href='/CutletWentRev2'>
                <Flex alignItems='center' justifyContent="center" m="10px" h="50px" borderTop="1px solid #F6F6F6" borderBottom="1px solid #F6F6F6">
                    <Text fontSize={f3} color={fc2} >방문 후기를 짧게 메모해보세요</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR} alt="arrowR"/>
                    </Flex>
                </Flex>
            </Link>

        </div>
    )
  }