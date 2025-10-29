/* =====================================================
   Portfolio Interactivity - Sanci Chauhan
   ===================================================== */

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Smooth Scroll for Nav Links ---------- */
  const navLinks = document.querySelectorAll(".nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  /* ---------- Section Reveal on Scroll ---------- */
  const revealElements = document.querySelectorAll(".section-title, .project-card, .skill, .education-card, .profile-card");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run initially

  /* ---------- Modal Logic for Projects ---------- */
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeModalBtn = document.getElementById("close-modal");
  const projectLinks = document.querySelectorAll(".view-btn");

  const projectDetails = {
    grabit: {
      title: "GrabIt Interactive Dashboard",
      body: `
        <p><strong>Overview:</strong> Built using Excel’s Power Query and visualization tools, 
        this interactive dashboard helps analyze order performance, delivery efficiency, 
        and customer purchase patterns for GrabIt.</p>
        <ul>
          <li>Used slicers and pivot charts for real-time filtering.</li>
          <li>Analyzed KPIs like Average Delivery Time and Total Revenue.</li>
          <li>Created a professional and visually rich layout.</li>
        </ul>
        <p><strong>Tech Used:</strong> Excel, Power Query, Data Visualization</p>
      `
    },
    house: {
      title: "House Price Prediction Model",
      body: `
        <p><strong>Overview:</strong> A regression-based ML model that predicts house prices 
        using features like area, rooms, and location.</p>
        <ul>
          <li>Trained using Linear Regression and Random Forest.</li>
          <li>Implemented with Scikit-learn and Pandas.</li>
          <li>Deployed via Flask web app interface.</li>
        </ul>
        <p><strong>Tech Used:</strong> Python, Pandas, NumPy, Scikit-learn, Flask</p>
      `
    },
    expense: {
      title: "Expense Tracker",
      body: `
        <p><strong>Overview:</strong> A personal finance tracker web app that categorizes 
        spending and visualizes trends for better budgeting.</p>
        <ul>
          <li>Uses CSV data to show daily/monthly analytics.</li>
          <li>Integrated Matplotlib & Seaborn for spending charts.</li>
          <li>Helps track entertainment, food, and travel expenses.</li>
        </ul>
        <p><strong>Tech Used:</strong> Python, Matplotlib, Seaborn, Pandas</p>
      `
    }
  };

  projectLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const key = link.dataset.project;
      const data = projectDetails[key];
      if (data) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modal.setAttribute("aria-hidden", "false");
      }
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.setAttribute("aria-hidden", "true");
    }
  });

  /* ---------- Dark Mode Toggle ---------- */
  const themeToggle = document.createElement("button");
  themeToggle.textContent = "🌙";
  themeToggle.classList.add("btn-icon");
  themeToggle.style.marginLeft = "1rem";
  document.querySelector(".header-inner").appendChild(themeToggle);

  let darkMode = true;
  themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
      document.body.style.background = "radial-gradient(1000px 600px at 5% 5%, rgba(124, 92, 255, 0.12), transparent 70%), radial-gradient(1000px 600px at 95% 95%, rgba(0, 212, 255, 0.1), transparent 70%), #0f1724";
      document.body.style.color = "#e6eef8";
      themeToggle.textContent = "🌙";
    } else {
      document.body.style.background = "#f6f8fa";
      document.body.style.color = "#1a1a1a";
      themeToggle.textContent = "☀️";
    }
  });

  /* ---------- Contact Form (Mock Submission) ---------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = contactForm.querySelector("input[name='name']").value;
      const email = contactForm.querySelector("input[name='email']").value;
      const message = contactForm.querySelector("textarea[name='message']").value;
      if (name && email && message) {
        alert(`Thank you ${name}! Your message has been received.`);
        contactForm.reset();
      } else {
        alert("Please fill in all fields before submitting.");
      }
    });
  }

  /* ---------- Minor Hover Glow Animation ---------- */
  const glowItems = document.querySelectorAll(".btn, .project-card, .skill");
  glowItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.boxShadow = "0 0 15px rgba(124, 92, 255, 0.3)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.boxShadow = "none";
    });
  });
});

/* ---------- Extra Animation CSS Injection ---------- */
const style = document.createElement("style");
style.innerHTML = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .section-title, .project-card, .skill, .education-card, .profile-card {
    opacity: 0;
    transform: translateY(20px);
  }
`;
document.head.appendChild(style);
