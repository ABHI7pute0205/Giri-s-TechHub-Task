// here we get user ne enter kele text
var inputText = document.getElementById("userText");
// this is the box in which we show transalted text
var outputText = document.getElementById("outputBox");

inputText.addEventListener("input", () => {
  // this is just display the text from one box to another box
  //outputText.innerText = inputText.value;

  const text = inputText.value.trim();
  if (text.length === 0) {
    outputText.textContent = "";
    return;
  }

  // use free API for translation text i.e mymemory 
  fetch(
    "https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(text) +
      "&langpair=en|mr"
      // em|mr => (means English → Marathi)
  )
  // API server कडून जे data येते ते JSON format मध्ये असते
// (एक प्रकारचा data structure — key–value format). ही line ते data JavaScript object मध्ये convert करते.
   
  .then((response) => response.json())
    .then((data) => {
      // show translated text
      outputText.textContent = data.responseData.translatedText;
    })
    .catch((error) => {
      console.error("Error:", error);
      outputText.textContent = "⚠️ Translation failed. Try again.";
    });
});
