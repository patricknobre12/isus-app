/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  View, ScrollView, StyleSheet, TouchableOpacity, Text, Image, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Uece from '../../assets/images/uece.png';
import Funcap from '../../assets/images/funcap.png';
import Felicilab from '../../assets/images/felicilab.png';
import Esp from '../../assets/images/esp.png';
import Gesad from '../../assets/images/gesad.png';
import Governo from '../../assets/images/governo.png';

export default function AboutScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#4CAF50',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#FFF',
      headerTitleAlign: 'center',
      headerTitle: 'Sobre o iSUS',
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginHorizontal: 19
          }}
          onPress={() => {
            navigation.navigate('Buscar');
          }}
        >
          <Icon name="magnify" size={28} color="#FFF" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginHorizontal: 19
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icon name="menu" size={28} color="#FFF" />
        </TouchableOpacity>
      )
    });
  });

  return (
    <ScrollView style={{
      paddingHorizontal: 14, paddingBottom: 32, backgroundColor: '#fff', flex: 1
    }}
    >


    <View
      style={{
        paddingTop: 18,
        paddingBottom: 18
      }}
    >
      <Text style={styles.spaceRight}>
        O iSUS está sendo criado para ser o cinto de utilidades dos Profissionais do Sistema Único
        de Saúde (SUS) do Ceará. Desenvolvido em meio à pandemia do novo coronavírus, responde à
        importante demanda de relacionamento entre trabalhadores, usuários e gestores do SUS.
      </Text>

      <Text style={styles.spaceRight}>
        Com o objetivo de entregar informações, serviços e oportunidades de forma personalizada e
        segura, o iSUS otimiza o tempo e apoia a tomada de decisões baseadas em dados e evidências
        científicas na palma da mão dos profissionais.
      </Text>

      <Text style={styles.spaceRight}>
        O projeto é uma das ações da Força Tarefa Digital de Combate ao Coronavírus, iniciativa do
        Núcleo de Inovação Tecnológica (NIT) da Escola de Saúde Pública do Ceará (ESP), e conta com
        apoio da Fundação Cearense de Apoio ao Desenvolvimento Científico e Tecnológico (Funcap),
        por meio do projeto "SMART Health: suporte à tomada de decisão inteligente de profissionais
        da saúde e gestores no combate à transmissão da Covid-19 no Ceará", desenvolvido em parceria
        com o Grupo de Engenharia de Software Adaptativo e Distribuído (GESAD) da Uece.
      </Text>

    </View>

      <View
        style={{
          flexDirection: 'row',
          height: 100,
          justifyContent: 'space-between'
        }}
      >
        <Text onPress={() => Linking.openURL('http://www.uece.br/')}>
          <Image source={Uece} />
        </Text>
        <Text onPress={() => Linking.openURL('https://www.funcap.ce.gov.br/')}>
          <Image source={Funcap} />
        </Text>
        <Text onPress={() => Linking.openURL('https://escoladesaudepublica.github.io/#FeliciLab')}>
          <Image source={Felicilab} />
        </Text>
        <Text onPress={() => Linking.openURL('https://www.ceara.gov.br/')}>
          <Image source={Governo} />
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 100,
          justifyContent: 'center'
        }}
      >

      <Text style={{ marginHorizontal: 20 }} onPress={() => Linking.openURL('https://www.esp.ce.gov.br/')}>
          <Image source={Esp} />
      </Text>

      <Text style={{ marginHorizontal: 20 }} onPress={() => Linking.openURL('http://www.uece.br/gesad/')}>
          <Image source={Gesad} />
      </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  headerTop: {
    paddingHorizontal: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  spaceRight: {
    margin: 10,
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'justify'
  }
});
