# Tail-Kit 

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![GitHub issues](https://img.shields.io/github/issues/Charlie85270/tail-kit) <a href="https://www.tailwind-kit.com/" target="_blank">
![GitHub Repo stars](https://img.shields.io/github/stars/Charlie85270/tail-kit?style=social)

![Tailwind-Kit](https://www.tailwind-kit.com/home.png)

</a>

### A beautiful and large components and templates kit for TailwindCSS 2.0

Tail-Kit is Free and Open Source. It does not change or add any CSS to the already one from TailwindCSS 2.0. It features multiple HTML elements that can be used in all web projects who's use tailwind CSS.

##  Components

Tailwind Starter Kit comes with 230+ Fully Coded CSS elements.

## Templates

Tailwind Starter Kit contains many templates like dashboards, landing pages, login pages etc. All are fully Coded and ready to copy paste.

![Tailwind-Kit](https://www.tailwind-kit.com/dashboard.png)

![Tailwind-Kit](https://www.tailwind-kit.com/template.png)

![Tailwind-Kit](https://www.tailwind-kit.com/template2.png)

and much more !!

## Live code editor
![Tailwind-Kit](https://i.ibb.co/g3n4NMg/Capture-d-e-cran-2020-12-27-a-12-06-16.png)

Tailwind-kit include a live code editor to change the components code and see in live the modification.


## Dark mode
![Tailwind-Kit](https://www.tailwind-kit.com/demo.gif)

Most components and templates are implemented with a light and dark version, with the new dark mode 2.0 feature of tailwind CSS. 


## Documentation
The documentation for the Tailwind-kit is hosted at our <a href="https://www.tailwind-kit.com/started" target="_blank">website</a>.



## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/chrome-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## Reporting Issues/ make Pull request

Every Issues, and PR are welcome ! 
the site is not perfect, there must be typos, bugs, improvements. 
Do not hesitate to contribe and add your own components/layout.



## Getting Started

![Tailwind-Kit](https://camo.githubusercontent.com/6202639220e8972265da4543eb10e428adbf579b8a07fc427bc90b383647a3c9/68747470733a2f2f7777772e6a6f616f706564726f2e63632f696d672f6769746875622f747970657363726970742d6e6578746a732d737461727465722e706e67)


Tail-Kit is a static site build with [Next.js](https://nextjs.org/) and typescript.

### Prerequisites: 

Node.js 10.13 or later 

Recommanded : **Node v12.18.3** 

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/_index.tsx`. The page auto-updates as you edit the file (static folder : /out).


Build the static site:

```bash
npm run build
# or
yarn build
```

## 🧐 What's inside?

A quick look at the important repo files and directories you'll see in a the project.

    .
    ├── node_modules
    ├── public
    ├── pages
    ├── components
    	 ├── kit
            ├── components
            ├── templates
         ├── layout
         ├── site
    ├── utils
    ├── editorTheme.tsx
    ├── global.css
    ├── LICENSE
    ├── next.config.js
    ├── tailwind.config.js
    ├── package.json
    ├── README
    ├── tsconfig.json
    ├── .gitignore
    └── yarn.lock.json

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/public`**: This directory contain all the public assets that need the project (images, icons).

1.  **`/pages`**: This directory contain all pages of the app. See [NextJs pages documentation](https://nextjs.org/docs/basic-features/pages/) for more details

1.  **`/components`**: This directory contain all components and templates of the app. 
	1. **kit** : contains all components and templates used for demonstration/preview. Component/templates are sorted by section (Commerce, Elements, Forms ...). Each section have his directory. 
	1. **layout** : contains all layout used in the application. See [NextJs layout documentation](https://nextjs.org/learn/basics/assets-metadata-css/layout-component) for more details
	1. **site** : contains all component used for the structure of the application (header, footer, home, ...)

1.  **`/utils`**: This directory contain all utils classes, like html parser, html beautifier (use to indent the components code on preview)

1.  **`editorTheme.tsx`**: This file is the configuration theme (colors) for the components code preview. See [react-prism](https://github.com/FormidableLabs/prism-react-renderer#theming) for more details

2.  **`global.css`**: This css file contain all the 'custom' css use for the app (home page animation)  

3.  **`LICENSE`**: Bulma-css is licensed under [EULA](./LICENSE.md).

4.  **`next.config.js`**: This file contain all the nextJS configuration. Here we use the default one.
     
5.  **`tailwind.config.js`**: This file contain all the Tailwind configuration.

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`README.md`**: A text file containing useful reference information about your project.

8.  **`tsconfig.json`**: The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

9.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

10. **`yarn-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 📋 Create a new section 

Components and templates are sorted by category.

Categories are sorted by section. 

A section can have one or more category.

Category can have one or more component/templates.

To add a new main section like ***Commerce, Element, Form*** .. you must : 
1.  Create your new directory in **components/kit/components/{yourSectionName}** or **components/kit/templates/{yourSectionName}**. It's inside this directory that you will put all your components/templates files.
	  
2.  Create a **index.tsx** file on this new directory. It will contain the description (categories names, components/tempaltes numbers, title, ....) of the section. See other section files for an example.   
2.  Each time you want create a new category on a section you will need create a directory in the directory of this one. Then you will put the component/templates file in the category directory. 

See an example : 


    
    ├── components
    	 ├── kit
         	├── components
            	├── MyNewSection // section directory
                	index.tsx // section description file
                	├── MyCategory // category directory
                    		MyComponent.tsx // My component source file
                            MyComponent2.tsx // My component source file
                            ....
            ├── templates
         ├── layout
         ├── site
    ├── ...
    └── ...


##  📁 Create a new category

As seen just above, to create a new category you need to create a directory on a section that will contains your components. We also need to create the category page.
1.  Create your new directory in **pages/components/{yourCategoryName}** or **pages/templates/{yourCategoryName}**. It's inside this directory that we will put the category page code.
	  
2.  Create a **index.tsx** file on this new directory. It will contain all the components/templates that we want import and see in this category. See other category files for an example.   
2.  When index.tsx is created NextJs create a route for this category that we can see on : http://localhost:3000/components/{yourCategoryName} or http://localhost:3000/templates/{yourCategoryName}


## ➕ Create a new component/templates

Components and templates are classics React functional component.


### dark/light mode

If you want that your component have a dark version, use Tailwind classes for dark mode [(documentation)](https://tailwindcss.com/docs/dark-mode). 

### Import the component

The last thing to do is to import your component/template on the wanted category file : **(/pages/components/{category}/index.tsx)** or **(/pages/templates/{category}/index.tsx)**

To enabled all feature preview like live edition, dark mode, ... you need to pass our component to `ComponentLayout`.

 `ComponentLayout` is the layout who will add all buttons (Code, Copy, Dark mode) and the live edition feature on our component.
 
**`ComponentLayout`** take few props :  

- `element`: The JSX.Element of our component
- `component`: The component 
- `title`: The title of the component display on the panel
- `jsLink`: The link of the component codeon github (if need JS to work)
- `needConfiguration`: Boolean if the component/template need a custom tailwind  configuration to work
- `vertical`: Boolean if the code preview is display on side of the component or below
- `showSwitchMode`: Boolean if the component have dark/light implementation (Display or hide the dark mode checkbox)
- `containerClasses`: Classes to add on the container of the component (ex : add margin, padding ...)


| propName    | propType      | defaultValue | isRequired |
| ----------- | ------------- | ------------ | ---------- |
| element | JSX.Element        |              | x          |
| component       |         |              | x          |
| title | string       |          | x          |
| jsLink    | string|              |          |
| needConfiguration    | boolean|      false        |          |
| vertical    | boolean|        false      |          |
| showSwitchMode    | boolean|        false      |          |
| containerClasses    | string|              |          |


Example of the `index.tsx` file of the **toggle** category :

```JSX
import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import FormSubscribe from "../../../components/kit/components/form/layout/FormSubscribe";

const TogglePage: FC = () => {
  return (
     <AppLayout
      title="Toggle, Checkbox and Radio buttons components for tailwind css"
      desc="Free and open source toggle, checkbox and radio buttons components for tailwind css"
    >
      <SectionHeader title="Form layout" />
      <ComponentLayout
        title="Subscribe"
        element={<FormSubscribe label="Subscribe" placeholder="Email" />}
        component={FormSubscribe}
      />
    </AppLayout>
  );
};

export default TogglePage;
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Licensing

- Copyright 2020 Charlie Rabiller</a>


- Licensed under <a href="https://github.com/Charlie85270/tail-kit/blob/main/README.md" target="_blank">MIT</a>



