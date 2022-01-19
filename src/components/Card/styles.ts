import styled from "styled-components/native";
import { SvgUri } from 'react-native-svg';

export const CenteredView = styled.View`
  flex-grow: 1;
  align-items: center;
  margin: 10px;
`;

export const CardView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(254, 254, 254, 0.1);
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  min-height: 130px;
`;

export const ImagePlanet = styled(SvgUri).attrs({
  width: '30%',
  height: '100%',
})`
  object-fit: contain;
  margin-right: 15px;
`;

export const ViewText = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
`;

export const InfoView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #FFF;
  justify-content: flex-start;
  padding-left: 5px;
`;

export const Divider = styled.View`
  border-width: 0.5px;
  border-color: #3DACDF;
  margin-top: 10px;
`;