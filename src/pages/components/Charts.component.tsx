import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  StepSeparator,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Rectangle,
} from "recharts";

const getRamdom = () => {
  return Math.floor(Math.random() * 10000);
};

const data = [
  { mes: "Ene", visitas: getRamdom(), color: "#0088FE" },
  { mes: "Feb", visitas: getRamdom(), color: "#00C49F" },
  { mes: "Mar", visitas: getRamdom(), color: "#45B7D1" },
  { mes: "Abr", visitas: getRamdom(), color: "#F7A072" },
  { mes: "May", visitas: getRamdom(), color: "#5D5C61" },
  { mes: "Jun", visitas: getRamdom(), color: "#7FB069" },
  { mes: "Jul", visitas: getRamdom(), color: "#B388EB" },
  { mes: "Ago", visitas: getRamdom(), color: "#FFC857" },
  { mes: "Sep", visitas: getRamdom(), color: "#495867" },
  { mes: "Oct", visitas: getRamdom(), color: "#EF767A" },
  { mes: "Nov", visitas: getRamdom(), color: "#6B9080" },
  { mes: "Dic", visitas: getRamdom(), color: "#D4A373" },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

export const BarCharts = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignContent={"center"}
      width={{ base: "100%", md: "50%" }}
      height={"100%"}
    >
      <Card bg={useColorModeValue("gray.50", "gray.900")}>
        <CardHeader>
          <Heading as="h2" size={"md"} textAlign={"center"}>
            Visitas Mensuales
          </Heading>
        </CardHeader>
        <CardBody>
          <BarChart width={700} height={500} accessibilityLayer data={data}>
            <XAxis
              dataKey="mes"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="visitas"
              fill={COLORS[Math.floor(Math.random() * COLORS.length)]}
              strokeWidth={2}
              radius={8}
            />
          </BarChart>
        </CardBody>
        <Divider />
        <CardFooter width={"100%"}>
          <Text textAlign={"center"} width={"100%"}>
            Resumen mensual del número de visitas de tus publicaciones en
            Unipensiones
          </Text>
        </CardFooter>
      </Card>
    </Flex>
  );
};
