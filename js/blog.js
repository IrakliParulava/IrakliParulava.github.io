let commentList = document.getElementById("comment-list");

function createInputBox() {
    let div = document.createElement("div");
    div.setAttribute("class", "reply-details");

    div.innerHTML = `
        <input type="text" name="name" class="reply-control" id="name" placeholder="Enter Name" required>
        <textarea class="reply-control" name="message" id="message" rows="3" placeholder="Message" required></textarea>
        <button class="btn submit">Submit</button>
        <button class="btn cancel">Cancel</button>`;

    return div;
}

const d = new Date();
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const formattedDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

function addReply(name, message) {
    let div = document.createElement("div");
    div.setAttribute("class", "comment-list-item");

    div.innerHTML = `
    <div class="comment-list-item-content">
        <h5>${name}</h5>
        <h6>${formattedDate}</h6>
        <p>${message}</p>
        <span id="reply-btn" class="comment-btn">reply</span>
    </div>`;

    return div;
}

let activeReplyForm = null; // Keep track of the active reply form

commentList.addEventListener("click", function (e) {
    let replyClicked = e.target.classList.contains("comment-btn");
    let submitClicked = e.target.classList.contains("submit");
    let cancelClicked = e.target.classList.contains("cancel");
    let closestCard = e.target.closest(".comment-list-item");

    if (replyClicked && !closestCard.querySelector(".reply-details") && !activeReplyForm) {
        closestCard.appendChild(createInputBox());
        e.target.style.pointerEvents = "none"; // Disable the button temporarily

        activeReplyForm = closestCard.querySelector(".reply-details");

        const replyForm = closestCard.querySelector(".reply-details");
        replyForm.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    if (cancelClicked && activeReplyForm === closestCard.querySelector(".reply-details")) {
        closestCard.querySelector(".comment-btn").style.pointerEvents = "auto"; // Enable the reply button
        e.target.closest(".reply-details").remove();
        activeReplyForm = null; // Clear the active reply form
    }

    if (submitClicked && activeReplyForm === closestCard.querySelector(".reply-details")) {
        const commentDetails = e.target.closest(".reply-details");
        const nameInput = commentDetails.querySelector("#name");
        const msgTextarea = commentDetails.querySelector("#message");

        if (nameInput.value && msgTextarea.value) {
            closestCard.appendChild(addReply(nameInput.value, msgTextarea.value));
            commentDetails.remove();
            closestCard.querySelector(".comment-btn").style.pointerEvents = "auto"; // Enable the reply button
            activeReplyForm = null; // Clear the active reply form
        }
    }
});