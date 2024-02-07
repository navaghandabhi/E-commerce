import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet, View,
} from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { style } from '../data/Style/style';
import CustomIconButton from '../data/Component/CustomIconButton'
import { ProductData } from '../data/Models/ProductData';
import ProductCard from '../data/Component/ProductCard';
import productList from '../data/LocalStorage/productsList';

function Home(): React.JSX.Element {
  const [searchText, setSearchText] = useState("");
  const theme = useTheme();
  const onSearch = () => {
    console.log('searchText', searchText);
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Appbar.Header style={{ elevation: 8 }} >
        <Appbar.Action icon={'map-marker-outline'} size={32} color={theme.colors.primary}></Appbar.Action>
        <Appbar.Content title="Ahmedabad India" titleStyle={styles.appBarTitleStyle} ></Appbar.Content>
        <Appbar.Action icon={'cart'} size={32} color={theme.colors.primary}></Appbar.Action>
      </Appbar.Header>
      <View style={[styles.bodyContainer]}>
        <Text variant='headlineLarge' style={{ color: theme.colors.primary }}>Good Morning</Text>
        <Text variant='headlineSmall' style={{ color: theme.colors.secondary }}>Dabhi Navaghan</Text>
        <TextInput
          mode='outlined'
          onChangeText={setSearchText}
          placeholder='Search Product'
          style={[theme.fonts.bodyMedium, style.mv8]}
          outlineStyle={styles.searchBarOutline}
          right={<TextInput.Icon icon={'magnify'} onPress={onSearch} color={theme.colors.primary} />}
        />
        <View style={style.rowSB}>
          <Text variant='titleLarge'>All Products</Text>
          <CustomIconButton icon='view-grid' size={26} color={theme.colors.primary} onPress={() => console.log('alll')
          } />
        </View>
        <ProductCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarTitleStyle: {
    textAlign: "center",
    fontFamily: 'Quicksand-Bold'
  },
  searchBarOutline: {
    borderRadius: 26,
  },
  searchIcon: {

  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
    marginBottom: 16
  },
  container: {
    flex: 1
  },
  bodyContainer: {
    paddingHorizontal: 16
  }
});

export default Home;
