let poprawne = 0;

function klik(img) {
  if (img.dataset.correct === "true" && !img.classList.contains("wybrany")) {
    img.classList.add("wybrany");
    poprawne++;

    if (poprawne === 3) {
      document.getElementById("info").textContent = "🎉 Świetnie! Znalazłeś wszystkie produkty spożywcze!";
      document.getElementById("info").style.color = "green";
    }
  } else if (img.dataset.correct === "false") {
    img.classList.add("wybrany");
    document.getElementById("info").textContent = "❌ To nie produkt spożywczy!";
    document.getElementById("info").style.color = "red";
  }
}
