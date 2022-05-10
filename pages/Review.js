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
            {/* header */}
            <Flex h="40px"  alignItems="center" borderBottom="1px solid #DDDDDD" position="sticky">
                <Link href='/AddLocation' display="flex" flexDirection="row">
                    <Text id='location' fontSize={f2} fontWeight="bold" ml="10px" mr="7px" color="#333333" >전체지역</Text>
                    <Box w="12px" h="20px" position="absolute" left="75px" top="4px" >
                        <Image src={arrowB} alt="arrowB"/>
                    </Box>
                </Link>
                <Spacer/>
                <Select defaultValue='A' w="86px" h="22px" fontSize={f3} p="0px" mr="10px" borderRadius="4px">
                    <option value='A'>최신순</option>
                    <option value='B'>별점높은순</option>
                    <option value='C'>별점낮은순</option>
                </Select>
            </Flex>

            <Flex direction='column' bg="#FAFAFA">
                {/* container1 */}
                <Flex w="vw" pl="10px" pr="10px" pt="10px" mb="10px" direction="column" bg="White">
                    <Text fontSize={f1} fontWeight="bold" mt="18px" mb="16px" >카츠단길 문정역</Text>
                    <Flex direction="row">
                        {/* squarcle 추가 필요 */}
                        <Flex w="50px" h="50px" >
                            <Image src={user} alt="user"/>
                        </Flex>
                        <Flex ml="12px" direction="column" justifyContent="center">
                            <Text fontSize={f2} >유저닉네임</Text>
                            <Text fontSize="10px" color="#565656">2022.03.01  1번째 방문</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="row" alignItems="center">
                            <Flex w="13px" h="13px" mr="5px">
                                <Image src={starF} alt="starF"/>
                            </Flex>
                            <Text fontWeight="bold" fontSize={f2}>4.5</Text>
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

                    <Flex mt="41px">
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">점심식사</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">후기태그</Tag>
                        <Link href='/AllTags'>
                            <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">+더보기</Tag>
                        </Link>
                    </Flex>

                    <Grid templateColumns="repeat(3,1fr)" borderTop="1px solid #F6F6F6" h="62px" mt="30px">
                        <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                            <Flex w="12px" h="12px" mr="7px">
                                <Image src={starB} alt="starB"/>
                            </Flex>
                            <Text fontSize={f2} color="#565656">가볼래요</Text>
                        </GridItem>
                        <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                            <Flex w="12px" h="12px" mr="7px">
                                <Image src={heart} alt="heart"/>
                            </Flex>
                            <Text fontSize={f2} color="#565656">좋아요</Text>
                        </GridItem>
                        <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                            <Flex w="12px" h="12px" mr="7px">
                                <Image src={comment} alt="comment"/>
                            </Flex>
                            <Text fontSize={f2} color="#565656">댓글</Text>
                        </GridItem>
                    </Grid>
                </Flex>

            </Flex>

            {/* NavBar */}
            <Box borderTop="1px solid #E8E8E8" h="80px"  pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                <Flex direction="row" w="vw" mt="13px" >
                    <Spacer/>
                    <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                        <Link href='/Home' w="24px" h="24px">
                            <Image src={home} alt="home"/>
                        </Link>
                        <Text fontWeight="medium" fontSize="10px" align="center" >홈</Text>
                    </Flex>
                    <Spacer/>
                    <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                        <Link href='/Recommand' w="24px" h="24px">
                            <Image src={rec} alt="rec"/>
                        </Link>
                        <Text fontWeight="medium" fontSize="10px" align="center" >추천</Text>
                    </Flex>
                    <Spacer/>
                    <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                        <Link href='/Review' w="24px" h="24px">
                            <Image src={revA} alt="revA"/>
                        </Link>
                        <Text fontWeight="bold" fontSize="10px" align="center" >후기</Text>
                    </Flex>
                    <Spacer/>
                    <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                        <Link href='/Profile' w="24px" h="24px">
                            <Image src={my} alt="my"/>
                        </Link>
                        <Text fontWeight="medium" fontSize="10px" align="center" >마이</Text>
                    </Flex>
                    <Spacer/>
                </Flex>
            </Box>

        </div>
    )
};        