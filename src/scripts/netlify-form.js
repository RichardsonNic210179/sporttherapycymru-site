const emailMessage = 'Enter an email address in the right format, like name@example.com';

const rules = [
  { name: 'first-name', empty: 'Enter your first name' },
  { name: 'last-name', empty: 'Enter your last name' },
  { name: 'email', empty: 'Enter your email address', email: true },
  { name: 'message', empty: 'Enter your message' },
];

export function thanksText(name) {
  const trimmed = String(name ?? '').trim();
  return /^\p{L}[\p{L}' -]{0,40}$/u.test(trimmed)
    ? `Thanks, ${trimmed}. Your message is sent`
    : 'Thanks, your message is sent';
}

function messageFor(rule, value) {
  const text = value.trim();
  if (!text) return rule.empty;
  if (rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) return emailMessage;
  return '';
}

export function bindNetlifyForm(form) {
  if (!(form instanceof HTMLFormElement) || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';

  const root = form.closest('[data-netlify-form-root]') ?? form.parentElement ?? document;
  const summary = root.querySelector('[data-error-summary]');
  const summaryList = summary?.querySelector('ul');
  const success = root.querySelector('[data-form-success]');
  const thanks = root.querySelector('[data-thanks]');
  const sendError = root.querySelector('[data-send-error]');
  const fieldOf = (name) => form.querySelector(`[name="${name}"]`);

  const clearErrors = () => {
    rules.forEach((rule) => {
      const input = fieldOf(rule.name);
      input?.closest('.field')?.classList.remove('has-error');
      input?.removeAttribute('aria-invalid');
      const errorId = input?.id ? `${input.id}-err` : '';
      const next = (input?.getAttribute('aria-describedby') || '')
        .split(' ')
        .filter((id) => id && id !== errorId)
        .join(' ');
      if (next) input?.setAttribute('aria-describedby', next);
      else input?.removeAttribute('aria-describedby');
    });
  };

  const hideSendError = () => sendError?.classList.remove('is-shown');

  const showErrors = (problems) => {
    hideSendError();
    document.body.classList.add('state-error');
    document.body.classList.remove('state-success');
    if (summaryList) {
      summaryList.replaceChildren(
        ...problems.map((problem) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = `#${problem.id}`;
          link.textContent = problem.message;
          item.append(link);
          return item;
        }),
      );
    }
    problems.forEach((problem) => {
      const input = fieldOf(problem.name);
      const field = input?.closest('.field');
      const message = field?.querySelector('[data-error-text]');
      if (message) message.textContent = problem.message;
      field?.classList.add('has-error');
      input?.setAttribute('aria-invalid', 'true');
      if (input?.id) {
        const described = new Set((input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean));
        described.add(`${input.id}-err`);
        input.setAttribute('aria-describedby', [...described].join(' '));
      }
    });
    summary?.focus();
  };

  const showSendError = () => {
    document.body.classList.remove('state-success');
    sendError?.classList.add('is-shown');
    sendError?.focus();
  };

  const showSuccess = (name) => {
    hideSendError();
    document.body.classList.remove('state-error');
    document.body.classList.add('state-success');
    if (thanks) thanks.textContent = thanksText(name);
    success?.focus();
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearErrors();
    hideSendError();
    const problems = rules
      .map((rule) => {
        const input = fieldOf(rule.name);
        const value = input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement ? input.value : '';
        const message = messageFor(rule, value);
        return message ? { name: rule.name, id: input?.id || rule.name, message } : null;
      })
      .filter(Boolean);
    if (problems.length) {
      showErrors(problems);
      return;
    }

    const honeypot = form.querySelector('[name="website"]');
    const first = fieldOf('first-name');
    const name = first instanceof HTMLInputElement ? first.value.trim() : '';
    if (honeypot instanceof HTMLInputElement && honeypot.value) {
      showSuccess(name);
      return;
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)),
      });
      if (!response.ok) {
        showSendError();
        return;
      }
    } catch {
      showSendError();
      return;
    }
    showSuccess(name);
  });
}

export function bindNetlifyForms() {
  document.querySelectorAll('[data-netlify-form]').forEach((form) => bindNetlifyForm(form));
}
