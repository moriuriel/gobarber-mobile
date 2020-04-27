import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Olá Dashboard</Text>
      <Button title="Sair" onPress={singOut} />
    </View>
  );
};
export default Dashboard;
