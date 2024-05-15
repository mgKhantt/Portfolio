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
});
