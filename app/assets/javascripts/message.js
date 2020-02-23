$(function() {
  function buildHTML(message) {
    if ( message.image ) {
      var html =
        `<div class="group">
          <div class="group__name">
            ${message.user_name}
          </div>
          <div class="group__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <div class="message__content">
            ${message.content}
          </div>
          <img src=${message.image}>
        </div>`
      return html;
    } else {
      var html =
        `<div class="group">
          <div class="group__name">
            ${message.user_name}
          </div>
          <div class="group__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <div class="message__content">
            ${message.content}
          </div>
        </div>`
      return html;
    };
  }
  $("#new_content").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".main_chat__main").append(html);
      $(".main_chat__main").animate({ scrollTop: $(".main_chat__main")[0].scrollHeight });
      $("form")[0].reset();
      $(".main_chat__bottom__send").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $(".main_chat__bottom__send").prop("disabled", false);
    });
  });
});
