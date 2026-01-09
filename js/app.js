const API_URL = "https://TON-SERVICE.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inscription-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(`${API_URL}/inscription`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Erreur serveur");
        return;
      }

      alert("✅ Inscription enregistrée !");
      form.reset();

    } catch (err) {
      console.error(err);
      alert("❌ Erreur réseau");
    }
  });
});
