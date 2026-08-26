import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Modal, Share } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home'); 
  const [currentLang, setCurrentLang] = useState('HI'); 
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  // Translations content for multi-language support
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
    },
    ES: {
      title: "Fraud Face Detector",
      subtitle: "Aplicación de seguridad global y anti-hack",
      alertTitle: "🚨 Protección activa contra fraudes y hackeos",
      alertSub: "Esta aplicación protege tu teléfono contra hackeos y préstamos falsos las 24 horas.",
      bonusTitle: "🎁 Oferta especial de bonificación gratuita",
      bonusDesc: "Reclama tu recompensa especial por tiempo limitado. Haz clic abajo.",
      bonusBtn: "🎁 Reclamar bonificación ahora",
      loanTitle: "🏦 Escudo contra fraudes de préstamos",
      loanDesc: "¡Cuidado con estafas de préstamos falsos! Si alguien pide dinero por adelantado, la app te avisará.",
      loanBtn: "Verificar oferta de préstamo",
      shareTitle: "📢 Protege a tus seres queridos",
      shareDesc: "¡Comparte esta aplicación con tu familia y amigos para mantenerlos seguros!",
      shareBtn: "Compartir ahora",
      hackTitle: "🛡️ Escudo de protección anti-hack",
      hackDesc: "Evita que extraños accedan a tus fotos, videos e información personal.",
      hackBtn: "Escudo anti-hack activo (Escanear)",
      callTitle: "⚡ Escudo de predicción de fraudes",
      callDesc: "Te alerta al instante si recibes llamadas falsas o amenazas de arresto digital.",
      callBtn: "Predicción de fraude activa",
      bizTitle: "💼 Verificador de facturas y correos",
      bizDesc: "Ayuda a los comerciantes a verificar facturas o correos electrónicos falsos.",
      bizBtn: "Escanear factura o correo",
      bankHead: "🏦 Líneas de ayuda de emergencia bancaria",
      cyberPortal: "Portal Cibernético",
      helpline1930: "Línea de ayuda 1930"
    }
  };

  const currentStrings = t[currentLang] || t['HI'];

  useEffect(() => {
    const timer = setInterval(() => {
      openFeatureDetails(
        "⏰ सुरक्षा रिमाइंडर (हर 4 घंटे)",
        currentLang === 'EN' ? "Automatic safety reminder: Stay alert! Do not send money to unknown links or fake offers." : "यह स्वचालित सुरक्षा संदेश है: सतर्क रहें! किसी भी अनजान लिंक, फर्जी लोन ऑफर या बोनस के झांसे में आकर पैसे न भेजें।"
      );
    }, 4 * 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, [currentLang]);

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
          : 'सजग रहें! इस Fraud Face Detector ऐप को डाउनलोड करें और अपने सगे-संबंधियों को हैकिंग, फर्जी लोन और ऑनलाइन फ्रॉड से बचाएं।',
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
              <Text style={styles.alertText}>{currentStrings.alertTitle}</Text>
              <Text style={styles.alertSubText}>{currentStrings.alertSub}</Text>
            </View>

            {/* नया बोनस और रिवॉर्ड लिंक बॉक्स */}
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
              <TouchableOpacity style={styles.loanScamBtn} onPress={() => openFeatureDetails(currentStrings.loanTitle, currentStrings.loanDesc)} >
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

            <View style={styles.proactiveBox}>
              <Text style={styles.proactiveTitle}>{currentStrings.callTitle}</Text>
              <Text style={styles.proactiveDesc}>{currentStrings.callDesc}</Text>
              <TouchableOpacity style={styles.proactiveBtn} onPress={() => openFeatureDetails(currentStrings.callTitle, currentStrings.callDesc)}>
                <Text style={styles.proactiveBtnText}>{currentStrings.callBtn}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.masterFeatureBox}>
              <Text style={styles.masterTitle}>{currentStrings.bizTitle}</Text>
              <Text style={styles.masterDesc}>{currentStrings.bizDesc}</Text>
              <TouchableOpacity style={styles.masterBtn} onPress={() => openFeatureDetails(currentStrings.bizTitle, currentStrings.bizDesc)}>
                <Text style={styles.masterBtnText}>{currentStrings.bizBtn}</Text>
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
              <TouchableOpacity style={styles.cyberPortalBtn} onPress={() => Linking.openURL('https://cybercrime.gov.in')}>
                <Text style={styles.quickActionText}>{currentStrings.cyberPortal}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.helplineBtn} onPress={() => dialCall('1930')}>
                <Text style={styles.quickActionText}>{currentStrings.helpline1930}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case 'Search':
        return (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.aiScannerContainer}>
              <Text style={styles.aiScannerLabel}>🔍 एआई लिंक, फिशिंग और ईमेल स्कैनर</Text>
              <Text style={styles.cardDescText}>संदिग्ध लिंक, खतरनाक वेबसाइट या फर्जी मैसेज यहाँ स्कैन करें।</Text>
              <TouchableOpacity style={styles.aiScanBtn} onPress={() => openFeatureDetails("एआई लिंक स्कैनर", "खतरनाक लिंक या फिशिंग वेबसाइट को पहचानकर सुरक्षित रखता है। इंजन पूरी तरह सक्रिय है।")}>
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
              <TouchableOpacity style={styles.pickImgBtn} onPress={() => openFeatureDetails("मर्चेंट क्यूआर और रिसीट स्कैनर", "गैलरी से पेमेंट स्क्रीनशॉट स्कैन करने का मॉड्यूल सक्रिय कर दिया गया है।")} >
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
              <TouchableOpacity style={styles.familyBtn} onPress={() => openFeatureDetails("फैमिली और किड्स SOS शील्ड", "परिवार के सभी सदस्यों के लिए आपातकालीन अलर्ट सिस्टम सक्रिय है।")}>
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
                <Text style={styles.langMainTitle}>भाषा बदलें (Change Language) / Select Language</Text>
                <Text style={styles.langMainSub}>वर्तमान भाषा: {currentLang === 'HI' ? 'हिंदी (Hindi)' : currentLang === 'EN' ? 'English' : 'Español'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => openFeatureDetails("लाइसेंस स्थिति", "आपके ऐप की प्रीमियम सुरक्षा और एक्टिवेशन स्टेटस पूरी तरह सक्रिय है।")}>
              <View style={{flex: 1}}>
                <Text style={styles.settingTitle}>लाइसेंस और एक्टिवेशन स्टेटस</Text>
                <Text style={styles.cardDescText}>प्रीमियम सुरक्षा कवच सक्रिय है।</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => openFeatureDetails("स्कैन इतिहास", "आपके द्वारा पहले किए गए सभी लिंक्स और दस्तावेजों के स्कैन का रिकॉर्ड सुरक्षित है।")}>
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
            <Text style={styles.modalHeading}>🌐 भाषा चुनें (Select Language)</Text>
            
            <TouchableOpacity style={styles.lang
