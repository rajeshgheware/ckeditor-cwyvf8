import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  config = {
   uiColor: '#ffffff',
   toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
   { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
   { name: 'links' }, { name: 'insert' },
   { name: 'document', groups: ['mode', 'document', 'doctools'] },
   { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
   { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
   { name: 'styles' },
   { name: 'colors' }],
   skin: 'kama',
   resize_enabled: false,
   removePlugins: 'elementspath,save,magicline',
   extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
   colorButton_foreStyle: {
      element: 'font',
      attributes: { 'color': '#(color)' }
   },
   height: 188,
   removeDialogTabs: 'image:advanced;link:advanced',
   removeButtons: 'Subscript,Superscript,Anchor,Source,Table',
   format_tags: 'p;h1;h2;h3;pre;div'
}
}
