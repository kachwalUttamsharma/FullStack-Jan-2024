const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments/1";

const myfetchData = (url) => {
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log(error));
};

const fetchPost = myfetchData(POST_URL);
const fetchUser = myfetchData(USER_URL);
const fetchComment = myfetchData(COMMENT_URL);

console.log(fetchPost.then((data) => console.log(data)));
console.log(fetchUser.then((data) => console.log(data)));
console.log(fetchComment.then((data) => console.log(data)));

myfetchData(POST_URL)
  .then((data) => {
    console.log(data);
    return myfetchData(USER_URL);
  })
  .then((data) => {
    console.log(data);
    return myfetchData(COMMENT_URL);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// series
async function getAllInformation() {
  try {
    const userInfo = await myfetchData(USER_URL);
    console.log(userInfo);
    const postInfo = await myfetchData(POST_URL);
    console.log(postInfo);
    const commmentInfo = await myfetchData(COMMENT_URL);
    console.log(commmentInfo);
  } catch (error) {
    console.log(error);
  }
}

getAllInformation();
// parallel
async function getAllInformationParallel() {
  try {
    const data = await Promise.all([
      myfetchData(USER_URL),
      myfetchData(POST_URL),
      myfetchData(COMMENT_URL),
    ]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllInformationParallel();
