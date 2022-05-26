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
  import { useMediaQuery } from "react-responsive"

  import btnX from './images/btnX.png';
  import arrowL from './images/arrow-left.png';
  import starF from './images/starF.png';
  import starB from './images/starB.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';
  import del from './images/del.png';
import { useState } from 'react';


  export default function Went() {

    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
      });


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
                    <Text className='headerTitle'>가봤어요</Text>
                    <Link href='/Profile' position="absolute" left="11px" className='headerIcon'>
                        <Image src={arrowL} alt="arrowL"/>
                    </Link>
                </Flex>

                <Flex className='picked_container'>
                    <Flex className='picked_storeBox' >
                        <Flex className='picked_store'>
                            <Image src={p1} alt="p1"/>
                        </Flex>
                        <Flex direction="column" ml='10px'>
                            <Text className='review_h1'>카츠단길</Text>
                            <Flex direction="row" mb='6px' alignItems="center">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='review_score'>4.5</Text>
                                <Text className='review_count'> (10)</Text>
                            </Flex>
                            <Text fontSize={f2} color={fc2}>신천/잠실 · 한식코스</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='deleteBtn'>
                            <Image src={del} alt="del"/>
                        </Flex>
                    </Flex>

                    {/* <Grid templateColumns="repeat(3,1fr)" borderTop="1px solid #F6F6F6" borderBottom="1px solid #F6F6F6" h="50px" ml="10px" mr="10px">
                        <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                            <Flex className='revDockIcon'>
                                <Image src={starB} alt="starB"/>
                            </Flex>
                            <Text className='revDockText'>가볼래요</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </GridItem>
                        <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                            <Flex className='revDockIcon'>
                                <Image src={heart} alt="heart"/>
                            </Flex>
                            <Text className='revDockText'>좋아요</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </GridItem>
                        <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                            <Flex className='revDockIcon'>
                                <Image src={comment} alt="comment"/>
                            </Flex>
                            <Text className='revDockText'>댓글</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </GridItem>
                    </Grid> */}

                    <Flex className='picked_feedback'>
                        <Flex className='pocked_feedbackComp'>
                            <Flex className='revDockIcon'>
                                <Image src={starB} alt="starB"/>
                            </Flex>
                            <Text className='revDockText'>가볼래요</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </Flex>
                        <Flex className='pocked_feedbackComp'>
                            <Flex className='revDockIcon'>
                                <Image src={heart} alt="heart"/>
                            </Flex>
                            <Text className='revDockText'>좋아요</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </Flex>
                        <Flex className='pocked_feedbackComp'>
                            <Flex className='revDockIcon'>
                                <Image src={comment} alt="comment"/>
                            </Flex>
                            <Text className='revDockText'>댓글</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </Flex>
                    </Flex>
                    
                </Flex>

                <Flex className='picked_container'>
                    <Flex className='picked_storeBox' >
                        <Flex className='picked_store'>
                            <Image src={p1} alt="p1"/>
                        </Flex>
                        <Flex direction="column" ml='10px'>
                            <Text fontWeight="bold" fontSize={f2}>카츠단길</Text>
                            <Flex direction="row" mb='6px' alignItems="center">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='review_score'>4.5</Text>
                                <Text className='review_count'> (10)</Text>
                            </Flex>
                            <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='deleteBtn'>
                            <Image src={del} alt="del"/>
                        </Flex>
                    </Flex>

                    <Flex className='picked_feedback'>
                        <Flex className='pocked_feedbackComp'>
                            <Flex className='revDockIcon'>
                                <Image src={starB} alt="starB"/>
                            </Flex>
                            <Text className='revDockText'>가볼래요</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </Flex>
                        <Flex className='pocked_feedbackComp'>
                            <Flex className='revDockIcon'>
                                <Image src={heart} alt="heart"/>
                            </Flex>
                            <Text className='revDockText'>좋아요</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </Flex>
                        <Flex className='pocked_feedbackComp'>
                            <Flex className='revDockIcon'>
                                <Image src={comment} alt="comment"/>
                            </Flex>
                            <Text className='revDockText'>댓글</Text>
                            <Text className='revDockText' ml="4px">(99)</Text>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </div>
    )
  }