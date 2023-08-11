import "./index.css";

const iconS = `
    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
    </svg>
`;

const iconE = `
    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg>
`;

const iconW = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
  <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
</svg>

`;

type TArg = {
  type?: "success" | "error" | "warning";
  title: string;
  interval?: number;
};

const buildToast = (arg: TArg) => {
  const { title, type = "success" } = arg;

  return `
        <div class='${type}'>
            <div class="icon">
                ${type === "success" ? iconS : type === "error" ? iconE : iconW}
            </div>
            <div class="text">
                ${title}
            </div>
        </div>
    `;
};

const useToast = () => (arg: TArg) => {
  const body = document.querySelector("body") as HTMLBodyElement;
  const { interval = 5000 } = arg;

  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = buildToast(arg);

  body.appendChild(el);
  setTimeout(() => body.removeChild(el), interval);
};

export default useToast;
