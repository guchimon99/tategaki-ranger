/* eslint no-irregular-whitespace: ["error", {"skipRegExps": true}] */

const vc = (c) => {

  c = c.replace(/[!-~]/g, c => String.fromCharCode( c.charCodeAt(0) + 0xFEE0 ))

  switch (c) {
    case "," : return "，"
    case " " : return "　"
    case "-": return "｜"
    case "ー": return "｜"
    default : return c
  }
}

export default function verticalizer (text) {

  const lines = text.split("\n")

  const lineLength = lines.length
  const maxLength = Math.max.apply(null, lines.map(line => line.length))

  const rLines = lines.reverse()
  const vLines = new Array(maxLength).fill("").map((_, ci) => {
    return rLines.map((line, li) => {
      var c = vc(line[ci] || "　")
      if (li < lineLength - 1) {
        c += "　"
      }
      return c
    }).join("")
  })

  var verticalized = vLines.join("\n")
  verticalized = verticalized.replace(/^　/, "．")

  return verticalized
}
