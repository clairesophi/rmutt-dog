/* restock-list signup → Google Sheets (via a Google Apps Script web app).
   Paste the deployed web-app URL below. See HANDOFF.md for the 3-minute setup. */

var SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbz4DYHlSAYVI1PYnFTgKDilaAbuHmgqBJEH6xbOa2r4OLWuD-GHfOroh70gIeMixQi6/exec";

(function () {
  var form = document.getElementById("notify-form");
  if (!form) return;
  var status = document.getElementById("notify-status");
  var input = document.getElementById("email");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = input.value.trim();
    if (!email) return;

    if (!SHEETS_ENDPOINT) {
      /* endpoint not wired up yet — be honest, like a good personal website */
      status.textContent = "The list isn't plugged in yet. Email us instead: woof@rmutt.dog";
      return;
    }

    status.textContent = "Submitting…";
    var body = new URLSearchParams();
    body.append("email", email);
    body.append("page", location.pathname);

    fetch(SHEETS_ENDPOINT, { method: "POST", body: body })
      .then(function (r) {
        if (!r.ok) throw new Error("bad response");
        form.reset();
        status.textContent = "✓ You're on the list. The fountain will find you.";
      })
      .catch(function () {
        status.textContent = "Something broke. Try again, or email woof@rmutt.dog";
      });
  });
})();
