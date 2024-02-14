import { LightningElement, wire } from 'lwc';
import getAllContact from '@salesforce/apex/Cont1.getAllContact';
export default class ContactList extends LightningElement {
conList = '';
pageSizeOptions = [5, 10, 25, 50, 75, 100];
records = [];
totalRecords = 0;
pageSize;
totalPages;
pageNumber = 1;
recordsToDisplay = [];
sortBy='FirstName';
sortDirection='asc';
@wire(getAllContact,{field : '$sortBy',sortOrder : '$sortDirection'})
wiredContactData({ data }) {
if (data) {
this.conList = data;
this.totalRecords = data.length;
this.pageSize = this.pageSizeOptions[0];
this.paginationHelper();
} 
}
columns = [
{ label: 'First Name', fieldName: 'FirstName', sortable: true },
{ label: 'Last Name', fieldName: 'LastName', sortable: true },
{ label: 'Phone', fieldName: 'Phone', type: 'phone' },
{ label: 'Email', fieldName: 'Email', sortable: true },
{ label: 'Account Name', fieldName: 'AccountId', sortable: true }
];
handleRecordsPerPage(event) {
this.pageSize = event.target.value;
this.paginationHelper();
}
previousPage() {
this.pageNumber = this.pageNumber - 1;
this.paginationHelper();
}
nextPage() {
this.pageNumber = this.pageNumber + 1;
this.paginationHelper();
}
firstPage() {
this.pageNumber = 1;
this.paginationHelper();
}
lastPage() {
this.pageNumber = this.totalPages;
this.paginationHelper();
}
paginationHelper() {
this.recordsToDisplay = [];
this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
if (this.pageNumber <= 1) {
this.pageNumber = 1;
} else if (this.pageNumber >= this.totalPages) {
this.pageNumber = this.totalPages;
}
for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber *
this.pageSize; i++) {
if (i === this.totalRecords) {
break;
}
this.recordsToDisplay.push(this.conList[i]);
}
}
doSorting(event) {
this.sortBy = event.detail.fieldName;
this.sortDirection = event.detail.sortDirection;
}
}