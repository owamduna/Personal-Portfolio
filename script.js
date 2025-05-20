// ...existing code...

// Animated bubbles for chatbot background
function createBubble() {
  const bubbles = document.querySelector('.bubbles');
  if (!bubbles) return;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  const size = Math.random() * 40 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${6 + Math.random() * 4}s`;
  bubbles.appendChild(bubble);
  setTimeout(() => bubble.remove(), 10000);
}

setInterval(createBubble, 500);
// ...existing code...