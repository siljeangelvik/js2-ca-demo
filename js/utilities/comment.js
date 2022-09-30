let post = document.getElementById("post");
post.addEventListener("click", function(){
    let commentBoxValue= document.getElementById("comment-box").value;

    let li = document.createElement("li");
    li.className = "border rounded-4 py-2 px-3 bg-success text-decoration-none";

    let text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);

});