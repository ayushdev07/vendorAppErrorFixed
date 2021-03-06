import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

i18n.use(initReactI18next).init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                'Hey, Arun': 'Hey, Arun',
                'Login/SignUp':'Login/SignUp',
                // UpcomingTaskSupervisorScreen.js
                'Preparing the fitting': 'Preparing the fitting',
                'Assembling': 'Assembling',
                'Finishing': 'Finishing',
                'Fetching Data': 'Fetching Data',
                'Wooden Partition': 'Wooden Partition',
                'Area 1': 'Area 1',
                'Description': 'Description',
                'See More': 'See More',
                'Prepare the wall by making & chipping (wall choosing)': 'Prepare the wall by making & chipping (wall choosing)',
                'Installation by pipe installation & waterproofing': 'Installation by pipe installation & waterproofing',
                'Testing by pressure & leakage testing': 'Testing by pressure & leakage testing',
                'Finishing by filling the conduit with mortar': 'Finishing by filling the conduit with mortar',
                'Hacking the finish for bonding': 'Hacking the finish for bonding',
                'Fixing mesh on the closed conduits': 'Fixing mesh on the closed conduits',
                'Drawings': 'Drawings',
                'Prerequisite': 'Prerequisite',
                'White marking make a detailed mark at joints and a simple line for pipes': 'White marking make a detailed mark at joints and a simple line for pipes',
                'Check the pipes dia and set the chipping depth': 'Check the pipes dia and set the chipping depth',
                'Check if any damage is there in pipes': 'Check if any damage is there in pipes',
                'In case of damage inform the site engineer immediately and get it replaced before chipping is done': 'In case of damage inform the site engineer immediately and get it replaced before chipping is done',
                'Solid wood for frame/ support': 'Solid wood for frame/ support',
                'Milestones': 'Milestones',
                'Solid wood for frame/ support': 'Solid wood for frame/ support',
                'Plywood for frame/support': 'Plywood for frame/support',
                'Plywood for panels': 'Plywood for panels',
                'Plywood for partition': 'Plywood for partition',
                'Fixing supports': 'Fixing supports',
                'Fixing panels': 'Fixing panels',
                'Check with level scale and plumb': 'Check with level scale and plumb',
                'Cutting the Veneer as per size': 'Cutting the Veneer as per size',
                'Fixing of veneer on the panels': 'Fixing of veneer on the panels',
                'Today\'s Target': 'Today\'s Target',
                'Sqft': 'Sqft',
                'Work Done': 'Work Done',
                'Site Cleaned': 'Site Cleaned',
                'Address': 'Address',
                'Type': 'Type',
                'Number': 'Number',
                'Skills': 'Skills',
                'Semi-skilled': 'Semi-skilled',
                'Unskilled': 'Unskilled',
                'Submit': 'Submit',
                // NotificationScreenSuperVisor.js
                'Fetching Notifications': 'Fetching Notifications',
                'Notifications': 'Notifications',
                'Upcoming Tasks': 'Upcoming Tasks',
                'Booking ID': 'Booking ID',
                'Kartik': 'Kartik',
                'Search': 'Search',
                // SettingsHomeScreen.js
                'Settings': 'Settings',
                "Tutorials": "Tutorials",
                'Personal': 'Personal',
                'Supervisors': 'Supervisors',
                'Account Details': 'Account Details',
                'Security': 'Security',
                'Language': 'Language',
                'About': 'About',
                // AccontDetails.js
                'Account Number': 'Account Number',
                'Confirm Account Number': 'Confirm Account Number',
                'IFSC Code': 'IFSC Code',
                'Account Holder\'s Name': 'Account Holder\'s Name',
                'PAN Number': 'PAN Number',
                'Aadhar Details': 'Aadhar Details',
                'Upload Photo': 'Upload Photo',
                'GSTIN Details': 'GSTIN Details',
                'Proceed': 'Proceed',
                // PersonalScreen.js
                'Change': 'Change',
                'Additional Information': 'Additional Information',
                'Emergency Contact': 'Emergency Contact',
                'E-mail': 'E-mail',
                'Category': 'Category',
                'Address': 'Address',
                'State': 'State',
                'City': 'City',
                'Street': 'Street',
                'Building': 'Building',
                'Flat No': 'Flat No',
                // SecurityScreen.js
                'Old Password': 'Old Password',
                'Password': 'Password',
                'Confirm': 'Confirm',
                'Forgot Password?': 'Forgot Password?',
                'Change Password': 'Change Password',
                // SupervisorsScreen.js
                'Supervisor Request': 'Supervisor Request',
                'Remove': 'Remove',
                'Supervisors': 'Supervisors',
                // LanguageScreen.js
                'Change Language': 'Change Language',
                // VideoSlider.js
                'Uniworks Movies': 'Uniworks Movies',
                'Electrical': 'Electrical',
                'Carpenter': 'Carpenter',
                // SuperVisorBottomTab.js
                'Home': 'Home',
                'Profile': 'Profile',
                // HomeBottomTab.js
                'Wallet': 'Wallet',
                // NotificationsScreen.js
                'Approve': 'Approve',
                'Site Request': 'Site Request',
                'Approvals': 'Approvals',
                // StartSiteScreen.js
                'Loading': 'Loading',
                'StartSiteScreen': 'StartSiteScreen',
                'Tools': 'Tools',
                'Start Site': 'Start Site',
                'Financial district Hyderabad': 'Financial district Hyderabad',
                'to': 'to',
                'Hammer': 'Hammer',
                'Axe': 'Axe',
                'UpcomingTaskContractorScreen': 'UpcomingTaskContractorScreen',
                'Rod': 'Rod',
                'Wooden Partition Description': 'Wooden Partition Description',
                // AfterAcceptScreen.js
                'Site Engineer Name': 'Site Engineer Name',
                'Update': 'Update',
                'Cancel': 'Cancel',
                'Tool': 'Tool',
                'Call': 'Call',
                // SelectSuperVisorScreen.js
                'Assign To': 'Assign To',
                'Supservisor Name': 'SupserVisor Name',
                // CameraScreen.js
                'Snap': 'Snap',
                // LogInScreen.js
                'Logging In': 'Logging In',
                'Log In': 'Log In',
                'Don\'t have an account?': 'Don\'t have an account?',
                'Sign Up': 'Sign Up',
                'Create Account': 'Create Account',
                // NewPasswordScreen.js
                'New Password': 'New Password',
                // PaymentDetailsScreen.js
                'Payment Details': 'Payment Details',
                // PersonalDetailsScreen.js
                'you\'re almost there': 'you\'re almost there',
                'Landmark': 'Landmark',
                'Nearby place': 'Nearby place',
                // RecoverAccountScreen.js
                'Recover Account': 'Recover Account',
                'Phone': 'Phone',
                // SignUpScreen.js
                'Name': 'Name',
                'Already have an account?': 'Already have an account?',
                'Click to login': 'Click to login',
                'I am': 'I am',
                'Contractor': 'Contractor',
                'Supervisor': 'Supervisor',
                'Contractor is a person who owns the firm': 'Contractor is a person who owns the firm',
                'Supervisor is a person who works under the contractor': 'Supervisor is a person who works under the contractor',
                'Contractor\'s Phone': 'Contractor\'s Phone',
                // VideoScreen.js
                'Video has finished playing!': 'Video has finished playing!',
                'pause': 'pause',
                'play': 'play',
                // WalletComponent.js
                'Work History': 'Work History',
                'Amount': 'Amount',
                'Name': 'Name',
                'Sqft': 'Sqft',
                'Rs': 'Rs',
                'Completed': 'Completed',
                'Site Name': 'Site Name',
                '45,982': '45,982',
                '24,000': '24,000',
                //Tabs
                'Opportunity': 'Opportunity',
                'Ongoing': 'Ongoing',
                'Upcoming': 'Upcoming',
                //Ongoing tab
                'Paused': 'Paused',
                'Live': 'Live',
                'Approve': 'Approve',
                'Reject': 'Reject',
                'Ayush': 'Ayush',
                'Arun': 'Arun',
                'CM': 'CM',
                'Hey': 'Hey',
                'day': 'day',
                'Electrician': 'Electrician',
                'Labour': 'Labour',
                'Days': 'Days',
                'Approved': 'Approved',
                'Rejected': 'Rejected'
            },
        },
        hi: {
            translation: {
                // UpcomingTaskSupervisorScreen.js
                'Preparing the fitting': 'फिटिंग तैयार करना',
                'Assembling': 'असेम्बलिंग',
                'Finishing': 'फिटिंग',
                'Fetching Data': 'डेटा लाया जा रहा है',
                'Wooden Partition': 'लकड़ी का Partition',
                'Area': 'क्षेत्र',
                'Description': 'विवरण',
                'See More': 'और देखें',
                'Prepare the wall by making & chipping (wall choosing)': 'दीवार बनाकर और काटकर (दीवार चुनना)',
                'Installation by pipe installation & waterproofing': 'पाइप स्थापना और वॉटरप्रूफिंग द्वारा स्थापना',
                'Testing by pressure & leakage testing': 'दबाव और रिसाव परीक्षण द्वारा परीक्षण',
                'Finishing by filling the conduit with mortar': 'नाली को मोर्टार से भरना',
                'Hacking the finish for bonding': 'बॉन्डिंग के लिए फिनिशिंग हैकिंग',
                'Fixing mesh on the closed conduits': 'बंद कंडे पर जाली ठीक करना',
                'Drawings': 'Drawings',
                'Prerequisite': 'शर्त',
                'White marking make a detailed mark at joints and a simple line for pipes': 'सफेद अंकन जोड़ों पर एक विस्तृत चिह्न और पाइप के लिए एक सरल रेखा बनाते हैं',
                'Check the pipes dia and set the chipping depth': 'पाइप व्यास की जाँच करें और चिपिंग गहराई सेट करें',
                'Check if any damage is there in pipes': 'जांचें कि क्या पाइप में कोई क्षति है',
                'In case of damage inform the site engineer immediately and get it replaced before chipping is done': 'क्षति के मामले में साइट इंजीनियर को तुरंत सूचित करें और चिपिंग करने से पहले इसे बदल दें',
                'Solid wood for frame/ support': 'फ्रेम / समर्थन के लिए ठोस लकड़ी',
                'Milestones': 'मील-पत्थर',
                'Solid wood for frame/ support': 'फ्रेम / समर्थन के लिए ठोस लकड़ी',
                'Plywood for frame/support': 'फ्रेम / समर्थन के लिए प्लाईवुड',
                'Plywood for panels': 'पैनलों के लिए प्लाईवुड',
                'Plywood for partition': 'विभाजन के लिए प्लाइवुड',
                'Fixing supports': 'फिक्सिंग सपोर्ट करता है',
                'Fixing panels': 'फिक्सिंग पैनल',
                'Check with level scale and plumb': 'स्तर पैमाने और साहुल के साथ जांचें',
                'Cutting the Veneer as per size': 'आकार के अनुसार लिबास काटना',
                'Fixing of veneer on the panels': 'पैनलों पर लिबास को ठीक करना',
                'Today\'s Target': 'आज का लक्ष्य',
                'Sqft': 'वर्ग फीट',
                'Work Done': 'काम किया',
                'Site Cleaned': 'साइट साफ की गई',
                'Address': 'पता',
                'Type': 'प्रकार',
                'Number': 'संख्य',
                'Skills': 'कौशल',
                'Semi-skilled': 'अर्धकुशल',
                'Semi skilled': 'अर्धकुशल',
                'Unskilled': 'अकुशल',
                'Submit': 'प्रस्तुत',
                // NotificationScreenSuperVisor.js
                'Fetching Notifications': 'सूचनाएं आ राही है',
                'Notifications': 'सूचनाएं',
                'Upcoming Tasks': 'आगामी कार्य',
                'Booking ID': 'बुकिंग ID',
                'Kartik': 'कार्तिक',
                'Search': 'खोजें',
                // SettingsHomeScreen.js
                'Settings': 'सेटिंग्स',
                "Tutorials": "वीडियो",
                'Personal': 'पर्सनल',
                'Supervisors': 'सुपरवाइज़र',
                'Account Details': 'खाता विवरण',
                'Security': 'सुरक्षा',
                'Language': 'भाषा',
                'About': 'विषय में',
                // AccontDetails.js
                'Account Number': 'खाता संख्या',
                'Confirm Account Number': 'खाता संख्या की पुष्टि करें',
                'IFSC Code': 'IFSC कोड',
                'Account Holder\'s Name': 'खाता धारक का नाम',
                'PAN Number': 'PAN नंबर',
                'Aadhar Details': 'आधार विवरण',
                'Upload Photo': 'फोटो अपलोड करें',
                'GSTIN Details': 'GSTIN विवरण',
                'Proceed': 'आगे बढ़े ',
                // PersonalScreen.js
                'Change': 'बदले',
                'OTP': 'OTP',
                'Additional Information': 'अतिरिक्त जानकारी',
                'Emergency Contact': 'आपातकालीन संपर्क',
                'E-mail': 'ई-मेल',
                'Category': 'वर्ग',
                'Address': 'पता',
                'State': 'राज्य',
                'City': 'शहर',
                'Street': 'गली',
                'Building': 'इमारत',
                'Flat No': 'फ्लैट No',
                // SecurityScreen.js
                'Old Password': 'पुराना पासवर्ड',
                'Password': 'पासवर्ड',
                'Confirm': 'पुष्टि करें',
                'Forgot Password?': 'पासवर्ड भूल गए?',
                'Change Password': 'पासवर्ड बदलें',
                // SupervisorsScreen.js
                'Supervisor Request': 'सुपरवाइज़र का अनुरोध',
                'Remove': 'हटाएं',
                'Supervisors': 'सुपरवाइज़र',
                // LanguageScreen.js
                'Change Language': 'भाषा बदलें',
                // VideoSlider.js
                'Uniworks Movies': 'उपयोगी फिल्में',
                'Electrical': 'इलेक्ट्रिकल',
                'Carpenter': 'कॉर्पन्टर',
                'Incomplete': 'Incomplete',
                'Home': 'होम',
                'Call': 'कॉल',
                'Profile': 'प्रोफ़ाइल',
                // HomeBottomTab.js
                'Wallet': 'Work इतिहास',
                // NotificationsScreen.js
                'Approve': 'स्वीकृत करें',
                'Site Request': 'साइट अनुरोध',
                'Approvals': 'स्वीकृति',
                // StartSiteScreen.js
                'Loading': 'लोड हो रहा है',
                'Carpentary': 'Carpentary',
                'Carpentary': 'कॉर्पन्टर',
                'Tools': 'उपकरण',
                'Start Site': 'साइट शुरू करें',
                'StartSiteScreen': 'कार्य प्रारंभ करें',
                'Financial district Hyderabad': 'वित्तीय जिला हैदराबाद',
                'Wooden Partition Description': 'लकड़ी का विभाजन विवरण',
                'to': 'से',
                'Hammer': 'हथौड़ा',
                'Axe': 'कुल्हाड़ी',
                'Rod': 'छड़ी',
                // AfterAcceptScreen.js
                'Site Engineer Name': 'साइट इंजीनियर का नाम',
                'Update': 'अपडेट करें',
                'Cancel': 'रद्द करें',
                'Tool': 'उपकरण',
                // SelectSuperVisorScreen.js
                'Assign To': 'सौंपे',
                'Supservisor Name': 'सुपरवाइज़र का नाम',
                // CameraScreen.js
                'Snap': 'फ़ोटो ले',
                // LogInScreen.js
                'Logging In': 'लॉगिन हो रहा है',
                'Log In': 'लॉग इन',
                'Don\'t have an account?': 'खाता नहीं है?',
                'Sign Up': 'साइन अप',
                'Create Account': 'खाता बनाएं',
                // NewPasswordScreen.js
                'New Password': 'नया पासवर्ड',
                // PaymentDetailsScreen.js
                'Payment Details': 'भुगतान विवरण',
                // PersonalDetailsScreen.js
                'you\'re almost there': 'आप लगभग वहाँ है',
                'Landmark': 'भूमि-चिह्न',
                'Nearby place': 'पास की जगह',
                // RecoverAccountScreen.js
                'Recover Account': 'अपने खाते का विवरण वापस लाएं',
                'Phone': 'फ़ोन',
                // SignUpScreen.js
                'Name': 'नाम',
                'Click to login': 'लॉगिन करने के लिए क्लिक करें',
                'I am': 'मैं हूँ',
                'Contractor': 'ठेकेदार',
                'Supervisor': 'सुपरवाइज़र',
                'Contractor is a person who owns the firm': 'ठेकेदार एक ऐसा व्यक्ति है जो फर्म का मालिक है',
                'Supervisor is a person who works under the contractor': 'सुपरवाइज़र एक व्यक्ति है जो ठेकेदार के तहत काम करता है',
                'Contractor\'s Phone': 'ठेकेदार का फोन',
                // VideoScreen.js
                'Video has finished playing!': 'वीडियो चलना समाप्त हो गया है!',
                'pause': 'रोकें',
                'play': 'चलाए',
                //WalletComponent.js
                'Work History': 'कार्य इतिहास',
                'Amount': 'धनराशि',
                'Name': 'नाम',
                'Sqft': 'Sqft',
                'Rs': 'Rs',
                'Completed': 'पूरा कर लिया है',
                'Site Name': 'Site का नाम',
                '45,982': '45,982',
                '24,000': '24,000',
                //Tabs
                'Opportunity': 'अवसर',
                'Ongoing': 'चल रही',
                'Upcoming': 'आगामी',
                'Paused': 'रोकें',
                'Live': 'फिलहाल',
                'Approve': 'स्वीकार',
                'Reject': 'अस्वीकार',
                'Ayush': 'आयुष',
                'Arun': 'अरुण',
                'CM': 'चंद्र मोहन',
                'Hey': 'नमस्कार',
                'day': 'दिन',
                'Electrician': 'बिजली मिस्त्री',
                'Labour': 'श्रम',
                'Days': 'दिन',
                'Approved': 'मंजूर की',
                'Rejected': 'अस्वीकृत',
                'UpcomingTaskContractorScreen': 'आगामी काम',
                'Hey, Arun': 'हैलो अरुण',
                'Incomplete': 'काम पूरा नहीं हुआ है',
                'Login/SignUp':'लॉग इन करें'
            },
        },
    },
});

export default i18n;