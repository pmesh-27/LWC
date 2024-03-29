import { createElement } from 'lwc';
import unittest from 'c/unittest';

describe('c-unittest', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    
    it('displays unit status with input change event', () => {
        const element = createElement('c-unit-test', {
          is: unittest
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('div');
          
        // Trigger unit status input change
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        inputElement.value = 7;
        inputElement.dispatchEvent(new CustomEvent('change'));
          
        return Promise.resolve().then(() => {
          expect(div.textContent).toBe('Unit 7 alive!');
        });
      });
});
