function button(val) {
  form1.answer.value += val.value;
}
function ac() {
  form1.answer.value = " ";
}
function equation() {
  form1.answer.value = eval(form1.answer.value);
}
