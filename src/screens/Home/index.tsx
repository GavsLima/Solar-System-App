import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../../components/Card';
import {IPlanet} from '../../components/Card/types';
import api from '../../service/api'
import {Container, ImagePlanet, TouchablePlanet} from './styles';

const Home: React.FC = () => {
  const nav = useNavigation();
  const [planet, setPlanet] = useState<IPlanet[]>([]);

  useEffect(() => {
    api
      .get('/planets')
      .then(response => {
        setPlanet(response.data);
      })
      .catch(e => console.log(e));
  }, []);

  const handle = (screen: any) => {
    nav.navigate(screen);
  };

  return (
    <ImagePlanet source={require('../../../assets/images/bg.png')}>
      <Container>
        <FlatList
          style={styles.flatlistContainer}
          data={planet}
          renderItem={({item}) => (
            <TouchablePlanet onPress={() => handle('Details')}>
              <Card
                id={item.id}
                name={item.name}
                image={item.image}
                size={item.size}
                temperature={item.temperature}
              />
            </TouchablePlanet>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </ImagePlanet>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    width: '100%',
  },
});

export default Home;
