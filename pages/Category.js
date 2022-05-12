import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    HStack,
    Wrap,
    Tag,
    useRadio,
    useRadioGroup,
    WrapItem
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, useRef
} from 'react';
  
  import styled from "styled-components";
  
  import bell from './images/Bell_Icon.png';
  import search from './images/Search_Icons.png';
  import info from './images/info.png';
  import arrowB from './images/arrowB.png';
  import starF from './images/starF.png';

  import p1 from './images/photo/photoEx1.png';

//   footer
  import home from './images/navIcons/icon_home.png';
  import homeA from './images/navIcons/icon_homeA.png';
  import rec from './images/navIcons/icon_rec.png';
  import recA from './images/navIcons/icon_recA.png';
  import rev from './images/navIcons/icon_rev.png';
  import revA from './images/navIcons/icon_revA.png';
  import my from './images/navIcons/icon_my.png';
  import myA from './images/navIcons/icon_myA.png';
  
  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          border="1px solid #E1E1E1"
          borderRadius='full'
          fontSize="10px"
          fontWeight={500}

          _checked={{
            bg: '#F6E229',
            border: "1px solid #303030"
          }}
          _focus={{
            
          }}
          width="40px"
          height="25px"
          
          display="flex"
          alignItems="center"
          justifyContent="center"
          
        //   px={3}
        //   py={1}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

  export default function Category () {
  
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
    }

    const styles = {
        control: base => ({
          ...base,
          fontFamily: "Noto Sans KR"
        }),
        menu: base => ({
          ...base,
          fontFamily: "Noto Sans KR"
        })
      };

    const SelectBoxWrapper = styled.div`
	display: flex;
`;

    const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;  
`;

    const options = ['전체', '한식', '일식','중식', '양식', '분식', '퓨전', '기타' ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'catalog',
        defaultValue: '전체',
    })

    const group = getRootProps()

  
    return (
      
        <div>
                <Flex className='header'>
                    <Link href='/SetLocation' display="flex" flexDirection="row">
                        <Flex alignItems="center" justifyContent="center">
                            <Text className='currentLocation'>송파구 문정동</Text>
                            <Flex className='header_arrowB'>
                                <Image src={arrowB} alt="arrowB"/>
                            </Flex>
                        </Flex>
                    </Link>
                    <Spacer/>
                    <Link href='/Search'>
                        <Box className='headerIcon' mr="22px">
                            <Image src={search} alt="search"/>
                        </Box>
                    </Link>
                    <Link href='/Alarm'>
                        <Box className='headerIcon' mr="12px">
                            <Image src={bell} alt="bell"/>
                        </Box>
                    </Link>
                </Flex>

                {/* hide or fade out */}
                {Check&&
                    <Box position="absolute" w="214px" h="28px" top="29px" left="11px" onClick={()=>checkAlarm()}>
                        <Image src={info} alt="info"/>
                    </Box>
                }

                <HStack {...group} mt="19px" mb="15px" ml="10px" overflowX="hidden">
                    {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                        )
                    })}
                </HStack>

                <Wrap ml="10px" mr="10px" spacing="10px" justify="center">
                    <WrapItem>
                        <Flex direction="column">
                            <Flex className='category_itemImage'>
                                <Image src={p1} alt="p1"/>
                            </Flex>
                            <Flex className='category_yellowTag' >
                                <Text fontSize="10px" align="center" fontWeight="bold" letterSpacing="-0.5px">
                                    영업중
                                </Text>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text className='category_itemName'>카츠단길</Text>
                                <Spacer/>
                                <Text className='category_distance'>126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Box className='category_tag'>일식</Box>
                                <Box className='category_tag'>치즈돈까스</Box>
                            </Flex>
                            <Flex mt="10px">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='category_score'>4.5</Text>
                                <Text className='category_count'>(10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex className='category_itemImage'>
                                <Image src={p1} alt="starF"/>
                            </Flex>
                            <Flex bg="#333333" border="1px solid #FFF061" w="55px" h="20px" borderRadius="4px" m="10px" justifyContent="center" alignItems="center" position="absolute" >
                                <Text color="#F6E229" fontSize="10px" align="center" fontWeight="bold" letterSpacing="-0.5px">
                                    브레이크
                                </Text>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text className='category_itemName'>카츠단길</Text>
                                <Spacer/>
                                <Text className='category_distance'>126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Box className='category_tag'>일식</Box>
                                <Box className='category_tag'>치즈돈까스</Box>
                            </Flex>
                            <Flex mt="10px">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='category_score'>4.5</Text>
                                <Text className='category_count'>(10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex className='category_itemImage'>
                                <Image src={p1} alt="p1"/>
                            </Flex>
                            <Flex bg="#333333" border="1px solid #FFF061" w="40px" h="20px" borderRadius="4px" m="10px" justifyContent="center" alignItems="center" position="absolute" >
                                <Text color="#F6E229" fontSize="10px" align="center" fontWeight="bold" letterSpacing="-0.5px">
                                    휴무
                                </Text>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text className='category_itemName'>카츠단길</Text>
                                <Spacer/>
                                <Text className='category_distance'>126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Box className='category_tag'>일식</Box>
                                <Box className='category_tag'>치즈돈까스</Box>
                            </Flex>
                            <Flex mt="10px">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='category_score'>4.5</Text>
                                <Text className='category_count'>(10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex className='category_itemImage'>
                                <Image src={p1} alt="p1"/>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text className='category_itemName'>카츠단길</Text>
                                <Spacer/>
                                <Text className='category_distance'>126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Box className='category_tag'>일식</Box>
                                <Box className='category_tag'>치즈돈까스</Box>
                            </Flex>
                            <Flex mt="10px" alignItems="center">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='category_score'>4.5</Text>
                                <Text className='category_count'>(10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex className='category_itemImage'>
                                <Image src={p1} alt="p1"/>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text className='category_itemName'>카츠단길</Text>
                                <Spacer/>
                                <Text className='category_distance'>126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Box className='category_tag'>일식</Box>
                                <Box className='category_tag'>치즈돈까스</Box>
                            </Flex>
                            <Flex mt="10px">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='category_score'>4.5</Text>
                                <Text className='category_count'>(10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex className='category_itemImage'>
                                <Image src={p1} alt="p1"/>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text className='category_itemName'>카츠단길</Text>
                                <Spacer/>
                                <Text className='category_distance'>126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Box className='category_tag'>일식</Box>
                                <Box className='category_tag'>치즈돈까스</Box>
                            </Flex>
                            <Flex mt="10px">
                                <Flex className='category_star'>
                                    <Image src={starF} alt="starF"/>
                                </Flex>
                                <Text className='category_score'>4.5</Text>
                                <Text className='category_count'>(10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>
                </Wrap>

                {/* footer */}
                <Spacer/>
                <Box className='doc'>
                    <Flex className='docArray' >
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Home' className='docIcon'>
                                <Image src={home} alt="home"/>
                            </Link>
                            <Text className='docText_N' >홈</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Recommand' className='docIcon'>
                                <Image src={rec} alt="rec"/>
                            </Link>
                            <Text className='docText_N' >추천</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Review' className='docIcon'>
                                <Image src={rev} alt="rev"/>
                            </Link>
                            <Text className='docText_N' >후기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex className='docComp'>
                            <Link href='/Profile' className='docIcon'>
                                <Image src={my} alt="my"/>
                            </Link>
                            <Text className='docText_N' >마이</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>

        </div>
  
    )
  }