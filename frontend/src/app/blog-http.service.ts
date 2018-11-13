import { Injectable } from '@angular/core';
// importing http client to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'M2ZjZGQ1MTc0NjJlOThjYTMwYzQ1NDg0ODE1MmUxNmU2NDY4ZmI2ZWE5ZThjOGVlYjNkYmYxZTRlNTQ3NDM4MDk1MWMxMGNjMTE4YmQwMzQwY2Q0NDcxOWE2Y2JiNWJlYTUyNjZmODQ4MzU3ZmI5MDVhMjJhM2M0YzBjYmEzNmU1Mw=='

  constructor(private _http:HttpClient) { 
    console.log("blog-http service was called");

  }

  // exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  // method to return all the blogs
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
    
  }

  // method to get a particular blog
  
  public getSingleBlogInformation(currentBlogId): any {
    
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
    return myResponse;
  }// end get blog information function
  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;
  } // end create blog
  public deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;
  } // end delete blog
  public editBlog(blogId, blogData): any {

    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;
  } //end delete blog

}