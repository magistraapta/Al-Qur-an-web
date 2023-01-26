$.ajax({
  type: 'get',
  url: 'https://api.quran.com/api/v4/chapters?language=en',
  dataType: 'json',
  success: function (res) {
    let surah = res.chapters;
    console.log(surah);
    $.each(surah, function (i, data) {
      $('#surah-list').append(
        `
            <div id="surah-list" class="container col-md-7 mt-2">
                <div class="col text-success text-decoration-none">
                    <a id="surah-click" class=" d-flex justify-content-between bg-primary-subtle rounded-1 px-2 py-2 text-decoration-none ">
                        <div class=" ">
                            <h5 id="surah-title" class="m-0"> ${data.name_simple} </h5>
                                <p id="total-ayat" class="m-0">${data.verses_count}</p>
                        </div>
                        <h4 id="title-arabic" class="m-0">${data.name_arabic}</h4>
                    </a>
                </div>
            </div>
      `
      );
    });
  },
});

// $('#search-btn').on('click', function () {
//   let surah = $('#search-input').val();
//   $.ajax({
//     type: 'get',
//     url: `http://api.alquran.cloud/v1/surah/${surah}`,
//     dataType: 'json',
//     success: function (res) {
//       let ayat = res.data.ayahs
//       $.each(ayat, function (i, data) {
//         $('#surah-list').append(
//           `
//               <div id="surah-list" class="container col-md-7 mt-2">
//                   <div class="col text-success text-decoration-none">
//                       <a id="surah-click" class=" d-flex justify-content-between bg-primary-subtle rounded-1 px-2 py-2 text-decoration-none ">
//                           <div class=" ">
//                               <h5 id="surah-title" class="m-0"> ${data.text} </h5>
//                           </div>
//                       </a>
//                   </div>
//               </div>
//         `
//         );

//       });
//     },
//   });
// });
