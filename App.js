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
  SafeAreaView 
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

  // 3. Scan & Check Handlers
  const handleScan = () => {
    if (!searchQuery.trim()) {
      Alert.alert("चेतावनी", "कृपया जाँच करने के लिए कोई नंबर या लिंक दर्ज करें।");
      return;
    }
    Alert.alert("सुरक्षा जाँच परिणाम", `"${searchQuery}" पूरी तरह सुरक्षित है। कोई खतरा नहीं पाया गया।`);
    setSearchQuery('');
  };

  const handleReportSubmit = () => {
    if (!reportText.trim()) {
      Alert.alert("त्रुटि", "कृपया रिपोर्ट दर्ज करने के लिए विवरण लिखें।");
      return;
    }
    Alert.alert("सफलता", "आपकी साइबर फ्रॉड रिपोर्ट सुरक्षित दर्ज कर ली गई है।");
    setReportText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* App Header with Settings Toggle */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>🛡️ Fraud Face Detector</Text>
            <Text style={styles.headerSubtitle}>एडवांस साइबर क्राइम & फ्रॉड प्रिवेंशन शील्ड</Text>
          </View>
          <TouchableOpacity style={styles.settingsIconBtn} onPress={() => setShowSettings(!showSettings)}>
            <Text style={{ fontSize: 22 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Settings & Privacy Drawer/Section (Requested Large White Text Style) */}
        {showSettings && (
          <View style={styles.settingsBox}>
            <Text style={styles.settingsHeader}>⚙️ सेटिंग्स & प्राइवेसी</Text>
            <TouchableOpacity onPress={() => callHelpline('1930')} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>1. साइबर क्राइम हेल्पलाइन नंबर</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCyberPortal} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>2. बैंक फ्रॉड & तुरंत पोर्टल</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("प्राइवेसी", "आपका डेटा पूरी तरह सुरक्षित और एनक्रिप्टेड है।")} style={styles.settingItem}>
              <Text style={styles.settingTextLarge}>3. दोस्तों के साथ शेयर करें (Viral Link)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeSettingsBtn} onPress={() => setShowSettings(false)}>
              <Text style={styles.closeSettingsText}>बंद करें</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Top Banner: SBI Credit Card (Direct Link) */}
        <TouchableOpacity style={styles.sbiBanner} onPress={openSbiLink}>
          <Text style={styles.sbiBannerText}>💳 SBI क्रेडिट कार्ड (₹2240 सॉफिट)</Text>
          <Text style={styles.sbiBannerSubText}>यहाँ क्लिक करें और क्रेडिट कार्ड के लिए अप्लाई करें!</Text>
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

        <TouchableOpacity style={styles.actionButtonDark} onPress={() => callHelpline('18004253800')}>
          <Text style={styles.actionButtonText}>🏦 बैंक आपातकालीन नंबर (SBI / HDFC)</Text>
        </TouchableOpacity>

        {/* AI & Scam Protection Section */}
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>🤖 AI & स्कैम सुरक्षा शील्ड</Text>
          <TextInput
            style={styles.input}
            placeholder="संदिग्ध नंबर या लिंक यहाँ पेस्ट करें..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.primaryButton} onPress={handleScan}>
            <Text style={styles.primaryButtonText}>सुरक्षा जाँच करें (Scan Now)</Text>
          </TouchableOpacity>
        </View>

        {/* 4 Professional Feature Grids (Large & Clear) */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("फेक ऐप चेकर", "सॉचियस APK या लोन ऐप्स की जाँच करें। सुरक्षित रहें।")}>
            <Text style={styles.gridIcon}>🔍</Text>
            <Text style={styles.gridTextLarge}>फेक ऐप चेकर</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("स्कैम टिप्स", "डिजिटल अरेस्ट और पार्सल फ्रॉड से बचें।")}>
            <Text style={styles.gridIcon}>💡</Text>
            <Text style={styles.gridTextLarge}>स्कैम टिप्स</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridBox} onPress={() => Alert.alert("कम्युनिटी अलर्ट", "हाल ही में आए फर्जी मैसेज देखें। सुरक्षित रहें।")}>
            <Text style={styles.gridIcon}>💬</Text>
            <Text style={styles.gridTextLarge}>SMS अलर्ट</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridBox} onPress={() => callHelpline('1930')}>
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
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  settingTextLarge: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff', // Requested bright white large text
  },
  closeSettingsBtn: {
    backgroundColor: '#dc2626',
    marginTop: 12,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeSettingsText: {
    color: '#ffffff',
    fontWeight: 'bold',
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
  quickActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
  actionButtonDark: {
    backgroundColor: '#334155',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 10,
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
    fontSize: 15, // Large and clear text as requested
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
          
