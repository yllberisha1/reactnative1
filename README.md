# 1. Create app
npx create-expo-app mobileApp
cd mobileApp

# 2. Ensure Expo SDK 54
npm install expo@^54.0.0

# 3. Fix dependencies
npx expo install --fix

# 4. Install native dependencies
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler
npx expo install react-native-web react-dom @expo/metro-runtime

# 5. Install navigation (modern)
npm install @react-navigation/native
npm install @react-navigation/native-stack

# 6. Optional: tunnel support
npm install @expo/ngrok

# 7. (Only if issues) clean duplicates
npm why react-native
npm dedupe

# 8. Diagnose
npx expo-doctor

# 9. Start app
npx expo start --tunnel