import { FlatList, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'
import Badge from './Badge'

const StyledView = styled(View)`
  background: #33333350;
  color: #eee;
  padding: 20px 10px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee75;
  flex-direction: row;
  align-items: center;
`

const StyledText = styled(Text)`
  flex: 1;
  margin-left: 10px;
`

const renderItem = ({ obj: { index, item }, navigation }) => (
  <StyledView>
    <Badge value={index + 1} />
    <StyledText onPress={(i) => navigation.navigate('User', item)}>
      {item.name} ({item.login})
    </StyledText>
    <Icon name="chevron-right" type="evilicon" color="#0077b6" />
  </StyledView>
)

const UsersList = ({ navigation, users }) => (
  <FlatList
    data={users}
    renderItem={(obj) => renderItem({ obj, navigation })}
    keyExtractor={(item) => item.id}
  />
)

export default UsersList
