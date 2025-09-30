 const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    });

    btnTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });