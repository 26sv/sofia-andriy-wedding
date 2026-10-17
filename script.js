// Bozza: il modulo RSVP non invia dati. Collegalo a un servizio (es. Formspree) per usarlo davvero.
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = document.getElementById('rsvp-msg');
  msg.textContent = 'Grazie! (Bozza dimostrativa: nessun dato è stato inviato.)';
  msg.hidden = false;
  this.reset();
});
