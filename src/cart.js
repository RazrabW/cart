class Cart {

    /**
     * @param  {Object} [data]
     * @property {String} [storage]
     * @property {Boolean} [log]
     */
    constructor(data) {
        this.storage = data.storage;
        this.log = data.log;

        if (localStorage.getItem(this.storage) == null) {
            localStorage.setItem(this.storage, '[]');
        }

        if (this.log == null) {
            this.log = false;
        } else if (typeof this.log != Boolean) {
            console.warn('log in not boolean.');
            this.log = false;
        }

    }

    /**
     * @param {Object} [data] 
     * @property {Boolean} [beginning=false] - вставка в начало.
     * @property {*} [data]
     */
    add(data) {
        try {
            let storage = JSON.parse(localStorage.getItem(this.storage));

            if (data.beginning == true) { //вставка в начало

            } else { //вставка в конец
                storage.push({
                    id: storage.length + 1,
                    data: data.data
                });

                localStorage.setItem(this.storage, JSON.stringify(storage));

                return localStorage.getItem(this.storage);
            }
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.error('Limit exceeded');
            }
        }

    }

    /**
     * @param  {Number} [id]
     */
    remove(id) {
        let storage = JSON.parse(localStorage.getItem(this.storage));
        storage.splice(id, 1);

        localStorage.setItem(this.storage, JSON.stringify(storage));

        return JSON.parse(localStorage.getItem(this.storage));
    }

    /**
     * @param  {Object} [setting]
     * @property {Boolean} [string=false] - вернуть результат текстом
     */
    get(setting) {
        if (setting.string == false) {
            return JSON.parse(localStorage.getItem(this.storage));
        } else {
            return localStorage.getItem(this.storage);
        }
    }

    clean() {
        localStorage.removeItem(this.storage);
    }
}