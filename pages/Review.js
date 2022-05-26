import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Grid,
    GridItem,
    Select,
    Tag,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import arrowB from './images/arrowB.png';
import user from './images/user.png';
import starF from './images/starF.png';
import p0 from './images/photo/photoEx0.png';
import starB from './images/starB.png';
import heart from './images/heart.png';
import comment from './images/comment.png';

import home from './images/navIcons/icon_home.png';
import homeA from './images/navIcons/icon_homeA.png';
import rec from './images/navIcons/icon_rec.png';
import recA from './images/navIcons/icon_recA.png';
import rev from './images/navIcons/icon_rev.png';
import revA from './images/navIcons/icon_revA.png';
import my from './images/navIcons/icon_my.png';
import myA from './images/navIcons/icon_myA.png';

export default function Review() {

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
                    <Link href='/AddLocation' display="flex" flexDirection="row">
                        <Flex alignItems="center" justifyContent="center">
                            <Text className='selectedLocation'>전체지역</Text>
                            <Flex className='header_arrowB'>
                                <Image src={arrowB} alt="arrowB"/>
                            </Flex>
                        </Flex>
                    </Link>
                    <Spacer/>
                    <Select defaultValue='A' w="86px" h="22px" fontSize={f3} borderRadius="4px">
                        <option value='A'>최신순</option>
                        <option value='B'>별점높은순</option>
                        <option value='C'>별점낮은순</option>
                    </Select>
                </Flex>

                <Flex className='reviewBg' pb="80px">
                    {/* container1 */}
                    <Flex className='reviewContainer'>
                        <Text className='reviewStoreName' >카츠단길 문정역</Text>
                        
                        <Flex direction="row">
                            {/* squarcle 추가 필요 */}
                            <Flex className='squarcle' >
                                <Image src={user} alt="user"/>
                            </Flex>

                            <Flex ml="12px" direction="column" justifyContent="center">
                                <Text className='writerName'>유저닉네임</Text>
                                <Text className='revLog'>2022.03.01  1번째 방문</Text>
                            </Flex>
                            <Spacer/>

                            <Flex direction="row" alignItems="center" mb="15px">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text fontWeight="bold" fontSize={f2} color={fc1}>4.5</Text>
                            </Flex>
                        </Flex>

                        <Flex mt="12px">
                            <Image src={p0} alt="p0"/>
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
                                <Text className='tags' mr="5px">+더보기</Text>
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
                </Flex>

                {/* NavBar */}
                <Spacer/>
            </Flex>
                <Box className='dock'>
                    <Flex className='dockArray' >
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Home' className='dockIcon'>
                                <Image src={home} alt="home"/>
                            </Link>
                            <Text className='dockText_N' >홈</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Recommand' className='dockIcon'>
                                <Image src={rec} alt="rec"/>
                            </Link>
                            <Text className='dockText_N' >추천</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Review' className='dockIcon'>
                                <Image src={revA} alt="revA"/>
                            </Link>
                            <Text className='dockText_H' >후기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Profile' className='dockIcon'>
                                <Image src={my} alt="my"/>
                            </Link>
                            <Text className='dockText_N' >마이</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>
        </div>
    )
};        