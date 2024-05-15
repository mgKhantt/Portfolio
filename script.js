$(document).ready(() => {
    $(".nav-item").click((event) => {
        $(".nav-item a").removeClass("active");
        const element = $(event.currentTarget).children().eq(0);
        element.addClass("active");
    });

    $(".quality").click((event) => {
        $(".quality").removeClass("active");
        const element = $(event.currentTarget).eq(0);
        element.addClass("active");
    });

    $(window).scroll(() => {
        const winTop = $(window).scrollTop();

        const enterPoint = winTop + 500;
        const scrollBarPoint = winTop + 160;

        $(".slideObject").each((index, obj) => {
            const slideObject = $(obj);
            const slideObjectPosition = slideObject.offset().top;

            if (enterPoint > slideObjectPosition) {
                slideObject.addClass(
                    "animate__animated animate__bounceInRight"
                );
            }
        });
    });
});
