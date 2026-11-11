
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'iPad 8',
    category: 'Tablet',
    description:
      'Lorem Ipsum dolor sit amet, ut labore et dolore magna aliqua.',
    price: '$880',
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
  },
  {
    id: '2',
    name: 'Iphone X',
    category: 'IPhone',
    description:
      'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.',
    price: '$750',
    image:
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400',
  },
  {
    id: '3',
    name: 'Samsung S21',
    category: 'Samsung',
    description:
      'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.',
    price: '$990',
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
  },
  {
    id: '4',
    name: 'iPad Pro',
    category: 'Tablet',
    description: 'Powerful tablet with a beautiful display.',
    price: '$1100',
    image:
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
  },
  {
    id: '5',
    name: 'Smartphone',
    category: 'Mobile',
    description: 'Modern smartphone with an elegant design.',
    price: '$850',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
  },
];

export default function PopularProductsScreen() {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll
    ? products
    : products.slice(0, 3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>
          Most popular products
        </Text>

        {displayedProducts.map((item) => (
          <View style={styles.productCard} key={item.id}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
              resizeMode="cover"
            />

            <View style={styles.productInfo}>
              <Text style={styles.productName}>
                {item.name}
              </Text>

              <Text style={styles.category}>
                {item.category}
              </Text>

              <Text style={styles.description}>
                {item.description}
              </Text>

              <View style={styles.priceContainer}>
                <Text style={styles.price}>
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowAll(!showAll)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {showAll ? 'Show Less' : 'View More'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 25,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 24,
  },

  productCard: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'flex-start',
  },

  productImage: {
    width: 112,
    height: 132,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
  },

  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 2,
  },

  category: {
    fontSize: 14,
    color: '#24c7e8',
    marginBottom: 3,
  },

  description: {
    fontSize: 15,
    color: '#222222',
    fontStyle: 'italic',
    lineHeight: 19,
  },

  priceContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#343b4d',
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 2,
    marginTop: 6,
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  button: {
    height: 56,
    backgroundColor: '#20c9ed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -2,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
