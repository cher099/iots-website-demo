/* Load the shared site sections into each page. */
document.addEventListener('DOMContentLoaded', function () {
    var includeSlots = document.querySelectorAll('[data-include]');
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var heroSettings = {
        'contact.html': {
            image: 'assets/media/contact/contactHero.webp',
            alt: 'Woman pointing up',
            formClass: 'miniForm-contact',
            formId: 'miniForm-contact-container',
            quoteWrapId: 'miniForm-contact-quote-wrap',
            quoteButtonId: 'miniForm-contact-quote-button',
            benefits: [
                'SR22’s Electronically Filed',
                'Lowest Rates In Chicagoland',
                'We Shop You Save'
            ]
        },
        'locations.html': {
            image: 'assets/media/locations/locationsHero.jpg',
            alt: 'Woman in a car',
            formClass: 'miniForm-location',
            formId: 'miniForm-location-container',
            quoteWrapId: 'miniForm-location-quote-wrap',
            quoteButtonId: 'miniForm-location-quote-button',
            benefits: [
                'Lowest Rates In Chicago-land',
                'We Shop – You Save',
                'Instant SR22’s'
            ]
        }
    };

    Array.prototype.forEach.call(includeSlots, function (slot) {
        var includePath = slot.getAttribute('data-include');

        fetch(includePath)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Could not load ' + includePath);
                }

                return response.text();
            })
            .then(function (markup) {
                slot.outerHTML = markup;

                if (includePath.indexOf('header') !== -1) {
                    var header = document.querySelector('.site-header');
                    var pageLinks = header.querySelectorAll('a[href]');

                    Array.prototype.forEach.call(pageLinks, function (link) {
                        var linkPage = new URL(link.href, window.location.href).pathname.split('/').pop();

                        if (linkPage === currentPage) {
                            link.setAttribute('aria-current', 'page');
                        }
                    });
                }

                if (includePath.indexOf('hero') !== -1 && heroSettings[currentPage]) {
                    var settings = heroSettings[currentPage];
                    var heroImage = document.querySelector('[data-hero-image]');
                    var heroForm = document.querySelector('[data-hero-form]');
                    var benefitsList = document.querySelector('[data-hero-benefits]');
                    var heroContainer = document.querySelector('[data-hero-container]');
                    var quoteWrap = document.querySelector('[data-hero-quote-wrap]');
                    var quoteButton = document.querySelector('[data-hero-quote-button]');

                    heroImage.src = settings.image;
                    heroImage.alt = settings.alt;
                    heroForm.classList.add(settings.formClass);
                    heroContainer.id = settings.formId;
                    quoteWrap.id = settings.quoteWrapId;
                    quoteButton.id = settings.quoteButtonId;

                    settings.benefits.forEach(function (benefit) {
                        var item = document.createElement('li');
                        item.textContent = benefit;
                        benefitsList.appendChild(item);
                    });
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});
