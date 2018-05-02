import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Dimensions, ScrollView, Animated, AlertIOS, FlatList } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Text, Body, Left, Right, IconNB, Footer } from "native-base";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import moment from 'moment';

const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class Todo extends React.Component {

  state = {
    text: '',
    data: [
      'ade', 'bolu', 'shade'
    ]
  }

  add = () => {

  }

  remove = i => {
    console.log('djhhjf')
    console.log(i)
    this.setState(
      prevState => {
        let data = prevState.data.slice();

        data.splice(i, 1);

        return { data };
      }
    );

  }
  // updateState = 
  showform = () => {

    AlertIOS.alert(
      'Sync Complete',
      'All your data are belong to us.'
    );
  }



  render() {

    console.log(this.state.data)
    return (

      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Title>{moment().format('MMMM Do YYYY')}</Title>
          </Left>
          <Body>

          </Body>
          <Right>
            <Body>
              <Title>{moment().format('dddd')}</Title>
            </Body>
          </Right>
        </Header>
        <Content >

          <FlatList
            data={this.state.data}
            renderItem={({ item, index }) =>


              <Card key={index}>
                <CardItem  key={index} style={{ height: 50 }}>
                  <Body>
                    <Text >
                      {item}
                    </Text>
                  </Body>
                  <Right>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}
                    onPress={() => this.remove(index)}
                    >
                      <FontAwesome name="minus" size={10} color='#32CD32' />
                    </TouchableOpacity >
                  </Right>
                </CardItem>
              </Card>

            }
            keyExtractor={item => item.toString()}

          />


        </Content>
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <TouchableOpacity style={{ backgroundColor: '#32CD32', alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 100 }}
            onPress={() =>
              this.showform()
            }>
            >
            <FontAwesome name="plus" size={20} />

          </TouchableOpacity>
        </View >
      </Container>

    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
