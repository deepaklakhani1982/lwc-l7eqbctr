import { LightningElement, track } from 'lwc';
export default class Loops extends LightningElement {
    @track 
    lstAccounts = [
        {
            Id : '1'
        },
        {
            Id : '2'
        },
        {
            Id : '3'
        },
        {
            Id : '4'
        },
        {
            Id : '5'
        },
        {
            Id : '6'
        }
    ];

    handleClick(event) {
      alert(event.currentTarget.dataset.id);
      this.lstAccounts.splice(event.currentTarget.dataset.id, 1);

       /*this.lstAccounts = [
        {
            Id : '1'
        },
        {
            Id : '2'
        },
        {
            Id : '3'
        },
        {
            Id : '4'
        },
        {
            Id : '5'
        },
        {
            Id : '7'
        }
    ];*/
    }
}