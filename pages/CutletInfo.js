import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    Grid,
    GridItem,
    Wrap, 
    WrapItem,
    Tag
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';
 
import arrowL from './images/arrowL.png';
import arrowR from './images/arrowR.png';
import exportBtn from './images/exportBtn.png';
import gallery from './images/gallery.png';
import starF from './images/starF.png';
import Exclamation from './images/Exclamation.png';

import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';

import review from './images/navIcons/icon_rev.png';
import location from './images/navIcons/icon_loc.png';
import call from './images/navIcons/icon_call.png';

export default function RInfo() {

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
            <Flex direction='column' bg="#FAFAFA">
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
                    <Link href='/CutletInfo' className='navBtn_H'>
                        <Text className='navText_H'>정보</Text>
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
                    <Link href='/CutletReview' className='navBtn_N'>
                        <Text className='navText_N'>후기</Text>
                    </Link>
                </Flex>

                    
                <Flex className='infoComp'>
                    <Flex className='infoBox'>
                        <Text className='example_h1' >매장 소개</Text>
                        <Text className='exmaple_p1'>&#34;상위1% 프리미엄 돈카츠입니다.&#34;</Text>

                    </Flex>

                    <Flex className='infoBox'>
                        <Flex direction="row" alignItems="center" >
                            <Text className='example_h1'>매장 Tip</Text>
                            <Spacer/>
                            <Text className='example_updateLog'>마지막 업데이트 : 2021-11-09</Text>
                        </Flex>
                        <Text className='exmaple_p1'>카레 추가 시 무한리필 됩니다.</Text>

                    </Flex>

                    <Flex direction="column" bg="white">
                        <Text className='example_h1'>편의정보</Text>
                        <Wrap mt='16px'>
                            <Text className='tags'>예약가능</Text>
                            <Text className='tags'>포장</Text>
                            <Text className='tags'>주차가능</Text>
                            <Text className='tags'>1~2만원</Text>
                            <Text className='tags'>발렛파킹</Text>
                            <Text className='tags'>제로페이</Text>
                            <Text className='tags'>국민지원금</Text>
                        </Wrap>
                        <Flex className='lastReservBox'>
                            <Text className='lastReserv'>
                                마지막 예약시간 00월00일 오전00시 00분 00초
                            </Text>
                        </Flex>

                    </Flex>

                </Flex>

                <Link href='/FixInfo' className='fixInfo'>
                    <Flex alignItems='center' h='30px'>
                        <Flex className='exclamationIcon'>
                            <Image src={Exclamation} alt="exclamation"/>
                        </Flex>
                        <Text fontSize={f3} letterSpacing="-1px">잘못된 정보를 알려주세요</Text>
                        <Spacer/>
                        <Flex className='smallArrowR'>
                            <Image src={arrowR} alt="arrowR"/>
                        </Flex>
                    </Flex>
                </Link>

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