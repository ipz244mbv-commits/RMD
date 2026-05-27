import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  const newsList = [
    { id: 1, title: 'Заголовок новини 1', date: '01.04.2026', text: 'Короткий текст новини 1' },
    { id: 2, title: 'Заголовок новини 2', date: '02.04.2026', text: 'Короткий текст новини 2' },
    { id: 3, title: 'Заголовок новини 3', date: '03.04.2026', text: 'Короткий текст новини 3' },
    { id: 4, title: 'Заголовок новини 4', date: '04.04.2026', text: 'Короткий текст новини 4' },
    { id: 5, title: 'Заголовок новини 5', date: '05.04.2026', text: 'Короткий текст новини 5' },
    { id: 6, title: 'Заголовок новини 6', date: '06.04.2026', text: 'Короткий текст новини 6' },
  ];

  return (
    <ScrollView style={styles.newsContainer}>
      {newsList.map((news) => (
        <View key={news.id} style={styles.newsCard}>
          <Text style={styles.newsTitle}>{news.title}</Text>
          <Text style={styles.newsDate}>{news.date}</Text>
          <Text style={styles.newsText}>{news.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function GalleryScreen() {
  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView>
      <View style={styles.galleryContainer}>
        {photos.map((item) => (
          <View key={item} style={styles.photoCard} />
        ))}
      </View>
    </ScrollView>
  );
}

function ProfileScreen() {
  return (
    <ScrollView style={styles.profileContainer}>
      <Text style={styles.formTitle}>Реєстрація</Text>

      <Text style={styles.inputLabel}>Електронна пошта</Text>
      <TextInput style={styles.inputField} />

      <Text style={styles.inputLabel}>Пароль</Text>
      <TextInput style={styles.inputField} secureTextEntry={true} />

      <Text style={styles.inputLabel}>Пароль (ще раз)</Text>
      <TextInput style={styles.inputField} secureTextEntry={true} />

      <Text style={styles.inputLabel}>Прізвище</Text>
      <TextInput style={styles.inputField} />

      <Text style={styles.inputLabel}>Ім'я</Text>
      <TextInput style={styles.inputField} />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Оновлена шапка з картинкою */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://ztu.edu.ua/wp-content/uploads/2020/05/logo.png' }} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appNameText}>FirstMobileApp</Text>
      </View>

      {/* Оновлена навігація з іконками */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === 'Головна') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Фотогалерея') {
                iconName = focused ? 'image' : 'image-outline';
              } else if (route.name === 'Профіль') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={24} color={color} />;
            },
            tabBarShowIcon: true, 
            tabBarActiveTintColor: '#007bff', 
            tabBarInactiveTintColor: 'gray',  
            tabBarIndicatorStyle: { backgroundColor: '#007bff' },
          })}
        >
          <Tab.Screen name="Головна" component={HomeScreen} />
          <Tab.Screen name="Фотогалерея" component={GalleryScreen} />
          <Tab.Screen name="Профіль" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

      <View style={styles.footer}>
        <Text>Макарчук Богдан, ІПЗ-24-4</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 150,
    height: 40,
  },
  appNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  
  newsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  newsCard: {
    backgroundColor: '#fdfdfd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  newsDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  newsText: {
    fontSize: 14,
    color: '#444',
  },

  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  photoCard: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#fdfdfd',
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});