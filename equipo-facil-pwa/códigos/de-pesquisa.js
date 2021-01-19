function generalFilter(input, id) {
    items = document.getElementById(id)

    // console.log(input);
    // console.log(items);

    var indexResult = 0;

    for (var i = 0; i < items.children.length-1; i++) {
        // console.log(items.children[i]);

        if (items.children[i].children[2].tagName === 'LABEL') {
            if (items.children[i].children[2].innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
                indexResult = i;
            }
        } else {
            if (items.children[i].children[2].innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
                indexResult = i;
            }
        }

    }

    for (var i = 0; i < items.children.length-1; i++) {
        if (i === indexResult) {
            items.children[i].classList.remove("hide");
        } else {
            items.children[i].classList.add("hide");
        }
        if (input.value === '') {
            clearGeneralFilter(items);
        }
    }
}

function clearGeneralFilter(items) {
    for (var i = 0; i < items.children.length-1; i++) {
        items.children[i].classList.remove("hide");
    }
}

function hideAndShowFilters(id) {
    
    var filters = document.getElementById(id);
    var seeAllBtn = document.getElementById(id).children;
    
    // o último filho é sempre o botão de ver mais/esconder
    seeAllBtn = seeAllBtn[seeAllBtn.length-1];

    // console.log(filters);
    // console.log(seeAllBtn);

    if (filters.children.length > 5) {
        seeAllBtn.classList.add('tp-result-search-see-others--active');
        if (filters.children[5].style.display == 'none') {
            for (var i = 0; i < filters.children.length; i++) {
                // filters.children[i].style.display = 'inline-flex'
                filters.children[i].classList.remove("hide");
            }
            seeAllBtn.innerText = "ver menos";
        } else {
            for (var i = 0; i < filters.children.length-1 ; i++) {
                if (i < 5) {
                    // filters.children[i].style.display = 'inline-flex'
                    filters.children[i].classList.remove("hide");
                } else {
                    // filters.children[i].style.display = 'none'
                    filters.children[i].classList.add("hide");
                    seeAllBtn.innerText = "ver mais";
                    document.getElementById(id).scrollIntoView();
                }
            }
        }
    } else {
        seeAllBtn.classList.remove('tp-result-search-see-others--active')
    }
}