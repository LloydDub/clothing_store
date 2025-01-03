function showRequestForm(requestId) {
  // Hide all iframes
  const iframes = document.querySelectorAll("#requestForms iframe");
  iframes.forEach((iframe) => (iframe.style.display = "none"));

  // Show the selected iframe
  const selectedIframe = document.getElementById(requestId);
  selectedIframe.style.display = "block";
}
