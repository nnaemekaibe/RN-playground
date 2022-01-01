import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Button,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {
  Header,
  Colors,
  ReloadInstructions,
  DebugInstructions,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import Section from '../../components/section';

const DefaultWelcome = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleButtonPress = () => {
    //Navigate to the playground home screen.
    navigation.navigate('Home', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{margin: 24}}>
            <Button
              onPress={handleButtonPress}
              title="Lets Play"
              color="#841584"
              accessibilityLabel="Navigate to the Playground"
            />
          </View>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultWelcome;

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
