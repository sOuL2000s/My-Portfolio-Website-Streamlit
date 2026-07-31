// scripts/optimize-images.js
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

async function optimizeImages() {
    console.log('Optimizing images to WebP...');
    
    try {
        const files = await imagemin(['*.png', '*.jpg', '*.jpeg'], {
            destination: 'optimized',
            plugins: [
                imageminWebp({
                    quality: 80,
                    method: 6,
                    alphaQuality: 80,
                    nearLossless: true,
                    preset: 'default'
                })
            ]
        });

        console.log(`✅ Optimized ${files.length} images to WebP format`);
        console.log('📁 Files saved in "optimized" folder');
        console.log('ℹ️  Move them to your root directory and update HTML references');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();