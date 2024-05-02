function getReview() {
    let review = {}

    review["username"] = prompt('Как вас зовут?')
    if (review["username"] == null) {
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

const writeReview = review => {
    document.getElementsByClassName("reviews")[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review["username"]}^:</b>  ${review["date"]}</i></p>` +
        `<p>${review["comment"]}</p>` +
        '</div>';
}