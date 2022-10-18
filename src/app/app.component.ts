import { Component } from '@angular/core';
import { AlbumModel } from './models/album.model';
import { PhotoModel } from './models/photo.model';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'album';
  photoList: PhotoModel[] = [];
  albumCounter = 0;
  albumList: AlbumModel[] = [];
  albumList2: AlbumModel[] = [];
  albumSelected: number = 0;
  photoList2: PhotoModel[] = [];
  


  ngOnInit(){
    this.getPhotoList();
  }
  
  constructor(private albumService: AlbumService){

  }

  getPhotoList = () => {
    this.albumService.getAlbumList().subscribe((data: PhotoModel[])=>{
      this.photoList = data;
      this.createAlbums();
      this.filterAlbum2();
    });
  }

  filterAlbums(){
    for (let index = 0; index < this.lastItemOfAlbum(); index++) {
      this.albumList.push(new AlbumModel(this.photoList.filter(word => word.albumId == index+1)));
    }
  }

  filterAlbum2(){
    console.log(this.albumList2)
    this.photoList.forEach((element) => {
      console.log("Álbum id: ", element.albumId);
      this.albumList2[element.albumId-1].photos.push(element);
    });
  }
  
  createAlbums(){
    for (let index = 0; index < this.lastItemOfAlbum(); index++) {
      this.albumList2.push(new AlbumModel(new Array<PhotoModel>()));
      
    }

    console.log("Álbum2 AAAA: ", this.albumList2);
  }

  lastItemOfAlbum(){
    return this.photoList[this.photoList.length-1].albumId;
  }

  openAlbum(i: number){
    this.albumSelected = i;
  }



  

  

  listAlbums(){

    //console.log(this.photoList.length);
    //console.log(this.photoList.filter(word => word.albumId == 1));

    

    for (let index = 0; index < this.photoList.length; index++) {

      //console.log(index);

      let counter = 0;
      let id = this.photoList[index].albumId;

      



       

      /* if(this.photoList[index].albumId==this.albumCounter){
        //console.log("Albúm Id: "+this.photoList[index].albumId)
        

      } */

        

      /* let album = [];

       if(this.photoList[index].albumId==this.albumCounter){
        //console.log("Albúm Id: "+this.photoList[index].albumId)
        
        album.push(this.photoList[index]);

      }

      else {
        this.albumCounter++;
      }
 
      this.albumList.push(album);

      console.log(index) */
      
    }


  }

  






}
