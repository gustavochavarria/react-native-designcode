import React from "react";

import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";

import styled from "styled-components";
import Card from "../components/Card";
import Logo from "../components/Logo";
import { NotificationIcon } from "../components/Icons";
import Course from "../components/course";
import Menu from "../components/Menu";

import { connect } from "react-redux";
import Avatar from "../components/Avatar";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 0.9,
          duration: 300,
          easing: Easing.in(),
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0.5,
          duration: 300,
        }),
      ]).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 1,
          duration: 300,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 300,
        }),
      ]).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>

                <Title>Welcome back,</Title>
                <Name>{this.props.name}</Name>

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
                {logos.map((logo) => (
                  <Logo key={logo.text} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>

              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card) => (
                  <TouchableOpacity
                    key={`${card.title}-${card.caption}`}
                    onPress={() => {
                      this.props.navigation.push("Section");
                    }}
                  >
                    <Card {...card} />
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Subtitle>Courses</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {courses.map((course) => (
                  <Course
                    key={`${course.title}-${course.caption}`}
                    {...course}
                  />
                ))}
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma",
  },

  {
    image: require("../assets/logo-invision.png"),
    text: "Invision",
  },

  {
    image: require("../assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("../assets/logo-vue.png"),
    text: "Vue",
  },
];

const cards = [
  {
    caption: "6 of 12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    subtitle: "React Native",
    title: "React Native for Designers",
  },
  {
    caption: "5 of 12 sections",
    image: require("../assets/background12.jpg"),
    logo: require("../assets/logo-react.png"),
    subtitle: "Styled Components",
    title: "Styled Components",
  },
  {
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-vue.png"),
    title: "Vue",
    caption: "vue",
    subtitle: "1 of 10 sections",
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

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
