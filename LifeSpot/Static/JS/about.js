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

    let enableLikes = confirm("Хотите чтобы ваш комментарий оценили?")
    if (enableLikes) {
        let comment = Object.create(review)
        comment["rate"] = 0;
        review["date"] = new Date().toLocaleString()
        writeReview(comment)
    } else {
        review["date"] = new Date().toLocaleString()
        writeReview(review)
    }

    //review["date"] = new Date().toLocaleString()

    //writeReview(review)
}

const writeReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }

    document.getElementsByClassName("reviews")[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review["username"]}^:</b>  ${review["date"]}${likeCounter}</i></p>` +
        `<p>${review["comment"]}</p>` +
        '</div>';
}