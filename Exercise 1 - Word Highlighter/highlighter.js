const paragraph = document.getElementById("myParagraph");
const words = paragraph.innerText.split(/\s+/);
let counts = {};

for (let i = 0; i < words.length; i++) {
  const word = words[i].toLowerCase();
  if (counts[word]) {
    counts[word]++;
  } else {
    counts[word] = 1;
  }
}

const sorted = Object.entries(counts).sort((a, b) => {
  return b[1] - a[1];
});

for (let i = 0; i < sorted.length && i < 5; i++) {
  const word = sorted[i][0];
  const regex = new RegExp(`\\b${word}\\b`, "gi");
  paragraph.innerHTML = paragraph.innerHTML.replace(
    regex,
    `<mark>${word}</mark>`
  );
}

const underline = words.filter((word) => {
  return /^[A-Z]/.test(word);
});

for (let i = 0; i < underline.length; i++) {
  const word = underline[i];
  const regex = new RegExp(`\\b${word}\\b`, "gi");
  paragraph.innerHTML = paragraph.innerHTML.replace(regex, `<u>${word}</u>`);
}
