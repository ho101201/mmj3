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
                <Flex className='profileCont1'>
                    <Flex className='squarcle'>
                        <Image src={user} alt="user"/>
                    </Flex>
                    <Text fontSize={f2} fontWeight="bold" color={fc2} mt="4px" mb="4px">유저닉네임</Text>
                    <Link href='/ProfileSetting'>
                        <button className='profileSettingBtn'>프로필설정</button>
                    </Link>
                </Flex>

                <Flex className='profileCont2'>
                    <Spacer/>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Willgo'>
                                <Text className='profile_h1' align="center">999</Text>
                                <Text className='profile_p2' align="center">가볼래요</Text>
                            </Link>
                        </Flex>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Went'>
                                <Text className='profile_h1' align="center">999</Text>
                                <Text className='profile_p2' align="center">가봤어요</Text>
                            </Link>
                        </Flex>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Review'>
                                <Text className='profile_h1' align="center">999</Text>
                                <Text className='profile_p2' align="center">후기</Text>
                            </Link> 
                        </Flex>
                        <Flex w="67px" direction="column" justifyContent="center">
                            <Link href='/Like'>
                                <Text className='profile_h1' align="center">999</Text>
                                <Text className='profile_p2' align="center">좋아요</Text>
                            </Link>
                        </Flex>
                    <Spacer/>
                </Flex>

                <Flex className='profileCont3'>
                    <Text className='profile_h1' ml="10px" mb="15px">사진</Text>
                    <Link href='/MyPhoto'>
                        <Box className='profile_photoScroll' >
                            <Flex className='profile_photo' display="inline-block" ml="10px">
                                <Image src={p8} alt="p8"/>
                            </Flex>
                            <Flex className='profile_photo' display="inline-block">
                                <Image src={p9} alt="p9"/>
                            </Flex>
                            <Flex className='profile_photo' display="inline-block">
                                <Image src={p3} alt="p3"/>
                            </Flex>
                            <Flex className='profile_photo' display="inline-block">
                                <Image src={p4} alt="p4"/>
                            </Flex>
                            <Flex className='profile_photo' display="inline-block">
                                <Image src={p5} alt="p5"/>
                            </Flex>
                            <Flex className='profile_photo' display="inline-block">
                                <Image src={p6} alt="p6"/>
                            </Flex>
                            <Flex className='profile_photo' display="inline-block">
                                <Image src={p7} alt="p7"/>
                            </Flex>
                        </Box>
                    </Link>
                    
                    <Link href='/Taste' mt="30px" className='borderline_padding'>
                        <Flex className='profile_linedBox' borderTop="1px solid #F6F6F6"  >
                            <Text className='profile_p1'>입맛 설정</Text>
                            <Spacer/>
                            <Flex className='smallArrowR'>
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>

                    <Link href='/Setting' className='borderline_padding'>
                        <Flex className='profile_linedBox'>
                            <Text className='profile_p1'>앱 설정</Text>
                            <Spacer/>
                            <Flex className='smallArrowR'>
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>

                    <Link href='/Service' className='borderline_padding'>
                        <Flex className='profile_linedBox'>
                            <Text className='profile_p1'>고객센터</Text>
                            <Spacer/>
                            <Flex className='smallArrowR'>
                                <Image src={arrowR} alt="arrowR"/>
                            </Flex>
                        </Flex>
                    </Link>

                    <Link href='/'>
                        <Flex className='profile_button'>
                            <Text className='profile_btnFont'>로그아웃</Text>
                        </Flex>
                    </Link>

                    <Link href='/Withdrawal'>
                        <Flex className='profile_button' mb="30px">
                            <Text className='profile_btnFont'>회원탈퇴</Text>
                        </Flex>
                    </Link>
                    
                </Flex>

            </Flex>

            {/* navBar */}
            <Box className='dock'>
                    <Flex className='dockArray'>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Home' className='dockIcon'>
                                <Image src={home} alt="home"/>
                            </Link>
                            <Text className='dockText_N'>홈</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Recommand' className='dockIcon'>
                                <Image src={rec} alt="rec"/>
                            </Link>
                            <Text className='dockText_N'>추천</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Review' className='dockIcon'>
                                <Image src={rev} alt="rev"/>
                            </Link>
                            <Text className='dockText_N'>후기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Profile' className='dockIcon'>
                                <Image src={myA} alt="myA"/>
                            </Link>
                            <Text className='dockText_H' color={fc1}>마이</Text>
                        </Flex>
                        <Spacer/>

                    </Flex>
                </Box>
        </div>
    )
}