import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Dimensions, ScrollView, Animated, AlertIOS } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Text, Body, Left, Right, IconNB, Footer } from "native-base";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class CardHeaderFooterExample extends React.Component {

  state = {
    text: '',
    data: [
      'ade', 'bolu', 'shade'
    ]
  }

  add = () => {

  }

  remove = () => {

  }
  showform = () => {

    AlertIOS.prompt(
      'Enter  Text',
      null,
      text => this.setState({ text })//console.log("You entered "+text)
    );
  }

  renderList = (obj) => {

    return (

      <CardItem style={{ height: 50 }}>
        <Body>
          <Text>
            Begin Promotional Phase
        </Text>
        </Body>
        <Right>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}   >
            <FontAwesome name="minus" size={10} color='#32CD32' />
          </TouchableOpacity >
        </Right>
      </CardItem>

    )
  }


  render() {
    let data = [
      'ade', 'bolu', 'shade'
    ];
    console.log(this.state.data)
    return (

      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Title>12 Jan 2016</Title>
          </Left>
          <Body>

          </Body>
          <Right>
            <Body>
              <Title>Tuesday</Title>
            </Body>
          </Right>
        </Header>
        <Content > 

        {/* <Content > {
          this.state.data.map((a, index) => {
            <Card key={index}>
              <CardItem style={{ height: 50 }}>
                <Body>
                  <Text>
                    {a}
                    Begin Promotional Phase
                </Text>
                </Body>
                <Right>
                  <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}   >
                    <FontAwesome name="minus" size={10} color='#32CD32' />
                  </TouchableOpacity >
                </Right>
              </CardItem>
            </Card>
          })
        } */}

          <Card >
            <CardItem style={{ height: 50 }}>
              <Body>
                <Text>
                  Begin Promotional Phase
                </Text>
              </Body>
              <Right>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}   >
                  <FontAwesome name="minus" size={10} color='#32CD32' />
                </TouchableOpacity >
              </Right>
            </CardItem>

            <CardItem style={{ height: 50 }}>
              <Body>
                <Text>
                  Begin Promotional Phase
                </Text>
              </Body>
              <Right>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}   >
                  <FontAwesome name="minus" size={10} color='#32CD32' />
                </TouchableOpacity >
              </Right>
            </CardItem>

            <CardItem style={{ height: 50 }}>
              <Body>
                <Text>
                  Begin Promotional Phase
                </Text>
              </Body>
              <Right>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}   >
                  <FontAwesome name="minus" size={10} color='#32CD32' />
                </TouchableOpacity >
              </Right>
            </CardItem>

            <CardItem style={{ height: 50 }}>
              <Body>
                <Text>
                  Begin Promotional Phase
                </Text>
              </Body>
              <Right>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 5, borderColor: '#32CD32' }}   >
                  <FontAwesome name="minus" size={10} color='#32CD32' />
                </TouchableOpacity >
              </Right>
            </CardItem>
          </Card>

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
