import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    HStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useMediaQuery,
    background
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';
  
  import styled, { css } from 'styled-components'
  
  import bell from './images/Bell_Icon.png';
  import search from './images/Search_Icons.png';
  import info from './images/info.png';
  import arrowB from './images/arrowB.png';
  import circleB from './images/EllipseB.png';
  import ranking from './images/ranking.png';

  import p1 from './images/photo/photoEx1.png';
  import p2 from './images/photo/photoEx2.png';
  import p3 from './images/photo/photoEx3.png';
  import pd from './images/photo/default.png';

  import foodA1 from './images/foodIcon/foodA1.png';
  import foodA2 from './images/foodIcon/foodA2.png';
  import foodA3 from './images/foodIcon/foodA3.png';
  import foodA4 from './images/foodIcon/foodA4.png';
  import foodA5 from './images/foodIcon/foodA5.png';
  import foodA6 from './images/foodIcon/foodA6.png';
  import foodA7 from './images/foodIcon/foodA7.png';
  import foodA8 from './images/foodIcon/foodA8.png';
  import foodA9 from './images/foodIcon/foodA9.png';
  import foodA10 from './images/foodIcon/foodA10.png';
  import foodN1 from './images/foodIcon/foodN1.png';
  import foodN2 from './images/foodIcon/foodN2.png';
  import foodN3 from './images/foodIcon/foodN3.png';
  import foodN4 from './images/foodIcon/foodN4.png';
  import foodN5 from './images/foodIcon/foodN5.png';
  import foodN6 from './images/foodIcon/foodN6.png';
  import foodN7 from './images/foodIcon/foodN7.png';
  import foodN8 from './images/foodIcon/foodN8.png';
  import foodN9 from './images/foodIcon/foodN9.png';
  import foodN10 from './images/foodIcon/foodN10.png';
  import iconBgA from './images/foodIcon/iconBgA.png';
  import iconBgN from './images/foodIcon/iconBgN.png';
  
//   footer
  import home from './images/navIcons/icon_home.png';
  import homeA from './images/navIcons/icon_homeA.png';
  import rec from './images/navIcons/icon_rec.png';
  import recA from './images/navIcons/icon_recA.png';
  import rev from './images/navIcons/icon_rev.png';
  import revA from './images/navIcons/icon_revA.png';
  import my from './images/navIcons/icon_my.png';
  import myA from './images/navIcons/icon_myA.png';
  
  export default function LogIn() {
  
    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [Check, setCheck] = useState(true);
    const checkAlarm =()=> {
        setCheck( Check => !Check );
    };

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const modal1 = useDisclosure();
    const modal2 = useDisclosure();

    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );
  
    return (
      
        <div>
            {/* homeBody */}
            <Flex className='cover'>
                
                <Flex className='header'>
                    <Link href='/SetLocation' display="flex" flexDirection="row">
                        <Flex alignItems="center" justifyContent="center">
                            <Text className='currentLocation'>????????? ?????????</Text>
                            <Flex className='header_arrowB'>
                                <Image src={arrowB} alt="arrowB"/>
                            </Flex>
                        </Flex>
                    </Link>
                    <Spacer/>
                        <Box className='headerIcon' mr="22px">
                            <Link href='/Search'>
                                <Image src={search} alt="search"/>
                            </Link>
                        </Box>
                        <Box className='headerIcon' mr="12px">
                            <Link href='/Alarm'>
                                <Image src={bell} alt="bell"/>
                            </Link>
                        </Box>
                </Flex>

                {Check&&
                    <Box position="absolute" w="214px" h="28px" top="29px" left="11px" onClick={()=>checkAlarm()}>
                        <Image src={info} alt="info"/>
                    </Box>
                }
                    {/* squarcle? */}
                    {/* <svg width="88px" height="88px" viewBox="0 0 88 88">
                        <g id="Page-1" stroke="#303030" stroke-width="2" fill="none" fill-rule="evenodd" stroke-opacity="1">
                                <path d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z" id="bg/profile/default" fill="#fae100"></path>
                        </g>
                    </svg> */}

                {/* category */}
                <HStack className='horizontalScroll' pt='20px' pb="16px" spacing="14.5px">
                    {/* hilighted */}
                    <Link href='/Category' ml="10px">
                        <Flex className='category'>
                            <Box className='categoryBody'>
                                <Image src={iconBgA} alt="iconBgA"/>
                            </Box>
                            <Box className='categoryIcon' >
                                <Image src={foodA1} alt="foodA1"/>
                            </Box>
                            <Text className='categoryText_H'>??????</Text>
                        </Flex>
                    </Link>

                    {/* normal */}
                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN2} alt="foodN2"/>
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex>

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN3} alt="foodN3" />
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex>

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN4} alt="foodN4"/>
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex>

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN5} alt="foodN5"/>
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex> 

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN6} alt="foodN6"/>
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex> 

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN7} alt="foodN7"/>
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex> 

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN8} alt="foodN8"/>
                        </Box>
                        <Text className='categoryText_N'>?????????</Text>
                    </Flex> 
                    
                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN9} alt="foodN9"/>
                        </Box>
                        <Text className='categoryText_N' mt="16px">?????????</Text>
                        <Text className='categoryText_N' mt="36px">????????????</Text>
                    </Flex> 

                    <Flex className='category'>
                        <Box className='categoryBody'>
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box className='categoryIcon'>
                            <Image src={foodN10} alt="foodN10"/>
                        </Box>
                        <Text className='categoryText_N'>??????</Text>
                    </Flex> 
                </HStack>

                <Text mt="10px" ml="10px" fontSize={f1} fontWeight="bold" color={fc2}>????????? ?????? ??????</Text>
                
                <Box w="100%" className='horizontalScroll' pl="10px" pb="10px" mt="11px">
                    <Box className='recentlyEaten'>
                        <Image src={p1} alt="p1"/>
                    </Box>
                    <Box className='recentlyEaten'>
                        <Image src={p2} alt="p2"/>
                    </Box>
                    <Box className='recentlyEaten'>
                        <Image src={p3} alt="p3"/>
                    </Box>
                    <Box className='recentlyEaten'>
                        <Image src={pd} alt="pd"/>
                    </Box>
                </Box>

                <Flex className='styledContainer'>
                     <Flex position="absolute" alignItems="center" justifyContent="center" mb="115px">
                         <Flex className='styledContainer_iconBg'>
                             <Image src={circleB} alt="fcircleB"/>
                         </Flex>
                         <Flex className="styledContainer_icon">
                             <Image src={ranking} alt="ranking"/>
                         </Flex>
                     </Flex>
                    <Text fontSize={f2} color={fc3} fontWeight="bold" align="center" mt="10px">??????????????? ????????? ????????? ??? ??????????</Text>
                    <Flex direction="row" justifyContent="center" mt="9px">
                        <Flex className='smallBlackBtn' mr="5px">????????? ??????</Flex>
                        <Flex className='smallYellowBtn' ml="5px">????????? ??????</Flex>
                        {/* <Button className='blackBtn' w="90px" h="30px" bg={fc1} color="white" borderRadius="full" fontSize="10px" mr="5px" fontWeight="medium">????????? ??????</Button>
                        <Button className='yellowBtn' w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px">????????? ??????</Button> */}
                    </Flex>
                </Flex>

                <Flex direction="row" w="vw" h="60px" ml="10px" mr="10px" mt="30px" mb="30px" borderRadius="full" bg="#F6E229" justifyContent="center" alignItems="center" >
                    <Text fontSize={f2} fontWeight="medium" letterSpacing="-1px" align="center" mr="5px" color={fc3}>????????? ??? ????????? ??????????????? ?</Text>
                    <Link href='/RandomR1'>
                        <Flex className='smallBlackBtn' fontSize={f3} w="100px" ml="5px">?????? ????????????</Flex>
                    </Link>

                </Flex>
                
                {/* Modal1 */}
                <Button onClick={modal1.onOpen} bg="yellow.200">
                    modal test
                </Button>
                <Modal id='alarm' isOpen={modal1.isOpen} onClose={modal1.onClose} show={show1} onHide={() => setShow1(false)}>
                    <ModalOverlay/>
                    <ModalContent  borderRadius="30px">
                        <ModalBody >
                            <Text fontSize={f2} color={fc2} fontWeight="bold" align="center" mt="26px">????????????????????? ????????? ???????????? ?????????.</Text>
                            <Text fontSize={f3} color={fc3} mt="10px" align="center">
                                ??????, ????????? ??? ????????? ????????? ????????? ????????? ??? ????????????.
                            </Text>
                            <Text fontSize={f3} color={fc3} align="center">
                                ???????????? ?????? ????????? ??? ????????????.
                            </Text>
                            <Flex direction="row" justifyContent="center" mt="15px" mb="25px">
                                <Flex className='smallBlackBtn' mr="5px" onClick={modal1.onClose}>?????? ??? ???</Flex>
                                <Flex className='smallYellowBtn' ml="5px" onClick={modal2.onOpen}>??????</Flex>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* Modal2 */}
                <Modal id='alarm' isOpen={modal2.isOpen} onClose={modal2.onClose} show={show2} onHide={() => setShow2(false)}>
                    <ModalOverlay/>
                    <ModalContent  borderRadius="30px">
                        <ModalCloseButton w="20px" h="20px" fontSize="20px" m="10px"/>
                        <ModalBody >
                            <Text fontSize={f2} color={fc2} fontWeight="bold" align="center" mt="26px">?????? ????????? ????????? ?????????!</Text>
                            <Text fontSize={f3} color={fc3} mt="10px" align="center">
                                ???????????? ????????? ???????????? ?????? ????????? ?????????  
                            </Text>
                            <Text fontSize={f3} color={fc3} align="center">
                                ?????? ????????? ???????????? ?????????????????????.
                            </Text>
                            <Flex direction="row" justifyContent="center" mt="15px" mb="25px">
                                <Flex className='smallYellowBtn' >?????? ????????????</Flex>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* footer */}
                <Spacer/>
                <Box className='dock'>
                    <Flex className='dockArray' >
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Home' className="dockIcon">
                                <Image src={homeA} alt="homeA"/>
                            </Link>
                            <Text className='dockText_H' >???</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Recommand' className="dockIcon">
                                <Image src={rec} alt="rec"/>
                            </Link>
                            <Text className='dockText_N' >??????</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Review' className="dockIcon">
                                <Image src={rev} alt="rev"/>
                            </Link>
                            <Text className='dockText_N'>??????</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='dockComp'>
                            <Link href='/Profile' className="dockIcon">
                                <Image src={my} alt="my"/>
                            </Link>
                            <Text className='dockText_N'>??????</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>
            </Flex>

        </div>
    )
  }
  