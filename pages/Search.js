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
            <Flex direction="column" h="100vh" bg="white">
                <Flex className='header' p="5px">
                    <Box className='headerIcon' mr="10px" ml="12px">
                        <Image src={Search_Icons} alt="search"/>
                    </Box>
                    <Input fontSize={f2} color="#A4A4A4" placeholder='키워드를 검색해보세요' bg="#F6F6F6" mr="5px" h="30px" border="none"/>
                    <Link href='/Home' className='headerIcon' ml="7px" mr="6px" > 
                        <Image src={btnX} alt="btnX"/>
                    </Link>
                </Flex>

                <Flex justifyContent="center" alignItems="center" h="50px" borderBottom="1px solid #F6F6F6">
                    <Flex w="11px" h="13px" mr="6px">
                        <Image src={location} alt="location"/>
                    </Flex>
                    <Text fontSize={f2} fontWeight="bold">내 주변 식당 검색하기</Text>
                </Flex>
                
                {/* hide */}
                <Box w="vw" m="10px" mt="29px" pb="30px" borderBottom="1px solid #F6F6F6" >
                    <Text fontSize="16px" fontWeight="bold" >오늘의 추천 태그</Text>

                    <Wrap mt="16px" spacing="5px">
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">점심식사</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">혼밥</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">직장인</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">데이트</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">연인</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">모던한</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">숨은맛집</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">숨은맛집</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">숨은맛집</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize="10px" border="1px solid #E1E1E1" color="#A4A4A4" borderRadius="4px" p="6px" align="center">숨은맛집</Text>
                        </WrapItem>
                    </Wrap>
                </Box>

                <Box w="vw" mt="5px" p="10px">
                    <Text fontSize="16px" fontWeight="bold" >내 주변 인기 태그</Text>
                    <Flex direction="column" ml="8px">
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text fontSize={f3} fontWeight="bold" mr="10px">1</Text>
                            <Tag textAlign="center" border="1px solid #E1E1E1" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text fontSize={f3} fontWeight="bold" mr="10px">3</Text>
                            <Tag textAlign="center" border="1px solid #E1E1E1" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text fontSize={f3} fontWeight="bold" mr="10px">3</Text>
                            <Tag textAlign="center" border="1px solid #E1E1E1" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text fontSize={f3} fontWeight="bold" mr="10px">4</Text>
                            <Tag textAlign="center" border="1px solid #E1E1E1" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                        </Flex>
                        <Flex direction="row" alignItems="center" mt="15px">
                            <Text fontSize={f3} fontWeight="bold" mr="10px">5</Text>
                            <Tag textAlign="center" border="1px solid #E1E1E1" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>


        </div>
    )
  }