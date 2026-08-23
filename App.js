import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Modal, Share, Linking, Alert } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

// आपकी AdMob IDs
const BANNER_AD_UNIT_ID = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1675872523636331/3716599285';
const INTERSTITIAL_AD_UNIT_ID = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-1675872523636331/4910261459';

const interstitial = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_UNIT_ID, {
  requestNonPersonalizedAdsOnly: true,
});

export default function App() {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [bankModalVisible, setBankModalVisible] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [reportDetails, setReportDetails] = useState('');

  // इंटरस्टीशियल ऐड दिखाने का फंक्शन
  const showInterstitial = () => {
    try {
      interstitial.load();
      interstitial.show();
    } catch (error) {
      console.log('Ad error:', error);
    }
  };

  // शेयर करने का फंक्शन
  const shareApp = async () => {
    try {
      await Share.share({
        message: 'Fraud Face Detector ऐप डाउनलोड करें और ऑनलाइन फ्रॉड से सुरक्षित रहें! डाउनलोड लिंक: [यहाँ लिंक डालें]',
      });
    } catch (error) {
      Alert.alert('Error', 'Share failed');
    }
  };

  // बैंक हेल्पलाइन कॉल फंक्शन
  const callBank = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fraud Face Detector</Text>
        <TouchableOpacity onPress={() => setSettingsVisible(true)}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* SBI Credit Card Banner */}
        <TouchableOpacity style={styles.sbiCard} onPress={showInterstitial}>
          <Text style={styles.sbiTitle}>💳 SBI क्रेडिट कार्ड (₹2240 प्रॉफिट)</Text>
          <Text style={styles.sbiSub}>यहाँ क्लिक करें और क्रेडिट कार्ड के लिए अप्लाई करें!</Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.blueButton} onPress={() => { showInterstitial(); Linking.openURL('https://cybercrime.gov.in'); }}>
          <Text style={styles.buttonText}>🌐 साइबर पोर्टल</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.redButton} onPress={() => { showInterstitial(); callBank('1930'); }}>
          <Text style={styles.buttonText}>📞 1930 हेल्पलाइन</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.purpleButton} onPress={() => setBankModalVisible(true)}>
          <Text style={styles.buttonText}>🏦 बैंक ब्लॉक लिस्ट & नंबर</Text>
        </TouchableOpacity>

        {/* AI & Scam Protection Box */}
        <View style={styles.cardBox}>
          <Text style={styles.cardTitle}>🤖 AI & स्कैम सुरक्षा</Text>
          <TextInput
            style={styles.input}
            placeholder="संदेश यहाँ पेस्ट करें..."
            placeholderTextColor="#888"
            value={inputMessage}
            onChangeText={setInputMessage}
          />
          <TouchableOpacity style={styles.actionButton} onPress={showInterstitial}>
            <Text style={styles.buttonText}>चैक करें</Text>
          </TouchableOpacity>
        </View>

        {/* 👇 4 नए फीचर्स - बिल्कुल गोल (Circular) डिज़ाइन में एक के बाद एक 👇 */}
        <View style={styles.uniqueFeaturesContainer}>
          <TouchableOpacity style={styles.circleFeatureItem} onPress={() => Alert.alert('फेक ऐप चेकर', 'संदिग्ध APK या लोन ऐप्स की जाँच करें। सुरक्षित रहें!')}>
            <View style={styles.circleIconBox}>
              <Text style={styles.uniqueEmoji}>🕵️‍♂️</Text>
            </View>
            <Text style={styles.uniqueText}>फेक ऐप चेकर</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleFeatureItem} onPress={() => Alert.alert('स्कैम टिप्स', 'डिजिटल अरेस्ट और पार्सल फ्रॉड से बचने के नए तरीके जानें।')}>
            <View style={styles.circleIconBox}>
              <Text style={styles.uniqueEmoji}>💡</Text>
            </View>
            <Text style={styles.uniqueText}>स्कैम टिप्स</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleFeatureItem} onPress={() => Alert.alert('कम्युनिटी अलर्ट', 'हाल ही में आए फर्जी मैसेज यहाँ देखे जा सकते हैं।')}>
            <View style={styles.circleIconBox}>
              <Text style={styles.uniqueEmoji}>💬</Text>
            </View>
            <Text style={styles.uniqueText}>SMS अलर्ट</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleFeatureItem} onPress={() => Alert.alert('नंबर लुकअप', 'संदिग्ध नंबर दर्ज करें और फ्रॉड हिस्ट्री जांचें।')}>
            <View style={styles.circleIconBox}>
              <Text style={styles.uniqueEmoji}>📞</Text>
            </View>
            <Text style={styles.uniqueText}>नंबर लुकअप</Text>
          </TouchableOpacity>
        </View>

        {/* Report Section */}
        <View style={styles.cardBox}>
          <Text style={styles.cardTitle}>📝 फ्रॉड रिपोर्ट दर्ज करें</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="डिटेल्स लिखें..."
            placeholderTextColor="#888"
            multiline
            value={reportDetails}
            onChangeText={setReportDetails}
          />
          <TouchableOpacity style={styles.submitButton} onPress={showInterstitial}>
            <Text style={styles.buttonText}>सुरक्षित रखें</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Settings Modal */}
      <Modal visible={settingsVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>⚙️ सेटिंग्स & प्राइवेसी</Text>
            
            <TouchableOpacity style={styles.settingItem} onPress={() => Linking.openURL('https://cybercrime.gov.in')}>
              <Text style={styles.settingText}>1. साइबर क्राइम हेल्पलाइन नंबर</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem} onPress={() => setBankModalVisible(true)}>
              <Text style={styles.settingText}>2. बैंक फ्रॉड & तुरंत ब्लॉक पोर्टल</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem} onPress={shareApp}>
              <Text style={styles.settingText}>3. दोस्तों के साथ शेयर करें (Viral)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={() => setSettingsVisible(false)}>
              <Text style={styles.buttonText}>बंद करें</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Bank Helpline Numbers Modal */}
      <Modal visible={bankModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>🏦 बैंक आपातकालीन नंबर</Text>
            <Text style={styles.bankSubText}>फ्रॉड होने पर तुरंत नीचे क्लिक करके कॉल करें:</Text>
            
            <TouchableOpacity style={styles.bankItem} onPress={() => callBank('18004253800')}>
              <Text style={styles.bankText}>SBI: 1800 425 3800</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bankItem} onPress={() => callBank('18002586161')}>
              <Text style={styles.bankText}>PNB: 1800 258 6161</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bankItem} onPress={() => callBank('18001026633')}>
              <Text style={styles.bankText}>HDFC: 1800 102 6633</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={() => setBankModalVisible(false)}>
              <Text style={styles.buttonText}>बंद करें</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Banner Ad at Bottom */}
      <View style={styles.adContainer}>
        <BannerAd
          unitId={BANNER_AD_UNIT_ID}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, paddingTop: 40, backgroundColor: '#161b22' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  settingsIcon: { fontSize: 22 },
  scrollContainer: { padding: 15, paddingBottom: 80 },
  sbiCard: { backgroundColor: '#f1c40f', padding: 15, borderRadius: 10, marginBottom: 15 },
  sbiTitle: { fontWeight: 'bold', fontSize: 16, color: '#000' },
  sbiSub: { fontSize: 13, color: '#333', marginTop: 3 },
  blueButton: { backgroundColor: '#0088cc', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  redButton: { backgroundColor: '#d9534f', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  purpleButton: { backgroundColor: '#6c5ce7', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 15 },
  cardBox: { backgroundColor: '#161b22', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#30363d' },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  input: { backgroundColor: '#0d1117', color: '#fff', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#30363d', marginBottom: 10 },
  actionButton: { backgroundColor: '#0099ff', padding: 10, borderRadius: 6, alignItems: 'center' },
  submitButton: { backgroundColor: '#27ae60', padding: 10, borderRadius: 6, alignItems: 'center' },
  
  // गोल फीचर्स के लिए स्टाइल्स
  uniqueFeaturesContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  circleFeatureItem: { flex: 1, alignItems: 'center', marginHorizontal: 2 },
  circleIconBox: { width: 55, height: 55, borderRadius: 27.5, backgroundColor: '#161b22', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#30363d', marginBottom: 5 },
  uniqueEmoji: { fontSize: 22 },
  uniqueText: { color: '#fff', fontSize: 10, textAlign: 'center', fontWeight: 'bold' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#161b22', borderRadius: 12, padding: 20, borderWidth: 1, borderColor: '#30363d' },
  modalHeader: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 15, textAlign: 'center' },
  settingItem: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#30363d' },
  settingText: { color: '#ffffff', fontSize: 15, fontWeight: '600' },
  bankSubText: { color: '#aaa', fontSize: 13, marginBottom: 10, textAlign: 'center' },
  bankItem: { backgroundColor: '#0d1117', padding: 10, borderRadius: 6, marginBottom: 8, borderWidth: 1, borderColor: '#30363d' },
  bankText: { color: '#fff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
  closeButton: { backgroundColor: '#e74c3c', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 15 },
  adContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', backgroundColor: '#161b22' }
});
          
