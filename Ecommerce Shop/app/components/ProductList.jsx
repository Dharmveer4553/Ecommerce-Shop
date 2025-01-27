import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { useCart } from '../utils/CartContext'; // Assuming CartContext is in utils folder

// Sample product data
const products = [
  { id: 1, name: 'Tshirt', price: '$45', image: require('../photos/cloth1.jpg') },
  { id: 2, name: 'Watch', price: '$79', image: require('../photos/item10.png') },
  { id: 3, name: 'LED ', price: '$499', image: require('../photos/item7.png') },
  { id: 4, name: 'Microwave', price: '$120', image: require('../photos/home1.jpg') },
  { id: 5, name: 'Earbuds', price: '$100', image: require('../photos/item8.png') },
  { id: 6, name: 'Wireless Keyboard & mouse', price: '$20', image: require('../photos/item9.png') },
];

const ProductList = () => {
  const navigation = useNavigation();
  const { addToCart } = useCart(); // Using the addToCart method from CartContext

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)} // Adding product to cart
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  addToCartButton: {
    backgroundColor: '#5B86E5',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductList;
