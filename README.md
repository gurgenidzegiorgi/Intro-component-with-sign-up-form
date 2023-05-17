# Intro component with sign up form

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)


## Overview

### Screenshot

![page preview](./src/assets/images/desktop-preview.jpg 'page preview')


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled-Components](https://styled-components.com/) - Js library


### What I learned


```css
const TextInput = styled.input`
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.25px;
    color: #3D3B48;
    mix-blend-mode: normal;
    opacity: 0.75;
  }

  &:focus-visible {
    outline-color: #5E54A4;
  }

  &[type='email']:invalid {
    color: #FF7979;;
  }
`;
```
```js
{showError && inputValue.trim() === "" && (
    <>
      <ErrorImg src={errorImg} alt="error icon" />
      <ErrorMsg>First Name cannot be empty</ErrorMsg>
    </>
  )}
```

## Author

- Author - [@Giorgi Gurgenidze](https://www.linkedin.com/in/george-gurgenidze-5801501a0/)
- GitHub Repo: - [Intro-component-with-sign-up-form](https://github.com/gurgenidzegiorgi/Intro-component-with-sign-up-form)
- Live URL: - [Vercel](https://intro-component-with-sign-up-form-gurgenidzegiorgi.vercel.app/)
