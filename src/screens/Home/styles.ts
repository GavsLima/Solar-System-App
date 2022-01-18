import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const ImagePlanet = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: require('../../../assets/images/bg.png'),
})`
  flex-grow: 1;
  justify-content: center;
`;

export const TouchablePlanet = styled.TouchableOpacity`
  flex: 1;
`;