const DEFAULT_TEXT = `サッカー
ワールドカップ
ルーマニア大会`

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
