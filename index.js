import "expo-router/entry";
import 'react-native-gesture-handler';
import { Amplify } from 'aws-amplify'
// import awsconfig from './src/aws-exports'
import awsconfig from './src/expo-config'
import * as WebBrowser from "expo-web-browser";
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: '',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

// Amplify.Logger.LOG_LEVEL = 'DEBUG'

async function urlOpener(url, redirectUrl) {
    const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
      url,
      redirectUrl
    );
  
    if (type === "success" && Platform.OS === "ios") {
      WebBrowser.dismissBrowser();
      return Linking.openURL(newUrl);
    }
}

Amplify.configure({
    ...awsconfig,
    oauth: {
        ...awsconfig.oauth,
        urlOpener,
    },
})

Sentry.Native.captureMessage("Configured Amplify")
