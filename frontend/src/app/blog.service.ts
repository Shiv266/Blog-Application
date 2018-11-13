import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2018-06-20T12:20:47.854Z",
      "created": "2018-06-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 1000,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2018-06-20T12:20:47.854Z",
      "created": "2018-06-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 1000,
      "bodyHtml": "<h1>this is a big text </h1> <p>Small text </p>",
      "description": "this is the description of example blog and is edited.",
      "title": "This is an example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2018-06-20T12:20:47.854Z",
      "created": "2018-06-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 1000,
      "bodyHtml": "this is the blog body. this is the blog body. this is the blog body. this is the blog body.",
      "description": "this is the third blog description",
      "title": "This is blog 3"
    }
  ]

  public currentBlog;

  constructor() {
    console.log("service constructor is called");
  }

  // method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  // method to get a particular blog
  
  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop from type script
    //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    for (let blog of this.allBlogs) {
      if(blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }// end get blog information function
}