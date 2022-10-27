function copyToClipBoard(id) {
  // From w3 school
  // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

  // Get the text field
  const copyText = document.getElementById(id)

   // Copy the text inside the text field

  navigator.clipboard.writeText(copyText.href)
}