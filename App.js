import * as React from 'react'; //Ntem
import { NavigationContainer } from '@react-navigation/native'; //Tem
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Tem


import { LoadingScreen } from './LoadingScreen';
import { InitialScreen } from './InitialScreen';
import { DetailsScreenCastilho } from './DetailsScreenCastilho';
import { DetailsScreenSaoPaulo } from './DetailsScreenSaoPaulo';
import { DetalhesCastilho } from './DetalhesCastilho';
import { DetalhesSaoPaulo } from './DetalhesSaoPaulo';
import { PontoTuristico1 } from './PontoTuristico1';
import { PontoTuristico2 } from './PontoTuristico2';
import { PontoTuristico3 } from './PontoTuristico3';
import { PontoTuristico4 } from './PontoTuristico4';
import { PontoTuristico5 } from './PontoTuristico5';
import { PontoTuristico6 } from './PontoTuristico6';
import { PontoTuristico7 } from './PontoTuristico7';
import { PontoTuristico8 } from './PontoTuristico8';
import { PontoTuristico9 } from './PontoTuristico9';
import { PontoTuristico10 } from './PontoTuristico10';
import { PontoTuristico11 } from './PontoTuristico11';
import { GaleriaDeImagens1 } from './GaleriaDeImagens1';
import { GaleriaDeImagens2 } from './GaleriaDeImagens2';
import { GaleriaDeImagens3 } from './GaleriaDeImagens3';
import { GaleriaDeImagens4 } from './GaleriaDeImagens4';
import { GaleriaDeImagens5 } from './GaleriaDeImagens5';
import { MapScreen1 } from './MapScreen1';
import { MapScreen2 } from './MapScreen2';
import { MapScreen3 } from './MapScreen3';
import { MapScreen4 } from './MapScreen4';
import { MapScreen5 } from './MapScreen5';
import { EmDesenvolvimento } from './EmDesenvolvimento';
import { AtracoesCastilho } from './AtracoesCastilho';
import { AtracoesSaoPaulo} from './AtracoesSaoPaulo';
import { TourismDetailsScreen } from './TourismDetailsScreen';

const Stack = createNativeStackNavigator(); 

function App() {
  return (

<NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreenCastilho" component={DetailsScreenCastilho} options={{ title: 'Detalhes sobre Castilho - SP' }} />
        <Stack.Screen name="DetailsScreenSaoPaulo" component={DetailsScreenSaoPaulo} options={{ title: 'Detalhes sobre São Paulo' }} />
        <Stack.Screen name="PontoTuristico1" component={PontoTuristico1} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen1" component={MapScreen1} options={{ title: 'Localização' }} />
        <Stack.Screen name="GaleriaDeImagens1" component={GaleriaDeImagens1} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="PontoTuristico2" component={PontoTuristico2} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen2" component={MapScreen2} options={{ title: 'Localização' }} />
        <Stack.Screen name="GaleriaDeImagens2" component={GaleriaDeImagens2} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="PontoTuristico3" component={PontoTuristico3} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen3" component={MapScreen3} options={{ title: 'Localização' }} />
        <Stack.Screen name="GaleriaDeImagens3" component={GaleriaDeImagens3} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="PontoTuristico4" component={PontoTuristico4} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen4" component={MapScreen4} options={{ title: 'Localização' }} />
        <Stack.Screen name="GaleriaDeImagens4" component={GaleriaDeImagens4} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="PontoTuristico5" component={PontoTuristico5} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen5" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="PontoTuristico6" component={PontoTuristico6} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen6" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="PontoTuristico7" component={PontoTuristico7} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen7" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="PontoTuristico8" component={PontoTuristico8} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen8" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="PontoTuristico9" component={PontoTuristico9} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen9" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="PontoTuristico10" component={PontoTuristico10} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen10" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="PontoTuristico11" component={PontoTuristico11} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen11" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="GaleriaDeImagens5" component={GaleriaDeImagens5} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="AtracoesCastilho" component={AtracoesCastilho} options={{ title: 'Atrações turísticas' }} />
        <Stack.Screen name="AtracoesSaoPaulo" component={AtracoesSaoPaulo} options={{ title: 'Atrações turísticas' }} />
        <Stack.Screen name="TourismDetailsScreen" component={TourismDetailsScreen} options={{ title: 'Cidades' }} />
        <Stack.Screen name="DetalhesCastilho" component={DetalhesCastilho} options={{ title: 'Detalhes sobre Castilho - SP' }} />
        <Stack.Screen name="DetalhesSaoPaulo" component={DetalhesSaoPaulo} options={{ title: 'Detalhes sobre São Paulo' }} />

        <Stack.Screen name="EmDesenvolvimento" component={EmDesenvolvimento} options={{ headerShown: false }} />
       
        
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;