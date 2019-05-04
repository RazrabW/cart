class Cart {

    /**
     * @param  {Object} data
     * @property {String} storage
     * @property {Boolean} log
     */
    constructor(data) {
        this.storage = data.storage;
        this.log = data.log;

        if (localStorage.getItem(this.storage) == null) {
            localStorage.setItem(this.storage, '[]');
        }

    }

    /**
     * Вывод логов
     * @param  {Object} data 
     * @property {String} method используемый метод
     * @property {Number} length размер storage
     */
    log_cart(data) {
     	let time = new Date();

    	let logcart = [{
    		method: data.method,
    		storage_length: data.length,
    		time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    	}];

    	if (this.log == true) {
    		console.table(logcart);
    	}
    }

    /**
     * @param {Object} data 
     * @property {Boolean} beginning=false - вставка в начало.
     * @property {*} data
     */
    add(data) {
        try {
            let storage = JSON.parse(localStorage.getItem(this.storage));

            if (data.beginning == true) { //вставка в начало
                storage.unshift({
                    id: storage.length + 1,
                    data: data.data
                });

                localStorage.setItem(this.storage, JSON.stringify(storage));

                this.log_cart({
                	method: 'add',
                	length: JSON.parse(localStorage.getItem(this.storage)).length
                });

                return localStorage.getItem(this.storage);

            } else { //вставка в конец
                storage.push({
                    id: storage.length + 1,
                    data: data.data
                });

                localStorage.setItem(this.storage, JSON.stringify(storage));

                this.log_cart({
                	method: 'add',
                	length: JSON.parse(localStorage.getItem(this.storage)).length
                });

                return localStorage.getItem(this.storage);
            }
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.error('Limit exceeded');
            }
        }

    }

    /**
     * @param  {Number} id
     */
    remove(id) {
        let storage = JSON.parse(localStorage.getItem(this.storage));
        storage.splice(id, 1);

        localStorage.setItem(this.storage, JSON.stringify(storage));

        this.log_cart({
       		method: 'remove',
          	length: JSON.parse(localStorage.getItem(this.storage)).length
        });

        return JSON.parse(localStorage.getItem(this.storage));
    }

    /**
     * @param  {Object} setting
     * @property {Boolean} string=false - вернуть результат текстом
     */
    get(setting) {
        if (setting.string == false) {

	        this.log_cart({
	       		method: 'get',
	          	length: JSON.parse(localStorage.getItem(this.storage)).length
	        });

            return JSON.parse(localStorage.getItem(this.storage));
        } else {

	        this.log_cart({
	       		method: 'get',
	          	length: JSON.parse(localStorage.getItem(this.storage)).length
	        });

            return localStorage.getItem(this.storage);
        }
    }

    clean() {
        localStorage.removeItem(this.storage);
    }
}