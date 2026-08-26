import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Modal, Share } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home'); 
  const [currentLang, setCurrentLang] = useState('HI'); 
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const t = {
    HI: {
      title: "फ्रॉड फेस डिटेक्टर",
      subtitle: "एंटी-हैंक और वैश्विक सुरक्षा ऐप",
      alertTitle: "🚨 एंटी-हैंक और एसबीआई लोन फ्रॉड सुरक्षा सक्रिय",
      alertSub: "यह ऐप आपके फोन को हैकिंग, फर्जी लोन और ब्लैकमेलिंग से 24 घंटे बचा रहा है.",
      bonusTitle: "🎁 विशेष फ्री बोनस और रिवॉर्ड ऑफर",
      bonusDesc: "सीमित समय के लिए विशेष रिवॉर्ड क्लेम करें। नीचे दिए गए बटन पर क्लिक करके अपना बोनस प्राप्त करें।",
      bonusBtn: "🎁 अभी बोनस क्लेम करें (Claim Bonus)",
      loanTitle: "🏦 SBI इंस्टेंट लोन और बोनस फ्रॉड शील्ड",
      loanDesc: "\"एसबीआई से लोन और साथ में बोनस/कैशबैक\" के नाम पर होने वाली ठगी से सावधान! अगर कोई लोन पास कराने के नाम पर पैसे मांगे, तो यह ऐप तुरंत लाल चेतावनी (Red Alert) जारी कर देगा।",
      loanBtn: "लोन ऑफर और बोनस की जाँच करें",
      shareTitle: "📢 अपने सगे-संबंधियों को बचाएं (Share App)",
      shareDesc: "फ्रॉड से सिर्फ खुद नहीं, अपनों को भी बचाएं! इस ऐप को अपने परिवार और दोस्तों के साथ शेयर करें।",
      shareBtn: "अभी शेयर करें और अपनों को बचाएं",
      hackTitle: "🛡️ एंटी-हैंक और जासूसी सुरक्षा कवच",
      hackDesc: "लड़के हों या लड़कियां—कोई भी आपके फोन को हैक करके पर्सनल फोटो, वीडियो या जानकारी नहीं चुरा पाएगा।",
      hackBtn: "एंटी-हैंक शील्ड चालू है (स्कैन करें)",
      callTitle: "⚡ लाइव कॉल और फ्रॉड प्रेडिक्शन शील्ड",
      callDesc: "फोन पर कोई फर्जी कॉल या डिजिटल अरेस्ट का झांसा मिलने पर यह तुरंत बताता है कि आपके साथ फ्रॉड होने जा रहा है।",
      callBtn: "फ्रॉड प्रेडिक्शन सक्रिय है",
      bizTitle: "💼 ग्लोबल बिजनेस इनवॉइस और ईमेल वेरिफायर",
      bizDesc: "दुकानदारों और व्यापारियों के लिए किसी भी फर्जी बिल या ईमेल को स्कैन करके बताता है कि वह असली है या स्कैमर्स का धोखा।",
      bizBtn: "इनवॉइस या ईमेल स्कैन करें",
      bankHead: "🏦 बैंक आपातकालीन हेल्पलाइन (भारत)",
      cyberPortal: "साइबर पोर्टल",
      helpline1930: "1930 हेल्पलाइन"
    },
    EN: {
      title: "Fraud Face Detector",
      subtitle: "Anti-Hack & Global Security App",
      alertTitle: "🚨 Anti-Hack & SBI Loan Fraud Protection Active",
      alertSub: "This app protects your phone from hacking, fake loans, and blackmail 24/7.",
      bonusTitle: "🎁 Special Free Bonus & Reward Offer",
      bonusDesc: "Claim your special reward for a limited time. Click the button below to get your bonus.",
      bonusBtn: "🎁 Claim Bonus Now",
      loanTitle: "🏦 SBI Instant Loan & Bonus Fraud Shield",
      loanDesc: "Beware of scams in the name of SBI loans and cashback! If anyone asks for advance fees to approve a loan, this app triggers an immediate red alert.",
      loanBtn: "Check Loan Offer & Bonus",
      shareTitle: "📢 Protect Your Loved Ones (Share App)",
      shareDesc: "Don't just protect yourself, protect family and friends too! Share this app with your loved ones.",
      shareBtn: "Share Now & Protect Loved Ones",
      hackTitle: "🛡️ Anti-Hack & Spyware Protection Shield",
      hackDesc: "Prevent unauthorized access to your personal photos, videos, and private information.",
      hackBtn: "Anti-Hack Shield Active (Scan)",
      callTitle: "⚡ Live Call & Fraud Prediction Shield",
      callDesc: "Instantly alerts you when receiving fake calls or digital arrest intimidation scams.",
      callBtn: "Fraud Prediction Active",
      bizTitle: "💼 Global Business Invoice & Email Verifier",
      bizDesc: "Scans fake bills or emails to verify if they are authentic or scams for shopkeepers and traders.",
      bizBtn: "Scan Invoice or Email",
      bankHead: "🏦 Bank Emergency Helplines (India)",
      cyberPortal: "Cyber Portal",
      helpline1930: "1930 Helpline"
    }
  };

  const currentStrings = t[currentLang] || t['HI'];

  const dialCall = (number) => {
    Linking.openURL(`tel:${number}`);
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
          ? 'Stay safe! Download this Fraud Face Detector app to protect your loved ones from online scams, hacking, and fake loans.'
          : 'सजग रहें! इस Fraud Face Detector ऐप को डाउनलोड करें और अपने सगे-संबंधियों को हैकिंग, फर्जी लोन और ऑनलाइन फ्रॉड से बचाएं।'
      });
    } catch (error) {
      // Ignore share cancellation error
    }
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
              <TouchableOpacity style={styles.bonusCardBtn} onPress={() => Linking.openURL('https://bitli.in/PuQGzap')}>
                <Text style={styles.bonusCardBtnText}>{currentStrings.bonusBtn}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loanScamBox}>
              <Text style={styles.loanScamTitle}>{currentStrings.loanTitle}</Text>
              <Text style={styles.loanScamDesc}>{currentStrings.loanDesc}</Text>
              <TouchableOpacity style={styles.loanScamBtn} onPress={() => openFeatureDetails(currentStrings.loanTitle, currentStrings.loanDesc)}>
                <Text style={styles.loanScamBtnText}>{currentStrings.loanBtn}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.shareCardBox}>
              <Text style={styles.shareCardTitle}>{currentStrings.shareTitle}</Text>
              <Text style={styles.shareCardDesc}>{currentStrings.shareDesc}</Text>
              <TouchableOpacity style={styles.shareCardBtn} onPress={shareAppFunction}>
                <Text style={styles.shareCardBtnText}>{currentStrings.shareBtn}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.antiHackBox}>
              <Text style={styles.antiHackTitle}>{currentStrings.hackTitle}</Text>
              <Text style={styles.antiHackDesc}>{currentStrings.hackDesc}</Text>
              <TouchableOpacity style={styles.antiHackBtn} onPress={() => openFeatureDetails(currentStrings.hackTitle, currentStrings.hackDesc)}>
                <Text style={styles.antiHackBtnText}>{currentStrings.hackBtn}</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeading}>{currentStrings.bankHead}</Text>
            <View style={styles.bankGrid}>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('1800123456')}>
                <Text style={styles.bankText}>SBI हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>खाता ब्लॉक करने हेतु</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('1930')}>
                <Text style={styles.bankText}>साइबर हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>1930 कॉल करें</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Search':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.aiScannerContainer}>
              <Text style={styles.aiScannerLabel}>🔍 एआई लिंक और फिशिंग स्कैनर</Text>
              <Text style={styles.cardDescText}>संदिग्ध लिंक या वेबसाइट यहाँ जाँचें।</Text>
              <TouchableOpacity style={styles.aiScanBtn} onPress={() => openFeatureDetails("एआई स्कैनर", "स्कैनर पूरी तरह सक्रिय है।")}>
                <Text style={styles.aiScanBtnText}>स्कैन चलाएं</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Scan':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scannerBox}>
              <Text style={styles.scannerTitle}>मर्चेंट क्यूआर और रिसीट शील्ड</Text>
              <Text style={styles.scannerDesc}>पेमेंट स्क्रीनशॉट स्कैन करें।</Text>
              <TouchableOpacity style={styles.pickImgBtn} onPress={() => openFeatureDetails("रिसीट स्कैनर", "मॉड्यूल सक्रिय है।")}>
                <Text style={styles.pickImgText}>रिसीट स्कैन करें</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Alerts':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.familyBox}>
              <Text style={styles.familyTitle}>👨‍👩‍👧 फैमिली सुरक्षा (SOS)</Text>
              <Text style={styles.familyDesc}>बुजुर्गों और बच्चों की सुरक्षा कवच।</Text>
              <TouchableOpacity style={styles.familyBtn} onPress={() => openFeatureDetails("फैमिली गार्ड", "सक्रिय है।")}>
                <Text style={styles.familyBtnText}>सक्रिय करें</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'History':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <TouchableOpacity style={styles.languageMainBtn} onPress={() => setLangModalVisible(true)}>
              <View style={{flex: 1}}>
                <Text style={styles.langMainTitle}>भाषा बदलें (Change Language)</Text>
                <Text style={styles.langMainSub}>वर्तमान: {currentLang}</Text>
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
        <Text style={styles.headerTitle}>{currentStrings.title}</Text>
        <Text style={styles.headerSubtitle}>{currentStrings.subtitle}</Text>
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
            <Text style={styles.modalHeading}>🌐 भाषा चुनें</Text>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('HI'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇮🇳 हिंदी (Hindi)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('EN'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇬🇧 English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setLangModalVisible(false)}>
              <Text style={styles.modalCloseText}>बंद करें</Text>
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
              <Text style={styles.modalCloseText}>ठीक है</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { backgroundColor: '#1e1b4b', paddingTop: 45, paddingBottom: 15, paddingHorizontal: 20 },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  headerSubtitle: { color: '#cbd5e1', fontSize: 12 },
  scrollContent: { padding: 16, paddingBottom: 100 },
  alertBanner: { backgroundColor: '#fee2e2', padding: 14, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#f87171' },
  alertText: { color: '#991b1b', fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  alertSubText: { color: '#b91c1c', fontSize: 12 },
  bonusCardBox: { backgroundColor: '#fdf4ff', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#f0abfc' },
  bonusCardTitle: { fontSize: 15, fontWeight: 'bold', color: '#86198f', marginBottom: 8 },
  bonusCardDesc: { fontSize: 13, color: '#701a75', lineHeight: 18, marginBottom: 12 },
  bonusCardBtn: { backgroundColor: '#c026d3', padding: 12, borderRadius: 8, alignItems: 'center' },
  bonusCardBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  loanScamBox: { backgroundColor: '#fffbeb', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#fde047' },
  loanScamTitle: { fontSize: 15, fontWeight: 'bold', color: '#b45309', marginBottom: 8 },
  loanScamDesc: { fontSize: 13, color: '#78350f', lineHeight: 18, marginBottom: 12 },
  loanScamBtn: { backgroundColor: '#d97706', padding: 10, borderRadius: 8, alignItems: 'center' },
  loanScamBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  shareCardBox: { backgroundColor: '#eff6ff', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#bfdbfe' },
  shareCardTitle: { fontSize: 15, fontWeight: 'bold', color: '#1d4ed8', marginBottom: 8 },
  shareCardDesc: { fontSize: 13, color: '#1e3a8a', lineHeight: 18, marginBottom: 12 },
  shareCardBtn: { backgroundColor: '#2563eb', padding: 10, borderRadius: 8, alignItems: 'center' },
  shareCardBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  antiHackBox: { backgroundColor: '#fef2f2', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#fca5a5' },
  antiHackTitle: { fontSize: 15, fontWeight: 'bold', color: '#7f1d1d', marginBottom: 8 },
  antiHackDesc: { fontSize: 13, color: '#991b1b', lineHeight: 18, marginBottom: 12 },
  antiHackBtn: { backgroundColor: '#dc2626', padding: 10, borderRadius: 8, alignItems: 'center' },
  antiHackBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#1e293b', marginVertical: 12 },
  bankGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 16 },
  bankCard: { width: '48%', backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#e2e8f0' },
  bankText: { fontWeight: 'bold', color: '#0f172a', fontSize: 13 },
  bankSubText: { color: '#64748b', fontSize: 11, marginTop: 2 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#ffffff', height: 60, borderTopWidth: 1, borderTopColor: '#e2e8f0', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { fontSize: 12, color: '#64748b', fontWeight: '600' },
  activeNavText: { color: '#2563eb', fontWeight: 'bold' },
  centerScanBtn: { width: 50, height: 50, backgroundColor: '#2563eb', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  aiScannerContainer: { backgroundColor: '#f8fafc', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#cbd5e1' },
  aiScannerLabel: { fontSize: 15, fontWeight: 'bold', color: '#1e293b', marginBottom: 6 },
  cardDescText: { fontSize: 12, color: '#475569', marginBottom: 12 },
  aiScanBtn: { backgroundColor: '#0284c7', padding: 10, borderRadius: 8, alignItems: 'center' },
  aiScanBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  scannerBox: { backgroundColor: '#f0fdf4', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#bbf7d0' },
  scannerTitle: { fontSize: 16, fontWeight: 'bold', color: '#166534', marginBottom: 8 },
  scannerDesc: { fontSize: 13, color: '#14532d', lineHeight: 18, marginBottom: 14 },
  pickImgBtn: { backgroundColor: '#22c55e', padding: 12, borderRadius: 8, alignItems: 'center' },
  pickImgText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  familyBox: { backgroundColor: '#faf5ff', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#e9d5ff' },
  familyTitle: { fontSize: 15, fontWeight: 'bold', color: '#6b21a8', marginBottom: 8 },
  familyDesc: { fontSize: 13, color: '#581c87', lineHeight: 18, marginBottom: 12 },
  familyBtn: { backgroundColor: '#9333ea', padding: 10, borderRadius: 8, alignItems: 'center' },
  familyBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  languageMainBtn: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#cbd5e1', flexDirection: 'row', alignItems: 'center' },
  langMainTitle: { fontSize: 15, fontWeight: 'bold', color: '#1e293b' },
  langMainSub: { fontSize: 12, color: '#64748b', marginTop: 2 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { backgroundColor: '#fff', width: '100%', padding: 20, borderRadius: 16, alignItems: 'center' },
  modalHeading: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginBottom: 12, textAlign: 'center' },
  modalDescText: { fontSize: 14, color: '#475569', textAlign: 'center', marginBottom: 20, lineHeight: 20 },
  langOptionItem: { width: '100%', padding: 12, backgroundColor: '#f1f5f9', borderRadius: 8, marginBottom: 8, alignItems: 'center' },
  langText: { fontSize: 15, fontWeight: 'bold', color: '#334155' },
  modalCloseBtn: { backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8, marginTop: 10 },
  modalCloseText: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
});
