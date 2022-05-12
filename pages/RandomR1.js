import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Wrap,
    Button,
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';

import arrowL from './images/arrowL.png';
import exportBtn from './images/exportBtn.png';
import circleY from './images/EllipseY.png';
import FNK from './images/F&K.png';

export default function Random1() {

    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);
    const [select4, setSelect4] = useState(false);
    const [select5, setSelect5] = useState(false);
    const [select6, setSelect6] = useState(false);
    const [select7, setSelect7] = useState(false);
    const [select8, setSelect8] = useState(false);
    const [select9, setSelect9] = useState(false);
    const [select10, setSelect10] = useState(false);

    const pushSelect1 =()=>{
        setSelect1(select1=>!select1);
    }
    const pushSelect2 =()=>{
        setSelect2(select2=>!select2);
    }
    const pushSelect3 =()=>{
        setSelect3(select3=>!select3);
    }
    const pushSelect4 =()=>{
        setSelect4(select4=>!select4);
    }
    const pushSelect5 =()=>{
        setSelect5(select5=>!select5);
    }
    const pushSelect6 =()=>{
        setSelect6(select6=>!select6);
    }
    const pushSelect7 =()=>{
        setSelect7(select7=>!select7);
    }
    const pushSelect8 =()=>{
        setSelect8(select8=>!select8);
    }
    const pushSelect9 =()=>{
        setSelect9(select9=>!select9);
    }
    const pushSelect10 =()=>{
        setSelect10(select10=>!select10);
    }

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
            <Flex className='cover'>
                {/* header */}
                <Flex className='header'>
                    <Flex ml="8px" alignItems="center">
                        <Link href='/Home' >
                            <Flex className='header_arrowL'>
                                <Image src={arrowL} alt="arrowL"/>
                            </Flex>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text className='headerTitle' position="absolute">
                        랜덤추천
                    </Text>
                    <Flex className='headerIcon'>
                        <Image src={exportBtn} alt="exportBtn"/>
                    </Flex>
                </Flex>
            
                <Flex className='doubleBox_bg'>
                    <Flex className='doubleBox_container2'>
                        
                        <Flex className='yellowIcon_bg' position="absolute" mt="-20px">
                            <Image src={circleY} alt="circleY"/>
                            <Flex  className='yellowIcon2'>
                                <Image src={FNK} alt="FNK"/>
                            </Flex>
                        </Flex>

                        <Text className='signIn_h1' mt="35px">원하는 카테고리를 선택해주세요</Text>
                        <Text className='signIn_p1'>중복 선택 가능합니다</Text>

                        <Flex w="100%" h="8px" mt="17px" mb="30px" justifyContent="center">
                            <Flex w="100%" h="2px" bg="#303030" borderRadius="full">
                            </Flex>
                        </Flex>

                        <Wrap spacing="10px" justify="center" mb="30px" >
                            
                                <Flex  className={select1? 'option_H' : 'option_N'} onClick={()=>pushSelect1()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select2? 'option_H' : 'option_N'} onClick={()=>pushSelect2()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select3? 'option_H' : 'option_N'} onClick={()=>pushSelect3()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select4? 'option_H' : 'option_N'} onClick={()=>pushSelect4()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select5? 'option_H' : 'option_N'} onClick={()=>pushSelect5()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select6? 'option_H' : 'option_N'} onClick={()=>pushSelect6()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select7? 'option_H' : 'option_N'} onClick={()=>pushSelect7()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select8? 'option_H' : 'option_N'} onClick={()=>pushSelect8()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select9? 'option_H' : 'option_N'} onClick={()=>pushSelect9()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                                <Flex className={select10? 'option_H' : 'option_N'} onClick={()=>pushSelect10()}>
                                    <Text className="option_text" >메뉴</Text>
                                </Flex>
                        </Wrap>
                    </Flex>

                    {/* <Spacer/> */}
                    <Flex className='blackBtn_cover' bottom="20px" mt="25px">
                            <Link href='/RandomR2' w="100%">
                                <button className='blackBtn'>시작</button>
                            </Link>
                    </Flex>
                    
                </Flex>
             </Flex>
        </div>
    )
}