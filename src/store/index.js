const DEFAULT_TEXT = `a-b-c
引きずる笑顔が
200kgで
右手を刺す`

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
