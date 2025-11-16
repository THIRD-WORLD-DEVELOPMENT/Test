let currentFeaturedIndex = 0;
let featuredInterval;

document.addEventListener('DOMContentLoaded', function() {
    initializeFeaturedDisplay();
    initializeFilterTabs();
    initializeProducts();
    setupEventListeners();
    startFeaturedInterval();
});

function initializeFeaturedDisplay() {
    const display = document.querySelector('.featured-display');
    const indicators = document.querySelector('.featured-indicators');
    
    display.innerHTML = '';
    indicators.innerHTML = '';
    
    const featured = products.filter(p => p.isFeatured);
    
    if (featured.length === 0) return;
    
    featured.forEach((product, index) => {
        const item = document.createElement('div');
        item.className = `featured-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `
            <div class="featured-item-content">
                <div class="featured-item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="featured-item-info">
                    <h3>${product.name}</h3>
                    <p class="featured-item-price">₹${product.price}</p>
                </div>
            </div>
        `;
        item.addEventListener('click', () => openModal(product));
        display.appendChild(item);
        
        const indicator = document.createElement('div');
        indicator.className = `featured-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            goToFeatured(index);
            resetFeaturedInterval();
        });
        indicators.appendChild(indicator);
    });
}

function startFeaturedInterval() {
    featuredInterval = setInterval(() => {
        nextFeatured();
    }, 4000);
}

function resetFeaturedInterval() {
    clearInterval(featuredInterval);
    startFeaturedInterval();
}

function nextFeatured() {
    const featured = products.filter(p => p.isFeatured);
    if (featured.length === 0) return;
    
    currentFeaturedIndex = (currentFeaturedIndex + 1) % featured.length;
    updateFeaturedDisplay();
}

function goToFeatured(index) {
    const featured = products.filter(p => p.isFeatured);
    if (featured.length === 0) return;
    
    currentFeaturedIndex = index;
    updateFeaturedDisplay();
}

function updateFeaturedDisplay() {
    const items = document.querySelectorAll('.featured-item');
    const indicators = document.querySelectorAll('.featured-indicator');
    const featured = products.filter(p => p.isFeatured);
    
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentFeaturedIndex);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentFeaturedIndex);
    });
}

function initializeFilterTabs() {
    const filterTabs = document.querySelector('.filter-tabs');
    filterTabs.innerHTML = '';
    
    const allTab = document.createElement('button');
    allTab.className = 'filter-tab active';
    allTab.textContent = 'All';
    allTab.dataset.category = 'all';
    filterTabs.appendChild(allTab);
    
    categories.forEach(cat => {
        const tab = document.createElement('button');
        tab.className = 'filter-tab';
        tab.textContent = cat.name;
        tab.dataset.category = cat.name;
        filterTabs.appendChild(tab);
    });
    
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterProducts(this.dataset.category);
        });
    });
}

function initializeProducts() {
    const container = document.querySelector('.products-container');
    container.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category;
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="product-badge">${product.category}</span>
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(product));
        container.appendChild(card);
    });
}

function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCat = card.dataset.category.toLowerCase();
            const filterCat = category.toLowerCase();
            card.style.display = cardCat.includes(filterCat) || filterCat.includes(cardCat) ? 'block' : 'none';
        }
    });
}

function openModal(product) {
    const modal = document.querySelector('.modal');
    const img = modal.querySelector('.modal-image-section img');
    const category = modal.querySelector('.modal-category');
    const title = modal.querySelector('.modal-title');
    const description = modal.querySelector('.modal-description');
    const price = modal.querySelector('.modal-price');
    const cta = modal.querySelector('.modal-cta');
    
    img.src = product.image;
    img.alt = product.name;
    category.textContent = product.category;
    title.textContent = product.name;
    description.textContent = product.description;
    price.textContent = `₹${product.price}`;
    
    cta.onclick = () => window.open('https://ig.me/m/artbhaswati', '_blank');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function setupEventListeners() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 60;
                const top = target.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}
