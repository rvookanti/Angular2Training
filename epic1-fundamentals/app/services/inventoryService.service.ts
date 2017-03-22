
import {Injectable} from "@angular/core";
import {iInventoryItem} from "../Shapes/iInventoryItem"

@Injectable()
class InventoryService{
    currentItem:iInventoryItem;

    getItems():iInventoryItem[] {
        let items: iInventoryItem[] = 
         [{
                guid: 'item1',
                name: 'Bronze Earings',
                price: 100
        },
        {
                guid: 'item2',
                name: 'some item2',
                price: 55.0

        },
        {
            guid: 'item74',
            name: 'Diamond',
            price: 999
        }];
        return items;
    }

    setCurrentItem(item:iInventoryItem){
        this.currentItem = item;
        console.log(item.name);
    }

}

export {
    InventoryService
}