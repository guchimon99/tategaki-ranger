export function verticalizeCharactor(charactor: string) {
  charactor = charactor.replace(/[!-~]/g, (charactor) =>
    String.fromCharCode(charactor.charCodeAt(0) + 0xfee0)
  );

  switch (charactor) {
    case ",":
      return "，";
    case " ":
      return "　";
    case "-":
      return "｜";
    case "ー":
      return "｜";
    case "→":
      return "↓";
    case "↓":
      return "←";
    case "←":
      return "↑";
    case "↑":
      return "→";
    default:
      return charactor;
  }
}

export function verticalize(text: string) {
  const lines = text.split("\n").map((l) => Array.from(l));

  const lineLength = lines.length;
  const maxLength = Math.max.apply(
    null,
    lines.map((line) => line.length)
  );

  const rLines = lines.reverse();
  const vLines = new Array(maxLength).fill("").map((_, ci) => {
    return rLines
      .map((line, li) => {
        let c = verticalizeCharactor(line[ci] || "　");
        if (li < lineLength - 1) {
          c += line[ci] && line[ci].length > 1 ? "  " : "　";
        }
        return c;
      })
      .join("");
  });

  let verticalized = vLines.join("\n");
  // eslint-disable-next-line no-irregular-whitespace
  verticalized = verticalized.replace(/^　/, "．");

  return verticalized;
}
