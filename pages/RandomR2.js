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
            <Flex className='cover'>
                {/* header */}
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

                <Flex className='doubleBox_bg'>
                    <Flex className='doubleBox_container2'>

                        <Flex className='yellowIcon_bg' position="absolute" mt="-20px">
                            <Image src={circleY} alt="circleY"/>
                            <Flex  className='yellowIcon2' h="16px" >
                                <Image src={store} alt="store"/>
                            </Flex>
                        </Flex>

                        <Text className='signIn_h1' mt="35px">가츠단길 문정점</Text>
                        <Text className='signIn_p1'>음식점 &gt; 일식 &gt; 돈까스</Text>

                        <Flex alignItems="center" justifyContent="center">
                            <Link href='/CutletInfo'>
                                <Button h="30px" mt="17px" mb="30px" fontSize={f3} color={fc1} bg="#F6E229" border="1px solid #303030" borderRadius="full">상세정보 보기</Button>
                            </Link>
                        </Flex>

                    </Flex>

                        <Flex className='blackBtn_cover' bottom="20px" mt="25px">
                            <Link href='/RandomR1' w="100%">
                                <button className='blackBtn'>다시하기</button>
                            </Link>
                        </Flex>
                </Flex>
            </Flex>
        </div>
    )
}