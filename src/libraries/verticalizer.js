export default function verticalizer (text) {

  const lines = text.split("\n")

  const lineLength = lines.length
  const maxLength = Math.max.apply(null, lines.map(line => line.length))

  const rLines = lines.reverse()
  const vLines = new Array(maxLength).fill("").map((_, c) => {
    return rLines.map((line, l) => `${line[c] || "　"}${l < lineLength-1 ? "　" : ""}`).join("")
  })

  return vLines.join("\n")
}
