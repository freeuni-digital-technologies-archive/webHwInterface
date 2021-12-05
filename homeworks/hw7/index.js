let POSTS_ID_COUNTER=1

function createPostTemplate(postText,postId){
    return `
        <div class='post' id='post-${postId}'>
            <div class='post-text'>${postText}</div>
            <span class='post-likes-number'>0</span> likes
            <button class='post-like-button' onclick="likePost(${postId})">like</button>
        </div>
    `
}

function likePost(postId){
    let post =  document.getElementById('post-' + postId); 
    let post_like_count = post.querySelector('span.post-likes-number');
    let currentLikes = Number(post_like_count.innerText)
    currentLikes++;
    post_like_count.innerText = currentLikes;
}

function createNewPost(postText, id){
    let posts = document.querySelector("div#posts-container");
    let post = createPostTemplate(postText,id);
    posts.insertAdjacentHTML('afterbegin',post);
}

function newPost(){
    let text = document.getElementById("new-post-text").value;
    createNewPost(text,POSTS_ID_COUNTER)
    POSTS_ID_COUNTER++;
}

