const Blog = require("../models/Blog");
const BlogAdmin = require("../models/BlogAdmin");

const findAllBlogs = async () => {
  return await Blog.findAll();
};

const createBlog = async (blogData) => {
  return await Blog.create(blogData);
};

const findBlogById = async (id) => {
  return await Blog.findByPk(id, { include: ["admin"] });
};

const updateBlog = async (id, updateData) => {
  const blog = await Blog.findByPk(id);
  if (!blog) return null;
  return await blog.update(updateData);
};

const deleteBlog = async (id) => {
  const blog = await Blog.findByPk(id);
  if (!blog) return null;
  await blog.destroy();
  return blog;
};

module.exports = {
  findAllBlogs,
  createBlog,
  findBlogById,
  updateBlog,
  deleteBlog,
};
