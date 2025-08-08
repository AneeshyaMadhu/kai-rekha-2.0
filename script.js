function startScan() {
  const fileInput = document.getElementById('uploadInput');
  const imgPreview = document.getElementById('previewImage');
  const scanLine = document.getElementById('scanLine');
  const scanButton = document.getElementById('scanButton');

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imgPreview.src = e.target.result;
      scanLine.style.display = 'block';

      let containerHeight = imgPreview.clientHeight;
      let position = -5; // start above image
      scanLine.style.top = position + "px";

      let scanInterval = setInterval(() => {
        position += 2;
        scanLine.style.top = position + "px";

        if (position > containerHeight) {
          clearInterval(scanInterval);
          scanLine.style.display = 'none';
          scanButton.classList.remove('hidden');
        }
      }, 10); // move speed
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}