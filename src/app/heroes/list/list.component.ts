import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'Capitán américa', 'Iron man', 'She Hulk'];
  public deletedHero: string | undefined = undefined;

  deleteLastHeroe(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
