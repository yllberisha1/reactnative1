
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import product from '../data/produkt.json';

const ProduktScreen = ({ navigation }) => {
	const products = Array.isArray(product) ? product : [product];

	return (
		<View style={styles.mainContainer}>
			<ScrollView contentContainerStyle={styles.container}>

				<View style={styles.categories}>
					<Text style={styles.categoryTab}>Tablet</Text>
					<Text style={styles.categoryTab}>Mouse</Text>
					<Text style={styles.categoryTab}>Keyboard</Text>
				</View>

				<Text style={styles.heading}>
					Most popular products
				</Text>

				{products.slice(0, 3).map((prod, index) => (
					<TouchableOpacity
						key={index}
						style={styles.productRow}
						onPress={() =>
							navigation.navigate('ProduktScreen', {
								product: prod
							})
						}
					>
						<Image
							source={{ uri: prod.image }}
							style={styles.image}
							resizeMode="cover"
						/>

						<View style={styles.productInfo}>
							<Text style={styles.title}>
								{prod.name}
							</Text>

							<Text style={styles.category}>
								{prod.category}
							</Text>

							<Text style={styles.description} numberOfLines={3}>
								{prod.description}
							</Text>

							<Text style={styles.price}>
								${prod.price}
							</Text>
						</View>
					</TouchableOpacity>
				))}

				<TouchableOpacity style={styles.viewMore}>
					<Text style={styles.viewMoreText}>
						View More
					</Text>
				</TouchableOpacity>

			</ScrollView>

			<View style={styles.bottomNav}>
				<TouchableOpacity style={styles.navItem}>
					<Text style={styles.navIcon}>⌂</Text>
					<Text style={styles.navText}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.navItem}
					onPress={() => navigation.navigate('About')}
				>
					<Text style={styles.navIcon}>▣</Text>
					<Text style={styles.navText}>About</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},

	container: {
		paddingHorizontal: 22,
		paddingTop: 20,
		paddingBottom: 25,
	},

	categories: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 25,
	},

	categoryTab: {
		fontSize: 15,
		color: '#222',
		fontWeight: '500',
	},

	heading: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#111',
		marginBottom: 25,
	},

	productRow: {
		flexDirection: 'row',
		marginBottom: 30,
		alignItems: 'flex-start',
	},

	image: {
		width: 112,
		height: 132,
		borderRadius: 12,
		backgroundColor: '#eee',
	},

	productInfo: {
		flex: 1,
		marginLeft: 12,
	},

	title: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#111',
	},

	category: {
		fontSize: 14,
		color: '#24c8e6',
		marginTop: 3,
	},

	description: {
		fontSize: 14,
		fontStyle: 'italic',
		color: '#333',
		marginTop: 3,
		lineHeight: 18,
	},

	price: {
		alignSelf: 'flex-start',
		backgroundColor: '#343d52',
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
		borderRadius: 15,
		paddingHorizontal: 7,
		marginTop: 5,
	},

	viewMore: {
		backgroundColor: '#20c8e9',
		height: 56,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 0,
		marginBottom: 5,
	},

	viewMoreText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},

	bottomNav: {
		height: 65,
		backgroundColor: '#343d52',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	navItem: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	navIcon: {
		fontSize: 25,
		color: '#fff',
	},

	navText: {
		fontSize: 13,
		color: '#ddd',
		marginTop: 2,
	},
});

export default ProduktScreen;
