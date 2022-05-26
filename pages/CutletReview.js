import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    Grid,
    GridItem, 
    Tag
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';

import arrowL from './images/arrowL.png';
import exportBtn from './images/exportBtn.png';
import gallery from './images/gallery.png';
import starF from './images/starF.png';
import user from './images/user.png';

import p0 from './images/photo/photoEx0.png';
import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';
import p6 from './images/photo/photoEx6.png';
import p7 from './images/photo/photoEx7.png';
import p8 from './images/photo/photoEx8.png';
import p9 from './images/photo/photoEx9.png';

import review from './images/navIcons/icon_rev.png';
import location from './images/navIcons/icon_loc.png';
import call from './images/navIcons/icon_call.png';

export default function RRev() {

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
                    <Link href='/RandomR2' >
                        <Flex ml="8px" className='header_arrowL'>
                            <Image src={arrowL} alt="arrowL"/>
                        </Flex>
                    </Link>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} color={fc2} position="absolute">
                    카츠단길
                </Text>
                <Flex className='headerIcon'>
                    <Image src={exportBtn} alt="exportBtn"/>
                </Flex>
            </Flex>

            <Flex justifyContent="center">
                    <Grid templateRows='repeat( 2, 1fr )' templateColumns='repeat( 4, 1fr )' gap={0} maxW="900px" >
                        <GridItem colSpan={2} rowSpan={2} >
                            <Flex className='gridSize'>
                                <Image src={p1} alt="p1"/>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1}  >
                            <Flex className='gridSize'>
                                <Image src={p2} alt="p2" />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <Flex className='gridSize'>
                                <Image src={p3} alt="p3"/>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <Flex className='gridSize'>
                                <Image src={p4} alt="p4"/>
                            </Flex>
                        </GridItem>
                        <Link href=''>
                            <GridItem colSpan={1} rowSpan={1}  className="gridSize" position="relative">
                                <Box className='galleryIconBox_mask'/>
                                <Flex className='galleryIconBox'>
                                    <Flex className='galleryIcon'>
                                        <Image src={gallery}/>
                                    </Flex>
                                    <Text className='seeMore_text'>999+ 더보기</Text>
                                </Flex>
                                <div className="seeMore_bg"/>
                            </GridItem>
                        </Link>
                    </Grid>
                </Flex>

                <Flex className='store_container1'>
                    <Flex direction="column" justifyContent="center">
                        <Flex direction='row' alignItems="flex-end">
                            <Text className='store_name'>카츠단길</Text>
                            <Text className='store_distance'>126m</Text>
                        </Flex>
                        <Text className='store_address'>서울 송파구 송파대로 201 A동 1층 117호</Text>
                    </Flex>
                    <Spacer/>
                    <Flex className='store_container2'>
                        <Flex className='category_star'>
                            <Image src={starF} alt="starF"/>
                        </Flex>
                        <Text className='category_score' fontSize={f2}>4.5</Text>
                        <Text className='category_count' fontSize={f2} ml="2px">(10)</Text>
                </Flex>
            </Flex>
                <Flex className='btnBox'>
                    <Link href='' mr="5px">
                        <button className='smallBlackBtn'>가볼래요</button>
                    </Link>
                    <Link href='/CutletWentRev1' ml="5px">
                        <button class="smallYellowBtn" >가봤어요</button>
                    </Link>
                </Flex>

                <Flex className='nav'>
                    <Link href='/CutletInfo' className='navBtn_N'>
                        <Text className='navText_N'>정보</Text>
                    </Link>
                    <Link href='/CutletWork' className='navBtn_N'>
                        <Text className='navText_N'>영업</Text>
                    </Link>
                    <Link href='/CutletMenu' className='navBtn_N'>
                        <Text className='navText_N'>메뉴</Text>
                    </Link>
                    <Link href='/CutletPhoto' className='navBtn_N'>
                        <Text className='navText_N'>사진</Text>
                    </Link>
                    <Link href='/CutletReview' className='navBtn_H'>
                        <Text className='navText_H'>후기</Text>
                    </Link>
                </Flex>

            <Flex className='reviewBg' pb="30px">
                {/* rev1 */}
                <Flex className='reviewContainer'>
                    <Flex direction="row" mt="15px" alignItems="center">
                        <Text className='example_h1'>후기</Text>
                        <Text fontSize={f3} color={fc5} ml="2px">(100)</Text>
                    </Flex>
                    <Flex direction="column" w="vw" mt="16px">
                        <Flex direction="row">
                            <Flex className='squarcle' >
                                <Image src={user} alt="user"/>
                            </Flex>
                            <Flex ml="12px" direction="column" justifyContent="center">
                                <Text fontSize={f2} >유저닉네임</Text>
                                <Text className='revLog'>2022.03.01  1번째 방문</Text>
                            </Flex>
                            <Spacer/>
                            <Flex direction="row" alignItems="center">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='review_score'>4.5</Text>
                                <Text className='review_count'>(10)</Text>
                            </Flex>
                        </Flex>
                        <Flex mt="12px">
                            <Image src={p0} alt="p0"/>
                        </Flex>
    
                        <Text id='userReview1' className='review_p1' mt="12px">
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트
                        </Text>

                        <Flex mt="41px">
                            <Text className='tags' mr="5px">점심식사</Text>
                            <Text className='tags' mr="5px">후기태그</Text>
                        </Flex>
                    </Flex>

                    <Box className='borderlineG' mt="30px"/>

                </Flex>

                {/* rev2 */}
                <Flex pt="20px" className='reviewContainer'>
                    <Flex direction="column" w="vw">
                        <Flex direction="row">
                            <Flex className='squarcle' >
                                <Image src={user} alt="user"/>
                            </Flex>
                            <Flex ml="12px" direction="column" justifyContent="center">
                                <Text fontSize={f2} >유저닉네임</Text>
                                <Text className='revLog'>2022.03.01  1번째 방문</Text>
                            </Flex>
                            <Spacer/>
                            <Flex direction="row" alignItems="center">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='review_score'>4.5</Text>
                                <Text className='review_count'>(10)</Text>
                            </Flex>
                        </Flex>

                        <Text id='userReview1' className='review_p1' mt="12px">
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트
                        </Text>

                        <Flex mt="41px">
                            <Text className='tags' mr="5px">점심식사</Text>
                            <Text className='tags' mr="5px">후기태그</Text>
                        </Flex>

                    </Flex>
                    <Box className='borderlineG' mt="40px"/>
                </Flex>
                <Flex p="10px" direction="column" bg="white">
                    <Text fontSize={f1} fontWeight="bold" mt="15px">방문자 사진 (100)</Text>
                    
                    <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" mt='16px' mb="20px" gap={1} >
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p9} alt="p9"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex  className='gridSize'>
                                <Image src={p4} alt="p4"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p8} alt="p8"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p7} alt="p7"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p3} alt="p3"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p5} alt="p5"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p6} alt="p6"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex className='gridSize'>
                                <Image src={p2} alt="p2"/>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Image src={p1} alt="p1"/>
                        </GridItem>
                    </Grid>
                </Flex>

            </Flex>



            {/* tapbar */}
            <Box className='exTab'>
                    <Flex className='exTabArray' >
                        <Spacer/>
                        <Flex className='exTabComp'>
                            <Link href='/WritingRev' className='exTabIcon'>
                                <Image src={review} alt="review"/>
                            </Link>
                            <Text className='exTabText'>후기쓰기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='exTabComp'>
                            <Link className='exTabIcon'>
                                <Image src={call} alt="call"/>
                            </Link>
                            <Text className='exTabText'>전화</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='exTabComp'>
                            <Link className='exTabIcon'>
                                <Image src={location} alt="location"/>
                            </Link>
                            <Text className='exTabText'>길찾기</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>

        </div>
    )
}