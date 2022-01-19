import React from 'react';
import {
  CardView,
  CenteredView,
  ImagePlanet,
  InfoText,
  InfoView,
  Divider,
  TitleText,
  ViewText,
} from './styles';
import { IPlanet } from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faRulerCombined,
  faTemperatureHigh,
} from '@fortawesome/free-solid-svg-icons';

const Card: React.FC<IPlanet> = ({name, image, temperature, size}) => {
  return (
    <CenteredView>
      <CardView>
        <ImagePlanet uri={image} />
        <ViewText>
          <TitleText>{name}</TitleText>
          <Divider />
          <InfoView>
            <InfoText>
              <FontAwesomeIcon
                icon={faTemperatureHigh}
                size={16}
                color="#FFF"
              />
              {temperature}
            </InfoText>
            <InfoText>
              <FontAwesomeIcon icon={faRulerCombined} size={16} color="#FFF" />
              {size}
            </InfoText>
          </InfoView>
        </ViewText>
      </CardView>
    </CenteredView>
  );
};

export default Card;
