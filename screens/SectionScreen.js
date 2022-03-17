import styled from "styled-components";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

import Markdown from "react-native-showdown";

export default function SectionScreen(props) {
  const { navigation } = props;

  const section = navigation.getParam("section");

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);

    return () => StatusBar.setBarStyle("dark-content", true);
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>

        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <CloseView>
          <Ionicons
            name="ios-close"
            size={36}
            color="#4775f2"
            style={{ marginTop: -2, marginLeft: -1.5 }}
          />
        </CloseView>
      </TouchableOpacity>

      <Content>
        <Markdown
          markdown={section.content}
          css={htmlStyles}
          scalesPageToFit={false}
          scrollEnabled={false}
        />
      </Content>
    </Container>
  );
}

SectionScreen.navigationOptions = () => ({
  //   title: "hello",
  header: null,
});

const htmlStyles = `
    <style>
      * {
        font-family: -apple-system; 
    		margin: 0;
    		padding: 0;
        font-size: 17px; 
        font-weight: normal; 
        color: #3c4560;
        line-height: 24px;
      }

      h2 {
        font-size: 20px;
        text-transform: uppercase;
        color: #b8bece;
        font-weight: 600;
        margin-top: 50px;
      }

    	p {
    	  margin-top: 20px;
      }

      a {
        color: #4775f2;
        font-weight: 600;
        text-decoration: none;
      }

      strong {
        font-weight: 700;
      }

      img {
        width: 100%;
        margin-top: 20px;
        border-radius: 10px;
      }

      pre {
        padding: 20px;
        background: #212C4F;
        overflow: hidden;
        word-wrap: break-word;
        border-radius: 10px;
        margin-top: 20px;
      }
  
      code {
        color: white;
      }

    </style>
    `;

const Content = styled.View`
  height: 1000px;
  padding: 20px;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
