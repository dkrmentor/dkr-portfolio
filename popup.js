document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('popupClosed')) {
        setTimeout(function () {
            document.querySelector('.alpha-popup').style.display = 'flex';
        }, 2000);
    }

    document.getElementById('close-popup').addEventListener('click', function () {
        document.querySelector('.alpha-popup').style.display = 'none';
        localStorage.setItem('popupClosed', 'true');
    });
});
