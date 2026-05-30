import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import product from '../data/produkt.json';

const ProduktScreen = ({ navigation, route }) => {
	const prod = route?.params?.product || product;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<TouchableOpacity style={styles.logoContainer} onPress={() => navigation.goBack()}>
				<Text style={styles.logo}>✔</Text>
			</TouchableOpacity>

			<Image source={{ uri: prod.image }} style={styles.image} resizeMode="contain" />

			<Text style={styles.title}>{prod.name}</Text>
			<Text style={styles.category}>{prod.category}</Text>

			<Text style={styles.description}>{prod.description}</Text>

			<View style={styles.dotsRow}>
				<View style={[styles.dot, { backgroundColor: '#1b75bc' }]} />
				<View style={[styles.dot, { backgroundColor: '#3bb273' }]} />
				<View style={[styles.dot, { backgroundColor: '#6b6b6b' }]} />
			</View>

			<Text style={styles.price}>{prod.price}$</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: 30,
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	logoContainer: {
		position: 'absolute',
		top: 10,
		alignSelf: 'center',
		zIndex: 10,
	},
	logo: {
		fontSize: 24,
		color: '#000',
	},
	image: {
		width: '100%',
		height: 220,
		marginTop: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		color: '#0b5a8a',
		marginTop: 18,
		textAlign: 'center',
	},
	category: {
		fontSize: 14,
		color: '#333',
		marginTop: 8,
		textAlign: 'center',
	},
	description: {
		fontSize: 12,
		color: '#666',
		marginTop: 12,
		textAlign: 'center',
		lineHeight: 18,
		paddingHorizontal: 10,
	},
	dotsRow: {
		flexDirection: 'row',
		marginTop: 18,
		gap: 10,
	},
	dot: {
		width: 18,
		height: 18,
		borderRadius: 9,
		marginHorizontal: 6,
	},
	price: {
		fontSize: 44,
		fontWeight: '800',
		color: '#333',
		marginTop: 18,
	},
});

export default ProduktScreen;
