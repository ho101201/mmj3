import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';


import home from './images/navIcons/icon_home.png';
import homeA from './images/navIcons/icon_homeA.png';
import rec from './images/navIcons/icon_rec.png';
import recA from './images/navIcons/icon_recA.png';
import rev from './images/navIcons/icon_rev.png';
import revA from './images/navIcons/icon_revA.png';
import my from './images/navIcons/icon_my.png';
import myA from './images/navIcons/icon_myA.png';
import dish from './images/dish.png';

export default function Recommand() {
    
    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );

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
            <Flex direction="column" h="100vh">
                <Flex direction="column" w="vw" h="100%" bg="#F6E229" justifyContent="center">
                    <Flex bg="#F6E229" alignItems="center" justifyContent="center" direction="column" >
                        <Flex w="100%" h="100%">
                            <Image src={dish} alt="dish"/>
                        </Flex>
                        <Flex position="absolute" direction="column"  justifyContent="center" >
                            <Flex justifyContent="center">

                                <Flex direction="column-reverse" w="180px" position="relative" alignItems="center">
                                    <Box  position="absolute">
                                        <Text className='recommand_userName'>닉네임최대글자수 </Text>
                                    </Box>
                                    <Box className='recommand_borderLine' w="100%"/>
                                </Flex>

                                <Text fontSize="24px" fontWeight="bold" color={fc2}>님</Text>
                            </Flex>
                            <Text align="center" fontSize="24px" color={fc2}>오늘 뭐 먹고 싶어요?</Text>
                        </Flex>
                    </Flex>

                    <Flex direction="row" justifyContent="center" m="15px" mb="25px" position="sticky" bottom="100px" >
                        <Link href='/Situation' w="100%" mr="5px">
                            <button className='whiteBtn' >상황 따라</button>
                        </Link>
                        <Link  w="100%" ml="5px">
                            <button className='blackBtn'>기분 따라</button>
                        </Link>
                    </Flex>
                </Flex>    

                <Spacer/>
                {/* navbar */}
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
                                    <Image src={recA} alt="recA"/>
                                </Link>
                                <Text className='docText_H'>추천</Text>
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
                                    <Image src={my} alt="my"/>
                                </Link>
                                <Text className='docText_N'>마이</Text>
                            </Flex>
                            <Spacer/>
                        </Flex>
                    </Box>

            </Flex>
        </div>
    )
}