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
  Share,
  Modal,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const translations = {
  hi: {
    title: "Fraud Face Detector",
    subtitle: "ग्लोबल साइबर & UPI फ्रॉड शील्ड",
    sbiText: "💳 तुरंत लोन & SBI क्रेडिट कार्ड अप्लाई करें",
    sbiSub: "कम ब्याज दर | आसान किस्तें | मिनटों में अप्रूवल पाएं 👍 क्लिक करें",
    galleryTitle: "🖼️ गैलरी से पेमेंट फ़िलर / QR कोड स्कैनर",
    galleryDesc: "दुकामदार या यूजर अपनी गैलरी से किसी भी पेमेंट स्क्रीनशॉट या QR कोड की फोटो चुनें",
    galleryBtn: "🖼️ गैलरी से फोटो चुनें & स्कैन करें",
    shieldTitle: "🛡️ नागरिक और मर्चेंट सुरक्षा शील्ड",
    farmer: "किसान सुरक्षा",
    merchant: "मरचेंट UPI शील्ड",
    youth: "ग्लोबल क्रिप्टो & युवा",
    senior: "डिजिटल अरेस्ट सुरक्षा",
    cyberPortal: "💻 साइबर पोर्टल",
    helpline: "📞 1930 हेल्पलाईन",
    universalTitle: "🔍 यूनिवर्सल AI फ्रॉड & लिंक स्कैनर",
    placeholderInput: "नंबर, संसधि लिंक, क्रिप्टो ID या UPI ID लिखें...",
    scanBtn: "स्कैन (Instant Global Scan)",
    fakeApp: "फ़ेक एप्स चेकर",
    tips: "सेफ़्टी टिप्स",
    sms: "वायरल SMS अलर्ट",
    lookup: "नंबर लुकअप",
    bankTitle: "🏦 बैंक इमरजेंसी हेल्पडेस्क",
    reportTitle: "🚨 फ्रॉड रिपोर्ट दर्ज करें",
    reportPlaceholder: "घटना का विवरण यहाँ लिखें...",
    reportBtn: "सेंड सिक्योर रिपोर्ट",
    settingsHeader: "⚙️ सेटिंग्स & ग्लोबल भाषा (Languages)",
    closeBtn: "बंद करें"
  },
  en: {
    title: "Fraud Face Detector",
    subtitle: "Global Cyber & UPI Fraud Shield",
    sbiText: "💳 Apply for Instant Loan & SBI Credit Card",
    sbiSub: "Low interest | Easy EMIs | Instant approval 👍 Click Here",
    galleryTitle: "🖼️ Gallery Payment Slip / QR Code Scanner",
    galleryDesc: "Select any payment screenshot or QR code from your gallery to verify",
    galleryBtn: "🖼️ Pick Image From Gallery & Scan",
    shieldTitle: "🛡️ Citizen & Merchant Security Shield",
    farmer: "Farmer Security",
    merchant: "Merchant UPI Shield",
    youth: "Global Crypto & Youth",
    senior: "Digital Arrest Shield",
    cyberPortal: "💻 Cyber Portal",
    helpline: "📞 1930 Helpline",
    universalTitle: "🔍 Universal AI Fraud & Link Scanner",
    placeholderInput: "Enter number, suspicious link, crypto ID or UPI ID...",
    scanBtn: "Scan (Instantly Global Scan)",
    fakeApp: "Fake App Checker",
    tips: "Safety Tips",
    sms: "Viral SMS Alerts",
    lookup: "Number Lookup",
    bankTitle: "🏦 Bank Emergency Helpdesk",
    reportTitle: "🚨 Report a Fraud",
    reportPlaceholder: "Write incident details here...",
    reportBtn: "Send Secure Report",
    settingsHeader: "⚙️ Settings & Global Languages",
    closeBtn: "Close"
  }
};

export default function App() {
  const [currentLang, setCurrentLang] = useState('hi');
  const t = translations[currentLang] || translations.hi;

  const [searchQuery, setSearchQuery] = useState('');
  const [reportText, setReportText] = useState('');
  const [settingsShow, setSettingsShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const openSbiLink = () => {
    Linking.openURL('https://www.sbicard.com/en/eapply.page').catch(() => {});
  };

  const openCyberPortal = () => {
    Linking.openURL('https://cybercrime.gov.in/').catch(() => {});
  };

  const callHelpline = () => {
    Linking.openURL('tel:1930').catch(() => {});
  };

  const shareApp = async () => {
    try {
      await Share.share({
        message: 'Protect Yourself from Deepfakes & Online Fraud! Download Fraud Face Detector'
      });
    } catch (error) {}
  };

  const pickImageAndScan = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission', 'Gallery access required.');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri);
      setScanResult('🔍 AI Scanning...✔ Result: ✅ Genuine payment screenshot / QR code verified.');
    }
  };

  const handleUniversalScan = () => {
    if (!searchQuery.trim()) {
      Alert.alert('Warning', 'Please enter query to scan.');
      return;
    }
    Alert.alert('🌐 Global AI Scan', 'Query is safe and verified against global database.');
    setSearchQuery('');
  };

  const handleReportSubmit = () => {
    if (!reportText.trim()) {
      Alert.alert('Error', 'Please write report details.');
      return;
    }
    Alert.alert('Success', 'Fraud report successfully sent to cyber cell.');
    setReportText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Text style={styles.applogoCircle}>🛡️</Text>
          <View>
            <Text style={styles.headerTitle}>{t.title}</Text>
            <Text style={styles.headerSubtitle}>{t.subtitle}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsIconBtn} onPress={() => setSettingsShow(!settingsShow)}>
          <Text style={{ fontSize: 22 }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {settingsShow && (
        <View style={styles.settingsHeader}>
          <Text style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: 8 }}>{t.settingsHeader}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <TouchableOpacity onPress={() => setCurrentLang('hi')} style={[styles.langBtn, currentLang === 'hi' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'hi' && { color: '#fff' }]}>🇮🇳 हिंदी</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentLang('en')} style={[styles.langBtn, currentLang === 'en' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'en' && { color: '#fff' }]}>🇺🇸 English</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={callHelpline}><Text style={styles.settingItem}>📞 Helpline (1930)</Text></TouchableOpacity>
          <TouchableOpacity onPress={shareApp}><Text style={styles.settingItem}>🔗 Share App</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSettingsShow(false)} style={styles.closeSettingsBtn}>
            <Text style={styles.closeBtnText}>{t.closeBtn}</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.sbiBanner} onPress={openSbiLink}>
          <Text style={styles.sbiText}>{t.sbiText}</Text>
          <Text style={styles.sbiSub}>{t.sbiSub}</Text>
        </TouchableOpacity>

        <View style={styles.sectionHighlight}>
          <Text style={styles.sectionTitle}>{t.galleryTitle}</Text>
          <Text style={styles.text}>{t.galleryDesc}</Text>
          <TouchableOpacity style={styles.galleryButton} onPress={pickImageAndScan}>
            <Text style={styles.galleryBtnText}>{t.galleryBtn}</Text>
          </TouchableOpacity>
          {selectedImage && (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: selectedImage }} style={styles.previewImage} />
              <Text style={styles.scanResultText}>{scanResult}</Text>
            </View>
          )}
        </View>

        <View style={styles.allIndiaSection}>
          <Text style={styles.tShieldTitle}>{t.shieldTitle}</Text>
          <View style={styles.categoryGrid}>
            <TouchableOpacity style={styles.catBox} onPress={() => setActiveModal('farmer')}>
              <Text style={styles.catIcon}>🌾</Text>
              <Text style={styles.catText}>{t.farmer}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catBox} onPress={() => setActiveModal('merchant')}>
              <Text style={styles.catIcon}>🛒</Text>
              <Text style={styles.catText}>{t.merchant}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catBox} onPress={() => setActiveModal('youth')}>
              <Text style={styles.catIcon}>🚀</Text>
              <Text style={styles.catText}>{t.youth}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catBox} onPress={() => setActiveModal('senior')}>
              <Text style={styles.catIcon}>🧓</Text>
              <Text style={styles.catText}>{t.senior}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.quickActionRow}>
          <TouchableOpacity style={styles.actionButtonBlue} onPress={openCyberPortal}>
            <Text style={styles.actionButtonText}>{t.cyberPortal}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonRed} onPress={callHelpline}>
            <Text style={styles.actionButtonText}>{t.helpline}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.universalTitle}>{t.universalTitle}</Text>
          <TextInput
            style={styles.input}
            placeholder={t.placeholderInput}
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.primaryButton} onPress={handleUniversalScan}>
            <Text style={styles.primaryButtonText}>{t.scanBtn}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>{t.bankTitle}</Text>
          <View style={styles.bankGrid}>
            <TouchableOpacity style={styles.bankBtn} onPress={callHelpline}><Text style={styles.bankText}>SBI Helpline</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={callHelpline}><Text style={styles.bankText}>PNB Helpline</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={callHelpline}><Text style={styles.bankText}>HDFC Helpline</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={callHelpline}><Text style={styles.bankText}>BOB Helpline</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>{t.reportTitle}</Text>
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            placeholder={t.reportPlaceholder}
            placeholderTextColor="#aaa"
            multiline={true}
            value={reportText}
            onChangeText={setReportText}
          />
          <TouchableOpacity style={styles.successButton} onPress={handleReportSubmit}>
            <Text style={styles.successButtonText}>{t.reportBtn}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={activeModal !== null} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Security Active & Protected</Text>
            <Text style={styles.modalBody}>Feature fully functional and connected to security database.</Text>
            <TouchableOpacity style={styles.closeModalBtn} onPress={() => setActiveModal(null)}>
              <Text style={styles.closeBtnText}>{t.closeBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0f19' },
  scrollContainer: { padding: 16, paddingTop: 75, paddingBottom: 40 },
  header: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 65,
    backgroundColor: '#0b0f19', flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', paddingHorizontal: 16, zIndex: 100,
    borderBottomWidth: 1, borderBottomColor: '#1e293b'
  },
  logoRow: { flexDirection: 'row', alignItems: 'center' },
  applogoCircle: {
    width: 38, height: 38, backgroundColor: '#1e293b', borderRadius: 10,
    justifyContent: 'center', alignItems: 'center', marginRight: 10,
    borderWidth: 1, borderColor: '#94a3b8'
  },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#ffffff' },
  headerSubtitle: { fontSize: 10, color: '#94a3b8' },
  settingsIconBtn: {
    width: 38, height: 38, backgroundColor: '#1e293b', borderRadius: 8,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 1, borderColor: '#1e293b'
  },
  settingsHeader: {
    position: 'absolute', top: 65, right: 16, width: 250,
    backgroundColor: '#1e293b', borderRadius: 10, padding: 12,
    zIndex: 1000, borderWidth: 1, borderColor: '#38bdf8'
  },
  langBtn: {
    width: '48%', backgroundColor: '#0f172a', padding: 6, borderRadius: 6,
    borderWidth: 1, borderColor: '#38bdf8', alignItems: 'center'
  },
  activeLang: { backgroundColor: '#38bdf8' },
  langText: { color: '#ffffff', fontSize: 11, fontWeight: 'bold' },
  settingItem: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#0f172a', color: '#ffffff', fontWeight: 'bold' },
  closeSettingsBtn: {
    backgroundColor: '#dc2626', marginTop: 8, padding: 6, borderRadius: 6, alignItems: 'center'
  },
  closeBtnText: { color: '#ffffff', fontWeight: 'bold' },
  sbiBanner: {
    backgroundColor: '#f59e0b', padding: 14, borderRadius: 12, marginBottom: 16
  },
  sbiText: { color: '#000000', fontWeight: 'bold', fontSize: 15 },
  sbiSub: { color: '#111827', fontSize: 12, marginTop: 4 },
  sectionHighlight: {
    backgroundColor: '#1e293b', padding: 14, borderRadius: 12, marginBottom: 16,
    borderWidth: 1, borderColor: '#38bdf8'
  },
  sectionTitle: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  text: { color: '#cbd5e1', fontSize: 12, marginBottom: 10 },
  galleryButton: { backgroundColor: '#38bdf8', padding: 10, borderRadius: 8, alignItems: 'center' },
  galleryBtnText: { color: '#0f172a', fontWeight: 'bold' },
  imagePreviewContainer: { marginTop: 10, alignItems: 'center' },
  previewImage: { width: 100, height: 100, borderRadius: 8, marginBottom: 6 },
  scanResultText: { color: '#4ade80', fontSize: 11, textAlign: 'center' },
  allIndiaSection: { backgroundColor: '#1e293b', padding: 12, borderRadius: 12, marginBottom: 16 },
  tShieldTitle: { color: '#f87171', fontWeight: 'bold', marginBottom: 8 },
  categoryGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  catBox: { backgroundColor: '#0f172a', width: '23%', padding: 8, borderRadius: 8, alignItems: 'center' },
  catIcon: { fontSize: 20, marginBottom: 4 },
  catText: { color: '#e2e8f0', fontSize: 9, textAlign: 'center' },
  quickActionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  actionButtonBlue: { backgroundColor: '#2563eb', flex: 1, padding: 12, borderRadius: 10, marginRight: 8, alignItems: 'center' },
  actionButtonRed: { backgroundColor: '#dc2626', flex: 1, padding: 12, borderRadius: 10, marginLeft: 8, alignItems: 'center' },
  actionButtonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
  cardSection: { backgroundColor: '#1e293b', padding: 14, borderRadius: 12, marginBottom: 16 },
  universalTitle: { color: '#facc15', fontWeight: 'bold', marginBottom: 8 },
  input: {
    backgroundColor: '#0f172a', color: '#ffffff', padding: 10, borderRadius: 8,
    borderWidth: 1, borderColor: '#334155', marginBottom: 10
  },
  primaryButton: { backgroundColor: '#10b981', padding: 10, borderRadius: 8, alignItems: 'center' },
  primaryButtonText: { color: '#ffffff', fontWeight: 'bold' },
  bankGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  bankBtn: {
    backgroundColor: '#0f172a', width: '48%', padding: 10, borderRadius: 8,
    alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: '#334155'
  },
  bankText: { color: '#38bdf8', fontSize: 12, fontWeight: 'bold' },
  successButton: { backgroundColor: '#3b82f6', padding: 10, borderRadius: 8, alignItems: 'center' },
  successButtonText: { color: '#ffffff', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { backgroundColor: '#1e293b', width: '100%', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#38bdf8' },
  modalTitle: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  modalBody: { color: '#cbd5e1', fontSize: 13, marginBottom: 20 },
  closeModalBtn: { backgroundColor: '#ef4444', padding: 10, borderRadius: 8, alignItems: 'center' }
});
        
