
import {Component} from '@angular/core';
import {InventoryService} from '../../services/inventoryService.service';
import {iInventoryItem} from '../../Shapes/iInventoryItem'
@Component({
    selector: 'inventory-list',
    templateUrl: 'app/components/inventoryList/inventoryList.component.html'
})
export class InventoryList{
    constructor(private inventoryService:InventoryService){
        this.inventoryService = inventoryService;
    }
    currentItem:iInventoryItem;
    getItems(): iInventoryItem[] {
        return this.inventoryService.getItems();
    }
    setCurrentItem(item:iInventoryItem){
        this.inventoryService.setCurrentItem(item);
        this.currentItem = item;
    }
}