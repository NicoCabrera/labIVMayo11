import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() {
    this.uploader.onBeforeUploadItem = (item) => {

      console.info("item", item);
      // para evitar el error del cors
      //https://github.com/valor-software/ng2-file-upload/issues/140
      item.withCredentials = false;
    }
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
