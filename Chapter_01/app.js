
// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

const heading = React.createElement(
    'h1', 
    { className: 'hello_react',
      title:"I'm a tooltip" 
    }, 
    'This is a Header Block!!!!');
const paragraph = React.createElement(
    'p',
    { className:'para_default',
      lang:"en",
     },'Header Paragraph Block')
const container = React.createElement(
    'div',
    { className: 'header_container' },
    [heading,paragraph]
);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
