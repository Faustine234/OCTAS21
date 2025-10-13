const form = document.getElementById('eventForm');
const list = document.getElementById('eventList');

// Saat halaman dibuka, muat event dari localStorage
document.addEventListener('DOMContentLoaded', loadEvents);

// Saat form disubmit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('eventName').value.trim();
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;

  if (!name || !date || !time) return;

  // Gabungkan tanggal dan waktu menjadi satu string UTC
  const localDateTime = new Date(`${date}T${time}`);
  const utcString = localDateTime.toUTCString(); // contoh: "Sat, 18 Oct 2025 13:00:00 GMT"

  const eventData = { name, date, time, utcString };

  // Simpan ke localStorage
  saveEvent(eventData);

  // Tampilkan di halaman
  addEventCard(eventData);

  // Reset form
  form.reset();
});

// ====== FUNGSI ======

// Simpan event ke localStorage
function saveEvent(event) {
  let events = JSON.parse(localStorage.getItem('guildEvents')) || [];
  events.push(event);
  localStorage.setItem('guildEvents', JSON.stringify(events));
}

// Muat event saat halaman dibuka
function loadEvents() {
  const events = JSON.parse(localStorage.getItem('guildEvents')) || [];
  events.forEach(addEventCard);
}

// Tampilkan satu event ke layar
function addEventCard(event) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${event.name}</h3>
    <p><strong>Tanggal:</strong> ${event.date}</p>
    <p><strong>Jam:</strong> ${event.time} (UTC: ${event.utcString})</p>
    <button class="delete-btn">❌ Hapus</button>
  `;

  // Tombol hapus event
  card.querySelector('.delete-btn').addEventListener('click', () => {
    deleteEvent(event);
    card.remove();
  });

  list.appendChild(card);
}

// Hapus event dari localStorage
function deleteEvent(eventToDelete) {
  let events = JSON.parse(localStorage.getItem('guildEvents')) || [];
  events = events.filter(
    (e) =>
      e.name !== eventToDelete.name ||
      e.date !== eventToDelete.date ||
      e.time !== eventToDelete.time
  );
  localStorage.setItem('guildEvents', JSON.stringify(events));
}
