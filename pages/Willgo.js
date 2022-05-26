import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    Spacer,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React, { useState } from 'react';

  import btnX from './images/btnX.png';
  import starF from './images/starF.png';
  import starB from './images/starB2.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';

  export default function WillGo() {

    const [star1,setStar1] = useState(true);
    const [star2,setStar2] = useState(true);

    const star1Click=()=>{
        setStar1(star1=>!star1);
    }
    const star2Click=()=>{
        setStar2(star2=>!star2);
    }

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

                <Flex className='header'>
                    <Text className='headerTitle'>가볼래요</Text>
                    <Link href='/Profile' className='headerIcon' position="absolute" right="11px">
                        <Image src={btnX} alt="btnX"/>
                    </Link>
                </Flex>

                <Flex className='picked_container'>
                    <Flex className='picked_storeBox'>
                        <Flex className='picked_store'>
                            <Image src={p1} alt="p1"/>
                        </Flex>
                        <Flex direction="column" ml='10px'>
                            <Text className='review_h1'>카츠단길</Text>
                            <Flex direction="row" alignItems="center" mb='10px'>
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='review_score'>4.5</Text>
                                <Text className='review_count'> (10)</Text>
                            </Flex>
                            <Text className='review_p1'>신천/잠실 · 한식코스</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='star' onClick={()=>star1Click()}>
                            {star1?
                                <Image src={starF} alt="starF"/>
                            :
                                <Image src={starB} alt="starF"/>
                            }
                        </Flex>
                    </Flex>

                    <Box className='borderlineG'/>

                    <Link href='/Memo'>
                        <Flex className='picked_reason' >
                            <Text className='review_p1'>가고싶은 이유가 있나요?</Text>
                            <Spacer/>
                            <Flex className='smallArrowR'>
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>
                </Flex>

                <Flex className='picked_container'>
                    <Flex className='picked_storeBox'>
                        <Flex className='picked_store'>
                            <Image src={p1} alt="p1"/>
                        </Flex>
                        <Flex direction="column" ml='10px'>
                            <Text className='review_h1'>카츠단길</Text>
                            <Flex direction="row" alignItems="center" mb='10px'>
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='review_score'>4.5</Text>
                                <Text className='review_count'> (10)</Text>
                            </Flex>
                            <Text className='review_p1'>신천/잠실 · 한식코스</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='star' onClick={()=>star2Click()}>
                            {star2?
                                <Image src={starF} alt="starF"/>
                            :
                                <Image src={starB} alt="starF"/>
                            }
                        </Flex>
                    </Flex>
                    <Box className='borderlineG'/>
                    <Link href='/Memo'>
                        <Flex p="10px" className='picked_reason' >
                            <Text className='review_p1'>가고싶은 이유가 있나요?</Text>
                            <Spacer/>
                            <Flex className='smallArrowR'>
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>
                </Flex>
            
            </Flex>

        </div>
    )
  }