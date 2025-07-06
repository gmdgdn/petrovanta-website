# PowerShell script to create placeholder images using SVG
param(
    [string]$BaseDir = "public/images"
)

# Ensure the base directory exists
if (!(Test-Path $BaseDir)) {
    New-Item -ItemType Directory -Path $BaseDir -Force
}

# Product categories and their products
$products = @{
    "petroleum" = @("crude-oil", "jet-a1", "en590-diesel", "bitumen")
    "chemicals" = @("sulfuric-acid", "hydrochloric-acid")
    "petrochemicals" = @("base-oils", "paraffin-wax")
    "polymers" = @("polypropylene", "polyethylene")
    "fertilizers" = @("urea", "dap")
}

# Category colors
$categoryColors = @{
    "petroleum" = "#3B82F6"
    "chemicals" = "#10B981"
    "petrochemicals" = "#8B5CF6"
    "polymers" = "#F97316"
    "fertilizers" = "#059669"
}

# Function to create SVG placeholder
function Create-SVGPlaceholder {
    param(
        [string]$Text,
        [string]$Color,
        [string]$OutputPath,
        [int]$Width = 800,
        [int]$Height = 600
    )
    
    $svg = @"
<svg width="$Width" height="$Height" viewBox="0 0 $Width $Height" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:$Color;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:$Color;stop-opacity:0.4" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" text-shadow="2px 2px 4px rgba(0,0,0,0.5)">$Text</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.8">Petrovanta</text>
</svg>
"@
    
    $svg | Out-File -FilePath $OutputPath -Encoding UTF8
}

# Create category hero images
Write-Host "Creating category hero images..."
foreach ($category in $products.Keys) {
    $categoryDir = Join-Path $BaseDir "categories"
    if (!(Test-Path $categoryDir)) {
        New-Item -ItemType Directory -Path $categoryDir -Force
    }
    
    $heroPath = Join-Path $categoryDir "$category-hero.svg"
    $categoryName = (Get-Culture).TextInfo.ToTitleCase($category)
    Create-SVGPlaceholder -Text $categoryName -Color $categoryColors[$category] -OutputPath $heroPath -Width 1200 -Height 400
    Write-Host "Created: $heroPath"
}

# Create product images
Write-Host "Creating product images..."
foreach ($category in $products.Keys) {
    $categoryDir = Join-Path $BaseDir "products/$category"
    if (!(Test-Path $categoryDir)) {
        New-Item -ItemType Directory -Path $categoryDir -Force
    }
    
    foreach ($product in $products[$category]) {
        # Main product image
        $mainImagePath = Join-Path $categoryDir "$product.svg"
        $productName = $product -replace '-', ' '
        $productName = (Get-Culture).TextInfo.ToTitleCase($productName)
        Create-SVGPlaceholder -Text $productName -Color $categoryColors[$category] -OutputPath $mainImagePath
        Write-Host "Created: $mainImagePath"
        
        # Gallery images
        for ($i = 2; $i -le 3; $i++) {
            $galleryImagePath = Join-Path $categoryDir "$product-$i.svg"
            Create-SVGPlaceholder -Text "$productName $i" -Color $categoryColors[$category] -OutputPath $galleryImagePath
            Write-Host "Created: $galleryImagePath"
        }
    }
}

Write-Host "All placeholder images created successfully!"
