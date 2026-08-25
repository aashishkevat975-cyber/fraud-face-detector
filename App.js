import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Modal, Share } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home'); 
  const [currentLang, setCurrentLang] = useState('HI'); 
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  // Automatic 4-hour alert simulation reminder
  useEffect(() => {
    const timer = setInterval(() => {
      openFeatureDetails(
        "⏰ सुरक्षा रिमाइंडर (हर 4 घंटे)",
        "यह स्वचालित सुरक्षा संदेश है: सतर्क रहें! किसी भी अनजान लिंक, फर्जी लोन ऑफर या बोनस के झांसे में आकर पैसे न भेजें।"
      );
    }, 4 * 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, []);

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
        message: 'सजग रहें! इस 'Fraud Face Detector' ऐप को डाउनलोड करें और अपने सगे-संबंधियों को हैकिंग, फर्जी लोन और ऑनलाइन फ्रॉड से बचाएं।',
      });
    } catch (error) {
      alert("शेयर करने में त्रुटि आई।");
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.alertBanner}>
              <Text style={styles.alertText}>🚨 एंटी-हैंक और एसबीआई लोन फ्रॉड सुरक्षा सक्रिय</Text>
              <Text style={styles.alertSubText}>यह ऐप आपके फोन को हैकिंग, फर्जी लोन और ब्लैकमेलिंग से 24 घंटे बचा रहा है.</Text>
            </View>

            {/* SBI INSTANT LOAN & BONUS SCAM SHIELD */}
            <View style={styles.loanScamBox}>
              <Text style={styles.loanScamTitle}>🏦 SBI इंस्टेंट लोन और बोनस फ्रॉड शील्ड</Text>
              <Text style={styles.loanScamDesc}>
                "एसबीआई से लोन और साथ में बोनस/कैशबैक" के नाम पर होने वाली ठगी से सावधान! अगर कोई लोन पास कराने के नाम पर पैसे मांगे, तो यह ऐप तुरंत लाल चेतावनी (Red Alert) जारी कर देगा।
              </Text>
              <TouchableOpacity style={styles.loanScamBtn} onPress={() => openFeatureDetails("SBI इंस्टेंट लोन और बोनस शील्ड", "यह फीचर फर्जी लोन ऐप्स और उन मैसेज को पकड़ता है जो लोन या बोनस का लालच देकर एडवांस फीस मांगते हैं।")} >
                <Text style={styles.loanScamBtnText}>लोन ऑफर और बोनस की जाँच करें</Text>
              </TouchableOpacity>
            </View>

            {/* SHARE APP BUTTON CARD */}
            <View style={styles.shareCardBox}>
              <Text style={styles.shareCardTitle}>📢 अपने सगे-संबंधियों को बचाएं (Share App)</Text>
              <Text style={styles.shareCardDesc}>
                फ्रॉड से सिर्फ खुद नहीं, अपनों को भी बचाएं! इस ऐप को अपने परिवार और दोस्तों के साथ शेयर करें।
              </Text>
              <TouchableOpacity style={styles.shareCardBtn} onPress={shareAppFunction}>
                <Text style={styles.shareCardBtnText}>अभी शेयर करें और अपनों को बचाएं</Text>
              </TouchableOpacity>
            </View>

            {/* ANTI-HACK & SPYWARE SHIELD */}
            <View style={styles.antiHackBox}>
              <Text style={styles.antiHackTitle}>🛡️ एंटी-हैंक और जासूसी सुरक्षा कवच</Text>
              <Text style={styles.antiHackDesc}>
                लड़के हों या लड़कियां—कोई भी आपके फोन को हैक करके पर्सनल फोटो, वीडियो या जानकारी नहीं चुरा पाएगा।
              </Text>
              <TouchableOpacity style={styles.antiHackBtn} onPress={() => openFeatureDetails("एंटी-हैंक सुरक्षा कवच", "यह फीचर फोन में छिपे जासूसी ऐप्स और रिमोट हैकिंग को डिटेक्ट करता है।")}>
                <Text style={styles.antiHackBtnText}>एंटी-हैंक शील्ड चालू है (स्कैन करें)</Text>
              </TouchableOpacity>
            </View>

            {/* LIVE PROACTIVE FRAUD SHIELD */}
            <View style={styles.proactiveBox}>
              <Text style={styles.proactiveTitle}>⚡ लाइव कॉल और फ्रॉड प्रेडिक्शन शील्ड</Text>
              <Text style={styles.proactiveDesc}>
                फोन पर कोई फर्जी कॉल या डिजिटल अरेस्ट का झांसा मिलने पर यह तुरंत बताता है कि आपके साथ फ्रॉड होने जा रहा है।
              </Text>
              <TouchableOpacity style={styles.proactiveBtn} onPress={() => openFeatureDetails("लाइव फ्रॉड प्रेडिक्शन शील्ड", "यह बैकग्राउंड में कॉल और मैसेज की जाँच करता है।")}>
                <Text style={styles.proactiveBtnText}>फ्रॉड प्रेडिक्शन सक्रिय है</Text>
              </TouchableOpacity>
            </View>

            {/* MASTER BUSINESS FEATURE */}
            <View style={styles.masterFeatureBox}>
              <Text style={styles.masterTitle}>💼 ग्लोबल बिजनेस इनवॉइस और ईमेल वेरिफायर</Text>
              <Text style={styles.masterDesc}>
                दुकानदारों और व्यापारियों के लिए किसी भी फर्जी बिल या ईमेल को स्कैन करके बताता है कि वह असली है या स्कैमर्स का धोखा।
              </Text>
              <TouchableOpacity style={styles.masterBtn} onPress={() => openFeatureDetails("बिजनेस इनवॉइस और ईमेल वेरिफायर", "यह टूल व्यापारियों को फर्जी बिलों और फर्जी ईमेल ठगी से बचाता है।")}>
                <Text style={styles.masterBtnText}>इनवॉइस या ईमेल स्कैन करें</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeading}>🏦 बैंक आपातकालीन हेल्पलाइन (भारत)</Text>
            <View style={styles.bankGrid}>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('1800123456')}>
                <Text style={styles.bankText}>SBI हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>खाता ब्लॉक करने हेतु</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18001802222')}>
                <Text style={styles.bankText}>PNB हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>तुरंत सहायता</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18002586161')}>
                <Text style={styles.bankText}>HDFC हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>फ्रॉड रिपोर्टिंग</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankCard} onPress={() => dialCall('18002584455')}>
                <Text style={styles.bankText}>BOB हेल्पलाइन</Text>
                <Text style={styles.bankSubText}>आपातकालीन कॉल</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.quickActionRow}>
              <TouchableOpacity style={styles.cyberPortalBtn} onPress={() => openFeatureDetails("साइबर पोर्टल", "भारत सरकार का आधिकारिक साइबर क्राइम पोर्टल।")}>
                <Text style={styles.quickActionText}>साइबर पोर्टल</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.helplineBtn} onPress={() => dialCall('1930')}>
                <Text style={styles.quickActionText}>1930 हेल्पलाइन</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Search':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.aiScannerContainer}>
              <Text style={styles.aiScannerLabel}>🔍 एआई लिंक, फिशिंग और ईमेल स्कैनर</Text>
              <Text style={styles.cardDescText}>संदिग्ध लिंक, खतरनाक वेबसाइट या फर्जी मैसेज यहाँ पेस्ट करके चेक करें।</Text>
              <View style={styles.aiInputBox}>
                <Text style={styles.aiPlaceholder}>संदिग्ध लिंक या मैसेज यहाँ पेस्ट करें...</Text>
              </View>
              <TouchableOpacity style={styles.aiScanBtn} onPress={() => openFeatureDetails("एआई लिंक स्कैनर", "खतरनाक लिंक या फिशिंग वेबसाइट को पहचानकर सुरक्षित रखता है।")}>
                <Text style={styles.aiScanBtnText}>ग्लोबल एआई स्कैन चलाएं</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeading}>🛡️ ग्लोबल मार्केट और शॉपिंग सुरक्षा</Text>
            
            <TouchableOpacity style={styles.fullCard} onPress={() => openFeatureDetails("क्रिप्टो और वॉलेट स्कैम चेकर", "क्रिप्टो करेंसी फ्रॉड और फर्जी वॉलेट एड्रेस की जाँच करता है।")}>
              <View style={{flex: 1}}>
                <Text style={styles.fullCardTitle}>क्रिप्टो और वॉलेट एड्रेस चेकर</Text>
                <Text style={styles.cardDescText}>ऑनलाइन होने वाले क्रिप्टो फ्रॉड से बचाता है।</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fullCard} onPress={() => openFeatureDetails("ऑनलाइन शॉपिंग गार्ड", "फेक ई-कॉमर्स साइटों पर सस्ते सामान के नाम पर होने वाली ठगी से बचाता है।")}>
              <View style={{flex: 1}}>
                <Text style={styles.fullCardTitle}>ऑनलाइन ई-कॉमर्स और शॉपिंग गार्ड</Text>
                <Text style={styles.cardDescText}>फेक शॉपिंग वेबसाइट्स की पहचान करता है।</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fullCard} onPress={() => openFeatureDetails("पार्ट-टाइम जॉब स्कैम शील्ड", "युवाओं और स्टूडेंट्स को फर्जी टेलीग्राम/व्हाट्सएप जॉब स्कैम से बचाता है।")}>
              <View style={{flex: 1}}>
                <Text style={styles.fullCardTitle}>पार्ट-टाइम जॉब और टेलीग्राम स्कैम शील्ड</Text>
                <Text style={styles.cardDescText}>फर्जी नौकरी के झांसे से बचाता है।</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );

      case 'Scan':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scannerBox}>
              <Text style={styles.scannerTitle}>मर्चेंट क्यूआर और डिजिटल रिसीट शील्ड</Text>
              <Text style={styles.scannerDesc}>
                दुकानदारों के लिए स्टोर का पेमेंट क्यूआर, Google Pay या डिजिटल रिसीट स्कैन करके बताता है कि पेमेंट असली है या नकली।
              </Text>
              <TouchableOpacity style={styles.pickImgBtn} onPress={() => openFeatureDetails("मर्चेंट क्यूआर और रिसीट स्कैनर", "गैलरी से पेमेंट स्क्रीनशॉट स्कैन करके एक सेकंड में बताता है कि पेमेंट फेक है या असली।")}>
                <Text style={styles.pickImgText}>गैलरी से पेमेंट / रिसीट स्कैन करें</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Alerts':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.familyBox}>
              <Text style={styles.familyTitle}>👨‍👩‍👧 परिवार के बुजुर्गों और बच्चों की सुरक्षा (SOS)</Text>
              <Text style={styles.familyDesc}>
                बुजुर्गों को AI वॉयस डीपफेक कॉल और बच्चों को ऑनलाइन गेमिंग या साइबर बुलिंग से बचाने वाला सुरक्षा कवच।
              </Text>
              <TouchableOpacity style={styles.familyBtn} onPress={() => openFeatureDetails("फैमिली और किड्स SOS शील्ड", "बुजुर्गों और बच्चों को डिजिटल फ्रॉड और फेक कॉल्स से बचाता है।")}>
                <Text style={styles.familyBtnText}>फैमिली गार्ड सक्रिय करें</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.fullCard} onPress={() => openFeatureDetails("डिजिटल अरेस्ट चेतावनी", "पुलिस या सीबीआई अधिकारी बनकर वीडियो कॉल पर डराने वाले स्कैमर्स की पहचान करता है।")}>
              <View style={{flex: 1}}>
                <Text style={styles.fullCardTitle}>डिजिटल अरेस्ट और एआई वॉयस डीपफेक चेतावनी</Text>
                <Text style={styles.cardDescText}>फर्जी पुलिस कॉल और वीडियो स्कैम से बचाता है।</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );

      case 'History':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sectionHeading}>⚙️ सेटिंग्स और भाषा विकल्प (Languages)</Text>
            
            <TouchableOpacity style={styles.languageMainBtn} onPress={() => setLangModalVisible(true)}>
              <View style={{flex: 1}}>
                <Text style={styles.langMainTitle}>भाषा बदलें (Change Language)</Text>
                <Text style={styles.langMainSub}>वर्तमान भाषा: {currentLang === 'HI' ? 'हिंदी (Hindi)' : currentLang}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => openFeatureDetails("लाइसेंस स्थिति", "आपके ऐप की प्रीमियम सुरक्षा और एक्टिवेशन स्टेटस की जाँच करता है।")}>
              <View style={{flex: 1}}>
                <Text style={styles.settingTitle}>लाइसेंस और एक्टिवेशन स्टेटस</Text>
                <Text style={styles.cardDescText}>प्रीमियम सुरक्षा कवच सक्रिय है।</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => openFeatureDetails("स्कैन इतिहास", "आपके द्वारा पहले किए गए सभी लिंक्स और दस्तावेजों के स्कैन का रिकॉर्ड।")}>
              <View style={{flex: 1}}>
                <Text style={styles.settingTitle}>स्कैन इतिहास और लॉग्स देखें</Text>
                <Text style={styles.cardDescText}>पिछले सभी स्कैम चेक का रिकॉर्ड।</Text>
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
        <Text style={styles.headerTitle}>Fraud Face Detector</Text>
        <Text style={styles.headerSubtitle}>एंटी-हैंक और वैश्विक सुरक्षा ऐप</Text>
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

      {/* LANGUAGE MODAL */}
      <Modal visible={langModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>🌐 भाषा चुनें (Select Language)</Text>
            
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('HI'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇮🇳 हिंदी (Hindi)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('EN'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇬🇧 English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.langOptionItem} onPress={() => { setCurrentLang('ES'); setLangModalVisible(false); }}>
              <Text style={styles.langText}>🇪🇸 Español (Spanish)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setLangModalVisible(false)}>
              <Text style={styles.modalCloseText}>बंद करें (Close)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* INFO DETAILS MODAL */}
      <Modal visible={infoModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>{modalTitle}</Text>
            <Text style={styles.modalDescText}>{modalDesc}</Text>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setInfoModalVisible(false)}>
              <Text style={styles.modalCloseText}>ठीक है (OK)</Text>
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
  proactiveBox: { backgroundColor: '#fff1f2', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#fecdd3' },
  proactiveTitle: { fontSize: 15, fontWeight: 'bold', color: '#be123c', marginBottom: 8 },
  proactiveDesc: { fontSize: 13, color: '#881337', lineHeight: 18, marginBottom: 12 },
  proactiveBtn: { backgroundColor: '#e11d48', padding: 10, borderRadius: 8, alignItems: 'center' },
  proactiveBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  masterFeatureBox: { backgroundColor: '#f0f9ff', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#bae6fd' },
  masterTitle: { fontSize: 15, fontWeight: 'bold', color: '#0369a1', marginBottom: 8 },
  masterDesc: { fontSize: 13, color: '#03588c', lineHeight: 18, marginBottom: 12 },
  masterBtn: { backgroundColor: '#0284c7', padding: 10, borderRadius: 8, alignItems: 'center' },
  masterBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#1e293b', marginVertical: 12 },
  bankGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyCon
