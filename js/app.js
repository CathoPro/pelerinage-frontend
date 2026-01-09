const API_URL = "https://TON-BACKEND.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inscription-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${API_URL}/inscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        message.textContent = "❌ Erreur lors de l’inscription";
        message.className = "text-red-600 text-center mt-4";
        return;
      }

      message.textContent = "✅ Inscription enregistrée avec succès";
      message.className = "text-green-600 text-center mt-4";
      form.reset();

    } catch (error) {
      console.error(error);
      message.textContent = "❌ Erreur réseau";
      message.className = "text-red-600 text-center mt-4";
    }
  });
});
