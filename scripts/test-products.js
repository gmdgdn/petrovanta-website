// Test script to validate the enhanced product structure
const { productData, getProductById, getAllProducts, getProductsByCategory, categories } = require('../lib/products.ts');

console.log('🧪 Testing Enhanced Product Structure\n');

// Test 1: Verify all categories have products
console.log('📋 Test 1: Categories and Product Count');
categories.forEach(category => {
  const products = getProductsByCategory(category.id);
  console.log(`✅ ${category.name}: ${products.length} products`);
});

// Test 2: Verify total product count
const allProducts = getAllProducts();
console.log(`\n📊 Total Products: ${allProducts.length}`);

// Test 3: Test enhanced product features
console.log('\n🔍 Test 3: Enhanced Product Features');
allProducts.forEach(product => {
  const hasEnhancedImages = product.images && product.images.main;
  const hasSEO = product.seo && product.seo.title;
  const hasQualityStandards = product.qualityStandards && product.qualityStandards.length > 0;
  const hasAvailability = product.availability && product.availability.regions;
  
  console.log(`\n📦 ${product.name}:`);
  console.log(`   Images: ${hasEnhancedImages ? '✅' : '❌'}`);
  console.log(`   SEO: ${hasSEO ? '✅' : '❌'}`);
  console.log(`   Quality Standards: ${hasQualityStandards ? '✅' : '❌'}`);
  console.log(`   Availability: ${hasAvailability ? '✅' : '❌'}`);
});

// Test 4: Test specific product retrieval
console.log('\n🎯 Test 4: Product Retrieval');
const testCases = [
  ['petroleum', 'jet-a1'],
  ['chemicals', 'hydrochloric-acid'],
  ['petrochemicals', 'paraffin-wax'],
  ['polymers', 'polyethylene'],
  ['fertilizers', 'dap']
];

testCases.forEach(([category, productId]) => {
  const product = getProductById(category, productId);
  console.log(`${product ? '✅' : '❌'} ${category}/${productId}: ${product ? product.name : 'Not found'}`);
});

console.log('\n🎉 Product Structure Test Complete!');
