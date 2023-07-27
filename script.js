document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.animated-image');

    images.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            image.classList.add('zoomed-image');
        });

        image.addEventListener('mouseleave', function() {
            image.classList.remove('zoomed-image');
        });
    });
});
// メニューの開閉を切り替える関数
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-open");
  }
  