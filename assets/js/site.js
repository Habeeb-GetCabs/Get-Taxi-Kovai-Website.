
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const date = document.querySelector('#travelDate');
  if (date) {
    const localToday = new Date();
    date.min = `${localToday.getFullYear()}-${String(localToday.getMonth()+1).padStart(2,'0')}-${String(localToday.getDate()).padStart(2,'0')}`;
  }
  const form = document.querySelector('#tripForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const val = id => (document.getElementById(id)?.value || '').trim();
    const trip = val('tripType');
    const pickup = val('pickup');
    const destination = val('destination');
    const travelDate = val('travelDate');
    const vehicle = val('vehicleType') || 'Please recommend a suitable vehicle';
    const passengers = val('passengers') || 'Not specified';
    const msg = `Hello Get Taxi Kovai, I would like to enquire about a taxi.%0ATrip type: ${encodeURIComponent(trip)}%0APickup: ${encodeURIComponent(pickup)}%0ADestination: ${encodeURIComponent(destination)}%0ATravel date: ${encodeURIComponent(travelDate)}%0AVehicle: ${encodeURIComponent(vehicle)}%0APassengers: ${encodeURIComponent(passengers)}%0APlease confirm the final fare and availability.`;
    window.open(`https://wa.me/919043743777?text=${msg}`, '_blank', 'noopener,noreferrer');
  });
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.addEventListener('click', () => {
      const message = el.getAttribute('data-whatsapp') || 'Hello Get Taxi Kovai, I would like to enquire about a taxi.';
      el.href = `https://wa.me/919043743777?text=${encodeURIComponent(message)}`;
    });
  });
})();
