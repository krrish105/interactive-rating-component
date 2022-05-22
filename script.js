$(document).ready(() => {
    let ratingNum = 0;
    $('.rating-btn').each((i, el) => {
        $('.rating-btn').eq(i).on('click', function() {
            $('.rating-btn').removeClass('active');
            $(this).addClass('active');
            ratingNum = i+1;
        });
    });
    $('#submit-btn').on('click', () => {
        if(ratingNum === 0){
            return;
        }
        $('#rating-num').html(ratingNum);
        $('.first-step').addClass('show');
        $('.thank-you').addClass('show');

    })
})