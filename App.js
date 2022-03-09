import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView } from "react-native";

import styled from "styled-components";
import Card from "./components/Card";
import Logo from "./components/Logo";
import { NotificationIcon } from "./components/Icons";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Tavo</Name>

            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>

          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            horizontal={true}
          >
            <Logo
              image={require("./assets/logo-framerx.png")}
              text="Framer x"
            />
            <Logo image={require("./assets/logo-figma.png")} text="Figma" />
          </ScrollView>

          <Subtitle>Continue Learning</Subtitle>

          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              image={require("./assets/background2.jpg")}
              logo={require("./assets/logo-react.png")}
              title="Styled Components"
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              image={require("./assets/background1.jpg")}
              logo={require("./assets/logo-react.png")}
              title="Styled Components"
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              image={require("./assets/background3.jpg")}
              logo={require("./assets/logo-react.png")}
              title="Styled Components"
              caption="React Native"
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
