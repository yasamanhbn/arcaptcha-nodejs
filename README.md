<h1>
  <img src="https://arcaptcha.co/logo.png" width="80" />
  Arcaptcha
</h1>

Validate and display captcha from Arcaptcha easily in nodejs.

## Installation

Install using npm:

`npm i arcaptcha-nodejs`

## Usage

Before doing anything, please read the [documentation](https://docs.arcaptcha.co/).

```javascript
const arcaptcha = require("arcaptcha-nodejs");
// Verify challenge
arcaptcha.verify(
  secret_key = "YOUR SECRET_KEY",
  site_key = "YOUR_SITE_KEY",
  challenge_id = "YOUR_CHALLENGE_ID"
).then((data) => {
  console.log(data);
});

// Display API script tag
arcaptcha.display_tag()

// Display captcha HTML tag
arcaptcha.displayCaptcha(YOUR_SITE_KEY)
```

---

### Functions

You can use the following functions with `captcha`:
| Function | Parameters | Description |
|-----------------------|-----------------------------------------------------------------|--------------------------------------------------|
| display_tag() | | Display ARCaptcha javascript resource HTML code. |
| displayCaptcha() | site_key, size, callback(default: None), theme, color(default: None),lang | Display captcha HTML code with all parameter. |
