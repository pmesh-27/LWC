import { LightningElement} from 'lwc';
export default class task1 extends LightningElement {
 categories = [
 {
 categoryName: 'Shoes',
 products: [
 { productId: 1, productName: 'Adidas' },
 { productId: 2, productName: 'Puma' }
 ]
 },
 {
 categoryName: 'Flats',
 products: [
 { productId: 3, productName: '1 BHK' },
 { productId: 4, productName: '2 BHK' }
 ]
 }
 ];
}

