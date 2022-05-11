import { 
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Img,
  Spacer,
  Link
} from '@chakra-ui/react';
import Image from "next/image";
// import { Link } from 'next/link';


import kakao from './images/kakao.svg';
import naver from './images/naver.svg';
import facebook from './images/facebook.svg';
import apple from './images/apple.svg';
import mail from './images/mail.svg';

export default function LogIn() {

  const f1 ="16px";
  const f2 ="14px";
  const f3 ="12px";

  const fc1 ="#303030"
  const fc2 ="#333333"
  const fc3 ="#494949"
  const fc4 ="#A4A4A4"
  const fc5 ="#565656"
  
  return (
    
      <div>  
        <Box bg="#F6E229" w="100vw" h="100vh">
          <Flex direction="column" w="100%" h="100%" >
            
            <Flex direction="column" alignItems="center" justifyContent="center" flex='1'>
              <Text fontSize="36px" fontWeight="bold" color={fc2} >
                오늘 뭐 먹지?
              </Text>
              <Text fontSize="24px" color={fc2}>
                고민을 덜어 드릴게요
              </Text>
            </Flex>

            <VStack spacing="10px" pr="10px" pl="10px">
              <Box w="100%" >
                {/* <Img src={require("./images/kakao.png").default} position="absolute" w="22px" h='22px' /> */}
                <Link href='/Home'>
                  <Flex className='loginBtn' >
                    <Flex ml="43px">
                      <Image src={kakao} alt="kakao"/>
                    </Flex>
                    <Spacer/>
                    <Text className='loginBtnText'>
                      카카오로 로그인
                    </Text>
                  </Flex>
                </Link>
              </Box>
              <Flex className='loginBtn'>
                  <Box ml="44px" mt="6px">
                    <Image src={naver} alt="naver"/>
                  </Box>
                  <Spacer/>
                <Text  className='loginBtnText'>
                  NAVER로 로그인
                </Text>
              </Flex>
              <Flex className='loginBtn'>
                  <Box ml="43px" mt="6px">
                    <Image src={facebook} alt="facebook"/>
                  </Box>
                  <Spacer/>
                <Text className='loginBtnText'>
                  페이스북으로 로그인
                </Text>
              </Flex>
              <Flex className='loginBtn'>
                  <Box ml="49px" mt="6px">
                    <Image src={apple} alt="apple"/>
                  </Box>
                  <Spacer/>
                <Text className='loginBtnText'>
                  Apple로 로그인
                </Text>
              </Flex>
              <Flex className='loginBtn'>
                  <Box ml="48px" mt="6px">
                    <Image src={mail} alt="mail"/>
                  </Box>
                  <Spacer/>
                <Text className='loginBtnText'>
                  이메일로 로그인
                </Text>
              </Flex>
            </VStack>

            <VStack mt="26px" mb="30px" spacing={0}>
              <Text fontSize={f3}>
                회원이 아니신가요?
              </Text>

              <Link href='/SignIn'>
                <Text textDecoration="underline" fontSize={f3} >
                  회원가입
                </Text>
              </Link>
            </VStack>
            
          </Flex>
        </Box>
      </div>

  )
}
