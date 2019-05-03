<a name="Cart"></a>

## Cart
**Kind**: global class
**Properties**

| Name | Type |
| --- | --- |
| [storage] | <code>String</code> |
| [log] | <code>Boolean</code> |


* [Cart](#Cart)
    * [new Cart([data])](#new_Cart_new)
    * [.add([data])](#Cart+add)
    * [.remove([id])](#Cart+remove)
    * [.get([setting])](#Cart+get)

<a name="new_Cart_new"></a>

### new Cart([data])

| Param | Type |
| --- | --- |
| [data] | <code>Object</code> |

<a name="Cart+add"></a>

### cart.add([data])
**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| [data] | <code>Object</code> |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [beginning] | <code>Boolean</code> | <code>false</code> | вставка в начало. |
| [data] | <code>\*</code> |  |  |

<a name="Cart+remove"></a>

### cart.remove([id]) ? <code>Object</code>
**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| [id] | <code>Number</code> |

<a name="Cart+get"></a>

### cart.get([setting]) ? <code>\*</code>
**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type |
| --- | --- |
| [setting] | <code>Object</code> |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [string] | <code>Boolean</code> | <code>false</code> | вернуть результат текстом |
