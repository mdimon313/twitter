window.addEventListener("load", () => {
  const post = document.getElementById("post");

  console.log(post);
  for (let index = 0; index < 4; index++) {
    const singlePost = `<div class="card">
            <div class="profile">
              <img src="./assets/img/twt_400x400.jpg" alt="profile" />
            </div>
            <div class="card_body">
              <div class="names">
                <h4 class="name">
                  <a href="#"
                    >Mohammd Imon
                    <span class="u__name">@MohammdImon313 . </span>
                  </a>
                </h4>
                <span id="time">1hr</span>
              </div>

              <div class="card_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  বর্তমানে ওয়েব ডিজাইন এবং ডেভেলোপমেন্ট কাজের পরিধি অনেক। যারা
                  ওয়েব নিয়ে কাজ শিখতে আগ্রহী, প্রযুক্তির সাথে তালমিলিয়ে স্কিল
                  ডেভেলোপ করে বেকারমুক্ত সমৃদ্ধ বাংলাদেশ গড়ার অংশীদার হতে
                </p>
                <div class="card_img">
                  <img src="./assets/img/twt_400x400.jpg" />
                </div>
              </div>

              <div class="likes">
                <span class="comment"
                  ><i class="fal fa-comment"></i> <span>6</span></span
                >

                <span class="retweet"
                  ><i class="fal fa-retweet"></i> <span></span
                ></span>

                <span class="heart"
                  ><i class="fal fa-heart"></i> <span>202</span></span
                >

                <span class="share"
                  ><i class="fal fa-upload"></i> <span></span
                ></span>
              </div>
            </div>
          </div>`;

    post.innerHTML += singlePost;
  }
});
