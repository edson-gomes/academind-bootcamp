const loadCommentsBtnElement = document.getElementById("load-comments-btn");

function fetchCommentsForPost(event) {
  const postId = loadCommentsBtnElement.dataset.postid;
  fetch(`/posts/${postId}/comments`);
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPost);
