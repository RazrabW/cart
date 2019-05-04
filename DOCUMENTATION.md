<a name="Cart"></a>

## Cart
**Kind**: global class
**Properties**

| Name | Type |
| --- | --- |
| storage | <code>String</code> |
| log | <code>Boolean</code> |


* [Cart](#Cart)
    * [new Cart(data)](#new_Cart_new)
    * [.log_cart(data)](#Cart+log_cart)
    * [.add(data)](#Cart+add)
    * [.remove(id)](#Cart+remove)
    * [.get(setting)](#Cart+get)

<a name="new_Cart_new"></a>

### new Cart(data)

| Param | Type |
| --- | --- |
| data | <code>Object</code> |

<a name="Cart+log_cart"></a>

### cart.log\_cart(data)
Вывод логов

**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| data | <code>Object</code> |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | используемый метод |
| length | <code>Number</code> | размер storage |

<a name="Cart+add"></a>

### cart.add(data)
**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| data | <code>Object</code> |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| beginning | <code>Boolean</code> | <code>false</code> | вставка в начало. |
| data | <code>\*</code> |  |  |

<a name="Cart+remove"></a>

### cart.remove(id)
**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| id | <code>Number</code> |

<a name="Cart+get"></a>

### cart.get(setting)
**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| setting | <code>Object</code> |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>Boolean</code> | <code>false</code> | вернуть результат текстом |
