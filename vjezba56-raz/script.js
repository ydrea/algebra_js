/* $("#btn1").hide(2000).show(2000);
$("#btn2").slideUp(2000).slideDown(2000); */

// delay, fadeIn, fadeOut, toggle, fadeToggle

/* $("#btn3").css({ fontWeight: "bold" });

$("#btn1").html("gumbić 1"); */

/* Idemo se igrati sa event listenerima u Jqueryu */

/* $("#btn1").on("click", function () {
  $(".row:last-of-type").fadeToggle(300);
}); */

/* Idemo koristeći metode selektirati svaki red iz HTML-a */

/* $(function () {
  $("#btn1").on("click", function () {
    $(".row").first().fadeToggle();
  });
});

$(function () {
  $("#btn2").on("click", function () {
    $(".row").eq(1).fadeToggle();
  });
});

$(function () {
  $("#btn3").on("click", function () {
    $(".row").eq(2).fadeToggle();
  });
}); */

// Idemo ovo skratiti koristeći metodu liste

$(function () {
  $("button[id^='btn']").each(function (index) {
    $(this).on("click", function () {
      $(".row").eq(index).fadeToggle();
    });
  });
});

/* Dohvaćanje podataka sa API-a i ispisivanje na ekranu */

$(function () {
  const url = "https://jsonplaceholder.typicode.com/users";

  $.getJSON(url, function (data) {
    let userList = $("#user-list");

    data.forEach(function (user) {
      let userItem = `
        <div>
        <h3>${user.name} ${user.username}</h3>
        <p>${user.email}</p>
        </div>
        <hr>;`;
      userList.append(userItem);
    });
  });
});
