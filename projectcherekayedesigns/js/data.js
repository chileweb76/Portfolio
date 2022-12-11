class Data {
  constructor() {
    this.fetchData();
    this.results;
  }

  fetchData() {
    fetch("blog.json")
      .then((response) => response.json())
      .then((responseAsJson) => {
        const data = responseAsJson;

        this.view(data);
      })
      .catch((error) => {
        console.log("An Error Occurred:", error);
      });
  }

  view(data) {
    

    
    data.posts.forEach((element) => {
      const recent = document.querySelector("#recent");
      let recentPost = document.createElement("li");
      recent.append(recentPost);
      recentPost.innerHTML = `
           <a class="postLink" href=${element.link}> ${element.title} </a>
           <br>
            ${element.date}
        `;
    });

    if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
      let file = data.posts[0].post;
      fetch(file).then((response) =>
        response.text().then((text) => {
          let postDetail = text;
          data.posts[0].post = postDetail;

          const post = document.querySelector(".post");
          let postData = document.createElement("secion");
          post.append(postData);

          postData.innerHTML = `
        <button class="postCat rounded-pill">${data.posts[0].category}</button>
        <h3>${data.posts[0].title}</h3>
            <div class="row">
                <div class="col-3">
                    <h5>by: ${data.posts[0].by}</h5>
                    <h5>${data.posts[0].date}</h5>
                </div>
                <div class="col-9">
                    <img class="img-fluid" src="${data.posts[0].image}" alt="Preview"></img>
                    <article>
                    <p>${data.posts[0].post}</p>
                    </article>
                </div>
            </div>
        `;
        })
      );
    } else { 
      data.posts.forEach((element) => {
        if (
          window.location.pathname == "/" + element.link ||
          window.location.pathname == "/blog.html"
        ) {
          let file = element.post;
          fetch(file).then((response) =>
            response.text().then((text) => {
              let postDetail = text;
              element.post = postDetail;

              const post = document.querySelector(".post");
              let postData = document.createElement("secion");
              post.append(postData);

              postData.innerHTML = `
                <button class="postCat rounded-pill">${element.category}</button>
                <h3>${element.title}</h3>
                    <div class="row">
                        <div class="col-3">
                            <h5>by: ${element.by}</h5>
                            <h5>${element.date}</h5>
                        </div>
                        <div class="col-9">
                            <img class="img-fluid" src="${element.image}" alt="Preview"></img>
                            <article>
                            <p>${element.post}</p>
                            </article>
                        </div>
                    </div>
                `;
            })
          );
        }
      });
    }
  }
}


