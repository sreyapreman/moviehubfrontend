import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) {

   }
   register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/register/',data)
   }
   authenticate(data:any){
    return this.http.post('http://127.0.0.1:8000/api/token/',data)
   }
   getAllMovies(){
    let headers=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""
    })
    return this.http.get('http://127.0.0.1:8000/api/movies/',{"headers":headers})
   }
   movieDetail(id:any){
    let headers=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""

    })
    return this.http.get(`http://127.0.0.1:8000/api/movies/${id}/`,{"headers":headers})
   }
   postReview(id:any,data:any){
    let headers=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""

    })
    return this.http.post(`http://127.0.0.1:8000/api/movies/${id}/add_review/`,data,{"headers":headers})

   }
   getAllGenres(){
    let headers=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""

   })
   return this.http.get(`http://127.0.0.1:8000/api/movies/genres/`,{"headers":headers})
  }
  filterMovies(genre:any){
    let headers=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""

   })
   return this.http.get(`http://127.0.0.1:8000/api/movies/?genre=${genre}`,{"headers":headers})
    
 }
}
