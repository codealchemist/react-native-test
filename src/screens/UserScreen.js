import { View, Text, Image, Linking } from 'react-native'
import { useCallback } from 'react'
import styled from 'styled-components/native'
import { Icon, Button } from 'react-native-elements'

const StyledView = styled(View)`
  width: 100%;
  height: 100%;
  padding: 20px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 50%;
`

const NormalText = styled(Text)`
  font-size: 20px;
  padding: 10px 0;
  color: #eee;
`

const HighlightedText = styled(NormalText)`
  background: #0077b6;
  padding: 10px;
  text-align: center;
  justify-content: center;
  width: 100%;
`

const ExternalActionContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const defaultAvatar =
  'https://nesea.org/sites/default/files/user-icon-default_1185.png'

const PersonScreen = ({ route, navigation }) => {
  const { name, avatar_url, html_url, location, login } = route.params || {}
  const avatar = avatar_url || defaultAvatar
  const avatarSource = { uri: avatar }

  const openProfile = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(html_url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http/https" the web link should be opened
      // by some browser in the mobile.
      await Linking.openURL(html_url)
    } else {
      alert(`Don't know how to open this URL: ${html_url}`)
    }
  }, [html_url])

  return (
    <StyledView>
      <StyledImage source={avatarSource} />
      <HighlightedText>{name}</HighlightedText>
      <NormalText>@{login}</NormalText>
      <NormalText>{location}</NormalText>
      <ExternalActionContainer>
        <Button
          title="Open Profile"
          icon={{ name: 'external-link', type: 'feather' }}
          onPress={() => openProfile()}
        />
      </ExternalActionContainer>
    </StyledView>
  )
}

export default PersonScreen
