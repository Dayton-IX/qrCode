import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App({route, navigation}) {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [scanning, setScanning] = useState(false);
	const [qrData, setQrData] = useState('')

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		setScanning(false);
		// alert(`Qr code with data: [${data}] has been scanned!`);
		setQrData(data);
		navigation.navigate('Menu', {restaurantID: data});
	};

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

  return (
	<View style={styles.screen}>
	  	{scanning ? 
			<BarCodeScanner
			onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
			style={StyleSheet.absoluteFillObject}
			barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
			/>
			:
			<View style={styles.container}>
				<TouchableOpacity style={styles.qrButton} onPress={() => {
					setScanned(false);
					setScanning(true);
				}}>
					<Text style={styles.qrText}>Scan Qr Code</Text>
				</TouchableOpacity>
				<View style={styles.data}>
					<Text style={styles.dataText}>{qrData}</Text>
				</View>
			</View>
		}
	</View>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		alignItems: 'center'
	},
	qrButton: {
		backgroundColor: '#e74c3c',
		width: 200,
		alignItems: 'center',
		paddingVertical: 20,
		marginBottom: 50,
		borderRadius: 10
	},
	qrText: {
		color: '#fff',
		fontSize: 18
	},
})
