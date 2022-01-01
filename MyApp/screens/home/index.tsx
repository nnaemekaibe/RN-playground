import React from 'react';
import {Text} from 'react-native';

const Home = ({navigation, route}) => {
  const {itemId} = route.params;
  return (
    <>
      <Text>Home {itemId}</Text>
    </>
  );
};

export default Home;
