import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Modal } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home'); // Home, Search, Scan, Alerts, History
  const [language, setLanguage] = useState('HI');
  const [modalMessage, setModalMessage] = useState('');
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  const dialCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleFeatureClick = (title) => {
    setModalMessage(`Global Security Active: ${title}. Protecting against domestic & international frauds.`);
    setInfoModalVisible(true);
  };

  // Render content based on Bottom Navigation Tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.alertBanner}>
              <Text style={styles.alertText}>🚨 Global AI & Cyber Scam Protection</Text>
              <Text style={styles.alertSubText}>India & International Helplines Active.</Text>
            </View>

            <Text style={styles.sectionHeading}>🏦 Bank Emergency Helplines (India)</Text>
            <View style={styles.bankGrid}>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('1800123456')}>
                <Text style={styles.bankText}>SBI Helpline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18001802222')}>
                <Text style={styles.bankText}>PNB Helpline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18002586161')}>
                <Text style={styles.bankText}>HDFC Helpline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18002584455')}>
                <Text style={styles.bankText}>BOB Helpline</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.quickActionRow}>
              <TouchableOpacity style={styles.cyberPortalBtn} onPress={() => handleFeatureClick("Cyber Portal India")}>
                <Ionicons name="globe-outline" size={18} color="#fff" />
                <Text style={styles.quickActionText}>Cyber Portal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.helplineBtn} onPress={() => dialCall('1930')}>
                <Ionicons name="call" size={18} color="#fff" />
                <Text style={styles.quickActionText}>1930 Helpline</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Search':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.aiScannerContainer}>
              <Text style={styles.aiScannerLabel}>🔍 Global AI Link, Phishing & Email Scanner</Text>
              <View style={styles.aiInputBox}>
                <Text style={styles.aiPlaceholder}>Paste PayPal, Amazon, or suspicious link here...</Text>
              </View>
              <TouchableOpacity style={styles.aiScanBtn} onPress={() => handleFeatureClick("Global Phishing & Link Scan")}>
                <Text style={styles.aiScanBtnText}>Run Global AI Scan</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeading}>🛡️ Global Market Shields</Text>
            <TouchableOpacity style={styles.fullCard} onPress={() => handleFeatureClick("Crypto & Wallet Checker")}>
              <FontAwesome5 name="bitcoin" size={20} color="#9333ea" />
              <Text style={styles.fullCardText}>Crypto & Wallet Address Scam Checker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fullCard} onPress={() => handleFeatureClick("Online Shopping Guard")}>
              <FontAwesome5 name="shopping-cart" size={20} color="#16a34a" />
              <Text style={styles.fullCardText}>Global E-commerce & Shopping Guard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fullCard} onPress={() => handleFeatureClick("Job & Telegram Scam Shield")}>
              <MaterialIcons name="work" size={20} color="#2563eb" />
              <Text style={styles.fullCardText}>Part-Time Job & Telegram Scam Shield</Text>
            </TouchableOpacity>
          </ScrollView>
        );

      case 'Scan':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scannerBox}>
              <View style={styles.scannerHeaderRow}>
                <MaterialIcons name="qr-code-scanner" size={24} color="#b45309" />
                <Text style={styles.scannerTitle}>Merchant QR & Apple/Google Pay Shield</Text>
              </View>
              <Text style={styles.scannerDesc}>Scan store payment QR, Apple Pay, Google Pay screenshots or digital receipts instantly to catch fake payments.</Text>
              <TouchableOpacity style={styles.pickImgBtn} onPress={() => handleFeatureClick("Merchant QR & Receipt Scanner")}>
                <MaterialIcons name="photo-library" size={20} color="#fff" />
                <Text style={styles.pickImgText}>Scan Payment / Receipt from Gallery</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Alerts':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.familyBox}>
              <View style={styles.scannerHeaderRow}>
                <Ionicons name="people" size={22} color="#1d4ed8" />
                <Text style={styles.familyTitle}>👨‍👩‍👧 Family Elder & Kids SOS Shield</Text>
              </View>
              <Text style={styles.familyDesc}>Protect grandparents from deepfake voice calls (Grandparent Scam) & kids from gaming frauds.</Text>
              <TouchableOpacity style={styles.familyBtn} onPress={() => handleFeatureClick("Family Protection Mode")}>
                <Text style={styles.familyBtnText}>Activate Family Guard</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.fullCard} onPress={() => handleFeatureClick("Digital Arrest & Voice Deepfake Warning")}>
              <MaterialIcons name="security" size={22} color="#dc2626" />
              <Text style={styles.fullCardText}>Digital Arrest & AI Voice Deepfake Alert</Text>
            </TouchableOpacity>
          </ScrollView>
        );

      case 'History':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sectionHeading}>⚙️ Settings & Global Languages</Text>
            
            <View style={styles.langRow}>
              <TouchableOpacity style={[styles.langBtn, language === 'HI' && styles.activeLang]} onPress={() => setLanguage('HI')}>
                <Text style={styles.langText}>🇮🇳 हिंदी</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.langBtn, language === 'EN' && styles.activeLang]} onPress={() => setLanguage('EN')}>
                <Text style={styles.langText}>🇬🇧 English</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.settingOption} onPress={() => handleFeatureClick("License Status: Premium Active")}>
              <Ionicons name="ribbon-outline" size={20} color="#eab308" />
              <Text style={styles.settingOptionText}>License & Activation Status</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => handleFeatureClick("Scan History Logs")}>
              <Ionicons name="time-outline" size={20} color="#38bdf8" />
              <Text style={styles.settingOptionText}>View Scan History & Logs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => handleFeatureClick("About App & Privacy Policy")}>
              <Ionicons name="information-circle-outline" size={20} color="#16a34a" />
              <Text style={styles.settingOptionText}>About Developer & Privacy Policy</Text>
            </TouchableOpacity>
          </ScrollView>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <View style={styles.appIconPlaceholder}>
            <Ionicons name="shield-checkmark" size={22} color="#fff" />
          </View>
          <View>
            <Text style={styles.headerTitle}>Fraud Face Detector</Text>
            <Text style={styles.headerSubtitle}>Active Section: {activeTab}</Text>
          </View>
        </View>
      </View>

      {/* Dynamic Tab Content */}
      <View style={{ flex: 1 }}>
        {renderTabContent()}
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
          <Ionicons name="home" size={22} color={activeTab === 'Home' ? '#9333ea' : '#94a3b8'} />
          <Text style={[styles.navText, activeTab === 'Home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Search')}>
          <Ionicons name="search" size={22} color={activeTab === 'Search' ? '#9333ea' : '#94a3b8'} />
          <Text style={[styles.navText, activeTab === 'Search' && styles.activeNavText]}>Search</Text>
        </TouchableOpacity>

        {/* Center Big Scan Button */}
        <TouchableOpacity style={styles.centerScanBtn} onPress={() => setActiveTab('Scan')}>
          <MaterialIcons name="qr-code-scanner" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Alerts')}>
          <Ionicons name="notifications" size={22} color={activeTab === 'Alerts' ? '#9333ea' : '#94a3b8'} />
          <Text style={[styles.navText, activeTab === 'Alerts' && styles.activeNavText]}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('History')}>
          <Ionicons name="time" size={22} color={activeTab === 'History' ? '#9333ea' : '#94a3b8'} />
          <Text style={[styles.navText, activeTab === 'History' && styles.activeNavText]}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Info Modal */}
      <Modal visible={infoModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.infoModalContent}>
            <Ionicons name="shield-checkmark" size={40} color="#2563eb" />
            <Text style={styles.infoTitle}>Global Protection Active</Text>
            <Text style={styles.infoDesc}>{modalMessage}</Text>
            <TouchableOpacity style={styles.closeBtnModal} onPress={() => setInfoModalVisible(false)}>
              <Text style={styles.closeBtnText}>OK / Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { backgroundColor: '#1e293b', paddingHorizontal: 16, paddingTop: 45, paddingBottom: 15, flexDirection: 'row', alignItems: 'center' },
  headerTitleRow: { flexDirection: 'row', alignItems: 'center' },
  appIconPlaceholder: { width: 36, height: 36, backgroundColor: '#2563eb', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  headerTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  headerSubtitle: { color: '#94a3b8', fontSize: 11 },
  scrollContent: { padding: 16, paddingBottom: 90 },
  alertBanner: { backgroundColor: '#fef3c7', padding: 12, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#f59e0b' },
  alertText: { color: '#b45309', fontWeight: 'bold', fontSize: 13 },
  alertSubText: { color: '#78350f', fontSize: 11, marginTop: 2 },
  sectionHeading: { color: '#f8fafc', fontSize: 15, fontWeight: 'bold', marginBottom: 10, marginTop: 5 },
  bankGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 15 },
  bankCard: { width: '48%', backgroundColor: '#1e293b', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: '#334155' },
  bankText: { color: '#60a5fa', fontWeight: 'bold', fontSize: 13 },
  quickActionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  cyberPortalBtn: { backgroundColor: '#0284c7', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 12, borderRadius: 8, marginRight: 8 },
  helplineBtn: { backgroundColor: '#dc2626', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 12, borderRadius: 8, marginLeft: 8 },
  quickActionText: { color: '#fff', fontWeight: 'bold', marginLeft: 6 },
  aiScannerContainer: { backgroundColor: '#1e293b', padding: 15, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#334155' },
  aiScannerLabel: { color: '#38bdf8', fontWeight: 'bold', fontSize: 13, marginBottom: 8 },
  aiInputBox: { backgroundColor: '#0f172a', padding: 12, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#475569' },
  aiPlaceholder: { color: '#64748b', fontSize: 12 },
  aiScanBtn: { backgroundColor: '#16a34a', padding: 12, borderRadius: 8, alignItems: 'center' },
  aiScanBtnText: { color: '#fff', fontWeight: 'bold' },
  scannerBox: { backgroundColor: '#fffbeb', padding: 15, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#fde68a' },
  scannerHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  scannerTitle: { fontWeight: 'bold', color: '#92400e', fontSize: 15, marginLeft: 8 },
  scannerDesc: { color: '#78350f', fontSize: 12, marginBottom: 12 },
  pickImgBtn: { backgroundColor: '#d97706', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8 },
  pickImgText: { color: '#fff', fontWeight: 'bold', marginLeft: 8 },
  familyBox: { backgroundColor: '#eff6ff', padding: 15, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#bfdbfe' },
  familyTitle: { fontWeight: 'bold', color: '#1e40af', fontSize: 14, marginLeft: 8 },
  familyDesc: { color: '#1e3a8a', fontSize: 12, marginBottom: 10 },
  familyBtn: { backgroundColor: '#1d4ed8', paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  familyBtnText: { color: '#fff', fontWeight: 'bold' },
  fullCard: { backgroundColor: '#1e293b', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#334155' },
  fullCardText: { color: '#e2e8f0', fontSize: 13, fontWeight: 'bold', marginLeft: 10 },
  langRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  langBtn: { flex: 1, backgroundColor: '#1e293b', padding: 10, borderRadius: 8, alignItems: 'center', marginHorizontal: 4, borderWidth: 1, borderColor: '#334155' },
  activeLang: { borderColor: '#9333ea', backgroundColor: '#3b0764' },
  langText: { color: '#fff', fontWeight: 'bold' },
  settingOption: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e293b', padding: 15, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#334155' },
  settingOptionText: { color: '#e2e8f0', marginLeft: 12, fontWeight: 'bold', fontSize: 13 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 65, backgroundColor: '#1e293b', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#334155', paddingHorizontal: 10 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { color: '#94a3b8', fontSize: 10, marginTop: 2 },
  activeNavText: { color: '#9333ea', fontWeight: 'bold' },
  centerScanBtn: { width: 55, height: 55, backgroundColor: '#9333ea', borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth: 3, borderColor: '#0f172a' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  infoModalContent: { width: '80%', backgroundColor: '#1e293b', padding: 25, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#475569' },
  infoTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' },
  infoDesc: { color: '#94a3b8', fontSize: 13, textAlign: 'center', marginBottom: 15 },
  closeBtnModal: { backgroundColor: '#dc2626', padding: 10, borderRadius: 8, alignItems: 'center', width: '100%' },
  closeBtnText: { color: '#fff', fontWeight: 'bold' }
});
    
