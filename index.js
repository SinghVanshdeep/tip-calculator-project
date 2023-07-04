
// On the click of the calculate button
$('button').on('click', function(){
    var bill = Number($("#bill-amount").val());
    var tip = Number($("#tip-percentage").val());

    var total = (1 + (tip/100)) * bill;


    $('span').addClass("result-text");
    $('span').html(parseFloat(total).toFixed(2));
})