document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  var mod = document.querySelectorAll('.modal');
  M.Modal.init(mod, null);
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n:{done:"Select"}

  });
  var select = document.querySelectorAll('select');
  M.FormSelect.init(select);
  var bad= document.querySelectorAll('.collapsible');
  M.Collapsible.init(bad, {accordion: false});
});