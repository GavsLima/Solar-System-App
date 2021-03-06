import React, {useState, useEffect} from 'react';
import { Container, 
        ImageBg, 
        DetailsView, 
        Title, 
        TextBox, 
        Divider, 
        ImagePlanet,
        LoaderView
        } from './styles';
import LottieView from 'lottie-react-native';
import api from '../../service/api';
import { IPlanetDetails } from '../../types';
import { useSelector } from 'react-redux';
import { IGlobalPlanetId } from '../../store/modules/PlanetDetails/Types';

const PlanetDetails: React.FC = () => {
  const planetId = useSelector((state: IGlobalPlanetId) => state.planet_id);
  const [planetDetail, setPlanetDetail] = useState<IPlanetDetails>(
    {} as IPlanetDetails,
  );
  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
  setLoad(true);
  api.get<IPlanetDetails>(`/planet/${planetId}`)
  .then(response => {
    setPlanetDetail(response.data)
  })
  .catch(e => console.log(e))
  .finally(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  })
  }, [planetId])

  if(load){
    return(
      <LoaderView>
        <LottieView 
          source={require('../../../assets/loader/loader.json')}
          autoPlay
          loop
          style={{height: '90%', width: '90%', alignSelf: 'center'}}
        />
      </LoaderView>
    )
  }

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
