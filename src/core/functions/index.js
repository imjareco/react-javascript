import ReactDOM from "react-dom";
import core from "core/module";

export const render = (component) => {
  ReactDOM.render(component, document.getElementById("root"));
};

export const setConfig = () => {
  window.addEventListener("unhandlerrejection", error => {
    error.preventDefault();
    if (process.env.NODE_ENV !== "production") {
      console.warn("Unhandler promise rejection warning.", error);
    }
  });
};

export const modulesBuilder = (modules) => 
  modules.length > 0 ? [ core, ...modules.slice() ] : [core];
  
export const routesBuilder = (modules) => modules.reduce((result, { routes }) => result.concat(routes), []);

export const translationsBuilder = (languages, translations) => 
  Object.assign({}, ...languages.map((lang) => ({ [lang]: Object.assign({}, ...translations.map(({ translations }) => translations[lang]) )} )) );
