const shoes = [
    { id: 0, image: "/image/logo nike.png"},
    { id: 1, image: "/image/shoesnike.png"},
    { id: 2, image: "/image/shoesnike2.png"},
    { id: 3, image: "/image/shoesnike3.png"},
    { id: 4, image: "/image/shoesnike4.png"},
    { id: 5, image: "/image/shoesnike5.png"}
];

const mainImage = document.querySelector('.shoes-image');
const icons = document.querySelectorAll('.icon');
function updateImage(shoesId) {
    const selectedshoes = shoes.find(shoes => shoes.id === shoesId);
    mainImage.src = selectedshoes.image;
    icons.forEach(icon => icon.classList.remove('active'));
    document.querySelector(`[data-shoes="${shoesId}"`).classList.add(`active`);
}
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const shoesId = parseInt(icon.getAttribute('data-shoes'));
        updateImage(shoesId);
    });
});
updateImage(1);