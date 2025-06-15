### Events
Events are a way to handle user interactions in the browser. They can be triggered by various actions such as clicks, key presses, or mouse movements.

| Property                  | Meaning                              |
| ------------------------- | ------------------------------------ |
| `type`                    | What kind of event (e.g. `click`)    |
| `timeStamp`               | When it occurred                     |
| `defaultPrevented`        | Was default action stopped?          |
| `target`                  | The actual clicked element           |
| `currentTarget`           | Where the listener is attached       |
| `clientX/clientY`         | Mouse X/Y in **window**              |
| `screenX/screenY`         | Mouse X/Y in **screen**              |
| `altKey/ctrlKey/shiftKey` | Modifier keys pressed                |
| `keyCode`                 | Which keyboard key (use `e.key` now) |

### Bubbling
Events can bubble up from child to parent elements. This means that if an event occurs on a child element, it can be handled by the parent element as well.
Also called "event propagation", this allows for a single handler to manage multiple elements.
To stop bubbling, use `event.stopPropagation()`.

### Preventing Default
You can prevent the default action of an event (like a link navigating) using `event.preventDefault()`. This is useful for custom behavior on form submissions or links.

Great observation — you're talking about the **third parameter** of `addEventListener`, which is called the **`useCapture`** flag (also known as `capture`).


### ✅ `addEventListener(event, callback, useCapture)`

#### `useCapture` → `false` or `true`

| Value               | Meaning                           |
| ------------------- | --------------------------------- |
| `false` *(default)* | Listen during **bubbling phase**  |
| `true`              | Listen during **capturing phase** |

---

#### 🔁 Bubbling vs Capturing

DOM Event Flow has **3 phases**:

1. **Capturing Phase** (outer → inner)
2. **Target Phase** (actual element clicked)
3. **Bubbling Phase** (inner → outer)

### Example structure:

```html
<div id="outer">
  <button id="inner">Click Me</button>
</div>
```

### JS:

```js
document.getElementById("outer").addEventListener("click", ()=>console.log("outer"), false);
document.getElementById("inner").addEventListener("click", ()=>console.log("inner"), false);
```

**Click button:**
👉 Output:

```
inner
outer
```

✅ This is **bubbling** (default): event bubbles *up* from `inner` to `outer`.

---

### Now try:

```js
document.getElementById("outer").addEventListener("click", ()=>console.log("outer"), true);
```

👉 Output:

```
outer
inner
```

✅ This is **capturing**: event is captured *top-down*.

---

## 🔹 Does `true` stop propagation?

**No**, `true` just changes *when* the listener runs (during capture instead of bubble).

To **stop propagation**, you must explicitly write:

```js
e.stopPropagation();
```

