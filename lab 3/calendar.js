var calendar = {1: {1: "Сайхан амарна"}, 
2: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
3: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"},
 4: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
 5: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
 6: {6: "Жавхлан багшийн төрсөн өдөр"},  
 7: {4: "Хичээл амарсаан ураа"}, 
 8: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
 9: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
 10: {13: "Сур сур бас дахин сур"}, 
 11: {2: "Сурсаар л бай"}, 
 0: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} }

 const DAYS = [
    "НЯ",
    "ДА",
    "МЯ",
    "ЛХ",
    "ПҮ",
    "БА", 
    "БЯ",
]


const Monthsof = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun", 
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]
var d = new Date();


const MonthsofTitle = [
    "Dec1",
    "Jan1",
    "Feb1",
    "Mar1",
    "Apr1",
    "May1",
    "Jun1", 
    "Jul1",
    "Aug1",
    "Sep1",
    "Oct1",
    "Nov1",
]
const monthNames = [ 
    "Арван хоёрдугаар сар" ,
    "Нэгдүгээр сар", 
    "Хоёрдугаар сар", 
    "Гуравдугаар сар", 
    "Дөрөвдүгээр сар", 
    "Тавдугаар сар", 
    "Зургаадугаар сар",
    "Долоодугаар сар", 
    "Наймдугаар сар", 
    "Есдүгээр сар", 
    "Аравдугаар сар", 
    "Арван нэгдүгээр сар", 
]
var takeMonth = 0;

function Maketable(TakeMonth){
    var lastdays = new Date(d.getFullYear(), TakeMonth, 0).getDate();
    var dateto =new Date(d.getFullYear(), TakeMonth, 0).getDay();
    var dateinMonth = 1;
    var table = '<thead class="CalendarHead "><tr>';
    for(var i=0; i<7; i++){
        table += '<th>' + DAYS[i] + '</th>';
    }
    table += '</tr></thead>';
    table += '<tbody class="rr">';
    for (var q=0; q<6; q++){
        table += '<tr></tr>'
        for (var e = 0; e < 7; e++){
            if (calendar[TakeMonth][dateinMonth] == undefined)
            {
                if (0 == dateto){
                    if (dateinMonth <= lastdays){
                        table+= '<td>'+ dateinMonth +'</td>'
                        dateinMonth++;
                    }
                    else{
                        table+= '<td></td>'
                    }
                }
                else{
                    table+= '<td></td>';
                    dateto -- ;
                }
            }
            else{
                if (0 == dateto){
                    if (dateinMonth <= lastdays){
                        table+= '<td class="'+ MonthsofTitle[TakeMonth];
                        table+='">' + dateinMonth +'</td>';
                        dateinMonth++;
                    }
                    else{
                        table+= '<td></td>'
                    }
                }
                else{
                    table+= '<td></td>';
                    dateto -- ;
                }
            }
        }
    }
    table += '</tbody>';
    console.log(table);
    return table;
}
var qwe = 0
$( document ).ready(function() {
    var table = Maketable(qwe);
    $('#Aug').html($(table));
    $('#Aug1').html(monthNames[qwe]);
    if(qwe < 1){
        $("#prevcl").hide();
    }

})

$( "#prevcl" ).click(function() {
    qwe--;
    $("#nextcl").show();
    if(qwe < 1){
        $("#prevcl").hide();
    }
    var table = Maketable(qwe);
    $('#Aug').html($(table));
    $('#Aug1').html(monthNames[qwe]);
    
  });

  $( "#nextcl" ).click(function() {
    qwe++;
    $("#prevcl").show();
      if(qwe > 10){
            $("#nextcl").hide();
      }
      var table = Maketable(qwe);
    $('#Aug').html($(table));
    $('#Aug1').html(monthNames[qwe]);
  });

  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
  }); 

//   $(document).ready(function () {
//     $('select').selectize({
//         sortField: 'text'
//     });
// });