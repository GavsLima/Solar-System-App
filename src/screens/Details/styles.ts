import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { SvgUri } from 'react-native-svg';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageBg = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: require('../../../assets/images/bg.png'),
})`
  flex-grow: 1;
  justify-content: center;
`;

export const ImagePlanet = styled(SvgUri).attrs({
  width: '90%',
  height: '90%',
})`
  object-fit: contain;
  flex: 0.5;
  margin-right: 15px;
`;

export const DetailsView = styled.View`
  flex: 0.5;
  background-color: #434071;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #FFF;
`;

export const TextBox = styled.Text`
  font-size: 16px;
  color: #FFF;
  margin-top: 10px;
  text-align: justify;
`;

export const Divider = styled.View`
  border-width: 0.5px;
  border-color: #3DACDF;
  margin-top: 10px;
`;