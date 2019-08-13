import { en } from '../constants/I18n'
import { jobEnum as job } from './synergyData'

const unitNameEnum = {
  // エアフォ
  mortus: 'mortus',
  dauntless: 'dauntless',
  cruiser: 'cruiser',
  engineer: 'engineer',

  // ビースト
  razorclaw: 'razorclaw',
  goldmane: 'goldmane',
  dreadpaw: 'dreadpaw',
  soulmentor: 'soulmentor',
  acidtooth: 'acidtooth',
  skyclaw: 'skyclaw',
  tusker: 'tusker',

  // イモータル
  bonewyrn: 'bonewyrn',
  vinewarden: 'vinewarden',
  soulTaker: 'soulTaker',
  forestRager: 'forestRager',

  // インセクトイド
  kamikaze: 'kamikaze',
  hiveQueen: 'hiveQueen',
  mindbreaker: 'mindbreaker',
  oculus: 'oculus',

  // クラーケン
  siren: 'siren',
  mirageCaller: 'mirageCaller',
  skycrab: 'skycrab',
  electrocutioner: 'electrocutioner',
  mantakor: 'mantakor',

  // マリーン
  paviser: 'paviser',
  commando: 'commando',
  sniper: 'sniper',
  grenadier: 'grenadier',
  medic: 'medic',
  dragonBreath: 'dragonBreath',

  // メカ
  sentinel: 'sentinel',
  gorilla: 'gorilla',
  hailstorm: 'hailstorm',
  marauder: 'marauder',
  catapult: 'catapult',

  // パンダ
  shurikenPanda: 'shurikenPanda',
  chanMaster: 'chanMaster',
  pandaMonk: 'pandaMonk',

  // サイカー
  hierophant: 'hierophant',
  ironshell: 'ironshell',
  thunderer: 'thunderer',
  illusionist: 'illusionist',
  chanter: 'chanter',

  // パペット
  keenedge: 'keenedge',
  bulwark: 'bulwark',
  // illusionist: 'illusionist',
  // mantakor: 'mantakor',
  blademaster: 'blademaster',
  slasher: 'slasher',
  warbringer: 'warbringer',

  // ラプター
  sunfire: 'sunfire',
  direwing: 'direwing',
  // bonewyrn: 'bonewyrn',
  devourer: 'devourer',
  // skyclaw: 'skyclaw',

  // ライダー
  ironbirdRider: 'ironbirdRider',
  outrider: 'outrider',

  // ウォーカー
  vajra: 'vajra',
  arhat: 'arhat',
  tempestKeeper: 'tempestKeeper'
}

const unitData = [
  {
    unitId: 1,
    unitName: unitNameEnum.tusker,
    race: [en.beast],
    job: [job.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit1.jpeg')
  },
  {
    unitId: 2,
    unitName: unitNameEnum.acidtooth,
    race: [en.beast],
    job: [job.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit2.jpeg')
  },
  {
    unitId: 3,
    unitName: unitNameEnum.keenedge,
    race: [en.puppet],
    job: [job.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit3.jpeg')
  },
  {
    unitId: 4,
    unitName: unitNameEnum.chanter,
    race: [en.psyker],
    job: [job.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit4.jpeg')
  },
  {
    unitId: 5,
    unitName: unitNameEnum.hierophant,
    race: [en.psyker],
    job: [job.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit5.jpeg')
  },
  {
    unitId: 6,
    unitName: unitNameEnum.sniper,
    race: [en.marine],
    job: [job.longShot],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit6.jpeg')
  },
  {
    unitId: 7,
    unitName: unitNameEnum.medic,
    race: [en.marine],
    job: [job.supporter],
    class: 'supporter',
    imageUrl: '../assets/images/unit7.jpeg'
  },
  {
    unitId: 8,
    unitName: unitNameEnum.ironbirdRider,
    race: [en.rider],
    job: [job.longShot],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit8.jpeg')
  },
  {
    unitId: 9,
    unitName: unitNameEnum.marauder,
    race: [en.mech],
    job: [job.blaster],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit9.jpeg')
  },
  {
    unitId: 10,
    unitName: unitNameEnum.oculus,
    race: [en.insectoid],
    job: [job.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit10.jpeg')
  },
  {
    unitId: 11,
    unitName: unitNameEnum.razorclaw,
    race: [en.beast],
    job: [job.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit11.jpeg')
  },
  {
    unitId: 12,
    unitName: unitNameEnum.pandaMonk,
    race: [en.panda],
    job: [job.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit12.jpeg')
  },
  {
    unitId: 13,
    unitName: unitNameEnum.illusionist,
    race: [en.psyker],
    job: [job.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit13.jpeg')
  },
  {
    unitId: 14,
    unitName: unitNameEnum.siren,
    race: [en.kraken],
    job: [job.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit14.jpeg')
  },
  {
    unitId: 15,
    unitName: unitNameEnum.thunderer,
    race: [en.psyker],
    job: [job.longShot],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit15.jpeg')
  },
  {
    unitId: 16,
    unitName: unitNameEnum.vajra,
    race: [en.walker],
    job: [job.guardian],
    class: 'タンク、ベーシックアタック',
    imageUrl: require('../assets/images/unit16.jpeg')
  },
  {
    unitId: 17,
    unitName: unitNameEnum.blademaster,
    race: [en.puppet],
    job: [job.vanguard],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit17.jpeg')
  },
  {
    unitId: 18,
    unitName: unitNameEnum.skycrab,
    race: [en.kraken],
    job: [job.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit18.jpeg')
  },
  {
    unitId: 19,
    unitName: unitNameEnum.gorilla,
    race: [en.mech],
    job: [job.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit19.jpeg')
  },
  {
    unitId: 20,
    unitName: unitNameEnum.dragonBreath,
    race: [en.marine],
    job: [job.vanguard],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit20.jpeg')
  },
  {
    unitId: 21,
    unitName: unitNameEnum.paviser,
    race: [en.marine],
    job: [job.guardian],
    class: 'タンク',
    imageUrl: require('../assets/images/unit21.jpeg')
  },
  {
    unitId: 22,
    unitName: unitNameEnum.kamikaze,
    race: [en.insectoid],
    job: [job.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit22.jpeg')
  },
  {
    unitId: 23,
    unitName: unitNameEnum.vinewarden,
    race: [en.immortal],
    job: [job.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit23.jpeg')
  },
  {
    unitId: 24,
    unitName: unitNameEnum.slasher,
    race: [en.puppet],
    job: [job.vanguard],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit24.jpeg')
  },
  {
    unitId: 25,
    unitName: unitNameEnum.electrocutioner,
    race: [en.kraken],
    job: [job.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit25.jpeg')
  },
  {
    unitId: 26,
    unitName: unitNameEnum.arhat,
    race: [en.walker],
    job: [job.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit26.jpeg')
  },
  {
    unitId: 27,
    unitName: unitNameEnum.catapult,
    race: [en.mech],
    job: [job.siegeBreaker],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit27.jpeg')
  },
  {
    unitId: 28,
    unitName: unitNameEnum.outrider,
    race: [en.rider],
    job: [job.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit28.jpeg')
  },
  {
    unitId: 29,
    unitName: unitNameEnum.dauntless,
    race: [en.airForce],
    job: [job.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit29.jpeg')
  },
  {
    unitId: 30,
    unitName: unitNameEnum.engineer,
    race: [en.airForce],
    job: [job.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit30.jpeg')
  },
  {
    unitId: 31,
    unitName: unitNameEnum.commando,
    race: [en.marine],
    job: [job.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit31.jpeg')
  },
  {
    unitId: 32,
    unitName: unitNameEnum.mortus,
    race: [en.airForce],
    job: [job.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit32.jpeg')
  },
  {
    unitId: 33,
    unitName: unitNameEnum.dreadpaw,
    race: [en.beast],
    job: [job.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit33.jpeg')
  },
  {
    unitId: 34,
    unitName: unitNameEnum.mindbreaker,
    race: [en.insectoid],
    job: [job.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit34.jpeg')
  },
  {
    unitId: 35,
    unitName: unitNameEnum.direwing,
    race: [en.rapter],
    job: [job.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit35.jpeg')
  },
  {
    unitId: 36,
    unitName: unitNameEnum.skyclaw,
    race: [en.rapter, en.beast],
    job: [job.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit36.jpeg')
  },
  {
    unitId: 37,
    unitName: unitNameEnum.shurikenPanda,
    race: [en.panda],
    job: [job.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit37.jpeg')
  },
  {
    unitId: 38,
    unitName: unitNameEnum.goldmane,
    race: [en.beast],
    job: [job.guardian],
    class: 'コントロール、タンク',
    imageUrl: require('../assets/images/unit38.jpeg')
  },
  {
    unitId: 39,
    unitName: unitNameEnum.sunfire,
    race: [en.rapter],
    job: [job.blaster, job.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit39.jpeg')
  },
  {
    unitId: 40,
    unitName: unitNameEnum.bulwark,
    race: [en.puppet],
    job: [job.guardian],
    class: 'タンク',
    imageUrl: require('../assets/images/unit40.jpeg')
  },
  {
    unitId: 41,
    unitName: unitNameEnum.tempestKeeper,
    race: [en.walker],
    job: [job.siegeBreaker],
    class: 'アビリティダメージ、コントロール',
    imageUrl: require('../assets/images/unit41.jpeg')
  },
  {
    unitId: 42,
    unitName: unitNameEnum.mantakor,
    race: [en.puppet, en.kraken],
    job: [job.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit42.jpeg')
  },
  {
    unitId: 43,
    unitName: unitNameEnum.warbringer,
    race: [en.puppet],
    job: [job.guardian],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit43.jpeg')
  },
  {
    unitId: 44,
    unitName: unitNameEnum.grenadier,
    race: [en.marine],
    job: [job.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit44.jpeg')
  },
  {
    unitId: 45,
    unitName: unitNameEnum.sentinel,
    race: [en.mech],
    job: [job.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit45.jpeg')
  },
  {
    unitId: 46,
    unitName: unitNameEnum.cruiser,
    race: [en.airForce],
    job: [job.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit46.jpeg')
  },
  {
    unitId: 47,
    unitName: unitNameEnum.soulmentor,
    race: [en.beast],
    job: [job.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit47.jpeg')
  },
  {
    unitId: 48,
    unitName: unitNameEnum.hiveQueen,
    race: [en.insectoid],
    job: [job.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit48.jpeg')
  },
  {
    unitId: 49,
    unitName: unitNameEnum.bonewyrn,
    race: [en.rapter, en.immortal],
    job: [job.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit49.jpeg')
  },
  {
    unitId: 50,
    unitName: unitNameEnum.chanMaster,
    race: [en.panda],
    job: [job.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit50.jpeg')
  },
  {
    unitId: 51,
    unitName: unitNameEnum.mirageCaller,
    race: [en.kraken],
    job: [job.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit51.jpeg')
  },
  {
    unitId: 52,
    unitName: unitNameEnum.hailstorm,
    race: [en.mech],
    job: [job.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit52.jpeg')
  },
  {
    unitId: 53,
    unitName: unitNameEnum.devourer,
    race: [en.rapter],
    job: [job.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit53.jpeg')
  },
  {
    unitId: 54,
    unitName: unitNameEnum.forestRager,
    race: [en.immortal],
    job: [job.vanguard],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit54.jpeg')
  },
  {
    unitId: 55,
    unitName: unitNameEnum.ironshell,
    race: [en.psyker],
    job: [job.guardian],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit55.png')
  },
  {
    unitId: 56,
    unitName: unitNameEnum.soulTaker,
    race: [en.immortal],
    job: [job.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit56.png')
  }
]

// Don't use map!
export const unitImagePathArray = [
  require('../assets/images/unit1.jpeg'),
  require('../assets/images/unit2.jpeg'),
  require('../assets/images/unit3.jpeg'),
  require('../assets/images/unit4.jpeg'),
  require('../assets/images/unit5.jpeg'),
  require('../assets/images/unit6.jpeg'),
  require('../assets/images/unit7.jpeg'),
  require('../assets/images/unit8.jpeg'),
  require('../assets/images/unit9.jpeg'),
  require('../assets/images/unit10.jpeg'),
  require('../assets/images/unit11.jpeg'),
  require('../assets/images/unit12.jpeg'),
  require('../assets/images/unit13.jpeg'),
  require('../assets/images/unit14.jpeg'),
  require('../assets/images/unit15.jpeg'),
  require('../assets/images/unit16.jpeg'),
  require('../assets/images/unit17.jpeg'),
  require('../assets/images/unit18.jpeg'),
  require('../assets/images/unit19.jpeg'),
  require('../assets/images/unit20.jpeg'),
  require('../assets/images/unit21.jpeg'),
  require('../assets/images/unit22.jpeg'),
  require('../assets/images/unit23.jpeg'),
  require('../assets/images/unit24.jpeg'),
  require('../assets/images/unit25.jpeg'),
  require('../assets/images/unit26.jpeg'),
  require('../assets/images/unit27.jpeg'),
  require('../assets/images/unit28.jpeg'),
  require('../assets/images/unit29.jpeg'),
  require('../assets/images/unit30.jpeg'),
  require('../assets/images/unit31.jpeg'),
  require('../assets/images/unit32.jpeg'),
  require('../assets/images/unit33.jpeg'),
  require('../assets/images/unit34.jpeg'),
  require('../assets/images/unit35.jpeg'),
  require('../assets/images/unit36.jpeg'),
  require('../assets/images/unit37.jpeg'),
  require('../assets/images/unit38.jpeg'),
  require('../assets/images/unit39.jpeg'),
  require('../assets/images/unit40.jpeg'),
  require('../assets/images/unit41.jpeg'),
  require('../assets/images/unit42.jpeg'),
  require('../assets/images/unit43.jpeg'),
  require('../assets/images/unit44.jpeg'),
  require('../assets/images/unit45.jpeg'),
  require('../assets/images/unit46.jpeg'),
  require('../assets/images/unit47.jpeg'),
  require('../assets/images/unit48.jpeg'),
  require('../assets/images/unit49.jpeg'),
  require('../assets/images/unit50.jpeg'),
  require('../assets/images/unit51.jpeg'),
  require('../assets/images/unit52.jpeg'),
  require('../assets/images/unit53.jpeg'),
  require('../assets/images/unit54.jpeg'),
  // pngが混ざるので注意。
  require('../assets/images/unit55.png'),
  require('../assets/images/unit56.png')
]

export default unitData
