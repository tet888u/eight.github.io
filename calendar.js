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

 const Weekof = [
    "Ня",
    "Да",
    "Мя",
    "Лх",
    "Пү",
    "Ба", 
    "Бя",
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
console.log(d.setMonth(5));


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
var takeMonth = 0;

function drawtable(TakeMonth){
    var lastdays = new Date(d.getFullYear(), TakeMonth, 0).getDate();
    var dateto =new Date(d.getFullYear(), TakeMonth, 0).getDay();
    console.log(dateto);
    var dateinMonth = 1;
    var table = '<thead class="CalendarHead "><tr>';
    for(var i=0; i<7; i++){
        table += '<th>' + Weekof[i] + '</th>';
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
                        table+= '<td class="'+MonthsofTitle[TakeMonth];
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
    return table;
}

$( document ).ready(function() {
    for (var i=0; i<12; i++){
    var table = drawtable(i);
    $('#'+Monthsof[i]).html($(table));
    }
})