var request = require("request");

const VERIFY_URL = "https://arcaptcha.co/2/siteverify";

const verify = (secret_key, site_key, challenge_id) => {
  return new Promise(function verifyPromise(resolve, reject) {
    let payload = {
      secret: secret_key,
      sitekey: site_key,
      response: challenge_id,
    };

    request.post(
      {
        url: VERIFY_URL,
        json: payload,
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          if (!body.success) resolve(body);
          else resolve(true);
        }
        if (error) {
          reject(error);
        }
      }
    );
  });
};

const displayCaptcha = (
  size = "normal",
  callback = null,
  theme = "light",
  color = null,
  lang = "fa"
) => {
  return `<div class=arcaptcha data-site-key=${site_key} data-color=${color} data-size=${size} data-theme=${theme} data-lang=${lang} data-callback=${callback}></div>`;
};

const display_tag = () => {
  return "<script src='https://widget.arcaptcha.ir/1/api.js' async defer></script>";
};

module.exports = {
  verify,
  displayCaptcha,
  display_tag,
};
