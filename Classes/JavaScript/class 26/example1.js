// Simulated asynchronous functions to fetch user and post data
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { id: 1, name: "Alice" },
        2: { id: 2, name: "Bob" },
        3: { id: 3, name: "Charlie" },
      };
      const user = users[userId];
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, Math.random() * 1000);
  });
}

function fetchPost(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = {
        1: { id: 1, title: "Post 1" },
        2: { id: 2, title: "Post 2" },
        3: { id: 3, title: "Post 3" },
      };
      const post = posts[postId];
      if (post) {
        resolve(post);
      } else {
        reject(new Error("Post not found"));
      }
    }, Math.random() * 1000);
  });
}

// Async function to fetch user and post data concurrently using Promise.all
async function fetchData(userId, postId) {
  try {
    // Fetch user and post data concurrently using Promise.all
    const [user, post] = await Promise.all([
      fetchUser(userId),
      fetchPost(postId),
    ]);
    return { user, post };
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Usage of fetchData function
fetchData(1, 1).then((data) => {
  console.log("Data:", data);
});
