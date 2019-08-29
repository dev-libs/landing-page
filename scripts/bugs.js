mdc.autoInit();

document.querySelectorAll('.mdc-ripple').forEach(element => mdc.ripple.MDCRipple.attachTo(element));
document.querySelectorAll('.mdc-text-field').forEach(element => mdc.textField.MDCTextField.attachTo(element));
document.querySelectorAll('.mdc-select').forEach(element => mdc.select.MDCSelect.attachTo(element));
