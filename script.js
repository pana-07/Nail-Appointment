// Set min date to today
const dateInput = document.getElementById('b-date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;
dateInput.value = today;

function goToStep2(){
  const date = document.getElementById('b-date').value;
  const time = document.getElementById('b-time').value;
  if(!date || !time){ alert('Please select both a date and a time.'); return; }
  const d = new Date(date+'T00:00:00');
  const pretty = d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  document.getElementById('confirm-summary').innerHTML = '📅 <strong>'+pretty+'</strong> at <strong>'+time+'</strong>';
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
  document.getElementById('step2').scrollIntoView({behavior:'smooth',block:'center'});
}

function goToStep1(){
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
}

function confirmBooking(e){
  e.preventDefault();
  const name = document.getElementById('r-name').value.trim();
  const email = document.getElementById('r-email').value.trim();
  const phone = document.getElementById('r-phone').value.trim();
  if(!name || !email || !phone){ alert('Please fill in Name, Email, and Phone.'); return; }
  if(!email.includes('@')){ alert('Please enter a valid email address.'); return; }
  alert('✅ Appointment confirmed! We will send a reminder to '+email+'. See you soon!');
  document.getElementById('reg-form').reset();
  document.getElementById('b-time').value = '';
  goToStep1();
}
