export interface CacheEntry {
    timestamp: Date;
    timeout: number;
    data: any;
}

export class Cache {
    private data: Map<string, CacheEntry>;

    constructor() {
        this.data = new Map<string, CacheEntry>();
    }

    set(key: string, data: any, timeout: number | null = null) {
        let value: CacheEntry = {
            data: data,
            timeout: timeout,
            timestamp: new Date()
        };
        this.data.set(key, value);
    }

    get(key: string) {
        if (!this.data.has(key)) {
            return null;
        }
        let cacheEntry = this.data.get(key);
        if (cacheEntry.timeout !== null && (new Date().getTime() - cacheEntry.timestamp.getTime() > cacheEntry.timeout)) {
            this.data.delete(key);
            return null;
        }
        return cacheEntry.data;
    }
}