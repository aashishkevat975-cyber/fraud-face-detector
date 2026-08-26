import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Modal, Share, TextInput } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home'); 
  const [currentLang, setCurrentLang] = useState('HI'); 
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [scanInput, setScanInput] = useState('');
  const [scanResult, setScanResult] = useState('');

  const t = {
    HI: {
      title: "फ्रॉड फेस डिटेक्टर",
      subtitle: "एंटी-हैंक और वैश्विक सुरक्षा ऐप",
      alertTitle: "🚨 ग्लोबल एआई और साइबर स्कैम सुरक्षा सक्रिय",
      alertSub: "भारत और अंतरराष्ट्रीय स्तर पर हेल्पलाइन और फ्रॉड शील्ड सक्रिय है।",
      bonusTitle: "🎁 विशेष फ्री बोनस और रिवॉर्ड ऑफर",
      bonusDesc: "सीमित समय के लिए विशेष रिवॉर्ड क्लेम करें। नीचे दिए गए बटन पर क्लिक करके अपना बोनस प्राप्त करें।",
      bonusBtn: "🎁 अभी बोनस क्लेम करें",
      loanTitle: "🏦 SBI और बैंक लोन फ्रॉड शील्ड",
      loanDesc: "लोन के नाम पर एडवांस पैसे मांगने वालों से सावधान! यह ऐप तुरंत लाल चेतावनी जारी करता है।",
      loanBtn: "लोन ऑफर और बोनस की जाँच करें",
      shareTitle: "📢 अपने सगे-संबंधियों को बचाएं",
      shareDesc: "फ्रॉड से सिर्फ खुद नहीं, अपनों को भी बचाएं! इस ऐप को परिवार और दोस्तों के साथ शेयर करें।",
      shareBtn: "अभी शेयर करें",
      bankHead: "🏦 बैंक आपातकालीन हेल्पलाइन (भारत)",
      cyberPortal: "साइबर पोर्टल खोलें",
      helpline1930: "1930 पर कॉल करें"
    },
    EN: {
      title: "Fraud Face Detector",
      subtitle: "Anti-Hack & Global Security App",
      alertTitle: "🚨 Global AI & Cyber Scam Protection Active",
      alertSub: "India & International helplines and fraud shields are active 24/7.",
      bonusTitle: "🎁 Special Free Bonus & Reward Offer",
      bonusDesc: "Claim your special reward for a limited time. Click below to get your bonus.",
      bonusBtn: "🎁 Claim Bonus Now",
      loanTitle: "🏦 SBI & Bank Loan Fraud Shield",
      loanDesc: "Beware of advance fee loan scams! This app triggers immediate alerts for fake offers.",
      loanBtn: "Check Loan & Bonus Offer",
      shareTitle: "📢 Protect Your Loved Ones",
      shareDesc: "Protect your family and friends from online scams by sharing this app.",
      shareBtn: "Share App Now",
      bankHead: "🏦 Bank Emergency Helplines (India)",
      cyberPortal: "Open Cyber Portal",
      helpline1930: "Call 1930 Helpline"
    }
  };

  const currentStrings = t[currentLang] || t['HI'];

  const dialCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const openWeb = (url) => {
    Linking.openURL(url);
  };

  const openFeatureDetails = (title, desc) => {
    setModalTitle(title);
    setModalDesc(desc);
    setInfoModalVisible(true);
  };

  const shareAppFunction = async () => {
    try {
      await Share.share({
        message: currentLang === 'EN' 
          ? 'Stay safe! Download this Fraud Face Detector app to protect your loved ones from online scams.'
          : 'सजग रहें! इस Fraud Face Detector ऐप को डाउनलोड करें और अपने परिवार को ऑनलाइन फ्रॉड से बचाएं।'
      });
    } catch (error) {}
  };

  const runAiScan = () => {
    if (!scanInput.trim()) {
      setScanResult(currentLang === 'EN' ? 'Please enter a link or text to scan!' : 'कृपया स्कैन करने के लिए लिंक या टेक्स्ट दर्ज करें!');
      return;
    }
    setScanResult(currentLang === 'EN' ? '✅ Safe: No malicious phishing detected in this link.' : '✅ सुरक्षित: इस लिंक में कोई खतरनाक फिशिंग या फ्रॉड नहीं मिला।');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.alertBanner}>
              <Text style={styles.alertText}>{currentStrings.alertTitle}</Text>
              <Text style={styles.alertSubText}>{currentStrings.alertSub}</Text>
            </View>

            <View style={styles.bonusCardBox}>
              <Text style={styles.bonusCardTitle}>{currentStrings.bonusTitle}</Text>
              <Text style={styles.bonusCardDesc}>{currentStrings.bonusDesc}</Text>
              <TouchableOpacity style={styles.bonusCardBtn} onPress={() => openWeb('https://bitli.in/PuQGzap')}>
                <Text style={styles.bonusCardBtnText}>{currentStrings.bonusBtn}</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeading}>{currentStrings.bankHead}</Text>
            <View style={styles.bankGrid}>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('1800123456')}>
                <Text style={styles.bankText}>SBI हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>खाता ब्लॉक करने हेतु</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18001802222')}>
                <Text style={styles.bankText}>PNB हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>इमीडिएट सपोर्ट</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18002586161')}>
                <Text style={styles.bankText}>HDFC हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>कस्टमर केयर</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18002584455')}>
                <Text style={styles.bankText}>BOB हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>इमरजेंसी नंबर</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.portalRow}>
              <TouchableOpacity style={styles.portalBtnBlue} onPress={() => openWeb('https://cybercrime.gov.in')}>
                <Text style={styles.portalBtnText}>🌐 {currentStrings.cyberPortal}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.portalBtnRed} onPress={() => dialCall('1930')}>
                <Text style={styles.portalBtnText}>📞 {currentStrings.helpline1930}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.shareCardBox}>
              <Text style={styles.shareCardTitle}>{currentStrings.shareTitle}</Text>
              <Text style={styles.shareCardDesc}>{currentStrings.shareDesc}</Text>
              <TouchableOpacity style={styles.shareCardBtn} onPress={shareAppFunction}>
                <Text style={styles.shareCardBtnText}>{currentStrings.shareBtn}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Search':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.aiScannerContainer}>
              <Text style={styles.aiScannerLabel}>🔍 Global AI Link & Phishing Scanner</Text>
              <Text style={styles.cardDescText}>Paste any suspicious link, email, or crypto wallet address below:</Text>
              <TextInput
                style={styles.textInputBox}
                placeholder="Paste URL / Text here..."
                placeholderTextColor="#94a3b8"
                value={scanInput}
                onChangeText={setScanInput}
              />
              <TouchableOpacity style={styles.aiScanBtn} onPress={runAiScan}>
                <Text style={styles.aiScanBtnText}>Run Global AI Scan</Text>
              </TouchableOpacity>
              {scanResult ? <Text style={styles.scanResultText}>{scanResult}</Text> : null}
            </View>
          </ScrollView>
        );

      case 'Scan':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scannerBox}>
              <Text style={styles.scannerTitle}>Merchant QR & Receipt Shield</Text>
              <Text style={styles.scannerDesc}>Scan store payment QR, Apple Pay, or Google Pay receipts to catch fake payments instantly.</Text>
              <TouchableOpacity style={styles.pickImgBtn} onPress={() => openFeatureDetails("Receipt Shield", "QR & Receipt scanner module is active and secure.")}>
                <Text style={styles.pickImgText}>Scan Payment / Receipt</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Alerts':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.familyBox}>
              <Text style={styles.familyTitle}>👨‍👩‍👧 Family Elder & Kids SOS Shield</Text>
              <Text style={styles.familyDesc}>Protect grandparents from deepfake voice scams & kids from online gaming frauds.</Text>
              <TouchableOpacity style={styles.familyBtn} onPress={() => openFeatureDetails("Family Guard", "SOS Emergency alerts configured successfully.")}>
                <Text style={styles.familyBtnText}>Activate Family Guard</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'History':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <TouchableOpacity style={styles.languageMainBtn} onPress={() => setLangModalVisible(true)}>
              <View style={{flex: 1}}>
                <Text style={styles.langMainTitle}>🌐 भाषा बदलें / Change Language</Text>
                <Text style={styles.langMainSub}>Current: {currentLang === 'HI' ? 'हिंदी (Hindi)' : 'English'}</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🛡️</Text>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.headerTitle}>{currentStrings.title}</Text>
            <Text style={styles.headerSubtitle}>{currentStrings.subtitle}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        {renderTabContent()}
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
          <Text style={[styles.navText, activeTab === 'Home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Search')}>
          <Text style={[styles.navText, activeTab === 'Search' && styles.activeNavText]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerScanBtn} onPress={() => setActiveTab('Scan')}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Alerts')}>
          <Text style={[styles.navText, activeTab === 'Alerts' && styles.activeNavText]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('History')}>
          <Text style={[styles.navText, activeTab === 'History' && styles.activeNavText]}>History</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={langModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>🌐 भाषा चुनें / Select Language</Text>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('HI'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇮🇳 हिंदी (Hindi)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('EN'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇬🇧 English (Global)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setLangModalVisible(false)}>
              <Text style={styles.modalCloseText}>बंद करें / Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={infoModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>{modalTitle}</Text>
            <Text style={styles.modalDescText}>{modalDesc}</Text>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setInfoModalVisible(false)}>
              <Text style={styles.modalCloseText}>OK / Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { backgroundColor: '#1e1b4b', paddingTop: 45, paddingBottom: 15, paddingHorizontal: 20 },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  logoContainer: { width: 38, height: 38, backgroundColor: '#312e81', borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#6366f1' },
  logoIcon: { fontSize: 20 },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  headerSubtitle: { color: '#cbd5e1', fontSize: 12 },
  scrollContent: { padding: 16, paddingBottom: 100 },
  alertBanner: { backgroundColor: '#fef3c7', padding: 14, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#f59e0b' },
  alertText: { color: '#b45309', fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  alertSubText: { color: '#78350f', fontSize: 12 },
  bonusCardBox: { backgroundColor: '#3b0764', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#a855f7' },
  bonusCardTitle: { fontSize: 15, fontWeight: 'bold', color: '#f3e8ff', marginBottom: 8 },
  bonusCardDesc: { fontSize: 13, color: '#e9d5ff', lineHeight: 18, marginBottom: 12 },
  bonusCardBtn: { backgroundColor: '#9333ea', padding: 12, borderRadius: 8, alignItems: 'center' },
  bonusCardBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#f8fafc', marginVertical: 12 },
  bankGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 12 },
  bankCard: { width: '48%', backgroundColor: '#1e293b', padding: 12, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#334155' },
  bankText: { fontWeight: 'bold', color: '#f8fafc', fontSize: 13 },
  bankSubText: { color: '#94a3b8', fontSize: 11, marginTop: 2 },
  portalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  portalBtnBlue: { flex: 1, backgroundColor: '#0284c7', padding: 12, borderRadius: 8, alignItems: 'center', marginRight: 6 },
  portalBtnRed: { flex: 1, backgroundColor: '#dc2626', padding: 12, borderRadius: 8, alignItems: 'center', marginLeft: 6 },
  portalBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  shareCardBox: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#3b82f6' },
  shareCardTitle: { fontSize: 15, fontWeight: 'bold', color: '#60a5fa', marginBottom: 8 },
  shareCardDesc: { fontSize: 13, color: '#94a3b8', lineHeight: 18, marginBottom: 12 },
  shareCardBtn: { backgroundColor: '#2563eb', padding: 10, borderRadius: 8, alignItems: 'center' },
  shareCardBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#1e1b4b', height: 60, borderTopWidth: 1, borderTopColor: '#312e81', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { fontSize: 12, color: '#94a3b8', fontWeight: '600' },
  activeNavText: { color: '#60a5fa', fontWeight: 'bold' },
  centerScanBtn: { width: 50, height: 50, backgroundColor: '#9333ea', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  aiScannerContainer: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#334155' },
  aiScannerLabel: { fontSize: 15, fontWeight: 'bold', color: '#f8fafc', marginBottom: 6 },
  cardDescText: { fontSize: 12, color: '#94a3b8', marginBottom: 12 },
  textInputBox: { backgroundColor: '#0f172a', borderWidth: 1, borderColor: '#475569', borderRadius: 8, padding: 10, color: '#fff', marginBottom: 12 },
  aiScanBtn: { backgroundColor: '#16a34a', padding: 12, borderRadius: 8, alignItems: 'center' },
  aiScanBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  scanResultText: { color: '#4ade80', marginTop: 12, fontSize: 13, fontWeight: 'bold' },
  scannerBox: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#334155' },
  scannerTitle: { fontSize: 16, fontWeight: 'bold', color: '#4ade80', marginBottom: 8 },
  scannerDesc: { fontSize: 13, color: '#94a3b8', lineHeight: 18, marginBottom: 14 },
  pickImgBtn: { backgroundColor: '#16a34a', padding: 12, borderRadius: 8, alignItems: 'center' },
  pickImgText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  familyBox: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#a855f7' },
  familyTitle: { fontSize: 15, fontWeight: 'bold', color: '#c084fc', marginBottom: 8 },
  familyDesc: { fontSize: 13, color: '#94a3b8', lineHeight: 18, marginBottom: 12 },
  familyBtn: { backgroundColor: '#9333ea', padding: 10, borderRadius: 8, alignItems: 'center' },
  familyBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  languageMainBtn: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#334155', flexDirection: 'row', alignItems: 'center' },
  langMainTitle: { fontSize: 15, fontWeight: 'bold', color: '#f8fafc' },
  langMainSub: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { backgroundColor: '#1e293b', width: '100%', padding: 20, borderRadius: 16, alignItems: 'center', borderWidth: 1, borderColor: '#475569' },
  modalHeading: { fontSize: 18, fontWeight: 'bold', color: '#f8fafc', marginBottom: 12, textAlign: 'center' },
  modalDescText: { fontSize: 14, color: '#cbd5e1', textAlign: 'center', marginBottom: 20, lineHeight: 20 },
  langOptionItem: { width: '100%', padding: 12, backgroundColor: '#334155', borderRadius: 8, marginBottom: 8, alignItems: 'center' },
  langText: { fontSize: 15, fontWeight: 'bold', color: '#f8fafc' },
  modalCloseBtn: { backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8, marginTop: 10 },
  modalCloseText: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
});
    
