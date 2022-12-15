document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, null);
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n:{done:"Select"}

  });
  var select = document.querySelectorAll('select');
  M.FormSelect.init(select);
});