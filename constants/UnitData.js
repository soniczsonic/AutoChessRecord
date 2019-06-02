const unitData = [
  {
    id: 1,
    unitName: 'ゾウ',
    race: 'ビースト',
    job: 'ヴァンガード',
    class: 'タンク'
  },
  {
    id: 2,
    unitName: '酸の歯',
    race: 'ビースト',
    job: 'ヴァンガード',
    class: 'タンク'
  },
  {
    id: 3,
    unitName: '鋭いエッジ',
    race: 'パペット',
    job: 'アサシン',
    class: 'ベーシックアタック'
  },
  {
    id: 4,
    unitName: '歌手',
    race: 'サイカー',
    job: 'サポーター',
    class: 'サポーター'
  },
  {
    id: 5,
    unitName: '法王',
    race: 'サイカー',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 6,
    unitName: '狙撃兵',
    race: '海兵',
    job: 'ロングショット',
    class: 'ベーシックアタック'
  },
  {
    id: 7,
    unitName: '医者',
    race: '海兵',
    job: 'サポーター',
    class: 'サポーター'
  },
  {
    id: 8,
    unitName: 'アイアンバードライダー',
    race: 'ライダー',
    job: 'ロングショット',
    class: 'ベーシックアタック'
  },
  {
    id: 9,
    unitName: '略奪者',
    race: 'メカ',
    job: 'ブラスター',
    class: 'コントロール'
  },
  {
    id: 10,
    unitName: '目玉の男',
    race: 'スペシャリスト',
    job: 'スペシャリスト',
    class: 'コントロール'
  },
  {
    id: 11,
    unitName: 'レーザーの爪',
    race: 'ビースト',
    job: 'アサシン',
    class: 'ベーシックアタック'
  },
  {
    id: 12,
    unitName: 'パンダ僧',
    race: 'パンダ',
    job: 'ヴァンガード',
    class: 'タンク'
  },
  {
    id: 13,
    unitName: '手品師',
    race: 'サイカー',
    job: 'サモナー',
    class: '召喚'
  },
  {
    id: 14,
    unitName: 'セイレーン',
    race: 'クラーケン',
    job: 'アサシン',
    class: 'アビリティダメージ'
  },
  {
    id: 15,
    unitName: '雷を呼ぶ者',
    race: 'サイカー',
    job: 'ロングショット',
    class: 'レイトゲームキャリー'
  },
  {
    id: 16,
    unitName: '金剛杵',
    race: 'ウォーカー',
    job: 'ガーディアン',
    class: 'タンク、ベーシックアタック'
  },
  {
    id: 17,
    unitName: '刃のマスター',
    race: 'パペット',
    job: 'ヴァンガード',
    class: 'アビリティダメージ'
  },
  {
    id: 18,
    unitName: '空のカニ',
    race: 'クラーケン',
    job: 'シエージュブレイカー',
    class: 'アビリティダメージ'
  },
  {
    id: 19,
    unitName: 'ゴリラ',
    race: 'メカ',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 20,
    unitName: 'ドラゴンの息',
    race: '海兵',
    job: 'ヴァンガード',
    class: 'アビリティダメージ'
  },
  {
    id: 21,
    unitName: '大盾の歩兵',
    race: '海兵',
    job: 'ガーディアン',
    class: 'タンク'
  },
  {
    id: 22,
    unitName: 'カミカゼ',
    race: 'インセクトイド',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 23,
    unitName: '緑の大男',
    race: 'イモータル',
    job: 'スペシャリスト',
    class: 'コントロール'
  },
  {
    id: 24,
    unitName: '暗殺剣士',
    race: 'パペット',
    job: 'ヴァンガード',
    class: 'ベーシックアタック'
  },
  {
    id: 25,
    unitName: '嵐を呼ぶ者',
    race: 'クラーケン',
    job: 'スペシャリスト',
    class: 'アビリティダメージ'
  },
  {
    id: 26,
    unitName: '阿羅漢',
    race: 'ウォーカー',
    job: 'ロングショット',
    class: 'アビリティダメージ'
  },
  {
    id: 27,
    unitName: '石弓',
    race: 'メカ',
    job: 'シエージュブレイカー',
    class: 'レイトゲームキャリー'
  },
  {
    id: 28,
    unitName: '先導者',
    race: 'ライダー',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 29,
    unitName: '恐れを知らぬ者',
    race: 'エアフォース',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 30,
    unitName: '技術者',
    race: 'エアフォース',
    job: 'サポーター',
    class: 'サポーター'
  },
  {
    id: 31,
    unitName: 'ゲリラ隊',
    race: '海兵',
    job: 'ロングショット',
    class: 'アビリティダメージ'
  },
  {
    id: 32,
    unitName: '半魚人',
    race: 'エアフォース',
    job: 'アサシン',
    class: 'ベーシックアタック'
  },
  {
    id: 33,
    unitName: '悪魔の手',
    race: 'ビースト',
    job: 'サモナー',
    class: '召喚'
  },
  {
    id: 34,
    unitName: 'クモ',
    race: 'インセクトイド',
    job: 'スペシャリスト',
    class: 'コントロール'
  },
  {
    id: 35,
    unitName: 'オオコウモリ',
    race: 'ラプター',
    job: 'ロングショット',
    class: 'アビリティダメージ'
  },
  {
    id: 36,
    unitName: 'ワシ',
    race: 'ラプター、ビースト',
    job: 'ヴァンガード',
    class: 'タンク'
  },
  {
    id: 37,
    unitName: 'シュリケンパンダ',
    race: 'パンダ',
    job: 'アサシン',
    class: 'アビリティダメージ'
  },
  {
    id: 38,
    unitName: '黄金の鬣',
    race: 'ビースト',
    job: 'ガーディアン',
    class: 'コントロール、タンク'
  },
  {
    id: 39,
    unitName: 'フェニックス',
    race: 'ラプター',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 40,
    unitName: '塁壁',
    race: 'パペット',
    job: 'ガーディアン',
    class: 'タンク'
  },
  {
    id: 41,
    unitName: '嵐の守護者',
    race: 'ウォーカー',
    job: 'シエージュブレイカー',
    class: 'アビリティダメージ、コントロール'
  },
  {
    id: 42,
    unitName: 'シュメールの神',
    race: 'パペット、クラーケン',
    job: 'サモナー',
    class: '召喚'
  },
  {
    id: 43,
    unitName: '戦を呼ぶ者',
    race: 'パペット',
    job: 'ガーディアン',
    class: 'レイトゲームキャリー'
  },
  {
    id: 44,
    unitName: 'てき弾兵',
    race: '海兵',
    job: 'スペシャリスト',
    class: 'コントロール'
  },
  {
    id: 45,
    unitName: '見張り',
    race: 'メカ',
    job: 'アサシン',
    class: 'ベーシックアタック'
  },
  {
    id: 46,
    unitName: '巡視船',
    race: 'エアフォース',
    job: 'シエージュブレイカー',
    class: 'アビリティダメージ'
  },
  {
    id: 47,
    unitName: '魂の導師',
    race: 'ビースト',
    job: 'サポーター',
    class: 'サポーター'
  },
  {
    id: 48,
    unitName: '巣箱の女王',
    race: 'インセクトイド',
    job: 'ロングショット',
    class: 'アビリティダメージ'
  },
  {
    id: 49,
    unitName: '骨の竜',
    race: 'ラプター、イモータル',
    job: 'シエージュブレイカー',
    class: 'アビリティダメージ'
  },
  {
    id: 50,
    unitName: 'チャン・マスター',
    race: 'パンダ',
    job: 'スペシャリスト',
    class: 'アビリティダメージ'
  },
  {
    id: 51,
    unitName: 'クジラ',
    race: 'クラーケン',
    job: 'シエージュブレイカー',
    class: 'アビリティダメージ'
  },
  {
    id: 52,
    unitName: '嵐',
    race: 'メカ',
    job: 'ブラスター',
    class: 'アビリティダメージ'
  },
  {
    id: 53,
    unitName: '食らう者',
    race: 'ラプター',
    job: 'スペシャリスト',
    class: 'コントロール'
  },
  {
    id: 54,
    unitName: '木の芽の竜',
    race: 'イモータル',
    job: 'ヴァンガード',
    class: 'コントロール'
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
  require('../assets/images/unit54.jpeg')
]

export default unitData
