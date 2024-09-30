// Example of adding items dynamically to the wishlist
const wishlist = [
    {
        id: 'item1',
        image: 'images/offcourt.webp', // Ensure the correct path is used
        title: 'Wishlist Item 1',
        description: 'This stylish shirt is available in a comfortable large size, perfect for a relaxed and casual fit. It\'s crafted from soft, breathable fabric, making it an ideal choice for everyday wear.',
        link: 'https://shopee.ph/(10-days-to-ship)-OFFCOURT-M3-Halo-Oversized-Tee-i.627827612.26109782693?xptdk=6c4030b0-728b-4a12-bb72-6ca3f652de2d' // Add the link to the store
    },
    {
        id: 'item2',
        image: 'images/cole.webp', // Ensure the correct path is used
        title: 'Wishlist Item 2',
        description: 'Elevate your wardrobe with this striking large-sized shirt, inspired by the iconic style of J. Cole. Designed for comfort and a perfect fit, it’s made from high-quality, breathable fabric that ensures all-day ease.',
        link: 'https://shopee.ph/Gunner-Coming-Of-Age-J-COLE-OVERSIZED-TEE-i.478748336.26450893782?xptdk=d8d89638-8f7a-48f8-bae2-0800a8f3cc6e' // Add the link to the store
    },
    {
        id: 'item3',
        image: 'images/magic.webp', // Ensure the correct path is used
        title: 'Wishlist Item 3',
        description: 'Show your support for the Orlando Magic with this vibrant large-sized shirt, inspired by the team\'s mascot, Gunner. Crafted from soft, breathable fabric, it offers both style and comfort for any occasion.',
        link: 'https://shopee.ph/GNR-EASTERN-CONFERENCE-ORLANDO-MAGIC-OVERSIZED-TEE-i.478748336.25076439366?xptdk=414f971b-66c0-4646-a335-2cdf3ab001a5' // Add the link to the store
    } // Closing the last object
];

document.addEventListener('DOMContentLoaded', () => {
    const wishlistContainer = document.querySelector('.wishlist');

    // Clear existing items before appending
    wishlistContainer.innerHTML = '';

    wishlist.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('wishlist-item');

        itemElement.innerHTML = `
            <a href="${item.link}" target="_blank"> <!-- Wrap image and title with a link -->
                <img src="${item.image}" alt="${item.title}">
                <div class="wishlist-description">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </a>
        `;

        wishlistContainer.appendChild(itemElement);
    });

    // Add the "Just wait for the SALE" message
    const saleMessage = document.createElement('div');
    saleMessage.classList.add('sale-message');
    saleMessage.innerText = 'HULATA ANG SALE PLEASE!';
    wishlistContainer.appendChild(saleMessage);
});
