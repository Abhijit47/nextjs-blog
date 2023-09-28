export async function getPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://dummyjson.com/posts');

  return res.json();
}