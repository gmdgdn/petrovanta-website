-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  product_category TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product_categories table
CREATE TABLE product_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category_id UUID REFERENCES product_categories(id),
  description TEXT,
  specifications JSONB,
  applications TEXT[],
  features TEXT[],
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial product categories
INSERT INTO product_categories (name, description, sort_order) VALUES
('Petroleum Products', 'Essential energy resources for global transportation and industry', 1),
('Petrochemical Products', 'Building blocks for modern industrial applications', 2),
('Chemical Products', 'Foundational materials for manufacturing and processing', 3),
('Polymer Products', 'Versatile materials for countless applications', 4),
('Fertilizer Products', 'Supporting global agriculture and food security', 5);

-- Create RLS policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products and categories
CREATE POLICY "Allow public read access to product_categories" ON product_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to products" ON products FOR SELECT USING (true);

-- Allow public insert to contact_submissions
CREATE POLICY "Allow public insert to contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
