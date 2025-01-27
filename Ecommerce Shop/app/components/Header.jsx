import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Header = ({ onSearch }) => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={20} color="#6c757d" />
            <TextInput
              placeholder="Search products"
              placeholderTextColor="#adb5bd"
              style={styles.textInput}
              onChangeText={onSearch}
            />
          </View>
          <AntDesign name="scan1" size={20} color="#6c757d" />
        </View>
        <Feather name="mic" size={24} color="#ffffff" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f8f9fa',
    paddingBottom: 10,
    elevation: 3,
  },
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    width: '85%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    flex: 1,
    color: '#495057',
  },
});

export default Header;
