$(document).ready(function () {
    $(".preloader").css("display", "none");

    new WOW().init();
    
    $("#telephone").mask("+7 (999) 999-9999");
    
    function calculate() {
        let sum = parseInt($("#Select1 option:selected").val()) + parseInt($("#Select2 option:selected").val()) + parseInt($("#Select3 option:selected").val());
        let days = parseInt($("#Select1 option:selected").attr("days")) + parseInt($("#Select2 option:selected").attr("days")) + parseInt($("#Select3 option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function () {
        calculate();
    });

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();


        $('.section').each((i, el) => {

            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });
    });

    let options = {
        threshold: [0.6]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');

    elements.each((i, el) => {
        observer.observe(el);
    });


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show');
            }
        });
    }



    let optionsImg = {
        threshold: [0.5]
    };
    let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
    let elementsImg = $('.low_quality');

    elementsImg.each((i, el) => {
        observerImg.observe(el);
    });


    function onEntryImg(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.src = change.target.dataset.src;
            }
        });
    }

    let optionsStat = {
        threshold: [0.5]
    };
    let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
    let elementsStat = $('.statAnimation');

    elementsStat.each((i, el) => {
        observerStat.observe(el);
    });


    function onEntryStat(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                if (!$('.statAnimation').hasClass("done")) {
                    $('.statAnimation').addClass("done");
                    $('.statAnimation').spincrement({
                        thousandSeparator: "",
                        duration: 3000
                    });
                }
            }
        });
    }

    $('.image-link').magnificPopup({
        type: 'image'
    });


    setTimeout(function () {
        const myModal = new bootstrap.Modal('#myModal', {
            keyboard: false
        });
        modalToggle = document.getElementById('toggleMyModal');
        myModal.show(modalToggle);

    }, 10000);
});
