var field = document.querySelector('.form-name input');
var label = document.querySelector('.form-name span');
field.oninput = function() {
  if (field.value != null) {
    label.style.visibility = 'hidden';
  }
}
field.onblur = function() {
  if (field.value == '') {
    label.style.visibility = 'visible';
  }
}
