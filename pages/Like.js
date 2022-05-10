import { 
    Flex,
    Text,
    Link,
    Grid,GridItem,
    Spacer,
    Tag,
    Box
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import {React, useState} from 'react';

  import arrowL from './images/arrow-left.png';
  import photoEx0 from './images/photo/photoEx0.png';
  import p1 from './images/photo/photoEx1.png';
  import del from './images/del.png';
  import starB from './images/starB.png';
  import starF from './images/starF.png';
  import user from './images/user.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';

  export default function Like() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [Page, setPage] = useState(true);

    const movePage =()=> {
        setPage( Page => !Page);
    }

    return(
        <div>
            <Flex direction="column" h="100%" bg="#FAFAFA">

                <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD" bg="white">
                    <Text fontSize={f1} color={fc2} fontWeight="bold" align="center">좋아요</Text>
                    <Link href='/Profile' position="absolute" left="11px" w="20px" h="20px">
                        <Image src={arrowL} alt="arrowL"/>
                    </Link>
                </Flex> 

                {Page?
                    <Grid templateColumns="repeat(2,1fr)" h="50px" bg="white">
                        <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #F6E229">
                                <Text fontSize={f2} color={fc2} fontWeight="bold" align="center">식당</Text>
                        </GridItem>
        
                        <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030" onClick={()=>movePage()}>
                                <Text fontSize={f2} color={fc2} fontWeight="medium" align="center">후기</Text>
                        </GridItem>
                    </Grid>
                :
                    <Grid templateColumns="repeat(2,1fr)" h="50px" bg="white">
                        <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #303030" onClick={()=>movePage()}>
                                <Text fontSize={f2} color={fc2} fontWeight="medium" align="center">식당</Text>
                        </GridItem>

                        <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #F6E229">
                                <Text fontSize={f2} color={fc2} fontWeight="bold" align="center">후기</Text>
                        </GridItem>
                    </Grid>
                }

                {/* 식당 */}
                {Page&&
                    <Flex direction="column" bg="white" mb="10px">
                        <Flex direction='row' p="10px" alignItems="center" h="126px">
                            <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                                <Image src={p1} alt="p1"/>
                            </Flex>
                            <Flex direction="column" ml='10px'>
                                <Text fontWeight="bold" fontSize={f2} color={fc2}>카츠단길</Text>
                                <Flex direction="row" mb='6px' alignItems="center">
                                    <Flex w="13px" h="13px">
                                        <Image src={starF} alt="starF"/>
                                    </Flex>
                                    <Text fontSize={f2} ml="5px" color={fc2}>4.5 (10)</Text>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>신천/잠실 · 한식코스</Text>
                            </Flex>
                            <Spacer/>
                            <Flex w="30px" h="30px">
                                <Image src={del} alt="del"/>
                            </Flex>
                        </Flex>

                        <Grid templateColumns="repeat(3,1fr)" borderTop="1px solid #F6F6F6" borderBottom="1px solid #F6F6F6" h="52px" mr="10px" ml="10px">
                            <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                                <Flex w="12px" h="12px" mr="7px">
                                    <Image src={starB} alt="starB"/>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>가볼래요<text>(99)</text></Text>
                            </GridItem>
                            <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                                <Flex w="12px" h="12px" mr="7px">
                                    <Image src={heart} alt="heart"/>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>좋아요<text>(99)</text></Text>
                            </GridItem>
                            <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                                <Flex w="12px" h="12px" mr="7px">
                                    <Image src={comment} alt="comment"/>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>댓글<text>(99)</text></Text>
                            </GridItem>
                        </Grid>
                    </Flex>
                }



                {!Page&&
                    <Flex w="vw" p="10px" direction="column" bg="white">
                        <Text fontSize={f1} fontWeight="bold" mt="18px" mb="16px" >카츠단길 문정역</Text>
                        <Flex direction="row">
                            <Flex w="50px" h="50px" >
                                <Image src={user} alt="user"/>
                            </Flex>
                            <Flex ml="12px" direction="column" justifyContent="center">
                                <Text fontSize={f2} >유저닉네임</Text>
                                <Text fontSize="10px" color={fc5}>2022.03.01  1번째 방문</Text>
                            </Flex>
                            <Spacer/>
                            <Flex direction="row" alignItems="center">
                                <Flex w="13px" h="13px" mr="5px">
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text fontWeight="bold" fontSize={f2}>4.5</Text>
                            </Flex>
                        </Flex>
                        <Flex mt="12px">
                            <Image src={photoEx0} alt="p0"/>
                        </Flex>
        
                        <Text id='userReview1' mt="12px" >
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                            후기텍스트
                        </Text>
        
                        <Flex mt="41px">
                            <Tag border="1px solid #E1E1E1" color={fc4} bg="#ffffff" mr="5px">점심식사</Tag>
                            <Tag border="1px solid #E1E1E1" color={fc4} bg="#ffffff" mr="5px">후기태그</Tag>
                            <Link href='/AllTags'>
                                <Tag border="1px solid #E1E1E1" color={fc4} bg="#ffffff" mr="5px">+더보기</Tag>
                            </Link>
                        </Flex>
        
                        <Grid templateColumns="repeat(3,1fr)" borderTop="1px solid #E8E8E8" h="52px" mt="30px">
                            <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                                <Flex w="12px" h="12px" mr="7px">
                                    <Image src={starB} alt="starB"/>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>가볼래요</Text>
                            </GridItem>
                            <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                                <Flex w="12px" h="12px" mr="7px">
                                    <Image src={heart} alt="heart"/>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>좋아요</Text>
                            </GridItem>
                            <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                                <Flex w="12px" h="12px" mr="7px">
                                    <Image src={comment} alt="comment"/>
                                </Flex>
                                <Text fontSize={f2} color={fc5}>댓글</Text>
                            </GridItem>
                        </Grid>
                    </Flex>

                }
            </Flex>

        </div>
    )
  }