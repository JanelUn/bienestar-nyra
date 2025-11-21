import { View } from 'react-native';

export function LogoImage({
  width = 80,
  height = 30,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center', height }]} />
  );
}
