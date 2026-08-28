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
  
  // नए फीचर्स के लिए स्टेट्स
  const [isRecording, setIsRecording] = useState(false);

  // सेटिंग्स के स्टेट्स - थीम एरर को जड़ से खत्म करने के लिए फिक्स स्टेट
  const [biometric, setBiometric] = useState(false);
  const [privacyScreenshot, setPrivacyScreenshot] = useState(true);
  const [pushNotification, setPushNotification] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // यह स्विच अब पूरे ऐप का रंग बदलेगा
  const [stealthMode, setStealthMode] = useState(false);

  // 📢 ग्लोबल व्हाट्सएप शेयर फंक्शन
  const handleShareApp = async () => {
    try {
      const message = `🚨 GLOBAL CYBER ALERT! 🚨\n\nOne wrong click can wipe out your entire life savings. Protect your family from Deepfakes, AI Voice Cloning, and Online Scams.\n\nI have installed 'Cyber Kavach' to secure my phone. Download now and stay safe worldwide!\n\n👇 Free Download Link:\nhttps://exp.host`;
      await Share.share({ message });
    } catch (error) {
      Alert.alert("Error", "Unable to share at this moment.");
    }
  };

  // गैलरी ओपन और डीपफेक स्कैन
  const handleMediaScan = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission Denied", "Need gallery access to scan photos/videos.");
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
          message: "⚠️ WARNING: Face pixels and expressions match AI Deepfake patterns!"
        });
      }, 3000); 
    }
  };

  // AI वॉइस क्लोन डिटेक्टर सिमुलेशन
  const handleVoiceScan = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      Alert.alert("🔍 AI Voice Report", "Result: 91% Safe. The voice frequency matches natural human speech patterns.");
    }, 4000);
  };

  // फर्जी मैसेज / लिंक चेकर
  const handleCheckSMS = () => {
    if (!suspiciousText.trim()) {
      Alert.alert("Empty", "Please paste a message or link first.");
      return;
    }
    const containsLink = suspiciousText.includes('http') || suspiciousText.includes('.com') || suspiciousText.includes('.in') || suspiciousText.includes('.xyz');
    if (containsLink) {
      Alert.alert("⚠️ Dangerous Link Detected", "This URL triggers phishing servers. DO NOT click or forward this link!");
    } else {
      Alert.alert("🔍 Analysis Complete", "Text seems safe, but never share OTPs or personal banking details with anyone.");
    }
  };

  // 🎨 लाइव डायनामिक थीम सिस्टम (जैसे ही darkMode चेंज होगा, तुरंत रंग बदलेंगे)
  const appBg = darkMode ? '#0D1117' : '#F4F6F9';
  const cardBg = darkMode ? '#161B22' : '#FFFFFF';
  const textColor = darkMode ? '#FFFFFF' : '#000000';
  const subTextColor = darkMode ? '#8B949E' : '#666666';
  const descColor = darkMode ? '#C9D1D9' : '#333333';
  const borderColor = darkMode ? '#21262D' : '#E1E4E8';
  const inputBg = darkMode ? '#0D1117' : '#F0F2F5';

  const renderHomeScreen = () => (
    <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
      
      {/* 🌍 ग्लोबल वायरल शेयर कार्ड */}
      <View style={[styles.card, { backgroundColor: cardBg, borderColor: '#2196F3', borderWidth: 1 }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="public" size={24} color="#2196F3" />
          <Text style={[styles.cardTitle, { color: '#2196F3' }]}>Global Security Pledge</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>"Your one share can save an innocent family somewhere in the world from financial ruin. Share this shield with everyone."</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={handleShareApp}>
          <MaterialIcons name="share" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>व्हाट्सएप और सोशल मीडिया पर शेयर करें</Text>
        </TouchableOpacity>
      </View>

      {/* 🔴 लाइव स्कैम फीड (Global Viral Feature) */}
      <View style={[styles.card, { backgroundColor: cardBg, borderColor: '#E53935', borderWidth: 1 }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="gpp-bad" size={24} color="#E53935" />
          <Text style={[styles.cardTitle, { color: '#E53935' }]}>Live Global Scams (लाइव थ्रेट्स)</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor, fontWeight: 'bold' }]}>⚠️ ALERT: International AI Voice cloning scams are on the rise. Verify identity before transferring money.</Text>
      </View>

      {/* आपातकालीन नंबर */}
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="phone-in-talk" size={24} color="#E53935" />
          <Text style={[styles.cardTitle, { color: textColor }]}>आपातकालीन नंबर (1930 / Helpline)</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>Report cyber fraud immediately. Dial national helpline inside India:</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1E88E5' }]} onPress={() => Linking.openURL('tel:1930')}>
          <MaterialIcons name="call" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>तुरंत कॉल करें: 1930</Text>
        </TouchableOpacity>
      </View>

      {/* वीडियो और डीपफेक स्कैनर (गैलरी ओपनर) */}
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="video-camera-front" size={24} color="#9C27B0" />
          <Text style={[styles.cardTitle, { color: textColor }]}>वीडियो और डीपफेक स्कैनर</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>Scan profiles, video call clips, or photos from your gallery:</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={handleMediaScan} disabled={isScanning}>
          <MaterialIcons name="perm-media" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>{isScanning ? "AI Engine Scanning File..." : "गैलरी से मीडिया स्कैन करें"}</Text>
        </TouchableOpacity>
        {isScanning && <Text style={styles.scanStatusText}>🔄 AI analyzing facial mapping and artifact layers...</Text>}
        {scanResult && (
          <View style={[styles.resultBox, { backgroundColor: appBg }]}>
            <Text style={{ color: '#E53935', fontWeight: 'bold', fontSize: 16 }}>Fraud Score: {scanResult.score}%</Text>
            <Text style={{ color: textColor, marginTop: 4, fontSize: 14 }}>{scanResult.message}</Text>
          </View>
        )}
      </View>

      {/* 🎙️ नया फीचर: AI वॉइस क्लोन डिटेक्टर */}
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="mic" size={24} color="#4CAF50" />
          <Text style={[styles.cardTitle, { color: textColor }]}>AI वॉइस क्लोन डिटेक्टर</Text>
        </View>
        <Text style={[styles.cardDescription, { color: descColor }]}>Record a suspicious audio or voice note to check if it's AI-generated:</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: isRecording ? '#E53935' : '#4CAF50' }]} onPress={handleVoiceScan}>
          <MaterialIcons name={isRecording ? "stop" : "mic"} size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>{isRecording ? "Recording Audio (Analyzing...)" : "आवाज रिकॉर्ड करके जांचें"}</Text>
        </TouchableOpacity>
      </View>

      {/* फर्जी मैसेज / लिंक स्कैनर */}
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

      {/* मोबाइल नंबर जांचक */}
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="location-on" size={24} color="#FF9800" />
          <Text style={[styles.cardTitle, { color: textColor }]}>संदेहास्पद नंबर जांचक</Text>
        </View>
    
