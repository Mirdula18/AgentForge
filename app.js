document.querySelectorAll('.faq-q').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const open = panel.style.display === 'block';
    document.querySelectorAll('.faq-a').forEach((item) => {
      item.style.display = 'none';
    });
    panel.style.display = open ? 'none' : 'block';
  });
});

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = '12px';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    ripple.style.borderRadius = '999px';
    ripple.style.background = 'rgba(255,255,255,0.8)';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.opacity = '0.7';
    ripple.style.transition = 'transform 0.55s ease, opacity 0.55s ease';
    button.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = 'translate(-50%, -50%) scale(12)';
      ripple.style.opacity = '0';
    });
    setTimeout(() => ripple.remove(), 600);
  });
});

document.querySelectorAll('[data-counter]').forEach((el) => {
  const target = Number(el.dataset.counter) || 0;
  let current = 0;
  const step = Math.max(1, Math.round(target / 50));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString();
  }, 20);
});

document.querySelectorAll('.skeleton').forEach((item) => {
  setTimeout(() => item.classList.remove('skeleton'), 1200);
});

const particleLayer = document.querySelector('.particles');
if (particleLayer) {
  for (let i = 0; i < 42; i += 1) {
    const dot = document.createElement('span');
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 4}s`;
    particleLayer.appendChild(dot);
  }
}
