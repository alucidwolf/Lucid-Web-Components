import { fromEvent } from "rxjs";

// const buttonWithLoader = document.getElementById("bwl");

// const observer = {
//   next(value: any) {
//     const defaultButtonText = buttonWithLoader.querySelector(".btn-text")
//       .innerHTML;
//     console.log(defaultButtonText);

//     const disabled = buttonWithLoader.hasAttribute("disabled");
//     if (!disabled) {
//       console.log("btn is enabled");
//       buttonWithLoader.setAttribute("disabled", "disabled");
//       buttonWithLoader.querySelector(".btn-text").innerHTML = "Loading ...";
//     }

//     setTimeout(() => {
//       buttonWithLoader.removeAttribute("disabled");
//       buttonWithLoader.querySelector(".btn-text").innerHTML = defaultButtonText;
//     }, 1500);
//   }
// };

// fromEvent(buttonWithLoader, "click").subscribe(observer);

customElements.define(
  "person-details",
  class extends HTMLElement {
    constructor() {
      super();

      const templateContent = (<HTMLTemplateElement>(
        document.getElementById("person-template")
      )).content;

      const shadowRoot = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
        div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }
        h2 { margin: 0 0 10px; }
        ul { margin: 0; }
        p { margin: 10px 0; }
        ::slotted(*) { color: gray; font-family: sans-serif; }
      `;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
);

customElements.define(
  "loading-button",
  class extends HTMLElement {
    constructor() {
      super();

      const btn = document.createElement("button");
      btn.className += "btn";
      btn.textContent = this.getAttribute("text");

      const observer = {
        next(value: any) {
          console.log("btn was clicked");

          const defaultButtonText = btn.textContent;
          const isButtonDisabled = btn.hasAttribute("disabled");

          if (!isButtonDisabled) {
            btn.setAttribute("disabled", "disabled");
            btn.innerHTML = `
                <span class="spinner" role="status" aria-hidden="true"></span>
                Loading...
            `;
          }

          setTimeout(() => {
            btn.removeAttribute("disabled");
            btn.innerHTML = defaultButtonText;
          }, 5500);
        }
      };

      const style = document.createElement("style");
      style.textContent = `
        body{
            font-size: 16px;
        }
        @keyframes spinner-grow {
            0% {
              transform: scale(0);
            }
            50% {
              opacity: 1;
            }
          }
        .btn{
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        .btn:hover{
            cursor: pointer;
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
        }
        .btn[disabled]{
            opacity: .75;
        }
        .btn[disabled]:hover{
            cursor: not-allowed;
        }
        .spinner{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            vertical-align: text-bottom;
            background-color: currentColor;
            border-radius: 50%;
            opacity: 0;
            -webkit-animation: spinner-grow .75s linear infinite;
            animation: spinner-grow .75s linear infinite;
        }
      `;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(btn);

      fromEvent(btn, "click").subscribe(observer);
    }
  }
);

// const logItem = (val: any, column: any) => {
//   let node = document.createElement("li");
//   let textNode = document.createTextNode(val);
//   node.appendChild(textNode);

//   if (column === 2) {
//     document.getElementById("list2").appendChild(node);
//   } else if (column === 1) {
//     document.getElementById("list1").appendChild(node);
//   }
// };

// const observable1 = Observable.create((observer: any) => {
//   observer.next("Observable 1");

//   setInterval(() => {
//     observer.next("Observable interval 1");
//   }, 500);
// });

// const observable2 = Observable.create((observer: any) => {
//   observer.next("Observable 2");

//   setInterval(() => {
//     observer.next("Observable interval 2");
//   }, 1000);
// });

// const sub1 = observable1.subscribe((x: any) => logItem(x, 1));

// const sub2 = observable2.subscribe((x: any) => logItem(x, 2));

// document.getElementById("unsub1").addEventListener("click", () => {
//   sub1.unsubscribe();
// });

// document.getElementById("unsub2").addEventListener("click", () => {
//   sub2.unsubscribe();
// });

// document.getElementById("addsub1").addEventListener("click", () => {
//   sub2.add(sub1);
// });
