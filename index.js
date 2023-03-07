import "expo-router/entry";
import { Amplify } from 'aws-amplify'
// import awsconfig from './src/aws-exports'
import awsconfig from './src/expo-config'
import * as WebBrowser from "expo-web-browser";

Amplify.Logger.LOG_LEVEL = 'DEBUG'

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