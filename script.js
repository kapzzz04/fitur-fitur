$(".bt-b").on("click", function () {
  $.ajax({
    url: `https://v1.apigames.id/merchant/M230803RSWQ7558CG/cek-username/freefire?user_id=${$(
      ".control-input"
    ).val()}&signature=659fb5760da5dbd21dc6018d112a55d0`,
    success: (m) => {
      const movie = m.data;
      console.log(movie);
      $(".bt-a").html(movie.username);
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});
