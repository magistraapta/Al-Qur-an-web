$.ajax({
  type: 'get',
  url: 'http://api.alquran.cloud/v1/surah',
  dataType: 'json',
  success: function (res) {
    if (res.code == 200) {
      let surah = res.data;
      $.each(surah, function (i, data) {
        $('#surah-list').append(`
            <div id="surah-list" class="container col-md-7 mt-2">
                <div class="col text-success">
                    <div class=" d-flex justify-content-between bg-success-subtle rounded-1 px-2 py-2 ">
                        <div class=" ">
                            <h5 id="surah-title" class="m-0">`+data.englishName+`</h5>
                                <p id="total-ayat" class="m-0">`+ data.numberOfAyahs+`</p>
                        </div>
                        <h4 id="title-arabic" class="m-0">`+ data.name +`</h4>
                    </div>
                </div>
            </div>
      `);
    });
    } else {
      $('#surah-title').html(
        `
        <div class="col">
        <h1 class=" text-center">
          `+ res.Error+`
          </h1>
        </div>
        `
      );
    }
  },
});
