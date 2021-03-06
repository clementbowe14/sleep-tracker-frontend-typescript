import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon
  } from "@chakra-ui/react";


const SplashPage = () => {
    return (
        <Container
      w={"full"}
      minW={"8xl"}
      minH={"5xl"}
      bgGradient={
        "linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)"
      }
    >
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          mt={"20%"}
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"white"}>
            Dream Notes
          </Text>
        </Heading>
        <Heading
        mt={"10%"}
        fontWeight={200}
        fontSize={{base:"2xl", sm:"3xl", md:"4xl"}}
        >
            <Text as={"span"} color={"white"}>
                Sleep tight and tell us how you slept in the morning
            </Text>
        </Heading>
        <Stack
          direction={"row"}
          spacing={200}
          align="center"
          position={"relative"}
          justifyContent={"center"}
        >
          <Button
            bgGradient={"linear-gradient(90deg, #FCEABB 0%, #F8B500 100%);"}
            borderRadius={30}
            minW={"150px"}
          >
            <Text color="white" fontWeight={600} fontSize={20}>
              Register
            </Text>
          </Button>
          <Button
            bgGradient={"linear-gradient(90deg, #FCEABB 0%, #F8B500 100%);"}
            borderRadius={30}
            minW={"150px"}
          >
            <Text color="white" fontWeight={600} fontSize={20}>
              Login
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Container>
    )
}
export default SplashPage;


