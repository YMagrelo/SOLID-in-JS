// Dependency inversion principle

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json());
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage{
    get() {
        const dataFromLocaleStorage = 'data from local storage';
        return dataFromLocaleStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localeStorage = new LocalStorage();
    }

    clientGet(){
        return this.localeStorage.get();
    }
}



class Database {
    constructor(client) {
        // this.fetch = new Fetch();
        // this.localStorage = new LocalStorage();

        this.client = client;
    }

    getData() {
        // return this.fetch.request('vk.com')
        // return this.localStorage.get();

        return this.client.clientGet()
    }
}

const db = new Database(new FetchClient());

console.log(db.getData())
