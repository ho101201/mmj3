import { 
    Tag,
    TagCloseButton,
    Flex,
    Icon,
    Text,
    Spacer,
    Link,
    Input,
    Button,
    useDisclosure,
    useMediaQuery,
    Wrap, 
    SWrapItem,
    TagLabel
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { AddIcon } from '@chakra-ui/icons'
  import { 
    useState, 
} from 'react';


import arrowL from './images/arrowL.png';
import addphoto1 from './images/addphoto1.png';
import addphoto2 from './images/addphoto2.png';


export default function PfSet() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const fc1 ="#303030"
    const fc2 ="#333333"
    const fc3 ="#494949"
    const fc4 ="#A4A4A4"
    const fc5 ="#565656"

    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );

    return(
        <div>
            <Flex className='header'>
                <Flex ml="8px" alignItems="center">
                    <Link href='/Profile' >
                        <Flex className='header_arrowL'>
                            <Image src={arrowL} alt="arrowL"/>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer/>
                <Text className='headerTitle' position="absolute">
                    프로필 설정
                </Text>
            </Flex>

            <Flex alignItems="center" justifyContent='center' m="20px">
                <Flex className='squarcle' alignItems="center" justifyContent='center' >
                    <Image src={addphoto2} alt="addphoto2"/>
                    <Flex className='addProfileIcon'>
                        <Image src={addphoto1} alt="addphoto1"/>
                    </Flex>
                </Flex>
            </Flex>

            <Flex className='pSetting_inputContainer'>
                <Text fontSize={f2} fontWeight="bold" color={fc2}>닉네임</Text>
                <Spacer/>
                <input className='pSetting_input' border="1px solid #E1E1E1" placeholder='닉네임' >
                </input>
            </Flex>

            <Flex className='pSetting_inputContainer'>
                <Text fontSize={f2} fontWeight="bold" color={fc2}>생년월일</Text>
                <Spacer/>
                <input className='pSetting_input' placeholder='생년월일' border="1px solid #E1E1E1">
                </input>
            </Flex>

            <Flex className='pSetting_inputContainer'>
                <Text fontSize={f2} fontWeight="bold" >성별</Text>
                <Spacer/>
                <input className='pSetting_input' placeholder='성별' border="1px solid #E1E1E1">
                </input>
            </Flex>

            <Flex className='borderlineG' />

            <Text fontSize={f2} fontWeight="bold" color={fc2} mt="26px" ml="10px">자주 가는 지역</Text>
            <Wrap mt="10px" ml="10px">
                <Tag fontSize={f3} color={fc4} border="1px solid #E1E1E1" bg="none" borderRadius="4px">
                    <TagLabel>지역명</TagLabel>
                     <TagCloseButton fontSize="10px" bg={fc4} borderRadius="full" color="white" w="10px" h="10px"/>
                </Tag>
                <Tag fontSize={f3} color={fc4} border="1px solid #E1E1E1" bg="none" borderRadius="4px">
                    <TagLabel>지역명</TagLabel>
                    <TagCloseButton fontSize="10px" bg={fc4} borderRadius="full" color="white" w="10px" h="10px"/>
                </Tag>
                <Tag fontSize={f1} color={fc4} border="1px solid #E1E1E1" bg="none" borderRadius="4px">
                    <Link href='/AddLocation'>
                        <TagLabel><Icon w="48px" pb="5px" as={AddIcon}/></TagLabel>
                    </Link>
                </Tag>
            </Wrap>
            <Text color={fc4} fontSize="10px" ml="10px" mt="10px">* 지역은 최소 1개 이상 최대 3개까지 설정 가능합니다</Text>

            <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                <Flex  w="100%" h="40px">
                    <Link href='/Profile' w="100%" mr="10px" ml="10px">
                        <Button w="100%" borderRadius="full" bg="#F6E229" color={fc2} fontWeight={700} fontSize={f1}>완료</Button>
                    </Link>
                </Flex>
            </Flex>
 
        </div>
    )
}