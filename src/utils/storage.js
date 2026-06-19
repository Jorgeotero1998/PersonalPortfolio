// Thin async wrapper around v0's window.storage with a localStorage fallback.
// Values are stored/retrieved as JSON.

function getBackend() {
  if (typeof window !== "undefined" && window.storage) return window.storage;
  return null;
}

export async function storageGet(key) {
  const backend = getBackend();
  try {
    if (backend) {
      const raw = await backend.getItem(key);
      return raw ? JSON.parse(raw) : null;
    }
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    }
  } catch (err) {
    console.log("[v0] storageGet error:", err?.message);
  }
  return null;
}

export async function storageSet(key, value) {
  const backend = getBackend();
  const raw = JSON.stringify(value);
  try {
    if (backend) {
      await backend.setItem(key, raw);
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, raw);
    }
  } catch (err) {
    console.log("[v0] storageSet error:", err?.message);
  }
}
