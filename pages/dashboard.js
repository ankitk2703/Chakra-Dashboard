import React, { useState } from "react";

import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import MyChart from "../components/MyChart";

function dashboard() {
  return (
    <Flex h="100vh" direction="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Flex
        w="15%"
        direction="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Rise
            </Heading>

            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiCreditCard} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text>Credit</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text>Wallet</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiHome} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="avatar-1.jpg" />
            <Text textAlign="center">Ankit Kumar</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">

        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back
          <Flex display="inline-flex" fontWeight="bold">
             , Ankit
          </Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          My Balance
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          $5,750.20
        </Text>

      </Flex>

      {/* Column 3 */}
      <Flex
        w="35%"
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
      ></Flex>
    </Flex>
  );
}

export default dashboard;
