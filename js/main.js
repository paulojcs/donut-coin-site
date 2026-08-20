// Lista de espera — os dois formulários (hero e CTA) usam [data-waitlist].
// Configure WAITLIST_ENDPOINT antes de publicar: sem endpoint o formulário
// mostra a confirmação mas NÃO grava o e-mail em lugar nenhum.
// Opções: Formspree, um edge function do Supabase, etc. O endpoint recebe
// POST JSON { email: "..." }.
const WAITLIST_ENDPOINT = '';

document.querySelectorAll('form[data-waitlist]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.focus();
      input.setAttribute('aria-invalid', 'true');
      return;
    }
    input.removeAttribute('aria-invalid');

    const button = form.querySelector('button');
    button.disabled = true;

    if (WAITLIST_ENDPOINT) {
      try {
        await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } catch {
        button.disabled = false;
        return;
      }
    } else {
      console.warn('WAITLIST_ENDPOINT não configurado — o e-mail não foi enviado a lugar nenhum.');
    }

    const ok = document.createElement('p');
    ok.className = 'form-ok';
    ok.setAttribute('role', 'status');
    ok.textContent = 'Anotado. Você vai saber primeiro.';
    form.replaceChildren(ok);
  });
});
