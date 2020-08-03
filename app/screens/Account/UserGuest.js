import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const UserGuest = () => {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require('../../../assets/img/user-guest.jpg')}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.title}> Consulta tu perfil de 5 tenedores </Text>
      <Text style={styles.description}>
        Como describirías tu mejor restaurante?, Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota por cual te ha gustado más y
        comenta como ha sido tu experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={() => {
            // console.log('Ver tu perfil');
            navigation.navigate('login');
          }}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: '#00a680',
  },
  btnContainer: {
    width: '70%',
  },
});
