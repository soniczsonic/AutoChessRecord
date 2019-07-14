import React, { useState, useEffect } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import {
  BackGround,
  separateLineGray,
  baseBackgroundColor
} from '../constants/Colors'
import { synergyImagePathArray } from '../constants/synergyData'
import I18n from '../constants/I18n'
import { getYourWinRateOfSynergy } from '../fireStore/YourSynergyWinRateORM'

// import View from '../utils/cView'

const mockData = [
  {
    synergy: 'assassin',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: 'assassin',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: 'assassin',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: 'assassin',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: 'assassin',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  }
]

const useMyPageScreenState = () => {
  const [isLoading, setIsLoadingAsFalse] = useState(true)
  const [yourSynergyAverageWinRate, setYourSynergyAverageWinRate] = useState(
    null
  )
  useEffect(
    async () => {
      const response = await getYourWinRateOfSynergy()
      setYourSynergyAverageWinRate(response)
    },
    [yourSynergyAverageWinRate]
  )

  return { isLoading, yourSynergyAverageWinRate }
}

const MyPageScreen = props => {
  const { isLoading, yourSynergyAverageWinRate } = useMyPageScreenState()
  console.log({ yourSynergyAverageWinRate })
  return (
    <View style={styles.container}>
      {/* <Text style={styles.comingSoonText}>よく使うシナジー</Text> */}
      <FlatList
        data={mockData}
        contentContainerStyle={styles.synergyTableWrapper}
        renderItem={({ item }) => (
          <View style={styles.synergyTableListItem}>
            <View style={styles.synergyTableListItemSynergyWrapper}>
              <Image
                source={require('../assets/images/assassin.png')}
                style={styles.smallSynergyIcon}
              />
              <Text>{I18n.t(item.synergy)}</Text>
            </View>
            <View style={styles.myAverageRankWrapper}>
              <Text>{item.myAverageRankOfSynergy}</Text>
            </View>
            <View style={styles.allUserAverageRankOfSynergy}>
              <Text>{item.allUserAverageRankOfSynergy}</Text>
            </View>
            <View style={styles.totalPlayCountWrapper}>
              <Text>{item.totalPlayCount}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.synergyTableHeaderWrapper}>
            <View style={styles.synergyTableListHeaderWrapper}>
              <Text>{I18n.t('synergy')}</Text>
            </View>
            <View style={styles.myAverageRankWrapper}>
              <Text>{I18n.t('yourAverageText')}</Text>
            </View>
            <View style={styles.allUserAverageRankOfSynergy}>
              <Text>{I18n.t('averageOfAllUserText')}</Text>
            </View>
            <View style={styles.totalPlayCountWrapper}>
              <Text>{I18n.t('playCountText')}</Text>
            </View>
          </View>
        }
      />
    </View>
  )
}

const baseStyles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('20%')
    // borderLeftWidth: 1,
    // borderTopWidth: 1
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseBackgroundColor
  },
  synergyTableWrapper: {
    paddingTop: hp('5%')
  },
  baseText: {
    fontSize: 20
  },
  comingSoonText: {
    fontSize: 25
  },
  synergyTableListItem: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderColor: separateLineGray
  },
  synergyTableHeaderWrapper: {
    flexDirection: 'row',
    height: 50
    // borderTopWidth: 1
  },
  synergyTableListHeaderWrapper: {
    ...baseStyles.cell,
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderColor: separateLineGray
  },
  synergyTableListItemSynergyWrapper: {
    ...baseStyles.cell,
    flexDirection: 'row',
    borderRightWidth: 1,
    borderColor: separateLineGray
  },
  myAverageRankWrapper: {
    ...baseStyles.cell
  },
  allUserAverageRankOfSynergy: {
    ...baseStyles.cell
  },
  totalPlayCountWrapper: {
    ...baseStyles.cell
  },
  listHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  smallSynergyIcon: {
    height: 20,
    width: 20,
    marginRight: 10
  }
})

export default MyPageScreen
