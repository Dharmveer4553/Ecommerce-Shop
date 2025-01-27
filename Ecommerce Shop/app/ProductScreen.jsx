import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getProductFromApi, getRating } from './utils/helper';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import Header from './components/Header';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const {  productId } = route.params || {}; 


  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (text) => {
    const filtered = products.filter((item) =>
      item.fields.productName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} />
      <ScrollView>
        <Text style={styles.title}>Results</Text>
        {filteredProducts.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('ProductPage', { productId: item.sys.id })
            }
            style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image
                style={styles.productImg}
                source={{ uri: item.fields.imageUrl }}
              />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.productName}>{item.fields.productName}</Text>
              <View style={styles.rows}>
                <Text style={styles.rating}>{item.fields.rating}</Text>
                {getRating(item.fields.rating)}
                <Text style={styles.ratingCount}>
                  {' '}
                  {item.fields.ratingCount}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>₹ {item.fields.price}</Text>
                <Text style={styles.mrp}>M.R.P.</Text>
                
              </View>
              
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ProductScreen;
