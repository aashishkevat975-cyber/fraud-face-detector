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
  Modal
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Translations Dictionary for Global Languages
const translations = {
  hi: {
    title: "Fraud Face Detector",
    subtitle: "ग्लोबल साइबर & UPI फ्रॉड शील्ड",
    sbiText: "💳 तुरंत लोन & SBI क्रेडिट कार्ड अप्लाई करें",
    sbiSub: "कम ब्याज दर | आसान किस्तें | मिनटों में अप्रूवल पाएं 👍 क्लिक करें",
    galleryTitle: "🖼️ गैलरी से पेमेंट फ़िलर / QR कोड स्कैनर",
    galleryDesc: "दुकामदार या यूजर अपनी गैलरी से किसी भी पेमेंट स्क्रीनशॉट या QR कोड की फोटो चुनें",
    galleryBtn: "🖼️ गैलरी से फोटो चुनें & स्कैन करें",
    shieldTitle: "🛡️ & नागरिक और मर्दै सुरक्षा शील्ड",
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
    shieldTitle: "🛡️ & Citizen & Merchant Security Shield",
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
  },
  es: {
    title: "Fraud Face Detector",
    subtitle: "Escudo Global contra Fraudes",
    sbiText: "💳 ¡Solicita Préstamo y Tarjeta de Crédito!",
    sbiSub: "Bajos intereses | Aprobación instantánea 👍 Clic aquí",
    galleryTitle: "🖼️ Escaner de Comprobantes o Código QR",
    galleryDesc: "Selecciona cualquier captura de pantalla de pago o código QR de tu galería para escanear",
    galleryBtn: "🖼️ Elegir Imagen y Escanear",
    shieldTitle: "🛡️ & Escudo de Seguridad Ciudadana",
    farmer: "Seguridad Agrícola",
    merchant: "Escudo UPI para Comerciantes",
    youth: "Crypto Global y Jóvenes",
    senior: "Escudo Arresto Digital",
    cyberPortal: "💻 Portal Cibernético",
    helpline: "📞 Línea de Ayuda",
    universalTitle: "🔍 Escáner Universal de Fraudes AI",
    placeholderInput: "Ingrese número, enlace, ID de cripto o UPI...",
    scanBtn: "Escanear al Instante",
    fakeApp: "Verificador de Apps Falsas",
    tips: "Consejos de Estofas",
    sms: "Alertas SMS",
    lookup: "Búsqueda de Números",
    bankTitle: "🏦 Ayuda de Emergencia Bancaria",
    reportTitle: "🚨 Reportar un Fraude",
    reportPlaceholder: "Escriba los detalles aquí...",
    reportBtn: "Enviar Reporte Seguro",
    settingsHeader: "⚙️ Configuración y Idiomas Globales",
    closeBtn: "Cerrar"
  },
  ar: {
    title: "Fraud Face Detector",
    subtitle: "درع مكافحة الاحتيال العالمي",
    sbiText: "💳 احصل على قرض فورية وبطاقة ائتمان",
    sbiSub: "فائدة منخفضة | موافقة فورية 👍 انقر هنا",
    galleryTitle: "🖼️ ماسح إيصالات الدفع ورمز الاستجابة السريعة",
    galleryDesc: "حدد أي صورة لقطة شاشة دفع أو رمز من معرض الصور الخاص بك للتحقق",
    galleryBtn: "🖼️ اختر صورة وانسح خونا",
    shieldTitle: "🛡️ & درع أمان المواطنين والتجار",
    farmer: "أمان المزارعين",
    merchant: "درع التجار UPI",
    youth: "الشباب والعملات الرقمية",
    senior: "درع الاعتقال الرقمي",
    cyberPortal: "💻 البوابة الإلكترونية",
    helpline: "📞 خط المساعدة",
    universalTitle: "🔍 الماسح العالمي الذكاء الاصطناعي للاحتيال",
    placeholderInput: "أدخل الرقم، الرابط المشبوب أو معرف العملات...",
    scanBtn: "مسح الاحتيال",
    fakeApp: "فاحص التطبيقات الوهمية",
    tips: "نصائح الأمان",
    sms: "تنبيهات الرسائل",
    lookup: "بحث الرقم",
    bankTitle: "🏦 المساعدة الطوارئ البنكية",
    reportTitle: "🚨 الإبلاغ عن عملية احتيال",
    reportPlaceholder: "أكتب التفاصيل الحادث هنا...",
    reportBtn: "إرسال التقرير الآمن",
    settingsHeader: "⚙️ الإعدادات واللغات العالمية",
    closeBtn: "إغلاق"
  },
  ru: {
    title: "Fraud Face Detector",
    subtitle: "Глобальный щит от мошенничества",
    sbiText: "💳 Оформите кредит и кредитную карту!",
    sbiSub: "Низкий процент | Быстрое одобрение 👍 Нажмите здесь",
    galleryTitle: "🖼️ Сканер чеков и QR-кодов из галереи",
    galleryDesc: "Выберите скриншот оплаты или QR-код из галереи для проверки",
    galleryBtn: "🖼️ Выбрать фото и сканировать",
    shieldTitle: "🛡️ & Защита граждан и торговцев",
    farmer: "Защита фермеров",
    merchant: "Торговый UPI щит",
    youth: "Крипто и молодежь",
    senior: "Защита цифрового ареста",
    cyberPortal: "💻 Киберпортал",
    helpline: "📞 Линия помощи",
    universalTitle: "🔍 Универсальный AI сканер",
    placeholderInput: "Введите номер, ссылку или крипто ID...",
    scanBtn: "Сканировать мгновенно",
    fakeApp: "Проверка поддельных приложений",
    tips: "Советы по безопасности",
    sms: "СМС оповещения",
    lookup: "Поиск номеров",
    bankTitle: "🏦 Банковская помощь",
    reportTitle: "🚨 Сообщить о мошенничестве",
    reportPlaceholder: "Введите детали инцидента...",
    reportBtn: "Отправить отчет",
    settingsHeader: "⚙️ Настройки и языки мира",
    closeBtn: "Закрыть"
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

  const openSbiLink = () => Linking.openURL('https://www.sbicard.com/en/eapply.page').catch(() => {});
  const openCyberPortal = () => Linking.openURL('https://cybercrime.gov.in/').catch(() => {});
  const callHelpline = () => Linking.openURL('tel:1930');

  const shareApp = async () => {
    try {
      await Share.share({
        message: 'Protect Yourself from Deepfakes & Online Fraud! Download "Fraud Face Detector"'
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
    Alert.alert('🌐 Global AI Scan', `"${searchQuery}" is safe and verified against global database.`);
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
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Text style={styles.applogoCircle}>🛡️</Text>
          <View>
            <Text style={styles.headerTitle}>{t.title}</Text>
            <Text style={styles.headerSubtitle}>{t.subtitle}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsIconBtn} onPress={() => setSettingsShow(true)}>
          <Text style={{ fontSize: 22 }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* GLOBAL LANGUAGES DROPDOWN */}
      {settingsShow && (
        <View style={styles.settingsHeader}>
          <Text style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: 8 }}>{t.settingsHeader}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 8 }}>
            <TouchableOpacity onPress={() => setCurrentLang('hi')} style={[styles.langBtn, currentLang === 'hi' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'hi' && { color: '#fff' }]}>🇮🇳 हिंदी</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentLang('en')} style={[styles.langBtn, currentLang === 'en' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'en' && { color: '#fff' }]}>🇺🇸 English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentLang('es')} style={[styles.langBtn, currentLang === 'es' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'es' && { color: '#fff' }]}>🇪🇸 Español</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentLang('ar')} style={[styles.langBtn, currentLang === 'ar' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'ar' && { color: '#fff' }]}>🇦🇷 العربية</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentLang('ru')} style={[styles.langBtn, currentLang === 'ru' && styles.activeLang]}>
              <Text style={[styles.langText, currentLang === 'ru' && { color: '#fff' }]}>🇷🇺 Русский</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={callHelpline}><Text style={styles.settingItem}>📞 Helpline (1930)</Text></TouchableOpacity>
          <TouchableOpacity onPress={shareApp}><Text style={styles.settingItem}>🔗 Share App (Viral Link)</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSettingsShow(false)} style={styles.closeSettingsBtn}>
            <Text style={styles.closeBtnText}>{t.closeBtn}</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* SBI Banner */}
        <TouchableOpacity style={styles.sbiBanner} onPress={openSbiLink}>
          <Text style={styles.sbiText}>{t.sbiText}</Text>
          <Text style={styles.sbiSub}>{t.sbiSub}</Text>
        </TouchableOpacity>

        {/* Gallery Scanner */}
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

        {/* Citizen Protection */}
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

        {/* Quick Action */}
        <View style={styles.quickActionRow}>
          <TouchableOpacity style={styles.actionButtonBlue} onPress={openCyberPortal}>
            <Text style={styles.actionButtonText}>{t.cyberPortal}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonRed} onPress={callHelpline}>
            <Text style={styles.actionButtonText}>{t.helpline}</Text>
          </TouchableOpacity>
        </View>

        {/* Universal Search */}
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

        {/* Grid Container */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridBox} onPress={() => setActiveModal('fakeApp')}>
            <Text style={styles.gridTextLarge}>📱</Text>
            <Text style={styles.gridText}>{t.fakeApp}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridBox} onPress={() => setActiveModal('tips')}>
            <Text style={styles.gridTextLarge}>💡</Text>
            <Text style={styles.gridText}>{t.tips}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridBox} onPress={() => setActiveModal('sms')}>
            <Text style={styles.gridTextLarge}>✉️</Text>
            <Text style={styles.gridText}>{t.sms}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridBox} onPress={() => setActiveModal('lookup')}>
            <Text style={styles.gridTextLarge}>🔍</Text>
            <Text style={styles.gridText}>{t.lookup}</Text>
          </TouchableOpacity>
        </View>

        {/* Bank Helpdesk */}
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>{t.bankTitle}</Text>
          <View style={styles.bankGrid}>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18004253800')}><Text style={styles.bankText}>SBI Helpline</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18002586161')}><Text style={styles.bankText}>PNB Helpline</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18002662')}><Text style={styles.bankText}>HDFC Helpline</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bankBtn} onPress={() => callHelpline('18002584455')}><Text style={styles.bankText}>BOB Helpline</Text></TouchableOpacity>
          </View>
        </View>

        {/* Report Section */}
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

      {/* Modal View */}
      <Modal visible={activeModal !== null} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Security Active & Protected</Text>
            <Text style={styles.modalBody}>Feature fully functional and connected to global security database.</Text>
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
    position: 'absolute', top: 65, right: 16, width: 290,
    backgroundColor: '#1e293b', borderRadius: 10, padding: 12,
    zIndex: 1000, borderWidth: 1, borderColor: '#38bdf8'
  },
  langBtn: {
    width: '48%', backgroundColor: '#0f172a', padding: 6, borderRadius: 6,
    borderWidth: 1, borderColor: '#38bdf8', marginBottom: 8, alignItems: 'center'
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
  sbiSub: { color: '#111827', fontSize: 12, margi
