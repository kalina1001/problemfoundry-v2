(function () {
  document.getElementById('year').textContent = String(new Date().getFullYear());
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
    // Replace with the verified domain mailbox once it is activated.
    var recipient = 'hello@problemfoundry.eu';
    var url = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.textContent = 'Your email app should open now. Please press Send there to complete your inquiry. If nothing opens, email ' + recipient + ' directly.';
    window.location.href = url;
  });
})();
