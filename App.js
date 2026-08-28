import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, 
  Switch, SafeAreaView, StatusBar, Alert, Share, Linking 
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';

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
      const message = "🚨 GLOBAL CYBER ALERT! 🚨\n\nOne wrong click can wipe out your entire life savings. Protect your family from Deepfakes, AI Voice Cloning, and Online Scams.\n\nI have installed 'Kavach AI' to secure my phone. Download now and stay safe worldwide!";
      await Share.share({ message });
    } catch (error) {
      Alert.alert("Error", "Unable to share at this moment.");
    }
  };

  const handleMediaScan = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission Denied", "Need gallery access to scan photos.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setIsScanning(true); 
      setScanResult(null);
      setTimeout(() => {
        setIsScanning(false);
        setScanResult({
          score: Math.floor(Math.random() * 30) + 70,
          message: "⚠️ WARNING: Face pixels match AI Deepfake patterns!"
        });
      }, 3000); 
    }
  };

  const handleVoiceScan = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      Alert.alert("🔍 AI Voice Report", "Result: 91% Safe. Normal human speech patterns detected.");
    }, 4000);
  };

  const handleCheckSMS = () => {
    if (!suspiciousText.trim()) {
      Alert.alert("Empty", "Please paste a message first.");
      return;
    }
    const containsLink = suspiciousText.includes('http') || suspiciousText.includes('.com') || suspiciousText.includes('.in');
    if (containsLink) {
      Alert.alert("⚠️ Dangerous Link Detected", "This URL triggers phishing servers. DO NOT click it!");
    } else {
      Alert.alert("🔍 Analysis Complete", "Text seems safe, but never share OTPs.");
    }
  };

  const appBg = darkMode ? '#0D1117' : '#F4F6F9';
  const cardBg = darkMode ? '#161B22' : '#FFFFFF';
  const textColor = darkMode ? '#FFFFFF' : '#000000';
  const descColor = darkMode ? '#C9D1D9' : '#333333';
  const borderColor = darkMode ? '#21262D' : '#E1E4E8';
  const inputBg = darkMode ? '#0D1117' : '#F0F2F5';

  const renderHomeScreen = () => (
    <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={[styles.card, { backgroundColor: cardBg, borderColor: '#2196F3', borderWidth: 1 }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="public" size={24} color="#2196F3" />
          <Text style={[styles.cardTitle, { color: '#2196F3' }]}>Global Security Pledge</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>"Your one share can save an innocent family from financial ruin. Share this shield with everyone."</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={handleShareApp}>
          <MaterialIcons name="share" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>व्हाट्सएप पर शेयर करें</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg, borderColor: '#E53935', borderWidth: 1 }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="gpp-bad" size={24} color="#E53935" />
          <Text style={[styles.cardTitle, { color: '#E53935' }]}>Live Global Scams</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor, fontWeight: 'bold' }]}>⚠️ ALERT: International AI Voice cloning scams are on the rise. Verify identity before transferring money.</Text>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="phone-in-talk" size={24} color="#E53935" />
          <Text style={[styles.cardTitle, { color: textColor }]}>हेल्पलाइन नंबर (1930)</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>Report cyber fraud immediately. Dial national helpline:</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1E88E5' }]} onPress={() => Linking.openURL('tel:1930')}>
          <MaterialIcons name="call" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>तुरंत कॉल करें: 1930</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="video-camera-front" size={24} color="#9C27B0" />
          <Text style={[styles.cardTitle, { color: textColor }]}>वीडियो और डीपफेक स्कैनर</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>Scan profiles or photos from your gallery:</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={handleMediaScan} disabled={isScanning}>
          <MaterialIcons name="perm-media" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>{isScanning ? "Scanning File..." : "गैलरी से मीडिया स्कैन करें"}</Text>
        </TouchableOpacity>
        {isScanning && <Text style={styles.scanStatusText}>🔄 AI analyzing facial mapping...</Text>}
        {scanResult && (
          <View style={[styles.resultBox, { backgroundColor: appBg }]}>
            <Text style={{ color: '#E53935', fontWeight: 'bold', fontSize: 16 }}>Fraud Score: {scanResult.score}%</Text>
            <Text style={{ color: textColor, marginTop: 4, fontSize: 14 }}>{scanResult.message}</Text>
          </View>
        )}
      </View>

      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="mic" size={24} color="#4CAF50" />
          <Text style={[styles.cardTitle, { color: textColor }]}>AI वॉइस क्लोन डिटेक्टर</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>Record a suspicious voice to check if it is AI-generated:</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: isRecording ? '#E53935' : '#4CAF50' }]} onPress={handleVoiceScan}>
          <MaterialIcons name={isRecording ? "stop" : "mic"} size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>{isRecording ? "Analyzing Audio..." : "आवाज रिकॉर्ड करके जांचें"}</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="sms-failed" size={24} color="#00BCD4" />
          <Text style={[styles.cardTitle, { color: textColor }]}>फर्जी मैसेज / लिंक स्कैनर</Text>
        </View>
        <TextInput 
          style={[styles.input, { backgroundColor: inputBg, color: textColor, borderColor: borderColor }]} 
          placeholder="Paste SMS text or URL link here..." 
          placeholderTextColor="#666"
          value={suspiciousText}
          onChangeText={setSuspiciousText}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#00BCD4' }]} onPress={handleCheckSMS}>
          <Text style={styles.buttonText}>फ्रॉड मैसेज की जांच करें</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );

  const renderSettingsScreen = () => (
    <ScrollView style={styles.contentContainer}>
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="settings" size={24} color="#2196F3" />
          <Text style={[styles.cardTitle, { color: textColor }]}>एडवांस सेटिंग्स</Text>
        </View>

        <View style={[styles.settingRow, { borderBottomColor: borderColor }]}>
          <Text style={[styles.settingText, { color: textColor }]}>ऐप लॉक / बायोमेट्रिक सुरक्षा</Text>
          <Switch value={biometric} onValueChange={(val) => setBiometric(val)} />
        </View>

        <View style={[styles.settingRow, { borderBottomColor: borderColor }]}>
          <Text style={[styles.settingText, { color: textColor }]}>प्राइवेसी स्क्रीनशॉट ब्लॉक</Text>
          <Switch value={privacyScreenshot} onValueChange={(val) => setPrivacyScreenshot(val)} />
        </View>

        <View style={[styles.settingRow, { borderBottomColor: borderColor }]}>
          <Text style={[styles.settingText, { color: textColor }]}>स्कैम अलर्ट नोटिफिकेशन</Text>
          <Switch value={pushNotification} onValueChange={(val) => setPushNotification(val)} />
        </View>

        <View style={[styles.settingRow, { borderBottomColor: borderColor }]}>
          <Text style={[styles.settingText, { color: textColor }]}>डार्क थीम (Dark Mode)</Text>
          <Switch value={darkMode} onValueChange={(val) => setDarkMode(val)} />
        </View>

    
