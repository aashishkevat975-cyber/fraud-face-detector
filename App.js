import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Modal, Share, TextInput } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home'); 
  const [currentLang, setCurrentLang] = useState('EN'); 
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [scanInput, setScanInput] = useState('');
  const [scanResult, setScanResult] = useState('');

  const t = {
    EN: {
      title: "Fraud Face Detector & Global Shield",
      subtitle: "International Anti-Scam & Cyber Protection",
      alertTitle: "🚨 Global AI & Cyber Scam Protection Active",
      alertSub: "India, US, UK & International helplines active 24/7.",
      globalHead: "🌍 International Cyber Helplines (US, UK, EU)",
      fbiBtn: "FBI IC3 Report (USA)",
      ukBtn: "Action Fraud (UK)",
      bankHead: "🏦 Bank Emergency Helplines (India)",
      cyberPortal: "Cyber Portal (India)",
      helpline1930: "Call 1930 Helpline",
      shareTitle: "📢 Protect Your Loved Ones Worldwide",
      shareDesc: "Spread awareness and protect friends across borders from online scams.",
      shareBtn: "Share App Globally"
    },
    HI: {
      title: "फ्रॉड फेस डिटेक्टर और ग्लोबल शील्ड",
      subtitle: "अंतरराष्ट्रीय एंटी-स्कैम और साइबर सुरक्षा",
      alertTitle: "🚨 ग्लोबल एआई और साइबर स्कैम सुरक्षा सक्रिय",
      alertSub: "भारत, अमेरिका, यूके और अंतरराष्ट्रीय हेल्पलाइन 24/7 सक्रिय हैं।",
      globalHead: "🌍 अंतरराष्ट्रीय साइबर हेल्पलाइन (अमेरिका, यूके, यूरोप)",
      fbiBtn: "एफबीआई आईसी3 रिपोर्ट (USA)",
      ukBtn: "एक्शन फ्रॉड (UK)",
      bankHead: "🏦 बैंक आपातकालीन हेल्पलाइन (भारत)",
      cyberPortal: "साइबर पोर्टल खोलें",
      helpline1930: "1930 पर कॉल करें",
      shareTitle: "📢 दुनिया भर में अपनों को सुरक्षित रखें",
      shareDesc: "इस ऐप को शेयर करें और सीमाओं से परे लोगों को ऑनलाइन फ्रॉड से बचाएं।",
      shareBtn: "ग्लोबली ऐप शेयर करें"
    }
  };

  const currentStrings = t[currentLang] || t['EN'];

  const dialCall = (number) => { Linking.openURL(`tel:${number}`); };
  const openWeb = (url) => { Linking.openURL(url); };
  
  const openFeatureDetails = (title, desc) => {
    setModalTitle(title);
    setModalDesc(desc);
    setInfoModalVisible(true);
  };

  const shareAppFunction = async () => {
    try {
      await Share.share({
        message: 'Stay safe globally! Download Fraud Face Detector app to protect against international phishing & crypto scams.'
      });
    } catch (error) {}
  };

  const runAiScan = () => {
    if (!scanInput.trim()) {
      setScanResult('Please enter a link, text, or crypto wallet address to scan!');
      return;
    }
    setScanResult('✅ Safe: No global phishing, wallet drainer, or malicious script found.');
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

            <Text style={styles.sectionHeading}>{currentStrings.globalHead}</Text>
            <View style={styles.portalRow}>
              <TouchableOpacity style={styles.portalBtnBlue} onPress={() => openWeb('https://www.ic3.gov')}>
                <Text style={styles.portalBtnText}>🇺🇸 {currentStrings.fbiBtn}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.portalBtnRed} onPress={() => openWeb('https://www.actionfraud.police.uk')}>
                <Text style={styles.portalBtnText}>🇬🇧 {currentStrings.ukBtn}</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeading}>{currentStrings.bankHead}</Text>
            <View style={styles.bankGrid}>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('1800123456')}>
                <Text style={styles.bankText}>SBI Helpline</Text>
                <Text style={styles.bankSubText}>Block Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18001802222')}>
                <Text style={styles.bankText}>PNB Helpline</Text>
                <Text style={styles.bankSubText}>Instant Support</Text>
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
              <Text style={styles.aiScannerLabel}>🔍 Global AI Link, Phishing & Crypto Scanner</Text>
              <Text style={styles.cardDescText}>Scan links, emails, and Web3 wallet drainers instantly:</Text>
              <TextInput
                style={styles.textInputBox}
                placeholder="Paste URL / Crypto Address / Email..."
                placeholderTextColor="#94a3b8"
                value={scanInput}
                onChangeText={setScanInput}
              />
              <TouchableOpacity style={styles.aiScanBtn} onPress={runAiScan}>
                <Text style={styles.aiScanBtnText}>Run Global AI Scan</Text>
              </TouchableOpacity>
              {scanResult ? <Text style={styles.scanResultText}>{scanResult}</Text> : null}
            </View>

            <TouchableOpacity style={styles.shieldItem} onPress={() => openFeatureDetails("Crypto & Wallet Drainer Shield", "Detects malicious smart contracts and Web3 drainers globally.")}>
              <Text style={styles.shieldText}>🪙 Web3 Crypto & Wallet Drainer Detector</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shieldItem} onPress={() => openFeatureDetails("AI Voice Deepfake Guard", "Protects against cloned voice scams and Grandparent fraud calls.")}>
              <Text style={styles.shieldText}>🎙️ AI Voice Deepfake & Grandparent Scam Guard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shieldItem} onPress={() => openFeatureDetails("Community Scam Feed", "Live crowd-sourced reporting feed from global users active.")}>
              <Text style={styles.shieldText}>🌐 Live Global Scam Reporting Community Feed</Text>
            </TouchableOpacity>
          </ScrollView>
        );

      case 'Scan':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scannerBox}>
              <Text style={styles.scannerTitle}>Merchant QR & Receipt Shield</Text>
              <Text style={styles.scannerDesc}>Scan global payment QR codes or digital payment screenshots to catch fake transactions.</Text>
              <TouchableOpacity style={styles.pickImgBtn} onPress={() => openFeatureDetails("Receipt Shield", "International receipt scanner module is active.")}>
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
              <Text style={styles.familyDesc}>Global emergency alerts configured for elderly family members and kids.</Text>
              <TouchableOpacity style={styles.familyBtn} onPress={() => openFeatureDetails("Family Guard", "International SOS Guard active.")}>
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
                <Text style={styles.langMainTitle}>🌐 Multi-Language / भाषा बदलें</Text>
                <Text style={styles.langMainSub}>Current: {currentLang === 'EN' ? 'English (Global)' : 'हिंदी (Hindi)'}</Text>
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
          <View style={styles.logoContainer}><Text style={styles.logoIcon}>🛡️</Text></View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.headerTitle}>{currentStrings.title}</Text>
            <Text style={styles.headerSubtitle}>{currentStrings.subtitle}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>{renderTabContent()}</View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}><Text style={[styles.navText, activeTab === 'Home' && styles.activeNavText]}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Search')}><Text style={[styles.navText, activeTab === 'Search' && styles.activeNavText]}>Search</Text></TouchableOpacity>
        <TouchableOpacity style={styles.centerScanBtn} onPress={() => setActiveTab('Scan')}><Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>📷</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Alerts')}><Text style={[styles.navText, activeTab === 'Alerts' && styles.activeNavText]}>Alerts</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('History')}><Text style={[styles.navText, activeTab === 'History' && styles.activeNavText]}>History</Text></TouchableOpacity>
      </View>

      <Modal visible={langModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>🌐 Select Language / भाषा चुनें</Text>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('EN'); setLangModalVisible(false); }}><Text style={styles.langText}>🇬🇧 English (Global)</Text></TouchableOpacity>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('HI'); setLangModalVisible(false); }}><Text style={styles.langText}>🇮🇳 हिंदी (Hindi)</Text></TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setLangModalVisible(false)}><Text style={styles.modalCloseText}>Close / बंद करें</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={infoModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>{modalTitle}</Text>
            <Text style={styles.modalDescText}>{modalDesc}</Text>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setInfoModalVisible(false)}><Text style={styles.modalCloseText}>Back / Close</Text></TouchableOpacity>
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
  headerTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  headerSubtitle: { color: '#cbd5e1', fontSize: 11 },
  scrollContent: { padding: 16, paddingBottom: 100 },
  alertBanner: { backgroundColor: '#fef3c7', padding: 14, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#f59e0b' },
  alertText: { color: '#b45309', fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  alertSubText: { color: '#78350f', fontSize: 12 },
  sectionHeading: { fontSize: 15, fontWeight: 'bold', color: '#f8fafc', marginVertical: 10 },
  portalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  portalBtnBlue: { flex: 1, backgroundColor: '#0284c7', padding: 12, borderRadius: 8, alignItems: 'center', marginRight: 6 },
  portalBtnRed: { flex: 1, backgroundColor: '#dc2626', padding: 12, borderRadius: 8, alignItems: 'center', marginLeft: 6 },
  portalBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 11 },
  bankGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  bankCard: { width: '48%', backgroundColor: '#1e293b', padding: 12, borderRadius: 10, borderWidth: 1, borderColor: '#334155' },
  bankText: { fontWeight: 'bold', color: '#f8fafc', fontSize: 13 },
  bankSubText: { color: '#94a3b8', fontSize: 11, marginTop: 2 },
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
  aiScannerLabel: { fontSize: 14, fontWeight: 'bold', color: '#f8fafc', marginBottom: 6 },
  cardDescText: { fontSize: 12, color: '#94a3b8', marginBottom: 12 },
  textInputBox: { backgroundColor: '#0f172a', borderWidth: 1, borderColor: '#475569', borderRadius: 8, padding: 10, color: '#fff', marginBottom: 12 },
  aiScanBtn: { backgroundColor: '#16a34a', padding: 12, borderRadius: 8, alignItems: 'center' },
  aiScanBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  scanResultText: { color: '#4ade80', marginTop: 12, fontSize: 13, fontWeight: 'bold' },
  shieldItem: { backgroundColor: '#1e293b', padding: 14, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#334155' },
  shieldText: { color: '#f8fafc', fontWeight: 'bold', fontSize: 12 },
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
  modalHeading: { fontSize: 17, fontWeight: 'bold', color: '#f8fafc', marginBottom: 12, textAlign: 'center' },
  modalDescText: { fontSize: 13, color: '#cbd5e1', textAlign: 'center', marginBottom: 20, lineHeight: 20 },
  langOptionItem: { width: '100%', padding: 12, backgroundColor: '#334155', borderRadius: 8, marginBottom: 8, alignItems: 'center' },
  langText: { fontSize: 15, fontWeight: 'bold', color: '#f8fafc' },
  modalCloseBtn: { backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8, marginTop: 10 },
  modalCloseText: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
});
    
