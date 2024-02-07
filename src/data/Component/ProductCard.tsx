import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, useTheme, Text } from 'react-native-paper';
import { ProductData } from '../Models/ProductData';
import productList from '../LocalStorage/productsList';

const ProductCard = ({ product }: { product: ProductData }) => {
  const theme = useTheme()
  const price = `$ ${product.price}`;
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: product.imageUrl ? product.imageUrl[0] : '' }}></Card.Cover>
      <Card.Title title={product.productName} subtitle={price} titleStyle={theme.fonts.bodyLarge} />

    </Card>
  );
};

const ProductGrid = () => {
  const renderItem = ({ item }: { item: ProductData }) => (
    <ProductCard product={item} />
  );

  return (
    <View style={{height:'64%'}}>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item) => item.productId}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    marginBottom: 16,
    marginHorizontal: 8,
    flex: 1,
    margin: 8
  },
});

export default ProductGrid;
