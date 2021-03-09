(function () {
    let body = document.getElementById('body');
    let buttonsSelect = document.querySelectorAll('.cta--select');
    let btnModalClose = document.getElementById('modalClose');
    let btnBookmark = document.getElementById('btnBookmark');
    let bookmarkPath = document.querySelector('.bookmark__path');

    let bookmarkImg = document.querySelector('.bookmark__img');
    let boxModal = document.getElementById('boxModal'); // hlavni box

    // pledges
    let pledges = document.querySelectorAll('.box__modal-top');
    let boxBorders = document.querySelectorAll('.box__modal-border');
    let modals = document.querySelectorAll('.modal__pledge');

    for (let i = 0; i < pledges.length; i++) {
        let pledge = pledges[i];
        let boxBorder = boxBorders[i];
        let modal = modals[i];
        
        pledge.addEventListener('click', () => {
            boxBorder.classList.toggle('active');
            modal.classList.toggle('active');
        });
    }


    // box success
    let boxSuccess = document.getElementById('boxSuccess'); 
    let forms = document.querySelectorAll('.form__pledge');
    let ctaDone= document.querySelector('.cta--done');
    //let itemsAvailable = [101, 64, 0];
    //let itemIncrements = document.querySelectorAll('.text--bold');

    /*for (let i = 0; i < itemIncrements.length; i++) {
        let itemIncrement = itemIncrements[i];
        itemIncrement.innerText = itemsAvailable[i];
    }*/

    for (let i = 0; i < forms.length; i++) {
        let form = forms[i];
        form.addEventListener('submit', () => {
            /*if (i > 0) {
                itemsAvailable[i - 1]--;
                let itemIncrement = itemIncrements[i - 1];
                itemIncrement.innerText = itemsAvailable[i - 1];
            }*/
            boxModal.classList.remove('active');
            boxSuccess.classList.add('active');
        });
    }

    //keydown event on boxModal
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            boxModal.classList.remove('active');
            body.classList.remove('active');
        }
    });
    


    // btn done
    ctaDone.addEventListener('click', () => {
        boxSuccess.classList.remove('active');
        body.classList.remove('active');
    });

    // keydown event on boxSuccess
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            boxSuccess.classList.remove('active');
            body.classList.remove('active');
        }
    });


    // opening modal
    for (let button of buttonsSelect) {
        button.addEventListener('click', () => {
            boxModal.classList.add('active');
            body.classList.add('active');
        });
    }


    // closing modal
    btnModalClose.addEventListener('click', () => {
        boxModal.classList.remove('active');
        body.classList.remove('active');
    });


    // bookmark
    btnBookmark.addEventListener('click', () => {
        btnBookmark.classList.toggle('active');
        if (btnBookmark.classList.contains('active')) {
            bookmarkImg.classList.add('active');
            bookmarkPath.classList.add('active');
            btnBookmark.innerText = 'Bookmarked';
        } else {
            bookmarkImg.classList.remove('active');
            bookmarkPath.classList.remove('active');
            btnBookmark.innerText = 'Bookmark';
        }
    });
})();