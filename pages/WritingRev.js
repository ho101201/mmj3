import { 
    Box,
    Flex,
    Text,
    Link,
    Button,
    Input,
    Spacer,
    Textarea,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React, { useState } from 'react';

  import btnX from './images/btnX.png';
  import arrowL from './images/arrow-left.png';
  import camera from './images/addphoto3.png';
  import starF from './images/starF.png';
  import starB from './images/starB2.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';
  import del from './images/del.png';


  export default function WritingRev() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [Check1, setCheck1] = useState(false);
    const [Check2, setCheck2] = useState(false);
    const [Check3, setCheck3] = useState(false);
    const [Check4, setCheck4] = useState(false);
    const [Check5, setCheck5] = useState(false);
    
    const checking1 =()=> {
        setCheck1( 
            Check1 => true,
            Check2 => false,
            Check3 => false,
            Check4 => false,
            Check5 => false);
    }
    
    const checking2 =()=> {
        setCheck2( 
            Check1 => true,
            Check2 => true,
            Check3 => false,
            Check4 => false,
            Check5 => false );
    }
    
    const checking3 =()=> {
        setCheck3( 
            Check1 => true,
            Check2 => true,
            Check3 => true,
            Check4 => false,
            Check5 => false  );
    }

    const checking4 =()=> {
        setCheck4( 
            Check1 => true,
            Check2 => true,
            Check3 => true,
            Check4 => true,
            Check5 => false );
    }
    
    const checking5 =()=> {
        setCheck5( 
            Check1 => true,
            Check2 => true,
            Check3 => true,
            Check4 => true,
            Check5 => true );
    }

    return(
        <div>
            <Flex className='header'>
                <Text className='headerTitle'>후기 쓰기</Text>
                <Link href='/CutletInfo' className='headerIcon' position="absolute" right="11px">
                    <Image src={btnX} alt="btnX"/>
                </Link>
            </Flex>

            <Flex className='wr_storeInfoBox'>
                <Flex className='wr_storePicture'>
                    <Image src={p1} alt="p1"/>
                </Flex>
                <Flex direction="column" ml='10px'>
                    <Text className='wr_storeName'>카츠단길</Text>
                    <Flex direction="row" alignItems="center" mb='10px'>
                        <Flex className='category_star'>
                            <Image src={starF} alt="starF"/>
                        </Flex>
                        <Text className='review_score'>4.5</Text>
                        <Text className='review_count'> (10)</Text>
                    </Flex>
                    <Text className='review_p1'>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
            </Flex> 

            <Text className='wr_question'>매장의 어떤점이 좋았나요?</Text>

            <Flex className='starBox'>
                <Flex className='star' onClick={()=>checking1()} m="5px">
                    {Check1?
                        <Image src={starF} alt="starf"/>
                    :
                        <Image src={starB} alt="starB"/>
                    }
                </Flex>
                <Flex className='star' onClick={()=>checking2()} m="5px">
                    {Check2?
                        <Image src={starF} alt="starF"/>
                    :
                        <Image src={starB} alt="starB"/>
                    }
                </Flex>
                <Flex className='star' onClick={()=>checking3()} m="5px">
                    {Check3?
                        <Image src={starF} alt="starF"/>
                    :
                        <Image src={starB} alt="starB"/>
                    }
                </Flex>
                <Flex className='star' onClick={()=>checking4()} m="5px">
                    {Check4?
                        <Image src={starF} alt="starF"/>
                    :
                        <Image src={starB} alt="starB"/>
                    }
                </Flex>
                <Flex className='star' onClick={()=>checking5()} >
                    {Check5?
                        <Image src={starF} alt="starF"/>
                    :
                        <Image src={starB} alt="starB"/>
                    }
                </Flex>

            </Flex>
            
            <Flex className='wr_input'>
                <Textarea fontSize={f2} placeholder="최소 5자 이상 입력해주세요.&#13;&#10;(ex. 이 메뉴가 제일 맛있었어요, 친절해요, 깔끔해요.주차가 편리해요 등)" 
                variant="unstyled"  border="1px solid #E1E1E1 " p="10px" resize='none' overflow="visible"/>
            </Flex>
            <Flex direction="row-reverse" pr="10px">
                <Text fontSize={f2} color="#A4A4A4">0/3,000</Text>
            </Flex>

            <Flex className='attachFile'>
                <Flex className='cameraIcon'>
                    <Image src={camera} alt="camera"/>
                </Flex>
                <Flex direction="column" ml="10px">
                    <Text fontSize={f3} color={fc2} fontWeight="bold" mb="5px">사진/동영상 첨부하기</Text>
                    <Text fontSize="10px" color={fc4}>상품과 무관한 사진/동영상을 첨부한 리뷰는 통보없이</Text>
                    <Text fontSize="10px" color={fc4}>삭제될 수 있습니다.</Text>
                </Flex>
            </Flex>

            <Link href='/TagInput'>
                <Flex className='tagInput'>
                    <Text fontSize={f2} color={fc2}># 태그 입력</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR} alt="arrowR"/>
                    </Flex>
                </Flex>
            </Link>

            <Flex className='btn_cover' mt="30px" pb="20px">
                    <Link href='/CutletInfo'>
                        <button className='yellowBtn' >등록</button>
                    </Link>
            </Flex>


        </div>
    )
  }