const DB_NAME = 'CompanyFounderCacheDB'
const STORE_NAME = 'cacheStore'

async function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' })
      }
    }
  })
}

export async function setCachedData(key, data, ttl = 300000) {
  const db = await openDatabase()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  tx.objectStore(STORE_NAME).put({ key, data, expiry: Date.now() + ttl })
}

export async function getCachedData(key) {
  const db = await openDatabase()
  const tx = db.transaction(STORE_NAME, 'readonly')
  const request = tx.objectStore(STORE_NAME).get(key)
  return new Promise(resolve => {
    request.onsuccess = () => {
      const result = request.result
      resolve(result && Date.now() < result.expiry ? result.data : null)
    }
  })
}
