import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Input,
    Button,
    InputGroup
  } from '@chakra-ui/react';
import React, { 
    useState,
} from 'react';
import { 
    CheckIcon,
} from '@chakra-ui/icons'
import Image from "next/image";
import arrowL from './images/arrowL.png';
import check from './images/check.svg';


  
export default function SignIn() {

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");


    const [isName,setIsName] = useState(false);
    const [isEmail,setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    const onChangeName = (e) => {
        const nameRegex = /^[A-Za-z0-9ㄱ-ㅎ가-힣]{4,16}$/;
        if ((!e.target.value || (nameRegex.test(e.target.value)))) setIsName(false);
        else setIsName(true);
        setName(e.target.value);
    };

    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setIsEmail(false);
        else setIsEmail(true);
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        const passwordRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setIsPassword(false);
        else setIsPassword(true);

        // if (!confirmPassword || e.target.value === confirmPassword) setIsPasswordConfirm(false);
        // else setIsPasswordConfirm(true);
        setPassword(e.target.value);
    };
    // const onChangeConfirmPassword = (e) => {
    //     if (password === e.target.value) setIsPasswordConfirm(false);
    //     else setIsPasswordConfirm(true);
    //     setPasswordConfirm(e.target.value);
    // };

    // const validation = () => {
    //     if(!name) setIsName(true);
    //     if(!email) setIsEmail(true);
    //     if(!password) setIsPassword(true);
    //     // if(!passwordConfirm) setPasswordConfirm(true);

    //     if(name && email && password) return true;
    //     // if(name && email && password && passwordConfirm) return true;
    //     else return false;
    // }

    // const onSubmit = (e) => {
    //     if(validation()) return;
    //     // API Call
    // }

    // const [show, setShow] = React.useState(false)
    // const inputted = () => setShow(!show)

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

                {/* header */}
                <Flex className='header'>
                    <Flex ml="8px" alignItems="center">
                        <Link href='/'>
                            <Flex className='header_arrowL'>
                                <Image src={arrowL} alt="arrowL"/>
                            </Flex>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text className='headerTitle' position="absolute">
                        회원가입
                    </Text>
                </Flex>

                {/* container1 */}
                <Flex className='inputContainer' mt="21px">
                        <Text className='inputDemand'>
                            닉네임
                        </Text>
                        <Flex className='inputArray'>
                            <input className='inputBox' placeholder='한글,영문/숫자로 4~16자 이내' value={name} onChange={onChangeName}/>
                            <Flex position="absolute" mr="11px">
                                {!isName&&name&&
                                <Image src={check} alt="check"/>
                            }
                            </Flex>
                        </Flex>
                        {/* <Flex className='inputArray'>
                            <Input placeholder='한글,영문/숫자로 4~16자 이내' border="1px solid #E1E1E1" borderRadius="10px" bg="white" w="100%" h="40px" fontSize={f3} value={name} onChange={onChangeName}/>
                            <Flex position="absolute" mr="11px">
                                {!isName&&name&&
                                <Image src={check} alt="check"/>
                                }
                            </Flex>
                        </Flex> */}

                        {/* 유효성검사 */}

                        {!name?
                        <Box></Box>
                        :
                        isName? 
                            <Text className='inputResult_F' >
                                닉네임은 한글,영문/숫자로 4~16자 이내야 합니다.
                            </Text>
                        :
                            <Text className='inputResult_P'  >
                                사용하실 수 있는 닉네임입니다.
                            </Text>
                        }
                </Flex>

                {/* container2 */}
                <Flex className='inputContainer' mt="28px">
                        <Text className='inputDemand'>
                            이메일
                        </Text>
                    <Flex className='inputArray'>
                        <input className='inputBox' placeholder='이메일을 입력해주세요' value={email} onChange={onChangeEmail}/>
                    </Flex>
                        {/* 유효성검사 */}
                        {!email?
                        <Box></Box>
                        :
                        isEmail?
                            <Text className='inputResult_F' >
                                유효하지 않은 이메일입니다.
                            </Text>
                        :
                            <Text className='inputResult_P' >
                                사용하실 수 있는 이메일입니다.
                            </Text>
                        }
                </Flex>

                {/* container3 */}
                <Flex className='inputContainer' mt="28px">
                        <Text className='inputDemand'>
                            비밀번호
                        </Text>
                    <Flex className='inputArray'>
                        <InputGroup>
                            <input className='inputBox' type="password" placeholder='8~16자리 영대/소문자, 숫자, 특수문자 조합' value={password} onChange={onChangePassword}/>
                        </InputGroup>
                    </Flex>
                        {/* 유효성검사 */}
                        {!password?
                        <Box></Box>
                        :
                        isPassword?
                            <Text className='inputResult_F' >
                                비밀번호는 8~16자리 영대/소문자, 숫자, 특수문자를 포함해야합니다.
                            </Text>
                        :
                            <Text className='inputResult_P' >
                                사용하실 수 있는 비밀번호입니다.
                            </Text>
                        }
                </Flex>

                {/* container4 */}
                <Flex className='inputContainer' mt="28px">
                    <Flex direction="column" w="133px">
                        <Text fontSize={f2} fontWeight="bold" color={fc2}>
                            초대 코드
                        </Text>
                        <Text fontSize={f2} fontWeight="bold" color={fc2}>
                            (선택)
                        </Text>
                    </Flex>
                    <Flex className='inputArray'>
                        <input className='inputBox' placeholder='친구에게 받은 코드를 입력해주세요' color={fc4}/>
                        <Text id='timeLeft' fontSize={f3} color={fc4} position="absolute" mr="11px">00:00</Text>
                    </Flex>
                </Flex>
                <Flex mt="10px" h="40px" p="10px" alignItems="center">
                    <Box w="133px"/>
                    <Flex className='inputArray'>
                        <Button w="100%" border="1px solid #303030" borderRadius="10px" bg="#ffffff" fontSize={f2} fontWeight="medium" color="#303030">
                            인증 번호 확인
                        </Button>
                    </Flex>
                </Flex>

                <Spacer/>

                {/* sign in button */}
                <Box p="10px" w="100vw" h="40px" mb="30px">
                    {/* 유효성검사  */}
                    {name&&email&&password&&!isName&&!isEmail&&!isPassword?
                        <Link w="100%" href='/SignIn2'>
                            <Button w="100%" borderRadius="full" bg="#F6E229" fontSize={f1} color={fc1} fontWeight="bold" type='submit' >
                                가입하기
                            </Button>
                        </Link>
                    :
                        <Link w="100%" href='/SignIn2' >
                            <Button w="100%" borderRadius="full" bg="#E1E1E1" border="1px solid #A4A4A4" fontSize={f1} color={fc4} fontWeight="bold" type='submit' isDisabled >
                                가입하기
                            </Button>
                        </Link>
                    }
                </Box>
            </Flex>

        </div> 
    )
}
