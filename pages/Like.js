import { 
    Flex,
    Text,
    Link,
    Grid,GridItem,
    Spacer,
    Tag,
    Box
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import {React, useState, useEffect} from 'react';

  import arrowL from './images/arrow-left.png';
  import photoEx0 from './images/photo/photoEx0.png';
  import p1 from './images/photo/photoEx1.png';
  import del from './images/del.png';
  import starB from './images/starB.png';
  import starF from './images/starF.png';
  import user from './images/user.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';

  export default function Like() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [Page, setPage] = useState(true);

    const movePage =()=> {
        setPage( Page => !Page);
    }

    return(
        <div>
            <Flex className='cover'>

                <Flex className='header'>
                    <Text className='headerTitle'>좋아요</Text>
                    <Link href='/Profile' position="absolute" left="11px"className='headerIcon'>
                        <Image src={arrowL} alt="arrowL"/>
                    </Link>
                </Flex> 

                {Page?
                    <Flex className='like_tagBox'>
                        <Flex className='like_tabH'>
                            <Text className='like_tabTextH'>식당</Text>
                        </Flex>
                        <Flex className='like_tabN'>
                            <Text className='like_tabTextN' onClick={()=>movePage()}>후기</Text>
                        </Flex>
                    </Flex>
                :
                    <Flex className='like_tagBox'>
                        <Flex className='like_tabN' onClick={()=>movePage()}>
                            <Text className='like_tabTextN'>식당</Text>
                        </Flex>
                        <Flex className='like_tabH'>
                            <Text className='like_tabTextH'>후기</Text>
                        </Flex>
                    </Flex>
                }

                {/* 식당 */}
                {Page&&
                    <Flex className='like_component'>
                        <Flex className='picked_storeBox'>
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
                                <Text fontSize={f2} color={fc5}>신천/잠실 · 한식코스</Text>
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
                }



                {!Page&&
                    <Flex className='like_component'>
                        <Text className='reviewStoreName'>카츠단길 문정역</Text>
                        <Flex direction="row">
                            <Flex className='squarcle'>
                                <Image src={user} alt="user"/>
                            </Flex>
                            <Flex ml="12px" direction="column" justifyContent="center">
                                <Text className='writerName' >유저닉네임</Text>
                                <Text className='revLog'>2022.03.01  1번째 방문</Text>
                            </Flex>
                            <Spacer/>
                            <Flex direction="row" alignItems="center">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='revScore'>4.5</Text>
                            </Flex>
                        </Flex>
                        <Flex mt="12px">
                            <Image src={photoEx0} alt="p0"/>
                        </Flex>
        
                        <Text id='userReview1' mt="12px" >
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트
                        </Text>
        
                        <Flex mt="41px" mb="30px">
                            <Text className='tags' mr="5px">점심식사</Text>
                            <Text className='tags' mr="5px">후기태그</Text>
                            <Link href='/AllTags'>
                                <Text className='tags' mr="5px">+ 더보기</Text>
                            </Link>
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
                }
            </Flex>

        </div>
    )
  }