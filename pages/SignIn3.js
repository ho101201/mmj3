import { 
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    Img,
    Spacer,
    Link,
    Grid,
    GridItem,
    Input,
    Icon,
    Button,
    InputGroup,
    HStack,
    useMediaQuery,
    background,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import arrowL from './images/arrowL.png';
import circleY from './images/EllipseY.png';
import circleG from './images/EllipseG.png';
import checkB from './images/checkB.png';
import checkW from './images/checkW.png';

  
export default function SignIn3() {

    const [heightIssue] = useMediaQuery(
        "(min-height: 305px)"
      );

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [Check1, setCheck1] = useState(false);
    
    const checking1 =()=> {
        if(Check1===true){
            setCheck1( Check1 => !Check1);
        }
        else if(Check2===false||Check3===false){
            setCheck1( Check1 => !Check1);
            setCheck2( Check2 => true);
            setCheck3( Check3 => true );
        };
        if(Check1===true&&Check2===true&&Check3===true){
            setCheck1( Check1 => false);
            setCheck2( Check2 => false);
            setCheck3( Check3 => false );
        }else if(Check2===true&&Check3===true){
            setCheck1( Check1 => true);
        };
    }

    const [Check2, setCheck2] = useState(false);
    
    const checking2 =()=> {
        setCheck2( Check2 => !Check2 );
        if(Check2===false&&Check3===true){
            setCheck1(Check1 => true);
        }else if(Check2===true&&Check3===false){
            setCheck1(Check1 => false);
        };
    }

    const [Check3, setCheck3] = useState(false);
    
    const checking3 =()=> {
        setCheck3( Check3 => !Check3 );
        if(Check2===true&&Check3===false){
            setCheck1(Check1 => true);
        }else if(Check2===false&&Check3===true){
            setCheck1(Check1 => false);
        };
    }

    const [Check4, setCheck4] = useState(false);

    const checking4 =()=> {
        if(Check4===true){
            setCheck4( Check4 => !Check4);
        }
        else if(Check5===false||Check6===false){
            setCheck4( Check4 => !Check4);
            setCheck5( Check5 => true);
            setCheck6( Check6 => true );
        };
        if(Check4===true&&Check5===true&&Check6===true){
            setCheck4( Check4 => false);
            setCheck5( Check5 => false);
            setCheck6( Check6 => false );
        }else if(Check5===true&&Check6===true){
            setCheck4( Check4 => true);
        }
    };

    const [Check5, setCheck5] = useState(false);
    
    const checking5 =()=> {
        setCheck5( Check5 => !Check5 );
        if(Check5===false&&Check6===true){
            setCheck4(Check4 => true);
        }else if(Check5===true&&Check6===false){
            setCheck4(Check4 => false);
        };
    }

    const [Check6, setCheck6] = useState(false);
    
    const checking6 =()=> {
        setCheck6( Check6 => !Check6 );
        if(Check5===true&&Check6===false){
            setCheck4(Check4 => true);
        }else if(Check5===false&&Check6===true){
            setCheck4(Check4 => false);
        };
    }

    return(
        <div>
            <Flex className='cover'>

                {/* header */}
                <Flex className='header'>
                    <Flex ml="8px" alignItems="center" >
                        <Link href='/SignIn2'>
                            <Flex className='header_arrowL'>
                                <Image src={arrowL} alt="arrowL"/>
                            </Flex>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text className='headerTitle' position="absolute">
                        회원가입
                    </Text>
                </Flex>

                <Flex className='doubleBox_bg'>
                    <Flex className='doubleBox_container'>
                        <Text className='signIn_h1' mb="1px">
                            약관동의
                        </Text>
                        <Text className='signIn_p1'  >
                            고객님께서는 동의를 거부할 수 있습니다.
                        </Text>
                        <Text className='signIn_p1'>
                            단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다.
                        </Text>
                        <Box className='borderlineB' mt="17px"/>

                        {/* container2 */}
                        <Flex direction="column" w="100%" mt="26px">
                            <Flex alignItems="center">
                            {Check1?
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking1()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleY} alt="circleY"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkB} alt="checkB"/>
                                    </Flex>
                                </Flex>
                            :
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking1()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleG} alt="circleG"/>
                                    </Flex>
                                    <Flex className="checkIcon" >
                                        <Image src={checkW} alt="checkW"/>
                                    </Flex>
                                </Flex>
                            }
                                <Text className='signIn_h2' ml="9px">약관 전체 동의</Text>
                            </Flex>

                            <Box className='borderlineG' mt="10px"/>

                            <Flex alignItems="center" mt="15px">
                            {Check2?
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking2()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleY} alt="circleY"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkB} alt="checkB"/>
                                    </Flex>
                                </Flex>
                            :
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking2()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleG} alt="circleG"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkW} alt="checkW"/>
                                    </Flex>
                                </Flex>
                            }

                                <Text className='signIn_p2' ml="9px">이용약관에 동의 합니다 (필수)</Text>
                                <Spacer/>
                                <Button fontSize="10px" color={fc1} fontWeight={400} border="1px solid #303030" borderRadius="4px" bg="#ffffff" w="55px" h="20px">내용보기</Button>
                            </Flex>

                            <Flex alignItems="center" mt="12px">
                            {Check3?
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking3()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleY} alt="circleY"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkB} alt="checkB"/>
                                    </Flex>
                                </Flex>
                            :
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking3()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleG} alt="circleG"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkW} alt="checkW"/>
                                    </Flex>
                                </Flex>
                            }

                                <Text className='signIn_p2' ml="9px">개인정보 수집 및 이용에 동의합니다 (필수)</Text>
                                <Spacer/>
                                <Button fontSize="10px" color={fc1} fontWeight={400} border="1px solid #303030" borderRadius="4px" bg="#ffffff" w="55px" h="20px">내용보기</Button>
                            </Flex>
                            
                            <Text className='signIn_h2' mt="40px">마케팅 정보 수신 (선택)</Text>

                            <Box className='borderlineG' mt="10px"/>

                            <Flex alignItems="center" mt="15px">
                            {Check4?
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking4()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleY} alt="circleY"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkB} alt="checkB"/>
                                    </Flex>
                                </Flex>
                            :
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking4()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleG} alt="circleG"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkW} alt="checkW"/>
                                    </Flex>
                                </Flex>
                            }
                                <Text className='signIn_p2' ml="9px">전체 동의합니다</Text>

                                <Spacer/>

                            {Check5?
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking5()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleY} alt="circleY"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkB} alt="checkB"/>
                                    </Flex>
                                </Flex>
                            :
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking5()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleG} alt="circleG"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkW} alt="checkW"/>
                                    </Flex>
                                </Flex>
                            }
                                <Text className='signIn_p2' ml="9px" mr="25px">SNS</Text>

                            {Check6?
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking6()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleY} alt="circleY"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkB} alt="checkB"/>
                                    </Flex>
                                </Flex>
                            :
                                <Flex alignItems='center' justifyContent="center" onClick={()=>checking6()}>
                                    <Flex className='checkIcon_bg'>
                                        <Image src={circleG} alt="circleG"/>
                                    </Flex>
                                    <Flex className="checkIcon">
                                        <Image src={checkW} alt="checkW"/>
                                    </Flex>
                                </Flex>
                            }
                                <Text className='signIn_p2' ml="9px" mr="16px">Email</Text>
                            </Flex>
                            <Text color={fc4} fontSize="10px" mt="11px" ml="14px" >-App Push 수신 동의 상태는 앱 내 설정메뉴에서 별도로 변경할 수 있습니다</Text>
                        </Flex>


                    </Flex>
                    {/* button */}
                    <Spacer/>
                    {Check2&&Check3?
                        <Box w="100vw" h="40px" pr="15px" pl="15px" mt="20px" bottom="40px" position="sticky">
                            <Link href='/Home' >
                                <Button w="100%" borderRadius="full" bg="#303030" fontSize={f1} fontWeight="bold" color="#ffffff">
                                    동의하기
                                </Button>
                            </Link>
                        </Box>
                    :
                        <Box w="100vw" h="40px" pr="15px" pl="15px"  mt="20px" bottom="40px" position="sticky">
                            <Link w="100%" href='/Home' >
                                <Button w="100%" borderRadius="full" bg="#303030" fontSize={f1} fontWeight="bold" color="#ffffff" isDisabled>
                                    동의하기
                                </Button>
                            </Link>
                        </Box>
                    }

                </Flex>

            </Flex>

        </div>
    )
}