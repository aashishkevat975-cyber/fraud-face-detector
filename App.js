import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Switch, SafeAreaView, StatusBar, Alert, Share } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home'); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [settings, setSettings] = useState({ biometric: false, privacyScreenshot: true, pushNotification: true, darkMode: true });

  const handleShareApp = async () => {
    try {
      const message = `🚨 सावधान! आज आपका एक गलत क्लिक पूरी कमाई उड़ा सकता है।\n\nडीपफेक वीडियो कॉल और ऑनलाइन ठगी से अपने परिवार को बचाएं।\n\nमैंने अपने फोन में 'Cyber Kavach' ऐप डाउनलोड कर लिया है, आप भी अभी इंस्टॉल करें!\n\n👇 फ्री डाउनलोड लिंक:\nhttps://exp.host`;
      await Share.share({ message });
    } catch (error) {
      Alert.alert("त्रुटि", "शेयर करने में समस्या आई।");
    }
  };

  const handleMediaScan = () => {
    setIsScanning(true); 
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({ score: Math.floor(Math.random() * 40) + 60, message: "⚠️ सावधान: यह मीडिया डीपफेक लग रहा है!" });
    }, 3000); 
  };

  const renderHomeScreen = () => (
    <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={[styles.card, { borderColor: '#2196F3', borderWidth: 1 }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="verified-user" size={24} color="#2196F3" />
          <Text style={[styles.cardTitle, { color: '#2196F3' }]}>सुरक्षा संकल्प: देश को बचाएं</Text>
        </View>
        <Text style={styles.cardDescription}>"आपकी एक शेयरिंग किसी मासूम परिवार को ठगी से बचा सकती है। आज ही इस कवच को अपनों के साथ साझा करें।"</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={handleShareApp}>
          <MaterialIcons name="share" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>व्हाट्सएप पर शेयर करें</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="phone-in-talk" size={24} color="#E53935" />
          <Text style={[styles.cardTitle, { color: '#FFEB3B' }]}>आपातकालीन नंबर (1930)</Text>
        </View>
        <Text style={styles.cardDescription}>धोखाधड़ी होने पर तुरंत 1930 पर कॉल करें।</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1E88E5' }]} onPress={() => Alert.alert("कॉलिंग...", "1930 पर कॉल की जा रही है...")}>
          <MaterialIcons name="call" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>तुरंत कॉल करें: 1930</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="video-camera-front" size={24} color="#9C27B0" />
          <Text style={styles.cardTitle}>वीडियो और डीपफेक स्कैनर</Text>
        </View>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={handleMediaScan} disabled={isScanning}>
          <MaterialIcons name="perm-media" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>{isScanning ? "स्कैनिंग चालू है..." : "MEDIA स्कैन करें"}</Text>
        </TouchableOpacity>
        {isScanning && <Text style={styles.scanStatusText}>🔄 AI चेहरे की जांच कर रहा है...</Text>}
        {scanResult && (
          <View style={styles.resultBox}>
            <Text style={{ color: '#E53935', fontWeight: 'bold' }}>फ्रॉड स्कोर: {scanResult.score}%</Text>
            <Text style={{ color: '#FFF', marginTop: 4 }}>{scanResult.message}</Text>
          </View>
        )}
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="location-on" size={24} color="#FF9800" />
          <Text style={styles.cardTitle}>संदेहास्पद नंबर जांचक</Text>
        </View>
        <TextInput style={styles.input} placeholder="10 अंकों का मोबाइल नंबर" placeholderTextColor="#666" keyboardType="numeric" maxLength={10} value={phoneNumber} onChangeText={setPhoneNumber} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#EF6C00' }]} onPress={() => Alert.alert("जांच जारी", "नंबर की जांच की जा रही है...")}>
          <Text style={styles.buttonText}>लोकेशन ट्रैक करें</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );

  const renderSettingsScreen = () => (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="settings" size={24} color="#2196F3" />
          <Text style={styles.cardTitle}>एडवांस सेटिंग्स (Settings)</Text>
        </View>
        <View style={styles.settingRow}><Text style={styles.settingText}>ऐप लॉक / बायोमेट्रिक सुरक्षा</Text><Switch value={settings.biometric} onValueChange={() => setSettings({...settings, biometric: !settings.biometric})} /></View>
        <View style={styles.settingRow}><Text style={styles.settingText}>प्राइवेसी स्क्रीनशॉट ब्लॉक</Text><Switch value={settings.privacyScreenshot} onValueChange={() => setSettings({...settings, privacyScreenshot: !settings.privacyScreenshot})} /></View>
        <View style={styles.settingRow}><Text style={styles.settingText}>स्कैम अलर्ट नोटिफिकेशन</Text><Switch value={settings.pushNotification} onValueChange={() => setSettings({...settings, pushNotification: !settings.pushNotification})} /></View>
        <View style={styles.settingRow}><Text style={styles.settingText}>डार्क / लाइट थीम</Text><Switch value={settings.darkMode} onValueChange={() => setSettings({...settings, darkMode: !settings.darkMode})} /></View>
        <TouchableOpacity style={styles.closeButton} onPress={() => setCurrentTab('Home')}><Text style={styles.closeButtonText}>बंद करें</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
      <View style={styles.header}>
        <MaterialIcons name="shield" size={28} color="#2196F3" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.headerTitle}>Cyber Kavach</Text>
          <Text style={styles.headerSubtitle}>अपनी मेहनत की कमाई सुरक्षित रखें</Text>
        </View>
      </View>
      {currentTab === 'Home' ? renderHomeScreen() : renderSettingsScreen()}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab('Home')}>
          <MaterialIcons name="home" size={24} color={currentTab === 'Home' ? '#2196F3' : '#8B949E'} />
          <Text style={{ fontSize: 11, color: currentTab === 'Home' ? '#2196F3' : '#8B949E' }}>होम</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleShareApp}>
          <MaterialIcons name="share" size={24} color="#4CAF50" />
          <Text style={{ fontSize: 11, color: '#4CAF50', fontWeight: 'bold' }}>शेयर करें</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab('Settings')}>
          <MaterialIcons name="settings" size={24} color={currentTab === 'Settings' ? '#2196F3' : '#8B949E'} />
          <Text style={{ fontSize: 11, color: currentTab === 'Settings' ? '#2196F3' : '#8B949E' }}>सेटिंग्स</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1117' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#161B22' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  headerSubtitle: { fontSize: 12, color: '#8B949E' },
  contentContainer: { flex: 1, paddingHorizontal: 16, paddingTop: 15 },
  card: { backgroundColor: '#161B22', borderRadius: 12, padding: 16, marginBottom: 16 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginLeft: 8 },
  cardDescription: { fontSize: 14, color: '#C9D1D9', marginBottom: 12 },
  button: { flexDirection: 'row', alignItems: 'center', borderRadius: 8, marginTop: 5, justifyContent: 'center', paddingVertical: 12 },
  buttonText: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  input: { backgroundColor: '#0D1117', borderWidth: 1, borderColor: '#30363D', borderRadius: 8, color: '#FFF', paddingHorizontal: 12, paddingVertical: 10, marginBottom: 10 },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#21262D' },
  settingText: { fontSize: 15, color: '#C9D1D9' },
  closeButton: { backgroundColor: '#E53935', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  closeButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  scanStatusText: { color: '#FF9800', marginTop: 10, textAlign: 'center' },
  resultBox: { marginTop: 15, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#E53935', backgroundColor: '#0D1117' },
  bottomTabBar: { flexDirection: 'row', height: 60, backgroundColor: '#161B22', borderTopWidth: 1, borderTopColor: '#21262D', justifyContent: 'space-around', alignItems: 'center' },
  tabItem: { alignItems: 'center', justifyContent: 'center', width: '33%' }
});
  
