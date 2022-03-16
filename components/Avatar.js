import { useEffect, useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

function Avatar(props) {
  const [uri, setUri] = useState(
    `https://cl.ly/55da82beb939/download/avatar-default.jpg`
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(({ results: res }) => {
        const { picture, name } = res[0];

        setUri(picture.thumbnail);

        console.log("props in avatar", props);
        props.updateName(`${name.first} ${name.last}`);
      });
  }, []);

  return <Image source={{ uri: uri }} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
