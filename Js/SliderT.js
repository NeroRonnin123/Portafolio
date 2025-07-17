 const tecnologias = [
      { nombre: "Visual Studio", descripcion: "C#, VB.NET, C" },
      { nombre: "Android Studio", descripcion: "Kotlin (Nivel básico)" },
      { nombre: "SQL Server", descripcion: "" },
      { nombre: "MySQL", descripcion: "" },
      { nombre: "Git / GitHub", descripcion: "" },
      { nombre: "Angular", descripcion: "" },
      { nombre: "JavaScript", descripcion: "" },
      { nombre: "PowerShell / Batch scripting", descripcion: "" },
      { nombre: "Google Developers", descripcion: "Manejo de consolas" },
      { nombre: "Soporte y análisis", descripcion: "Sistemas en producción" }
    ];

   const slider = document.getElementById("slider");

    tecnologias.forEach(tech => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("div");
      title.className = "tech-title";
      title.textContent = tech.nombre;

      const desc = document.createElement("div");
      desc.className = "tech-desc";
      desc.textContent = tech.descripcion;

      card.appendChild(title);
      if (tech.descripcion) card.appendChild(desc);
      slider.appendChild(card);
    });

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const scrollStep = 230; // ancho estimado de cada card
    let autoScroll;

    function scrollRightOrReset() {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const atEnd = slider.scrollLeft + scrollStep >= maxScroll - 10;

      if (atEnd) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }

    function startAutoScroll() {
      autoScroll = setInterval(scrollRightOrReset, 5000);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    nextBtn.addEventListener("click", scrollRightOrReset);
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    // Iniciar auto scroll al cargar
    startAutoScroll();


    const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode', toggle.checked);
});