import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Wrap,
    Button,
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';

import arrowL from './images/arrowL.png';
import exportBtn from './images/exportBtn.png';
import circleY from './images/EllipseY.png';
import FNK from './images/F&K.png';

export default function Random1() {

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
            <Flex className='cover'>
                {/* header */}
                <Flex className='header'>
                    <Flex ml="8px" alignItems="center">
                        <Link href='/Home' >
                            <Flex className='header_arrowL'>
                                <Image src={arrowL} alt="arrowL"/>
                            </Flex>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text className='headerTitle' position="absolute">
                        랜덤추천
                    </Text>
                    <Flex className='headerIcon'>
                        <Image src={exportBtn} alt="exportBtn"/>
                    </Flex>
                </Flex>
            
                <Flex direction="column" w="100vw" p="10px">
                    <Flex direction="column" alignItems="center" bg="white" borderRadius="30px" w="100%" mt="30px" pl="20px" pr="20px">
                        <Flex w="40px" h="40px" position="absolute" mt="-20px">
                            <Image src={circleY} alt="circleY"/>
                            <Flex  w="18px" h="18px" mt="11px" ml="11px" position="absolute" >
                                <Image src={FNK} alt="FNK"/>
                            </Flex>
                        </Flex>

                        <Text fontSize={f1} color={fc2} fontWeight="bold" mt="35px">원하는 카테고리를 선택해주세요</Text>
                        <Text fontSize={f2} color={fc3}>중복 선택 가능합니다</Text>

                        <Flex w="100%" h="8px" mt="17px" mb="30px" justifyContent="center">
                            <Flex w="100%" h="2px" bg="#303030" borderRadius="full">
                            </Flex>
                        </Flex>

                        <Wrap spacing="10px" justify="center" mb="30px" >
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#F6E229" borderRadius="full" border="1px solid #303030">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} >메뉴</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                                    <Text  fontSize={f2} color={fc1}>메뉴</Text>
                                </Flex>
                        </Wrap>
                    </Flex>

                    {/* <Spacer/> */}
                    <Flex direction="column" position="sticky" w="100%" bottom="0" mt="25px" pb="20px">
                        <Flex  w="100%" h="40px">
                            <Link href='/RandomR2' w="100%">
                                <Button w="100%" borderRadius="full" bg="#303030" color="#ffffff" fontWeight={500} fontSize={f1} >시작</Button>
                            </Link>
                        </Flex>
                    </Flex>
                    
                </Flex>

             </Flex>
        </div>
    )
}