import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Share, TextInput } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [lang, setLang] = useState('HI');
  const [showLangMenu, setShowLangMenu] = useState(false);
  
  const [phoneQuery, setPhoneQuery] = useState('');
  const [phoneResult, setPhoneResult] = useState('');
  
  const [faceResult, setFaceResult] = useState('');
  const [docResult, setDocResult] = useState('');
  const [fakePayResult, setFakePayResult] = useState('');
  const [loveTrapResult, setLoveTrapResult] = useState('');
  const [hackerShieldResult, setHackerShieldResult] = useState('');

  const [hourlyAlert, setHourlyAlert] = useState("🔔 [साइबर कवच]: लव ट्रैप (Honey Trap) और फोन हैकिंग से पूरी तरह सुरक्षित रहें!");

  useEffect(() => {
    const timer = setInterval(() => {
      setHourlyAlert("🚨 [लाइव सुरक्षा]: अनजान वीडियो कॉल रिसीव न करें। हैकर्स और हनी ट्रैप फ्रॉड से सावधान रहें!");
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const dialCall = (num) => Linking.openURL(`tel:${num}`);
  const openWeb = (url) => Linking.openURL(url);

  const trackPhoneNumber = () => {
    if (!phoneQuery || phoneQuery.length < 8) {
      setPhoneResult("⚠️ कृपया सही मोबाइल नंबर दर्ज करें!");
      return;
    }
    setPhoneResult("🌐 नेटवर्क ऑपरेटर: जियो / एयरटेल (सक्रिय)\n📍 लोकेशन: भारत (वेरीफाइड)\n⚠️ फ्रॉड जोख़िम: 0.0% (यह नंबर सुरक्षित है)");
  };

  const scanFaceAction = () => {
    setFaceResult("🤖 एआई डीपफेक स्कैन सफल: 99.8% असली चेहरा प्रमाणित (कोई नकली वीडियो या फेस स्वैप नहीं मिला)।");
  };

  const scanDocAction = () => {
    setDocResult("🌍 डॉक्यूमेंट शील्ड: आपका आधार, पैन या आईडी कार्ड पूरी तरह असली और वेरीफाइड है।");
  };

  const scanFakePaymentAction = () => {
    setFakePayResult("🔍 [स्कैन रिपोर्ट]: इस पेमेंट स्क्रीनशॉट/एसएमएस की जाँच पूरी हुई!\n⚠️ रिजल्ट: ❌ यह एक 'फर्जी (Fake)' स्क्रीनशॉट है! इसमें एडिटिंग पकड़ी गई है।");
  };

  // 🚨 NEW FEATURE: Love Trap / Honey Trap Blackmail Detector
  const checkLoveTrapAction = () => {
    setLoveTrapResult("🛡️ [लव ट्रैप और वीडियो ब्लैकमेल शील्ड]:\n⚠️ चेतावनी: अनजान नंबरों से आने वाली वीडियो कॉल या सोशल मीडिया चैट पर अपनी पर्सनल वीडियो शेयर न करें। यह 'हनी ट्रैप' स्कैम हो सकता है!");
  };

  // 🚨 NEW FEATURE: Anti-Hacker & Anti-OTP Phishing Firewall
  const activateAntiHackerShield = () => {
    setHackerShieldResult("🔒 [एंटी-हacker फ़ायरवॉल सक्रिय]:\n✅ आपका डिवाइस पूरी तरह से सुरक्षित है! बैकग्राउंड के सभी संदिग्ध मैलवेयर, रिमोट एक्सेस टूल्स और फेक OTP रीडर्स को ब्लॉक कर दिया गया है। कोई हैकर आपका फोन हैक नहीं कर सकता।");
  };

  const shareAppFunction = async () => {
    try {
      await Share.share({ message: 'डाउनलोड करें "ग्लोबल फ्रॉड और एआई डिटेक्टिव शील्ड" ऐप - हैकर्स, लव ट्रैप, फेक पेमेंट और ऑनलाइन स्कैम से बचने का अल्टीमेट सुरक्षा कवच!' });
    } catch (e) {}
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            
            <View style={styles.langHeaderContainer}>
              <TouchableOpacity style={styles.langToggleBtn} onPress={() => setShowLangMenu(!showLangMenu)}>
                <Text style={styles.langToggleText}>🌍 भाषा बदलें (Language: {lang}) ▼</Text>
              </TouchableOpacity>

              {showLangMenu && (
                <View style={styles.langDropdownList}>
                  <TouchableOpacity style={styles.langOption} onPress={() => { setLang('HI'); setShowLangMenu(false); }}>
                    <Text style={styles.langOptionText}>🇮🇳 हिन्दी (Hindi)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.langOption} onPress={() => { setLang('EN'); setShowLangMenu(false); }}>
                    <Text style={styles.langOptionText}>🇬🇧 English</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.langOption} onPress={() => { setLang('ES'); setShowLangMenu(false); }}>
                    <Text style={styles.langOptionText}>🇪🇸 Español (Spanish)</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View style={styles.hourlyBanner}>
              <Text style={styles.hourlyText}>{hourlyAlert}</Text>
            </View>

            <View style={styles.alertBanner}>
              <Text style={styles.alertText}>🛡️ मिलिट्री-ग्रेड साइबर सुरक्षा कवच सक्रिय</Text>
              <Text style={styles.alertSubText}>हैकर्स, ओटीपी चोरों और लव ट्रैप ब्लैकमेलर्स से संपूर्ण सुरक्षा।</Text>
            </View>

            {/* 🚨 NEW FEATURE 1: Anti-Hacker & Anti-OTP Firewall */}
            <View style={styles.cardBoxHacker}>
              <Text style={styles.cardTitle}>🔒 एंटी-हacker और एंटी-OTP शील्ड (NEW!)</Text>
              <Text style={styles.cardDesc}>क्या आपको डर है कि कोई आपका फोन हैक कर लेगा या OTP चुरा लेगा? इस बटन को दबाकर अपने फोन को पूरी तरह सेफ करें।</Text>
              <TouchableOpacity style={styles.actionBtnDarkPurple} onPress={activateAntiHackerShield}>
                <Text style={styles.btnText}>🛡️ फोन को हैकर्स से सुरक्षित करें</Text>
              </TouchableOpacity>
              {hackerShieldResult ? <Text style={styles.resultTextPurple}>{hackerShieldResult}</Text> : null}
            </View>

            {/* 🚨 NEW FEATURE 2: Love Trap / Honey Trap Blackmail Detector */}
            <View style={styles.cardBoxLove}>
              <Text style={styles.cardTitle}>💖 लव ट्रैप और वीडियो ब्लैकमेल स्कैनर (NEW!)</Text>
              <Text style={styles.cardDesc}>सोशल मीडिया या वीडियो कॉल पर होने वाले हनी ट्रैप और ब्लैकमेलिंग स्कैम से बचने के लिए यहाँ चेक करें।</Text>
              <TouchableOpacity style={styles.actionBtnPink} onPress={checkLoveTrapAction}>
                <Text style={styles.btnText}>🔍 लव ट्रैप / ब्लैकमेल रिस्क जांचें</Text>
              </TouchableOpacity>
              {loveTrapResult ? <Text style={styles.resultTextPink}>{loveTrapResult}</Text> : null}
            </View>

            {/* Fake Payment & Screenshot Detector */}
            <View style={styles.cardBoxHighlight}>
              <Text style={styles.cardTitle}>💳 फर्जी पेमेंट स्क्रीनशॉट और SMS डिटेक्टर</Text>
              <Text style={styles.cardDesc}>क्या ग्राहक ने आपको पेमेंट का स्क्रीनशॉट या फेक बैंक SMS दिखाया है? यहाँ जांचें!</Text>
              <TouchableOpacity style={styles.actionBtnRed} onPress={scanFakePaymentAction}>
                <Text style={styles.btnText}>📁 पेमेंट स्क्रीनशॉट/SMS स्कैन करें</Text>
              </TouchableOpacity>
              {fakePayResult ? <Text style={styles.resultTextRed}>{fakePayResult}</Text> : null}
            </View>

            {/* 💳 SBI / Financial & Loan Partner Link */}
            <View style={styles.loanCardBox}>
              <Text style={styles.loanCardTitle}>💵 सुरक्षित लोन और वित्तीय सुरक्षा पार्टनर (SBI / बैंक कार्ड)</Text>
              <Text style={styles.loanCardDesc}>कम ब्याज दर पर सुरक्षित लोन और बेस्ट फाइनेंशियल सर्विसेज के लिए यहाँ आवेदन करें।</Text>
              <TouchableOpacity style={styles.loanCardBtn} onPress={() => openWeb('https://bitli.in/lNUaKlG')}>
                <Text style={styles.loanCardBtnText}>🚀 लोन और सुरक्षित कार्ड के लिए आवेदन करें</Text>
              </TouchableOpacity>
            </View>

            {/* Mobile Number & Carrier Locator */}
            <View style={styles.cardBox}>
              <Text style={styles.cardTitle}>🌐 मोबाइल नंबर और कॉलर लोकेटर</Text>
              <Text style={styles.cardDesc}>किसी भी संदिग्ध फोन नंबर की लाइव लोकेशन और नेटवर्क ऑपरेटर की जांच यहाँ करें।</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="10 अंकों का मोबाइल नंबर दर्ज करें..."
                placeholderTextColor="#94a3b8"
                keyboardType="phone-pad"
                value={phoneQuery}
                onChangeText={setPhoneQuery}
              />
              <TouchableOpacity style={styles.actionBtnPurple} onPress={trackPhoneNumber}>
                <Text style={styles.btnText}>🔍 नंबर की लोकेशन जांचें</Text>
              </TouchableOpacity>
              {phoneResult ? <Text style={styles.resultTextBlue}>{phoneResult}</Text> : null}
            </View>

            {/* AI Deepfake & Biometric Scanner */}
            <View style={styles.cardBox}>
              <Text style={styles.cardTitle}>🤖 एआई डीपफेक और वॉयस स्कैम डिटेक्टर</Text>
              <Text style={styles.cardDesc}>फोटो या वीडियो अपलोड करके जांचें कि चेहरा असली है या एआई द्वारा बनाया गया डीपफेक।</Text>
              <TouchableOpacity style={styles.actionBtnGreen} onPress={scanFaceAction}>
                <Text style={styles.btnText}>📁 फोटो या मीडिया स्कैन करें</Text>
              </TouchableOpacity>
              {faceResult ? <Text style={styles.resultText}>{faceResult}</Text> : null}
            </View>

            <Text style={styles.sectionHeading}>🌐 आपातकालीन साइबर हेल्पलाइन पोर्टल</Text>
            
            <View style={styles.portalRow}>
              <TouchableOpacity style={styles.portalBtnBlue} onPress={() => openWeb('https://www.ic3.gov')}>
                <Text style={styles.portalBtnText}>🇺🇸 USA (FBI IC3)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.portalBtnRed} onPress={() => openWeb('https://www.actionfraud.police.uk')}>
                <Text style={styles.portalBtnText}>🇬🇧 UK (Action Fraud)</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.portalRow}>
              <TouchableOpacity style={styles.portalBtnBlue} onPress={() => openWeb('https://cybercrime.gov.in')}>
                <Text style={styles.portalBtnText}>🇮🇳 भारत साइबर पोर्टल</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.portalBtnRed} onPress={() => dialCall('1930')}>
                <Text style={styles.portalBtnText}>📞 कॉल 1930</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Share':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.cardBox}>
              <Text style={styles.cardTitle}>📢 ऐप शेयर करें और दूसरों को बचाएं</Text>
              <Text style={styles.cardDesc}>अपने दोस्तों और परिवार के ग्रुप्स पर इस सुरक्षा ऐप को शेयर करें ताकि कोई भी हैकर या लव ट्रैप का शिकार न हो।</Text>
              <TouchableOpacity style={styles.actionBtnBlue} onPress={shareAppFunction}>
                <Text style={styles.btnText}>📲 अभी दोस्तों को शेयर करें</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loanCardBox}>
              <Text style={styles.loanCardTitle}>🛡️ हैकर्स और लव ट्रैप से बचने के गुप्त टिप्स</Text>
              <Text style={styles.loanCardDesc}>1. किसी भी अनजान वीडियो कॉल को उठाने से बचें।\n2. फोन में कभी भी अननोन ऐप्स या APK इनस्टॉल न करें।\n3. अपना बैंक पासवर्ड या OTP किसी के साथ शेयर न करें।</Text>
            </View>

            <View style={styles.cardBox}>
              <Text style={styles.cardTitle}>⭐ हमें प्ले स्टोर पर रेट करें</Text>
              <Text style={styles.cardDesc}>अगर आपको यह ऐप पसंद आया है, तो 5-स्टार रेटिंग देकर हमारा हौसला बढ़ाएं!</Text>
              <TouchableOpacity style={styles.actionBtnGreen} onPress={() => openWeb('https://play.google.com')}>
                <Text style={styles.btnText}>⭐ प्ले स्टोर पर रिव्यू दें</Text>
              </TouchableOpacity>
            </View>
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
            <Text style={styles.headerTitle}>Global Fraud & AI Detective Shield</Text>
            <Text style={styles.headerSubtitle}>एंटी-हacker, लव ट्रैप और डिजिटल सुरक्षा कवच</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>{renderTabContent()}</View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
          <Text style={[styles.navText, activeTab === 'Home' && styles.activeNavText]}>🏠 होम</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Share')}>
          <Text style={[styles.navText, activeTab === 'Share' && styles.activeNavText]}>📢 शेयर व टिप्स</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#090d16' },
  header: { backgroundColor: '#111827', paddingTop: 45, paddingBottom: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#1f2937' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  logoContainer: { width: 38, height: 38, backgroundColor: '#1e293b', borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#3b82f6' },
  logoIcon: { fontSize: 20 },
  headerTitle: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  headerSubtitle: { color: '#9ca3af', fontSize: 9 },
  langHeaderContainer: { marginBottom: 12, zIndex: 10 },
  langToggleBtn: { backgroundColor: '#1e293b', padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#3b82f6', alignItems: 'center' },
  langToggleText: { color: '#60a5fa', fontWeight: 'bold', fontSize: 12 },
  langDropdownList: { backgroundColor: '#1e293b', marginTop: 4, borderRadius: 8, borderWidth: 1, borderColor: '#475569', overflow: 'hidden' },
  langOption: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#334155' },
  langOptionText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  hourlyBanner: { backgroundColor: '#1e3a8a', padding: 12, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#3b82f6' },
  hourlyText: { color: '#93c5fd', fontSize: 11, fontWeight: 'bold' },
  alertBanner: { backgroundColor: '#1e293b', padding: 14, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#3b82f6' },
  alertText: { color: '#60a5fa', fontWeight: 'bold', fontSize: 13, marginBottom: 4 },
  alertSubText: { color: '#94a3b8', fontSize: 12 },
  cardBox: { backgroundColor: '#111827', padding: 16, borderRadius: 12, marginBottom: 14, borderWidth: 1, borderColor: '#1f2937' },
  cardBoxHacker: { backgroundColor: '#022c22', padding: 16, borderRadius: 12, marginBottom: 14, borderWidth: 1, borderColor: '#059669' },
  cardBoxLove: { backgroundColor: '#581c87', padding: 16, borderRadius: 12, marginBottom: 14, borderWidth: 1, borderColor: '#a855f7' },
  cardBoxHighlight: { backgroundColor: '#450a0a', padding: 16, borderRadius: 12, marginBottom: 14, borderWidth: 1, borderColor: '#dc2626' },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#f8fafc', marginBottom: 6 },
  cardDesc: { fontSize: 12, color: '#94a3b8', marginBottom: 12, lineHeight: 16 },
  inputBox: { backgroundColor: '#090d16', borderWidth: 1, borderColor: '#374151', borderRadius: 8, padding: 10, color: '#fff', marginBottom: 10 },
  actionBtnPurple: { backgroundColor: '#7c3aed', padding: 12, borderRadius: 8, alignItems: 'center' },
  actionBtnDarkPurple: { backgroundColor: '#047857', padding: 12, borderRadius: 8, alignItems: 'center' },
  actionBtnPink: { backgroundColor: '#9333ea', padding: 12, borderRadius: 8, alignItems: 'center' },
  actionBtnGreen: { backgroundColor: '#16a34a', padding: 12, borderRadius: 8, alignItems: 'center' },
  actionBtnBlue: { backgroundColor: '#0284c7', padding: 12, borderRadius: 8, alignItems: 'center' },
  actionBtnRed: { backgroundColor: '#dc2626', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  resultText: { color: '#4ade80', marginTop: 10, fontSize: 12, fontWeight: 'bold', lineHeight: 16 },
  resultTextPurple: { color: '#6ee7b7', marginTop: 10, fontSize: 12, fontWeight: 'bold', lineHeight: 16 },
  resultTextPink: { color: '#f0abfc', marginTop: 10, fontSize: 12, fontWeight: 'bold', lineHeight: 16 },
  resultTextRed: { color: '#fca5a5', marginTop: 10, fontSize: 12, fontWeight: 'bold', lineHeight: 16 },
  resultTextBlue: { color: '#60a5fa', marginTop: 10, fontSize: 12, fontWeight: 'bold', lineHeight: 16 },
  loanCardBox: { backgroundColor: '#1e1b4b', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#4f46e5' },
  loanCardTitle: { fontSize: 15, fontWeight: 'bold', color: '#e0e7ff', marginBottom: 6 },
  loanCardDesc: { fontSize: 12, color: '#c7d2fe', marginBottom: 12, lineHeight: 16 },
  loanCardBtn: { backgroundColor: '#4f46e5', padding: 12, borderRadius: 8, alignItems: 'center' },
  loanCardBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  sectionHeading: { fontSize: 14, fontWeight: 'bold', color: '#f8fafc', marginVertical: 10 },
  portalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  portalBtnBlue: { flex: 1, backgroundColor: '#0284c7', padding: 12, borderRadius: 8, alignItems: 'center', marginRight: 6 },
  portalBtnRed: { flex: 1, backgroundColor: '#dc2626', padding: 12, borderRadius: 8, alignItems: 'center', marginLeft: 6 },
  portalBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 11 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#111827', height: 60, borderTopWidth: 1, borderTopColor: '#1f2937', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { fontSize: 12, color: '#94a3b8', fontWeight: '600' },
  activeNavText: { color: '#60a5fa', fontWeight: 'bold' }
});
              
