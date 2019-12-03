const DEFAULT_TEXTS = [
`We will,
we will rock you
We will,
we will rock you`,
`メロスは激怒した。
必ず、かの邪智暴虐の王を
除かなければならぬと決意した。`,
`山路を登りながら、こう考えた。
智に働けば角が立つ。
情に棹させば流される。
意地を通せば窮屈だ。`,
`I'll show you
The Good Feature.`,
`雀の子
そこのけそこのけ
お馬が通る
${'　　　　　'}小林一茶`,
`今日も😃
明日も明後日も😃
だって😃
そりゃもう😃`,
`→→→
${'↑　↓'}
←←←`]

const store = {
  debug: true,
  state: {
    text: DEFAULT_TEXTS[Math.floor(Math.random() * DEFAULT_TEXTS.length)],
  },
  setText: function(text) {
    this.state.text = text
  }
}

export default store
