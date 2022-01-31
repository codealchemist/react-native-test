import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled(View)`
  background: #0077b6;
  color: white;
  padding: 5px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

const StyledText = styled(Text)`
  font-size: 10px;
`

const Badge = ({ value }) => (
  <StyledView>
    <StyledText>{value}</StyledText>
  </StyledView>
)

export default Badge
