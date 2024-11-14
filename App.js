import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SectionList, Image, Button, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const games = [
  {
    data: [
      { title: 'Phasmophobia', price:'18.50', image:  { uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/capsule_616x353.jpg?t=1727019976' } },
      { title: 'Mouthwashing', price:'13.00', image: { uri: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2475490/header.jpg?t=1731457732' } },
      { title: 'The Outlast Trials', price:'34.00', image: { uri: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1304930/capsule_616x353.jpg?t=1721076293'  } },
    ],
    icon: "ghost" ,
    sectionTitle: 'Horror',
    bgColor: 'lightcoral' ,
    txtColor: 'maroon',
  },
  {
    data: [
      { title: 'Forza Horizon 5', price:'79.90', image:  { uri: 'https://www.gtplanet.net/wp-content/uploads/2021/08/ForzaHorizon5_KeyArt_Horiz_RGB_Final.jpg' } },
      { title: 'Assetto Corsa Competizione', price:'59.90', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpICcm2YuA17BwO2vRbBbs1ZYCDvMZkFjpzQ&s' } },
      { title: 'Need for Speed™ Heat', price:'84.90', image: { uri: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222680/capsule_616x353.jpg?t=1716831270'  } },
    ],
    icon: "car-convertible" ,
    sectionTitle: 'Racing',
    bgColor: 'aquamarine',
    txtColor: 'darkslategray',
  }
];

const renderItem = ({ item }, addToCart) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>S${item.price}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => addToCart(item.title)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
);

const renderSectionHeader = ({ section }) => (
    <View style={[styles.sectionHeader, { backgroundColor: section.bgColor }]}>
      <View style={styles.headerContainer}>
        <Icon style={[styles.icons , {color:section.txtColor}]} name={section.icon} />
        <Text style={[styles.sectionTitle, {color: section.txtColor}]}>{section.sectionTitle}</Text>
      </View>
    </View>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (title) => {
    setCartItems((prevItems) => [...prevItems, title]);
    Alert.alert("Item Added to Cart");
  };

  const viewCart = () => {
    if (cartItems.length > 0) {
      const cartList = cartItems.join("\n"); // Create a newline-separated string
      Alert.alert("Your Shopping Cart", cartList + "\n\nCheck Out");
    } else {
      Alert.alert("Your Shopping Cart", "is empty!");
    }
  };

  return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <SectionList
            sections={games}
            renderItem={(item) => renderItem(item, addToCart)}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => item.title + index}
        />
        <View style={styles.button}>
          <Button title="View Cart" onPress={viewCart} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 5,
    marginHorizontal: 10,
    marginBottom: 10
  },
  icons: {
    color: 'black',
    fontSize: 30,
    marginRight: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  sectionHeader: {
    padding: 10,
    elevation: 2,
    shadowColor: 'black',
    borderRadius: 35,
    marginTop: 10,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  card: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
    shadowColor: 'black',
    borderWidth: 0.3,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'linen',
    marginHorizontal: 30,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: 'greenyellow',
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  appName: {
    backgroundColor: 'darkslategray',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
});

export default App;
