import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });
    setDimensions({ width: Dimensions.get('window').width, height: Dimensions.get('window').height });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
      <View style={{ width: dimensions.width / 2, height: dimensions.height / 2, backgroundColor: 'blue' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;