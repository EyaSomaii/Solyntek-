import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Box, Image, Center, Button } from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl } from "@chakra-ui/form-control";
import { useState } from "react";
import Logo from "../assets/Logo.png";
export default function Register ()
{
     const [show, setShow] = useState(false);
     const handleClick = () => setShow(!show);
     const [email, setEmail] = useState();
     const [mot_de_passe, setmot_de_passe] = useState();
     const [loading, setLoading] = useState(false);
  return (
    <>
      {" "}
      <ChakraProvider>
        <Center>
          <Image className="logo" w="100px" src={Logo} marginTop={8}></Image>
        </Center>
        <Center>
          <Text fontSize="sm" fontFamily="Poppins" marginTop={8}>
            <Heading>Register</Heading>
          </Text>
        </Center>
        <Center>
          <Stack spacing={4} w="400px" h="100px" marginTop={50}>
            <FormControl id="email" isRequired>
              <Input
                value={email}
                type="email"
                variant="filled"
                placeholder="Name"
                h="44px"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <Input
                value={email}
                type="email"
                variant="filled"
                placeholder="email"
                h="44px"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <Input
                value={email}
                type="email"
                variant="filled"
                placeholder="phone"
                h="44px"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  value={mot_de_passe}
                  onChange={(e) => setmot_de_passe(e.target.value)}
                  type={show ? "text" : "password"}
                  variant="filled"
                  h="44px"
                  placeholder="Mot de passe"
                />

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Cacher" : "Voir"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
        </Center>
        <Center>
          <Button
            bg="#93329E"
            w="400px"
            color="white"
            marginTop="180"
            isLoading={loading}
            sx={{
              backgroundColor: "#93329E",
              "&:hover": {
                backgroundColor: "#93329E",
              },
            }}>
            Register
          </Button>
        </Center>
      </ChakraProvider>
    </>
  );
}
