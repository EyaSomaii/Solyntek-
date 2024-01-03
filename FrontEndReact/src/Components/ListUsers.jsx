import { ChakraProvider, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { Image, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import { BellIcon, CalendarIcon, CheckCircleIcon, EmailIcon, SearchIcon, ViewIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  Table,
  TableCaption,TableContainer,
  Tbody,
  Th,Td,
  Thead,
  Tr,
  Tfoot,
} from "@chakra-ui/react";

export default function ListUsers() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}>
        <GridItem rowSpan={2} colSpan={1} bg="#D3D3D3">
          <Flex align="center" p={8}>
            <Image className="logo" w="10" src={Logo} marginTop={8} />

            <Text marginLeft="20px" color="black">
              Solyntek
            </Text>
          </Flex>

          <Button
            leftIcon={<EmailIcon color="black" />}
            colorScheme={colorMode === "light" ? "gray" : "white"}
            onClick={toggleColorMode}
            color="black"
            marginLeft="30px">
            Dashboard
          </Button>
          <Button
            leftIcon={<BellIcon color="black" />}
            colorScheme={colorMode === "light" ? "gray" : "white"}
            onClick={toggleColorMode}
            color="black"
            marginLeft="30px">
            Alert
          </Button>
          <Button
            leftIcon={<ViewIcon color="black" />}
            colorScheme={colorMode === "light" ? "gray" : "white"}
            onClick={toggleColorMode}
            color="black"
            marginLeft="30px">
            Cameras
          </Button>
          <Button
            leftIcon={<CalendarIcon color="black" />}
            colorScheme={colorMode === "light" ? "gray" : "white"}
            onClick={toggleColorMode}
            color="black"
            marginLeft="30px">
            Rules
          </Button>

          <Button
            leftIcon={<CheckCircleIcon color="black" />}
            colorScheme={colorMode === "light" ? "gray" : "white"}
            onClick={toggleColorMode}
            color="black"
            marginLeft="30px">
            Users list
          </Button>
        </GridItem>

        <GridItem rowSpan={2} colSpan={4}>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
