import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import VisitsComponent from "./components/Visits.component";
import HeaderDashboardComponent from "./components/HeaderDashboard.component";
import SubscriptionsComponent from "./components/Subscriptions.component";
import LikesComponent from "./components/Likes.component";
import RecentVisitsComponent from "./components/RecentVisits.component";
import PostComponent from "./components/Post.component";
import PostRecientComponent from "./components/PostRecient.component";
import { BarCharts } from "./components/Charts.component";

const DashboardPage = () => {
  return (
    <>
      <HeaderDashboardComponent />
      <VStack spacing={10} width={"90%"} margin={"auto"}>
        <Stack
          justifyContent={{ base: "center", md: "space-around" }}
          direction={["column", "row"]}
          wrap={"wrap"}
        >
          <VisitsComponent />
          <SubscriptionsComponent />
          <PostComponent />
          <LikesComponent />
        </Stack>
        <Stack
          spacing={{ base: 5, md: 10 }}
          justifyContent={{ base: "center", md: '"space-evenly"' }}
          width={"100%"}
          direction={["column", "row"]}
        >
          <BarCharts />
          <RecentVisitsComponent />
        </Stack>
      </VStack>
    </>
  );
};

export default DashboardPage;
