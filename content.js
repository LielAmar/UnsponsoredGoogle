(function () {
  console.log("Unsponsoring Google :)");

  const unsponsor = () => {
    const spans = document.querySelectorAll("span");

    spans.forEach((span) => {
      if (span.innerText.toLowerCase().includes("sponsored")) {
        const div = span.closest("div").parentElement;

        if (div) {
          div.style.display = "none";
        }
      }
    });
  };

  unsponsor();

  const observer = new MutationObserver(() => {
    unsponsor();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
