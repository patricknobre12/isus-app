import * as React from 'react';
import {
  View, FlatList, TouchableOpacity, Image
} from 'react-native';
import {
  TextInput, Caption, Divider
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getBusca } from '../../apis/apiHome';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);

  async function search() {
    const response = await getBusca(text);
    setData(response.data.data);
  }

  function runSearch(Text) {
    setText(Text);
    search();
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={{ width: '100%', backgroundColor: 'transparent' }} label="Buscar" value={text} onChangeText={Text => runSearch(Text)} />
      </View>
      <FlatList
        // showsVerticalScrollIndicator={false}
        data={data}
        // numColumns={2}
        keyExtractor={item => item.ID}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              style={{ margin: 10, backgroundColor: '#FEFEFE', borderRadius: 5 }}
              onPress={() => navigation.navigate('Educaçao permanente', { item })}
            >
              <Divider />
              <View style={{ flexDirection: 'row' }}>
                {item.image ? (
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 5,
                      margin: 10
                    }}
                    source={{ uri: `${item.image}` }}
                  />
                ) : (
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 5,
                      margin: 10,
                      backgroundColor: '#CCC'
                    }}
                  />
                )}

                <Caption style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  maxWidth: 230,
                  fontSize: 17,
                }}
                >
                  {item.post_title}
                </Caption>
              </View>
              <Divider />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}
