const DEFAULT_TEXT = `山路を登りながら、こう考えた。
智に働けば角が立つ。
情に棹させば流される。
意地を通せば窮屈だ。
とかくに人の世は住みにくい。`

const store = {
  debug: true,
  state: {
    text: DEFAULT_TEXT,
  },
  setText: function(text) {
    this.state.text = text
  }
}

export default store
