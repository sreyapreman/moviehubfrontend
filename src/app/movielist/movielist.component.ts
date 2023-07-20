import { Component,OnInit} from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies:any
  genres:any
  constructor(private service:MovieService){


  }
  getMoviesByGeners(genre_name:any){
    this.service.filterMovies(genre_name).subscribe(res=>this.movies=res)

  }
  ngOnInit() {
    this.service.getAllMovies().subscribe(res=>this.movies=res)
    this.service.getAllGenres().subscribe(res=>this.genres=res)
    
  }

}
