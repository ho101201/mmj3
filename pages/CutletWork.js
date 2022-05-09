import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    useDisclosure,
    useMediaQuery,
    Grid,
    GridItem,
    Wrap, 
    SWrapItem,
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

export default function RWork() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"

    return(
        <div>
            <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                <Flex ml="18px" alignItems="center">
                    <Link href='/RandomR2' >
                        <Flex w="7px" h="16px">
                            <Image src={arrowL} alt="arrowL"/>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} position="absolute" color={fc2}>
                    카츠단길
                </Text>
                <Flex w="20px" h="20px" mr="9px">
                    <Image src={exportBtn} alt="exportBtn"/>
                </Flex>
            </Flex>

            <Flex justifyContent="center">
                <Grid templateRows='repeat( 2, 1fr )' templateColumns='repeat( 4, 1fr )' gap={0} maxW="900px" justifyContent="center" >
                    <GridItem colSpan={2} rowSpan={2} >
                        <Image src={p1} alt="p1"/>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} >
                        <Image src={p2} alt="p2"/>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} >
                        <Image src={p3} alt="p3"/>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} mt="-5px">
                        <Image src={p4} alt="p4"/>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} mt="-5px"  w="100%" h="100%" position="relative">
                            
                        <Link href='/'>
                            <Image src={p5} alt="p5"/>
                        </Link>
                        
                    </GridItem>
                </Grid>
            </Flex>

            <Flex direction="row" ml="10px" mr="10px" mt="6px">
                <Flex direction="column" justifyContent="center">
                    <Flex direction='row' alignItems="flex-end">
                        <Text fontSize={f1} color={fc2} fontWeight='bold'>카츠단길</Text>
                        <Text fontSize={f3} color="#565656" ml="6px">126m</Text>
                    </Flex>
                    <Text fontSize={f2} color="#565656">서울 송파구 송파대로 201 A동 1층 117호</Text>
                </Flex>
                <Spacer/>
                <Flex direction="row" alignItems="center">
                    <Flex w="13px" h="13px" mr="5px">
                        <Image src={starF} alt="starF"/>
                    </Flex>
                    <Text fontWeight="bold" fontSize={f2} color={fc2}>4.5</Text>
                    <Text fontWeight="medium" fontSize={f2} color={fc3} ml="2px">(10)</Text>
                </Flex>
            </Flex>
            <Flex direction="row" justifyContent="center" mt="19px" mb='30px'>
                <Link>
                    <Button w="90px" h="30px" bg="#303030" color="#ffffff" borderRadius="full" fontSize="10px" fontWeight="medium" mr="5px">가볼래요</Button>
                </Link>
                <Link href='/CutletWentRev1'>
                    <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px">가봤어요</Button>
                </Link>
            </Flex>

            <Grid templateColumns="repeat(5,1fr)" h="50px">
                <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #303030">
                    <Link href='/CutletInfo'>
                        <Text fontSize={f2} fontWeight="bold" align="center" color={fc2}>정보</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #F6E229">
                    <Link href='/CutletWork'>
                        <Text fontSize={f2} fontWeight="medium" align="center" color={fc2}>영업</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030">
                    <Link href='/CutletMenu'>
                        <Text fontSize={f2} fontWeight="medium" align="center" color={fc2}>메뉴</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030">
                    <Link href='/CutletPhoto'>
                        <Text fontSize={f2} fontWeight="medium" align="center" color={fc2}>사진</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030">
                    <Link href='/CutletReview'>
                        <Text fontSize={f2} fontWeight="medium" align="center" color={fc2}>후기</Text>
                    </Link>
                </GridItem>
            </Grid>

            <Flex direction="column" bg="#FAFAFA">
                <Flex direction='column' bg='white' p="10px" pb="0px" pt="25px">
                    <Text fontSize={f1} fontWeight="bold" color={fc2}>영업시간</Text>
                    <Flex direction="row">
                        <Flex direction="column">
                            <Text fontSize={f2} mt="8px" color={fc2}>평일</Text>
                            <Text fontSize={f2} mt="8px" color={fc2}>주말</Text>
                            <Text fontSize={f2} mt="8px" color={fc2}>브레이크</Text>
                            <Text fontSize={f2} mt="8px" color={fc2}>휴무일</Text>
                            <Text fontSize={f2} mt="8px" color={fc2}>라스트오더</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column">
                            <Text fontSize={f2} mt="8px" color={fc2} align="end">11:00 ~ 22:00</Text>
                            <Text fontSize={f2} mt="8px" color={fc2} align="end">11:00 ~ 20:00</Text>
                            <Text fontSize={f2} mt="8px" color={fc2} align="end">15:00 ~ 17:00</Text>
                            <Text fontSize={f2} mt="8px" color={fc2} align="end">공휴일 영업, 명절 당일 휴무</Text>
                            <Text fontSize={f2} mt="8px" color={fc2} align="end">매장19:00 / 포장 21:00</Text>
                        </Flex>
                    </Flex>
                
                    <Flex direction="column" justifyContent="center" alignItems='center' w="vw" h="36px" mr="20px" ml='20px' mt='13px' mb="30px" bg="#F6F6F6">
                        <Text  fontSize='10px' borderRadius="4px" align='center' color="#565656">
                            코로나 19의 영향으로 식당 운영에 변동이 있을수 있습니다.
                        </Text>
                        <Text  fontSize='10px' borderRadius="4px" align='center' color="#565656" >
                            식당으로 문의 후 방문 부탁드립니다.
                        </Text>
                    </Flex>
                    <Spacer/>
                    <Box h="1px" bg="#F6F6F6"/>
                </Flex>

                <Flex direction="column" bg="white" p="10px" pb="0px" pt="35px">
                    <Text fontSize={f1} fontWeight="bold">상황 / 분위기</Text>
                    <Wrap mt='16px' mb="30px">
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">점심식사</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">혼밥</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">직장인</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">데이트</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">연인</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">모던한</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">숨은맛집</Tag>
                    </Wrap>
                    <Spacer/>
                    <Box h="1px" bg="#F6F6F6"/>
                </Flex>

                <Flex direction="column"  bg="white" p="10px" pb="0px" pt="35px">
                    <Text fontSize={f1} fontWeight="bold" color={fc2}>주차</Text>
                    <Text fontSize={f2} mt="8px" mb="27px" color={fc2}>건물 내 주차장 ( 2시간 무료주차 )</Text>
                    <Box h="1px" bg="#F6F6F6"/>
                </Flex>

                <Flex direction="column"  bg="white" p="10px" pb="0px"  pt="35px" mb="30px">
                    <Text fontSize={f1} fontWeight="bold" color={fc2}>단체 예약</Text>
                    <Text fontSize={f2} mt="8px" mb="27px" color={fc2}>홀 최대 66석, 룸 최대 32석 예약가능</Text>
                    <Box h="1px" bg="#F6F6F6"/>
                </Flex>

                    
            </Flex>

            {/* tapbar */}
            <Box borderTop="1px solid #E8E8E8" h="80px" pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                    <Flex direction="row" w="vw" mt="13px" >
                        <Spacer/>
                        <Flex direction="column" alignItems="center" justifyContent="center" ml="40px" mr="40px">
                            <Link href='/WritingRev' w="24px" h="24px">
                                <Image src={review} alt="review"/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" color={fc2}>후기쓰기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" alignItems="center" justifyContent="center" ml="40px" mr="40px">
                            <Link w="24px" h="24px">
                                <Image src={call} alt="call"/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" color={fc2}>전화</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" alignItems="center" justifyContent="center" ml="40px" mr="40px">
                            <Link w="24px" h="24px">
                                <Image src={location} alt="location"/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" color={fc2}>길찾기</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>

        </div>
    )
}