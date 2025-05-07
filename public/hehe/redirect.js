const params = new URLSearchParams(document.location.search);
const redirectUrl = params.get("redirectUrl");

// send us there after all the animations have finished
if (redirectUrl) {
  try {
    url = new URL(redirectUrl);
    sendTo(url);
  } catch (e) {
    try {
      url = new URL("https://" + redirectUrl);
      sendTo(url);
    } catch (_) {}
  }
}

function sendTo(url) {
  setTimeout(() => {
    // replace prevents browser history from changing
    // window.location.replace(url.href);
    window.location.href = url.href;
  }, 7000); // meme comes in at 5000
}
