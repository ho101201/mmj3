import { 
    Flex,
    Text,
    Spacer,
    Link,
    Button,
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';

import arrowL from './images/arrowL.png';
import exportBtn from './images/exportBtn.png';
import circleY from './images/EllipseY.png';
import store from './images/store.png';

export default function Random2() {

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
            <Flex className='header'>
                <Flex ml="8px" alignItems="center">
                    <Link href='/RandomR1' >
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
            <Flex w="vw" direction="column" alignItems='center' justifyContent="center" mt="20px">
                <Flex w="40px" h="40px">
                    <Image src={circleY} alt="circleY"/>
                    <Flex  w="18px" h="18px" mt="11px" ml="11px" position="absolute" >
                        <Image src={store} alt="store"/>
                    </Flex>
                </Flex>
                <Text fontSize={f1} color={fc2} fontWeight="bold" mt="15px">가츠단길 문정점</Text>
                <Text fontSize={f2} color={fc3} fontWeight="medium">음식점 ▶ 일식 ▶ 돈까스</Text>

                <Flex alignItems="center" justifyContent="center">
                    <Link href='/CutletInfo'>
                        <Button h="30px" mt="17px" fontSize={f3} color={fc1} bg="#F6E229" border="1px solid #303030" borderRadius="full">상세정보 보기</Button>
                    </Link>
                </Flex>

                <Flex direction="column" position="sticky" mr="10px" ml="10px" w="100%" bottom="0"  mt="55px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Link href='/RandomR1' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#303030" color="#ffffff" fontWeight={500} fontSize={f1} >다시하기</Button>
                        </Link>
                    </Flex>
                </Flex>
             </Flex>
        </div>
    )
}