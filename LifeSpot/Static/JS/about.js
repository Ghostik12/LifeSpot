function getReview() {

    this.author = prompt('Как вас зовут?')
    if (this.author == null) {
        this.empty = true
        return
    }

    this.comment = prompt("Напишите свой отзыв")
    if (this.comment == null) {
        this.empty = true
        return
    }

    this.date = new Date().toLocaleString()
}

function addComment() {

    let review = new getReview()

    if (review.empty) {
        return;
    }

    let enableLikes = confirm("Хотите чтобы ваш комментарий оценили?")

    if (enableLikes) {
        let comment = Object.create(review)
        comment["rate"] = 0;
        writeReview(comment)
    } else {
        writeReview(review)
    }
}

const writeReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }

    document.getElementsByClassName("reviews")[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review["author"]}^:</b>  ${review["date"]}${likeCounter}</i></p>` +
        `<p>${review["comment"]}</p>` +
        '</div>';
}