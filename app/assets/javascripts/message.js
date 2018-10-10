$(function(){
  function buildHTML(message){

    var html = `
          <div class="contents__table__area__article">
            <div class="contents__table__area__article__name-time">
              <div class="contents__table__area__article__name-time__name">
                ${message.user_name}
              </div>
              <div class="contents__table__area__article__name-time__time">
                ${message.created_at}
              </div>
            </div>
            <div class="contents__table__area__article__message">
              <p class="contents__table__area__article__message__sentence">
                ${message.text}
              </p>
        `

if (message.image.url != null ){
  html += `<img class="contents__table__area__article__message__image" src=${message.image.url}>
            </div>
          </div>`
}
else{
    `</div
  </div>`
}


    return html;
  }
  $('#new_post').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      disabled: false,
  })
    .done(function(data){
      console.log("sert")
      var html = buildHTML(data);
      $('.contents__table__area').append(html)
      $('.contents__table__post__notes-att__notes').val('')
      $(".contents__table__post__button").prop('disabled', false);
      $(".contents__table__area").scrollTop($(".contents__table__area")[0].scrollHeight);
    })
    .fail(function(){
      alert('error');
      $(".contents__table__post__button").prop('disabled', false);
    })
  })
})
