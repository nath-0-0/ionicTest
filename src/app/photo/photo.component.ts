import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { KrakoukassPluginWeb } from 'krakoukass/src';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent{

    photo: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) { 
      this.xxx()
     }

    async takePicture() {
      const image = await Plugins.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    }

    xxx() {
      let x = new KrakoukassPluginWeb();  // ctrl + espace + enter   >>> auto import de la classe TOREMB
      x.echo({value: 'hi'});
      x.start();
    }
}

// ng build --prod
// npx http server


// installer plugin
// faire projet ionic
