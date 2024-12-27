const blogRepository = require('../repositories/blogRepository');

const getAllBlogs = async () => {
  return await blogRepository.findAllBlogs();
};

const getBlogById = async (id) => {
  return await blogRepository.findBlogById(id);
};

const createBlog = async (blogData) => {
  return await blogRepository.createBlog(blogData);
};

const updateBlog = async (id, updateData) => {
  return await blogRepository.updateBlog(id, updateData);
};

const deleteBlog = async (id) => {
  return await blogRepository.deleteBlog(id);
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
