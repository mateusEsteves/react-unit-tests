class _PostService {
  constructor() { }

  getPostById(id) {
    return new Promise((reject) => {
      setTimeout(() => reject(null), 1000);
    });
  }
}

const PostService = new _PostService()
export default PostService;