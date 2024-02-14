import { LightningElement, api } from 'lwc';

export default class RatingComponent extends LightningElement {
    @api ratingValue = 0;
    ratingOptions = [1, 2, 3, 4, 5];
    isRatingSelected = false;
    selectedRatingMessage = '';
    ratingType = '';

    get selectedRating() {
        return !isNaN(this.ratingValue) ? this.ratingValue : 0;
    }
    

    askForRating(event) {
        this.isRatingSelected = true;
        this.ratingType = event.target.dataset.type;
        this.selectedRatingMessage = 'Please rate us:';
    }
    

    handleRatingClick(event) {
        const selectedRating = parseInt(event.target.dataset.rating);
        this.ratingValue = selectedRating;
        this.selectedRatingMessage = `Thank you for rating ${this.ratingType}.`;

        // Emit a custom event to send the rating to the parent component
        this.dispatchEvent(new CustomEvent('ratingchange', { detail: selectedRating }));
    }
}
