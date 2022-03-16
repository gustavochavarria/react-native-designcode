import styled from "styled-components";
import { Button } from "react-native";

export default function SectionScreen(props) {
  return (
    <Container>
      <Text>Section screen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </Container>
  );
}

SectionScreen.navigationOptions = () => ({
  //   title: "hello",
  header: null,
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
