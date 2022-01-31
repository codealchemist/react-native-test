import { Text, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import BaseView from '../components/BaseView'
import UsersList from '../components/UsersList'
import githubApi from '../api/github'

const topUsers = [
  'GrahamCampbell',
  'fabpot',
  'weierophinney',
  'rkh',
  'josh',
  'codealchemist'
]

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([])

  async function loadTopGithubUsers() {
    try {
      const data = await githubApi.getMultipleUsers(topUsers)
      setData(data)
    } catch (error) {
      console.log('[ HomeScreen.loadTopGithubUsers ] ERROR:', error)
      alert('Oops! Something went wrong retrieving Github top useres.')
    }
  }

  useEffect(() => {
    loadTopGithubUsers()
  }, [])

  return (
    <BaseView>
      {data?.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <UsersList users={data} navigation={navigation} />
      )}
    </BaseView>
  )
}

export default HomeScreen
