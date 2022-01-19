import React, {useState, useEffect} from 'react';
import { Container, ImageBg, DetailsView, Title, TextBox, Divider, ImagePlanet  } from './styles';
import api from '../../service/api';
import { IPlanetDetails } from '../../types';
import { useSelector } from 'react-redux';
import { IGlobalPlanetId } from '../../store/modules/PlanetDetails/Types';

const PlanetDetails: React.FC = () => {
  const planetId = useSelector((state: IGlobalPlanetId) => state.planet_id);
  const [planetDetail, setPlanetDetail] = useState<IPlanetDetails>(
    {} as IPlanetDetails,
  );

  useEffect(() => {
  api.get<IPlanetDetails>(`/planet/${planetId}`)
  .then(response => {
    setPlanetDetail(response.data)
  })
  .catch(e => console.log(e))
  }, [planetId])

  return (
    <ImageBg>
      <Container>
        <ImagePlanet uri={planetDetail?.image} />
      </Container>
      <DetailsView>
        <Title>{planetDetail?.name}</Title>
        <Divider />
        <TextBox>{planetDetail?.curiosity}</TextBox>
      </DetailsView>
    </ImageBg>
  );
};

export default PlanetDetails;
