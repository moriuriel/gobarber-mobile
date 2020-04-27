import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  margin-top: 6px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 16px;
  color: #312e38;
`;
