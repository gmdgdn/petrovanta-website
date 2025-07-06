import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'

// Only create client if environment variables are properly set
export const supabase = supabaseUrl && supabaseUrl !== 'http://localhost:54321' ? 
  createClient(supabaseUrl, supabaseAnonKey) : null

// Database types
export interface ContactSubmission {
  id?: string
  full_name: string
  company?: string
  email: string
  phone: string
  country: string
  product_category?: string
  subject: string
  message: string
  created_at?: string
}

export interface Product {
  id: string
  name: string
  category_id: string
  description: string
  specifications: Record<string, string>
  applications: string[]
  features: string[]
  image_url?: string
  slug?: string
  created_at?: string
  updated_at?: string
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  image_url?: string
  sort_order: number
  created_at?: string
  updated_at?: string
}
