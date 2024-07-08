import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetalhesSaoPaulo({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.title}>São Paulo</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/saopaulo.jpg')} style={styles.imageLarge} resizeMode="contain" />
        </View>

        

        <Text style={styles.description}>
        São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América Latina. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul, e a quinta mais populosa do mundo, enquanto sua região metropolitana, com cerca de 21 milhões de habitantes, é a sétima maior aglomeração urbana do planeta. São Paulo é a cidade brasileira mais influente no cenário global, sendo, em 2016, a 11.ª cidade mais globalizada do planeta, recebendo a classificação de cidade global alfa, por parte do Globalization and World Cities Study Group & Network (GaWC). O lema da cidade, presente em seu brasão oficial, é Non ducor, duco, frase latina que significa "Não sou conduzido, conduzo".
        </Text>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => navigation.navigate('AtracoesSaoPaulo')}
        >
          <Text style={styles.buttonText}>Atrações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('DetailsScreenSaoPaulo')}
        >
          <Text style={[styles.buttonText, styles.secondButtonText]}>Pontos Turísticos</Text>
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.04,
    paddingBottom: Dimensions.get('window').height * 0.02,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontWeight: '100',
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  description: {
    fontSize: 12,
    textAlign: 'justify',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.1,
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  imageLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.08,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginRight: 'auto',
    marginHorizontal: 15, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20, 
  },
  firstButton: {
    borderColor: 'white',
    borderWidth:1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.3,
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.46,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
  },
  secondButtonText: {
    color: '#370e43',
  },
});

export default DetalhesSaoPaulo;
