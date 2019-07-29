import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  //}
  constructor(private dataStorageService: DataStorageService, authService: AuthService) {}

  ngOnInit(){
    
  }
  onSaveData(){
    this.dataStorageService.storeRecipes();

  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
