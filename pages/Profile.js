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
    Button,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import user from './images/user.png'; 
import arrowR from './images/arrowR.png';

import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';
import p6 from './images/photo/photoEx6.png';
import p7 from './images/photo/photoEx7.png';
import p8 from './images/photo/photoEx8.png';
import p9 from './images/photo/photoEx9.png';


import home from './images/navIcons/icon_home.png';
import homeA from './images/navIcons/icon_homeA.png';
import rec from './images/navIcons/icon_rec.png';
import recA from './images/navIcons/icon_recA.png';
import rev from './images/navIcons/icon_rev.png';
import revA from './images/navIcons/icon_revA.png';
import my from './images/navIcons/icon_my.png';
import myA from './images/navIcons/icon_myA.png';

export default function Profile() {

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
            <Flex direction="column" bg="#FAFAFA">
                <Flex w="vw" h="140px" direction="column" alignItems="center" justifyContent="center" mb="10px" bg="white">
                    <Flex w="50px" h="50px">
                        <Image src={user} alt="user"/>
                    </Flex>
                    <Text fontSize={f2} fontWeight="bold" color={fc2} mt="4px" mb="4px">유저닉네임</Text>
                    <Link href='/ProfileSetting'>
                        <Button fontSize="10px" bg="#303030" color="#ffffff" h="20px" w="70px">프로필설정</Button>
                    </Link>
                </Flex>

                <Flex h="92px" mb="10px" bg="white">
                    <Spacer/>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Willgo'>
                                <Text fontSize={f1} color={fc2} fontWeight="bold" align="center">999</Text>
                                <Text fontSize="10px" align="center" color={fc5}>가볼래요</Text>
                            </Link>
                        </Flex>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Went'>
                                <Text fontSize={f1} color={fc2} fontWeight="bold" align="center">999</Text>
                                <Text fontSize="10px" align="center" color={fc2}>가봤어요</Text>
                            </Link>
                        </Flex>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Review'>
                                <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                                <Text fontSize="10px" align="center" color={fc5}>후기</Text>
                            </Link> 
                        </Flex>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Like'>
                                <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                                <Text fontSize="10px" align="center" color={fc5}>좋아요</Text>
                            </Link>
                        </Flex>
                    <Spacer/>
                </Flex>

                <Flex direction="column" bg="white" pt="30px" mb="80px">
                    <Text fontSize="16px" color={fc2} ml="10px" mb="15px" fontWeight="bold">사진</Text>
                    <Link href='/MyPhoto'>
                        <Box w="100%"   whiteSpace="nowrap" overflowX='auto' >
                            <Flex w="110px" h='110px' ml="10px"  display="inline-block" >
                                <Image src={p8} alt="p8"/>
                            </Flex>
                            <Flex w="110px" h='110px' display="inline-block">
                                <Image src={p9} alt="p9"/>
                            </Flex>
                            <Flex w="110px" h='110px'  display="inline-block">
                                <Image src={p3} alt="p3"/>
                            </Flex>
                            <Flex w="110px" h='110px' display="inline-block">
                                <Image src={p4} alt="p4"/>
                            </Flex>
                            <Flex w="110px" h='110px' display="inline-block">
                                <Image src={p5} alt="p5"/>
                            </Flex>
                            <Flex w="110px" h='110px' display="inline-block">
                                <Image src={p6} alt="p6"/>
                            </Flex>
                            <Flex w="110px" h='110px' display="inline-block">
                                <Image src={p7} alt="p7"/>
                            </Flex>
                        </Box>
                    </Link>
                    
                    <Link href='/Taste' mt="30px">
                        <Flex alignItems="center" p="10px" h="50px" borderTop="1px solid #F6F6F6" borderBottom="1px solid #F6F6F6" >
                            <Text fontSize={f2} color={fc2}>입맛 설정</Text>
                            <Spacer/>
                            <Flex w="7px" h="10px">
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>

                    <Link href='/Setting'>
                        <Flex alignItems="center" p="10px" h="50px" borderBottom="1px solid #F6F6F6">
                            <Text fontSize={f2} color={fc2} >앱 설정</Text>
                            <Spacer/>
                            <Flex w="7px" h="10px">
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>

                    <Link href='/Service'>
                        <Flex alignItems="center" p="10px" h="50px" borderBottom="1px solid #F6F6F6">
                            <Text fontSize={f2} color={fc2}>고객센터</Text>
                            <Spacer/>
                            <Flex w="7px" h="10px">
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>

                    <Link href='/'>
                        <Flex w="vw" mr="10px" ml="10px" mt="10px" h="50px" alignItems="center" justifyContent="center" color="#565656" border="2px solid #F6F6F6" borderRadius="10px">
                            <Text fontSize={f2} color={fc5}>로그아웃</Text>
                        </Flex>
                    </Link>

                    <Link href='/Withdrawal'>
                        <Flex w="vw" mr="10px" ml="10px" mt="10px" mb="30px" h="50px" alignItems="center" justifyContent="center" color="#565656" border="2px solid #F6F6F6" borderRadius="10px">
                            <Text fontSize={f2} color={fc5}>회원탈퇴</Text>
                        </Flex>
                    </Link>
                    
                </Flex>

            </Flex>

            {/* navBar */}
            <Box className='doc'>
                    <Flex className='docArray'>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Home' className='docIcon'>
                                <Image src={home} alt="home"/>
                            </Link>
                            <Text className='docText_N'>홈</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Recommand' className='docIcon'>
                                <Image src={rec} alt="rec"/>
                            </Link>
                            <Text className='docText_N'>추천</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Review' className='docIcon'>
                                <Image src={rev} alt="rev"/>
                            </Link>
                            <Text className='docText_N'>후기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Profile' className='docIcon'>
                                <Image src={myA} alt="myA"/>
                            </Link>
                            <Text className='docText_H' color={fc1}>마이</Text>
                        </Flex>
                        <Spacer/>

                    </Flex>
                </Box>
        </div>
    )
}