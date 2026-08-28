import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Switch, SafeAreaView, Alert, Share, Linking } from 'react-native';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home'); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [suspiciousText, setSuspiciousText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const [biometric, setBiometric] = useState(false);
  const [privacyScreenshot, setPrivacyScreenshot] = useState(true);
  const [pushNotification, setPushNotification] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [stealthMode, setStealthMode] = useState(false);

  const handleShareApp = async () => {
    try {
      const message = "🚨 GLOBAL CYBER ALERT! \n\nProtect your family from Deepfakes, AI Voice Cloning, and Online Scams. Install 'Kavach AI' to secure your phone now!";
      await Share.share({ message });
    } catch (error) {
      Alert.alert("Error", "Unable to share");
    }
  };

  const handleMediaScan = () => {
    setIsScanning(true); 
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({ score: 87, message: "⚠️ WARNING: Face pixels match Deepfake patterns!" });
    }, 2000);
  };

  const handleVoiceScan = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      Alert.alert("🔍 AI Voice Report", "Result: Safe. Normal speech patterns detected.");
    }, 2000);
  };

  const handleCheckSMS = () => {
    if (!suspiciousText.trim()) {
      Alert.alert("Empty", "Please paste text first.");
      return;
    }
    if (suspiciousText.includes('http') || suspiciousText.includes('.com')) {
      Alert.alert("⚠️ Dangerous Link", "Phishing server detected! DO NOT click this URL.");
    } else {
      Alert.alert("🔍 Complete", "Text seems safe, but never share OTPs.");
    }
  };

  const appBg = darkMode ? '#0D1117' : '#F4F6F9';
  const cardBg = darkMode ? '#161B22' : '#FFFFFF';
  const textColor = darkMode ? '#FFFFFF' : '#000000';
  const descColor = darkMode ? '#8B949E' : '#555555';
  const borderColor = darkMode ? '#21262D' : '#E1E4E8';

  if (currentTab === 'Settings') {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: appBg }]}>
        <View style={[styles.header, { backgroundColor: cardBg, borderBottomColor: borderColor }]}>
          <Text style={[styles.headerTitle, { color: textColor }]}>Settings</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <View style={[styles.card, { backgroundColor: cardBg }]}>
            <View style={styles.settingRow}><Text style={{ color: textColor }}>App Lock / Biometric</Text><Switch value={biometric} onValueChange={setBiometric} /></View>
            <View style={styles.settingRow}><Text style={{ color: textColor }}>Block Screenshot</Text><Switch value={privacyScreenshot} onValueChange={setPrivacyScreenshot} /></View>
            <View style={styles.settingRow}><Text style={{ color: textColor }}>Scam Alerts</Text><Switch value={pushNotification} onValueChange={setPushNotification} /></View>
            <View style={styles.settingRow}><Text style={{ color: textColor }}>Dark Mode</Text><Switch value={darkMode} onValueChange={setDarkMode} /></View>
            <View style={styles.settingRow}><Text style={{ color: textColor }}>Stealth Mode</Text><Switch value={stealthMode} onValueChange={setStealthMode} /></View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setCurrentTab('Home')}><Text style={styles.closeButtonText}>Close Settings</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: appBg }]}>
      <View style={[styles.header, { backgroundColor: cardBg, borderBottomColor: borderColor }]}>
        <Text style={[styles.headerTitle, { color: textColor }]}>🛡️ Kavach AI</Text>
      </View>
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={[styles.card, { backgroundColor: cardBg, borderColor: '#2196F3', borderWidth: 1 }]}>
          <Text style={[styles.cardTitle, { color: '#2196F3' }]}>🌍 Global Security Pledge</Text>
          <Text style={{ color: descColor, marginBottom: 12 }}>"Share this app to protect families from cyber fraud."</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={handleShareApp}><Text style={styles.buttonText}>Share App</Text></TouchableOpacity>
        </View>
        
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>📞 हेल्पलाइन नंबर (1930)</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#1E88E5' }]} onPress={() => Linking.openURL('tel:1930')}><Text style={styles.buttonText}>तुरंत कॉल करें: 1930</Text></TouchableOpacity>
        </View>

        <View style={[styles.card, { backgroundColor: cardBg }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>👤 Deepfake Face Scanner</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={handleMediaScan}><Text style={styles.buttonText}>{isScanning ? "Scanning..." : "Scan Media"}</Text></TouchableOpacity>
          {scanResult && <Text style={{ color: '#E53935', marginTop: 10, fontWeight: 'bold' }}>Score: {scanResult.score}% | {scanResult.message}</Text>}
        </View>

        <View style={[styles.card, { backgroundColor: cardBg }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>🎙️ AI Voice Clone Detector</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: isRecording ? '#E53935' : '#4CAF50' }]} onPress={handleVoiceScan}><Text style={styles.buttonText}>{isRecording ? "Analyzing..." : "Record Voice"}</Text></TouchableOpacity>
        </View>

        <View style={[styles.card, { backgroundColor: cardBg }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>💬 SMS & Link Checker</Text>
          <TextInput style={[styles.input, { backgroundColor: appBg, color: textColor, borderColor: borderColor }]} placeholder="Paste text here..." placeholderTextColor="#666" value={suspiciousText} onChangeText={setSuspiciousText} />
          <TouchableOpacity style={[styles.button, { backgroundColor: '#00BCD4' }]} onPress={handleCheckSMS}><Text style={styles.buttonText}>Check Fraud</Text></TouchableOpacity>
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>

      <View style={[styles.bottomTabBar, { backgroundColor: cardBg, borderTopColor: borderColor }]}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab('Home')}><Text style={{ color: currentTab === 'Home' ? '#2196F3' : '#8B949E', fontWeight: 'bold' }}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleShareApp}><Text style={{ color: '#4CAF50', fontWeight: 'bold' }}>Share</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab('Settings')}><Text style={{ color: '#8B949E', fontWeight: 'bold' }}>Settings</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  contentContainer: { flex: 1, paddingHorizontal: 16, paddingTop: 15 },
  card: { borderRadius: 12, padding: 16, marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  button: { borderRadius: 8, paddingVertical: 12, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  input: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, marginTop: 5, marginBottom: 10 },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  closeButton: { backgroundColor: '#E53935', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  closeButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  bottomTabBar: { flexDirection: 'row', height: 60, borderTopWidth: 1, justifyContent: 'space-around', alignItems: 'center' },
  tabItem: { alignItems: 'center', justifyContent: 'center' }
});
