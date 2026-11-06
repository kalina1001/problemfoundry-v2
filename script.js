(function () {
  document.getElementById('year').textContent = String(new Date().getFullYear());
  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  menuButton.addEventListener('click', function () {
    var open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
  });
  var form = document.getElementById('inquiry-form');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var company = document.getElementById('company').value.trim();
    var challenge = document.getElementById('challenge').value.trim();
    var subject = 'Workflow review inquiry — ' + (company || name);
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nCompany / industry: ' + (company || 'Not specified') + '\n\nWorkflow to review:\n' + challenge + '\n\nSent from problemfoundry.eu';
    var recipient = 'hello@problemfoundry.eu';
    var url = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.classList.add('is-ready');
    status.textContent = 'Draft prepared. Your email app should open now; press Send there to complete your inquiry. If it does not open, email ' + recipient + ' directly.';
    window.location.href = url;
  });
})();