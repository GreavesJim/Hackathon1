import express from "express";
import userService from "../services/userService";
import postService from "../services/PostService"
export default class UserController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:name", this.getByName)
      .get("/:id/posts", this.getPostByUserId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await userService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await userService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getByName(req, res, next) {
    try {
      let data = await userService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getPostByUserId(req, res, next) {
    try {
      let data = await postService.getPostByUserId(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await userService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await userService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await userService.delete(req.params.id)
      return res.send("Successfully Deleted")
    } catch (error) {
      next(error)
    }
  }
}
