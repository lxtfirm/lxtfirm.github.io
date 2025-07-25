var posts=["2025/07/23/ext2/","2025/05/30/hello-world/","2025/06/03/quick-sort/","2025/06/03/扩容缓存区/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };