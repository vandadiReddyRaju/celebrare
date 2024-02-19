function applyStyles() {
    let fontStyle = document.getElementById("font-style").value;
    let fontSize = document.getElementById("font-size").value + "px";
    let textColor = document.getElementById("text-color").value;
    let inputText = document.getElementById("input-text").value;
    let outputText = document.getElementById("outputText");

    outputText.style.fontFamily = fontStyle;
    outputText.style.fontSize = fontSize;
    outputText.style.color = textColor;
    outputText.textContent = inputText;
}