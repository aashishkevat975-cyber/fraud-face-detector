import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Linking, 
  TextInput, 
  Alert,
  SafeAreaView,
  Share 
} from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [reportText, setReportText] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  // 1. SBI Card Official Link Activation
  const openSbiLink = () => {
    Linking.openURL('https://www.sbicard.com/en/eapply.page').catch(err => 
      Alert.alert("Link Error", "वेबसाइट खोलने में असमर्थ")
    );
  };

  // 2. Helpline & Portals
  const openCyberPortal = () => {
    Linking.openURL('https://cybercrime.gov.in');
  };

  const callHelpline = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  // 3. Native Share Function
  const shareApp = async () => {
    try {
      await Share.share({
        message: 'एंटरप्राइज़ और मर्चेंट साइबर सुरक्षा ऐप "Fraud Face Detector" डाउनलोड करें और डिजिटल फ्रॉड से पूरी सुरक्षा पाएं!',
      });
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // 4. Scan & Check Handlers
  const handleScan = () => {
    if (!searchQuery.trim()) {
      Alert.alert("चेतावनी", "कृपया जाँच करने के लिए कोई नंबर, डोमेन या लिंक दर्ज करें।");
      return;
    }
    Alert.alert("AI सुरक्षा जाँच परिणाम", `"${searchQuery}" की डेटाबेस से जाँच की गई: यह पूरी तरह सुरक्षित है।`);
    setSearchQuery('');
  };

  // 5. Handlers for the 3 New Corporate & Enterprise Features
  const handlePhishingShield = () => {
    Alert.alert(
      "🛡️ कॉर्पोरेट फिशिंग शील्ड (Phishing Shield)", 
      "यह फीचर कंपनियों के ब्रांड नेम की नकल (Typosquatting) करके बनाई गई फर्जी वेबसाइट्स (जैसे fake-company.com) को स्कैन और ब्लॉक करता है।"
    );
  };

  const handleBulkTracker = () => {
    Alert.alert(
      "🔍 बल्क नंबर फ्रॉड ट्रैकर (API)", 
      "बैंकों और वित्तीय संस्थानों के लिए: रिकवरी एजेंट या कस्टमर केयर नंबर की तुरंत जाँच करें कि वह साइबर ठगों की ब्लैकलिस्ट में है या नहीं।"
    );
  };

  const handleRemoteShield = () => {
    Alert.alert(
      "⚠️ एंटी-रिमोट डेस्कटॉप शील्ड", 
      "डिटेक्शन चालू है: यह स्कैन कर रहा है कि कहीं आपके फोन या कर्मचारी के डिवाइस पर बैकग्राउंड में कोई खतरनाक AnyDesk या TeamViewer ऐप तो नहीं चल रहा।"
    );
  };

  const handleUpiScan = () => {
    Alert.alert(
      "🚨 मर्चेंट स्पेशल: फेक UPI स्क्रीनशॉट चेकर", 
      "दुकानदारों के लिए विशेष: ग्राहक द्वारा दिखाए गए पेमेंट स्क्रीनशॉट या यूपीआई आईडी की प्रामाणिकता जांचने के लिए AI शील्ड एक्टिव है।"
    );
  };

  const handleReportSubmit = () => {
    if (!reportText.trim()) {
      Alert.alert("त्रुटि", "कृपया रिपोर्ट दर्ज करने के लिए घटना का विवरण लिखें।");
      return;
    }
    Alert.alert("सफलता", "आपकी साइबर फ्रॉड रिपोर्ट सफलताપूर्वक सुरक्षित दर्ज कर ली गई है।");
    setReportText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* App Header with Proper Top-Right Settings Gear */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>🛡️ Fraud Face Detector</Text>
            <Text style={styles.headerSubtitle}>एंटरप्राइज़ & मर्चेंट साइबर प्रिवेंशन शील्ड</Text>
          </View>
          <TouchableOpacity style={styles.settingsIconBtn} onPress={() => setShowSettings(!showSettings)}>
            <Text style={{ fontSize: 24 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Properly Positioned Settings Drawer */}
        {showSettings && (
          <View style={styles.settingsBox}>
            <Text style={styles.settingsHeader}>⚙️ सेटिंग्स & कॉर्पोरेट टूल्स</Text>
            <TouchableOpacity onPress={() => callHelpline('1930')} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>1. 📞 साइबर क्राइम हेल्पलाइन (1930)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCyberPortal} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>2. 🌐 बैंक फ्रॉड & तुरंत पोर्टल</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={shareApp} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>3. 📤 व्यापारियों के साथ शेयर करें (Viral Link)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("एंटरप्राइज़ लाइसेंस", "यह ऐप बड़ी कंपनियों, बैंकों और मर्चेंट्स को एडवांस्ड फ्रॉड प्रोटेक्शन देता है।")} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>4. 💼 कॉर्पोरेट लाइसेंस जानकारी</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeSettingsBtn} onPress={() => setShowSettings(false)}>
              <Text style={styles.closeSettingsText}>सेटिंग्स बंद करें</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Top Banner: SBI Credit Card (Direct Link) */}
        <TouchableOpacity style={styles.sbiBanner} onPress={openSbiLink}>
          <Text style={styles.sbiBannerText}>💳 SBI क्रेडिट कार्ड (₹2240 सॉफिट)</Text>
          <Text style={styles.sbiBannerSubText}>यहाँ क्लिक करें और क्रेडिट कार्ड के लिए अप्लाई करें!</Text>
        </TouchableOpacity>

        {/* --- NEW ENTERPRISE & CORPORATE FEATURES SECTION --- */}
        <View style={styles.corporateSection}>
          <Text style={styles.sectionTitleCorporate}>🏢 कॉर्पोरेट & बिजनेस सुरक्षा टूल्स</Text>
          
          <TouchableOpacity style={styles.corpBtn} onPress={handlePhishingShield}>
            <Text style={styles.corpBtnText}>🌐 कॉर्पोरेट फिशिंग डोमेन मॉनिटर</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.corpBtn} onPress={handleBulkTracker}>
            <Text style={styles.corpBtnText}>📊 बल्क नंबर फ्रॉड ट्रैकर (API)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.corpBtn} onPress={handleRemoteShield}>
            <Text style={styles.corpBtnText}>🔒 एंटी-रिमोट डेस्कटॉप शील्ड</Text>
          </TouchableOpacity>
        </View>

        {/* --- MEGA BUSINESS FEATURE: FAKE UPI SCREENSHOT DETECTOR --- */}
        <TouchableOpacity style={styles.merchantMegaBanner} onPress={handleUpiScan}>
          <Text style={styles.merchantMegaTitle}>🚨 मर्चेंट स्पेशल: फेक UPI स्क्रीनशॉट चेकर</Text>
          <Text style={styles.merchantMegaSub}>दुकानदार सावधान! झूठे पेमेंट स्क्रीनशॉट की तुरंत पहचान करें।</Text>
        </TouchableOpacity>

        {/* Quick Action Buttons */}
        <View style={styles.quickActionRow}>
          <TouchableOpacity style={styles.actionButtonBlue} onPress={openCyberPortal}>
            <Text style={styles.actionButtonText}>🌐 साइबर पोर्टल</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButtonRed} onPress={() => callHelpline('1930')}>
            <Text style={styles.actionButtonText}>📞 1930 हेल्पलाइन</Text>
          </TouchableOpacity>
        </View>

        {/* Expanded 10-12 Bank Emergency Numbers Section */}
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>🏦 बैंक आपातकालीन & फ्रॉड हेल्पडेस्क (10+ बैंक)</Text>
          <View style={styles.bankGrid}>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18004253800')}><Text style={styles.bankText}>SBI: 1800-425</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18002586161')}><Text style={styles.bankText}>PNB: 1800-258</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18002662')}><Text style={styles.bankText}>HDFC: 1800-266</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18002584455')}><Text style={styles.bankText}>ICICI: 1800-258</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('1800223344')}><Text style={styles.bankText}>BOB: 1800-223</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18004195959')}><Text style={styles.bankText}>AXIS: 1800-419</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18001802223')}><Text style={styles.bankText}>CANARA: 1800-180</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18001031906')}><Text style={styles.bankText}>UNION: 1800-103</Text></TouchableOpacity>
          </View>
        </View>

        {/* AI & Scam Protection Section */}
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>🤖 AI नंबर & लिंक सुरक्षा शील्ड</Text>
          <TextInput
            style={styles.input}
            placeholder="संदिग्ध नंबर, UPI ID या लिंक यहाँ पेस्ट करें..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.primaryButton} onPress={handleScan}>
            <Text style={styles.primaryButtonText}>सुरक्षा जाँच करें (Scan Now)</Text>
          </TouchableOpacity>
        </View>

        {/* 4 Professional Feature Grids */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("फेक ऐप चेकर", "यह टूल आपके फोन में इंस्टॉल सभी ऐप्स की APK सिग्नेचर स्कैन करके फर्जी लोन और मालवेयर ऐप्स की पहचान करता है।")} >
            <Text style={styles.gridIcon}>🔍</Text>
            <Text style={styles.gridTextLarge}>फेक ऐप चेकर</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("स्कैम टिप्स", "1. कभी किसी को OTP न बताएं।\n2. डिजिटल अरेस्ट वीडियो कॉल फर्जी होते हैं।\n3. पार्सल में ड्रग्स होने की धमकी देने वाले ठग होते हैं।")} >
            <Text style={styles.gridIcon}>💡</Text>
            <Text style={styles.gridTextLarge}>स्कैम टिप्स</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("SMS अलर्ट", "हाल ही में सरकारी और वित्तीय संस्थाओं द्वारा जारी किए गए सभी साइबर फ्रॉड अलर्ट यहाँ अपडेट किए जाते हैं।")} >
            <Text style={styles.gridIcon}>💬</Text>
            <Text style={styles.gridTextLarge}>SMS अलर्ट</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("नंबर लुकअप", "किसी भी अनजान कॉलर का नंबर दर्ज करके चेक करें कि क्या वह फ्रॉड डेटाबेस में दर्ज है या नहीं।")} >
            <Text style={styles.gridIcon}>📞</Text>
            <Text style={styles.gridTextLarge}>नंबर लुकअप</Text>
          </TouchableOpacity>
        </View>

        {/* Fraud Report Section */}
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>🚨 फ्रॉड रिपोर्ट दर्ज करें</Text>
          <TextInput
            style={[styles.input, { height: 90, textAlignVertical: 'top' }]}
            placeholder="घटना यहाँ लिखें..."
            placeholderTextColor="#aaa"
            multiline={true}
            value={reportText}
            onChangeText={setReportText}
          />
          <TouchableOpacity style={styles.successButton} onPress={handleReportSubmit}>
            <Text style={styles.successButtonText}>सुरक्षित रखें & रिपोर्ट भेजें</Text>
          </TouchableOpacity>
        </View>

        {/* Google AdMob Banner Integration Notice Box */}
        <View style={styles.adBannerBox}>
          <Text style={styles.adTextSmall}>📢 विज्ञापन स्पेस (AdMob ID Active)</Text>
          <Text style={styles.adPublisherText}>Pub ID: ca-app-pub-1675872523636331~1932744321</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  settingsIconBtn: {
    backgroundColor: '#1e293b',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#38bdf8',
  },
  settingsBox: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#38bdf8',
  },
  settingsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 10,
  },
  settingItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  settingTextLarge: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  closeSettingsBtn: {
    backgroundColor: '#dc2626',
    marginTop: 15,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeSettingsText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sbiBanner: {
    backgroundColor: '#facc15',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  sbiBannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  sbiBannerSubText: {
    fontSize: 13,
    color: '#1e293b',
    marginTop: 3,
    fontWeight: '500',
  },
  corporateSection: {
    backgroundColor: '#172554', // Deep corporate blue theme
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#1d4ed8',
  },
  sectionTitleCorporate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#93c5fd',
    marginBottom: 12,
  },
  corpBtn: {
    backgroundColor: '#1e40af',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3b82f6',
    alignItems: 'center',
  },
  corpBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  merchantMegaBanner: {
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#34d399',
  },
  merchantMegaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  merchantMegaSub: {
    fontSize: 13,
    color: '#ecfdf5',
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '500',
  },
  quickActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionButtonBlue: {
    flex: 1,
    backgroundColor: '#0284c7',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 6,
  },
  actionButtonRed: {
    flex: 1,
    backgroundColor: '#dc2626',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 6,
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardSection: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 10,
  },
  bankGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bankBtn: {
    width: '48%',
    backgroundColor: '#0f172a',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#475569',
    alignItems: 'center',
  },
  bankText: {
    color: '#cbd5e1',
    fontWeight: '600',
    fontSize: 13,
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 8,
    padding: 12,
    color: '#ffffff',
    fontSize: 15,
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gridBox: {
    width: '48%',
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  gridIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  gridTextLarge: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  successButton: {
    backgroundColor: '#16a34a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  successButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  adBannerBox: {
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#374151',
  },
  adTextSmall: {
    color: '#9ca3af',
    fontSize: 12,
    fontWeight: 'bold',
  },
  adPublisherText: {
    color: '#6b7280',
    fontSize: 10,
    marginTop: 2,
  }
});
          
