import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [scanning, setScanning] = useState(false);

	useEffect(() => {
		(async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync();
		setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		setScanning(false);
		alert(`Qr code with data: [${data}] has been scanned!`);
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
			<TouchableOpacity style={styles.qrButton} onPress={() => {
				setScanned(false);
				setScanning(true);
			}}>
				<Text style={styles.qrText}>Scan Qr Code</Text>
			</TouchableOpacity>
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
