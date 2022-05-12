import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    Wrap,
    WrapItem,
    Tag,
    SimpleGrid,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import Search_Icons from './images/Search_Icons.png';
  import location from './images/location.png';

  export default function Search() {

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
            <Flex className='cover' bg="white">

                <Flex className='header' p="5px">
                    <Box className='headerIcon' mr="10px" ml="12px">
                        <Image src={Search_Icons} alt="search"/>
                    </Box>
                    <input className='searchBar' placeholder='키워드를 검색해보세요'/>
                    <Link href='/Home' className='headerIcon' ml="7px" mr="6px" > 
                        <Image src={btnX} alt="btnX"/>
                    </Link>
                </Flex>

                <Flex justifyContent="center" alignItems="center" h="50px" borderBottom="1px solid #F6F6F6">
                    <Flex className='locationIcon'>
                        <Image src={location} alt="location"/>
                    </Flex>
                    <Text fontSize={f2} fontWeight="bold">내 주변 식당 검색하기</Text>
                </Flex>
                
                {/* hide */}
                <Box w="vw" m="10px" mt="29px" pb="30px" borderBottom="1px solid #F6F6F6" >
                    <Text fontSize={f1} fontWeight="bold" >오늘의 추천 태그</Text>

                    <Wrap mt={f1} spacing="5px">
                        <WrapItem>
                            <Text className='tags'>점심식사</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>혼밥</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>직장인</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>데이트</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>연인</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>모던한</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>숨은맛집</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>숨은맛집</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>숨은맛집</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text className='tags'>숨은맛집</Text>
                        </WrapItem>
                    </Wrap>
                </Box>

                <Box w="vw" mt="5px" p="10px">
                    <Text fontSize={f1} fontWeight="bold" >내 주변 인기 태그</Text>
                    <Flex direction="column" ml="8px">
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text className='tagRNum'>1</Text>
                            <Text className='tags'>점심식사</Text>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text className='tagRNum'>3</Text>
                            <Text className='tags'>점심식사</Text>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text className='tagRNum'>3</Text>
                            <Text className='tags'>점심식사</Text>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text className='tagRNum'>4</Text>
                            <Text className='tags'>점심식사</Text>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text className='tagRNum'>5</Text>
                            <Text className='tags'>점심식사</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>


        </div>
    )
  }