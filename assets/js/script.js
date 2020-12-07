// Smooth Scroll
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Countdown Timer
$(document).ready(function () {
    var finalDate = new Date("Nov 22, 2020 23:59:59");
    $("#countdown").countdown(finalDate, function (event) {
        $(this).html(
            event.strftime(
                '<div class="timer-wrapper"><div class="time text-warning mb-0">%D</div><span class="text text-white soft-6 text-semibold">Hari</span></div><div class="timer-wrapper"><div class="time text-warning mb-0">%H</div><span class="text text-white soft-6 text-semibold">Jam</span></div><div class="timer-wrapper"><div class="time text-warning mb-0">%M</div><span class="text text-white soft-6 text-semibold">Menit</span></div><div class="timer-wrapper"><div class="time text-warning mb-0">%S</div><span class="text text-white soft-6 text-semibold">Detik</span></div>'
            )
        );
    });
});

// Play video
$('.video img').click(function(){
    video = '<iframe src="'+ $(this).attr('data-video') +'" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
    $(this).replaceWith(video);
    $('.video').addClass('played');
});