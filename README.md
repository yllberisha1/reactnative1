# 1. Set correct Expo version
npm install expo@^54.0.0

# 2. Fix dependency versions
npx expo install --fix

# 3. Install Expo-compatible native deps
npx expo install react-native-gesture-handler react-native-screens react-native-safe-area-context
npx expo install react-native-web react-dom @expo/metro-runtime

# 4. Install JS libraries
npm install @react-navigation/native @react-navigation/stack @expo/ngrok

# 5. Remove duplicate dependencies
npm dedupe
npm why react-native

# 6. Diagnose issues
npx expo-doctor

# 7. Start project
npx expo start --tunnel