import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView,
  Alert
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import Toast from 'react-native-root-toast'
import Layout from '../../constants/Layout'
import Colors, { baseBackgroundColor } from '../../constants/Colors'
import unitData, { unitImagePathArray } from '../../constants/UnitData'
import { Badge, Button, Text, Container } from 'native-base'
import { saveMatchRecordToFireStore } from './FireStore'
import {
  primaryColor,
  darkPrimaryColor,
  secondaryColor
} from '../../constants/Colors'
import I18n from '../../constants/I18n'
import {
  showSaveSuccessToast,
  showInvalidRankToast
} from '../Common/Component/OnPressSaveToast'
import RaceSelectButton from './RaceSelectButton.component'
import JobSelectButtons from './JobSelectButtons.component'
import { raceEnum, jobEnum } from '../../constants/synergyData.js'

const SelectedUnitListItem = ({ item, onPressUnitListItem }) => {
  let levelStar = []
  for (i = 0; i < item.level; i++) {
    levelStar.push(<Ionicons name='md-star' size={13} color='orange' />)
  }
  return (
    <TouchableWithoutFeedback onPress={() => onPressUnitListItem(item)}>
      <View style={S.selectedUnitListItemContainer}>
        <View style={S.selectedUnitListItemStarContainer}>{levelStar}</View>
        <Image
          resizeMode='contain'
          style={S.selectedUnitListItemImage}
          source={unitImagePathArray[item.unitId - 1]}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const jobNameList = ['all', ...Object.keys(jobEnum)]
const raceNameList = ['all', ...Object.keys(raceEnum)]

// unitの重複は考えない
export default class SelectUnitsScreen extends React.Component {
  state = {
    unitState: unitData.map(data => ({ ...data, level: 0 })),
    ranking: null,
    // ここで、indexとかで、state内に保存すると、取り回しが面倒。英文字でstateに保存して良いか。
    // 選択肢は三つある。index, name, array of json
    // 迷うことなく、array of jsonが、一番、スケールする。
    // でも、オートチェスモバイルとの兼ね合いで、名前をハードコードすると、色々と大変そう。やっぱりindex保存で良いかな。
    // stateに保存して良いのはUIの更新に使う値だけ。
    // jobの、配列は、不変なので、stateに入れてはいけない。
    selectedRaceButtonsIndex: 0,
    selectedJobButtonsIndex: 0
  }

  onPressUnitListItem = item => {
    const unitState = this.state.unitState.map(unit => {
      if (unit.unitId === item.unitId) {
        return { ...unit, level: (unit.level + 1) % 4 }
      } else {
        return unit
      }
    })
    this.setState({ unitState })
  }

  unitListItem = ({ item }) => {
    let levelStar = []
    for (i = 0; i < item.level; i++) {
      levelStar.push(<Ionicons name='md-star' size={18} color='orange' />)
    }
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressUnitListItem(item)}>
        <View style={S.unitListItemContainer}>
          <View style={S.selectedUnitListItemStarContainer}>{levelStar}</View>
          <Image
            resizeMode='contain'
            style={S.unitListItemImage}
            source={item.imageUrl}
          />
          <Text numberOfLines={2}>{I18n.t(item.unitName)}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  rankingItem = ({ item }) => {
    const isSelected = item === this.state.ranking
    return (
      <Button
        onPress={() => this.onPressRankingItem(item)}
        style={S.rankingButton(isSelected)}
      >
        <Text style={S.rankingButtonText}>{item}位</Text>
      </Button>
    )
  }

  onPressRankingItem = item => {
    this.setState({ ranking: item })
  }

  onPressDecision = unitState => {
    // 無効な、rankの時はreturn
    if (!this.state.ranking) {
      showInvalidRankToast()

      return
    }

    saveMatchRecordToFireStore(unitState, this.state.ranking)
    showSaveSuccessToast()
    // stateをリセット
    this.setState({
      unitState: unitData.map(data => ({ ...data, level: 0 })),
      ranking: null
    })
  }

  onPressGoBackButton = () => this.props.navigation.goBack()

  onPressSelectRaceButton = index => {
    this.setState({ selectedRaceButtonsIndex: index })
  }

  onPressSelectJobButton = index => {
    this.setState({ selectedJobButtonsIndex: index })
  }

  render () {
    const {
      unitState,
      selectedJobButtonsIndex,
      selectedRaceButtonsIndex
    } = this.state
    const selectedUnits = unitState.filter(unit => !(unit.level === 0))

    const filteredUnitsState = unitState
      .filter(unit =>
        unit.job.some(job =>
          jobNameList[selectedJobButtonsIndex] === 'all'
            ? // allの時は、全ユニットを表示
            true
            : job === jobNameList[selectedJobButtonsIndex]
        )
      )
      .filter(unit =>
        unit.race.some(race =>
          raceNameList[selectedRaceButtonsIndex] === 'all'
            ? // all の時は、全ユニットを表示
            true
            : race === raceNameList[selectedRaceButtonsIndex]
        )
      )

    return (
      <SafeAreaView>
        <View style={S.topButtonContainer}>
          <Button style={S.goBackButton} onPress={this.onPressGoBackButton}>
            <Text style={S.doneSelectButtonText}>
              {I18n.t('backButtonText')}
            </Text>
          </Button>
          <Button
            style={S.decisionButton}
            onPress={() => this.onPressDecision(unitState)}
          >
            <Text style={S.doneSelectButtonText}>
              {I18n.t('saveButtonText')}
            </Text>
          </Button>
        </View>

        <View style={S.raceSelectButtonsContainer}>
          <RaceSelectButton
            raceNameList={raceNameList}
            selectedRaceButtonsIndex={selectedRaceButtonsIndex}
            onPressSelectRaceButton={this.onPressSelectRaceButton}
          />
        </View>

        <View style={S.jobSelectButtonsContainer}>
          <JobSelectButtons
            selectedJobButtonsIndex={selectedJobButtonsIndex}
            onPressSelectJobButton={this.onPressSelectJobButton}
          />
        </View>

        <FlatList
          style={S.unitsListContainer}
          numColumns={6}
          data={filteredUnitsState}
          renderItem={this.unitListItem}
          keyExtractor={item => item.unitId}
        />

        <View style={S.selectedUnitsContainer}>
          <Text style={S.text}>{selectedUnits.length}</Text>
          <FlatList
            inverted
            horizontal
            data={selectedUnits}
            renderItem={({ item }) => (
              <SelectedUnitListItem
                item={item}
                onPressUnitListItem={this.onPressUnitListItem}
              />
            )}
            keyExtractor={item => item.unitId}
          />
        </View>

        <View style={S.rankingContainer}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={S.rankingContentContainer}
            numColumns={8}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={this.rankingItem}
            keyExtractor={item => item}
          />
        </View>
      </SafeAreaView>
    )
  }
}

// styleの
const HEADER_HEIGHT = 13
const HEADER_PADDING = 2
const SIDE_BAR_WIDTH = 15

const S = StyleSheet.create({
  topButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: hp(HEADER_HEIGHT),
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  unitListItemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('12.5%'),
    height: wp('15%')
  },
  unitListItemImage: {
    width: Layout.width / 10,
    height: Layout.width / 10
  },
  doneSelectButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  text: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 18
  },
  rankingContentContainer: {
    alignItems: 'center'
  },
  rankingButton: isSelected => ({
    width: (Layout.width * 1) / 10,
    height: 35,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isSelected ? primaryColor : 'gray'
  }),
  rankingButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20
  },
  goBackButton: {
    backgroundColor: primaryColor,
    width: 80,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  decisionButton: {
    backgroundColor: secondaryColor,
    width: 80,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedUnitListItemImage: {
    width: 50,
    height: 50
  },
  selectedUnitListItemContainer: {
    height: wp('8%'),
    width: wp('8%')
  },
  selectedUnitListItemBadgeText: {
    fontSize: 8
  },
  selectedUnitListItemStarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  raceSelectButtonsContainer: {
    position: 'absolute',
    top: hp(HEADER_HEIGHT + HEADER_PADDING),
    left: 0
  },
  jobSelectButtonsContainer: {
    position: 'absolute',
    top: hp(HEADER_HEIGHT + HEADER_PADDING),
    left: wp(SIDE_BAR_WIDTH)
  },
  unitsListContainer: {
    position: 'absolute',
    top: hp(HEADER_HEIGHT + HEADER_PADDING + 18),
    left: wp(SIDE_BAR_WIDTH),
    height: hp('50%')
  },
  selectedUnitsContainer: {
    position: 'absolute',
    top: hp('80%'),
    left: wp(SIDE_BAR_WIDTH),
    flexDirection: 'row',
    alignItems: 'center'
  },
  rankingContainer: {
    position: 'absolute',
    top: hp('90%'),
    left: wp(SIDE_BAR_WIDTH)
  }
})
