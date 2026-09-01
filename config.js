// Connection details for the Supabase project that stores checkouts and changes.
// Both values are safe to keep in a public repository: the anon key only ever
// gets the access that the row-level security policies in schema.sql allow,
// which is read-only until someone signs in.
window.ROOM_CHECKOUT_CONFIG = {
  supabaseUrl:     "https://YOUR-PROJECT.supabase.co",
  supabaseAnonKey: "YOUR-ANON-KEY"
};
