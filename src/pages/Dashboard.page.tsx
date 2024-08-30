import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import VisitsComponent from "./components/Visits.component";
import HeaderDashboardComponent from "./components/HeaderDashboard.component";
import SubscriptionsComponent from "./components/Subscriptions.component";
import LikesComponent from "./components/Likes.component";
import BarChart from "./components/PostRecient.component";
import RecentVisitsComponent from "./components/RecentVisits.component";
import PostComponent from "./components/Post.component";
import PostRecientComponent from "./components/PostRecient.component";

const DashboardPage = () => {
  return (
    <>
      <HeaderDashboardComponent />
      <VStack padding={10} spacing={10} width={"100vw"}>
        <HStack
          justifyContent={"space-around"}
          direction={["column", "row"]}
          width={"100%"}
        >
          <VisitsComponent />
          <SubscriptionsComponent />
          <PostComponent />
          <LikesComponent />
        </HStack>
        <HStack
          spacing={10}
          justifyContent={"space-evenly"}
          width={"100%"}
          direction={["column", "row"]}
          alignItems={"flex-start"}
        >
          <PostRecientComponent />
          <RecentVisitsComponent />
        </HStack>
      </VStack>
    </>
  );
};

export default DashboardPage;
