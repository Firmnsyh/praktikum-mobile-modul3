import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halo, {user?.nama}</Text>
      <Text>Anda sudah login menggunakan JWT.</Text>
      <Button title="Lihat Profil" onPress={() => router.push('/profile')} />
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 16 },
  title: { fontSize: 26, fontWeight: '700' },
});