import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) return db;

  const dbPath = path.join(process.cwd(), 'sukoon.db');
  db = new Database(dbPath);

  // Enable WAL mode for better concurrent read performance
  db.pragma('journal_mode = WAL');

  // Create tables if they don't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS custom_orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_name TEXT NOT NULL,
      contact_name TEXT NOT NULL,
      contact_email TEXT NOT NULL,
      contact_phone TEXT,
      bean_bag_style TEXT DEFAULT 'teardrop',
      preferred_color TEXT,
      quantity INTEGER NOT NULL DEFAULT 10,
      logo_url TEXT,
      notes TEXT,
      status TEXT DEFAULT 'pending',
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      name_ar TEXT,
      description TEXT,
      price REAL NOT NULL,
      currency TEXT DEFAULT 'SAR',
      category TEXT NOT NULL DEFAULT 'consumer',
      style TEXT NOT NULL DEFAULT 'nest',
      dimensions TEXT,
      weight TEXT,
      in_stock INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS product_colors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      hex TEXT NOT NULL,
      image_url TEXT,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `);

  return db;
}
