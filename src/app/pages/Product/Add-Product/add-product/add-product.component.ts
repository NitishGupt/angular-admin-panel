import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxEditorModule, Editor } from 'ngx-editor';

@Component({
  selector: 'app-add-product',
  standalone:true,
  imports: [NgxEditorModule, FormsModule,RouterLink],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AddProductComponent {
  count: number = 0;
  htmlContent: string = 'type here...';
  editor!: Editor;

  ngOnInit() {
  
  }
  ngOnDestroy(): void {
   
  }

  addCount() {
    this.count += 1;
  }

  removeCount() {
    if (this.count > 0) {
      this.count -= 1;
    }

  }
}
