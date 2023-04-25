"use strict";

$(document).ready(function () {
  $(".mul-select").select2({
    placeholder: "Select items",
    tags: true,
  });

  $(".btn-add-item").click(function () {
    const enteredValue = $("#text").val();
    if (enteredValue.length > 0) {
      $("#text").val("");
    }
    $(".mul-select").append(
      `<option value=${enteredValue} selected>${enteredValue}</option>`
    );
    $(".mul-select").select2().append(enteredValue);
  });
});
