const input = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const outputGroup = document.getElementById('output-group');
const qrContainer = document.getElementById('qr-container');
const downloadBtn = document.getElementById('download-btn');
const clearBtn = document.getElementById('clear-btn');
const errorMessage = document.getElementById('error-message');

let lastQRDataUrl = '';

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.style.display = 'block';
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
}

function clearQR() {
  qrContainer.innerHTML = '';
  outputGroup.style.display = 'none';
  lastQRDataUrl = '';
  clearError();
  input.value = '';
}

function generateQR() {
  clearError();
  const value = input.value.trim();
  if (!value) {
    showError('Please enter a URL or text.');
    return;
  }
  qrContainer.innerHTML = '';
  // Generate QR code as an <img>
  const qr = new QRCode(qrContainer, {
    text: value,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H
  });
  // Wait for the image to be rendered
  setTimeout(() => {
    const img = qrContainer.querySelector('img');
    if (img) {
      lastQRDataUrl = img.src;
      outputGroup.style.display = 'block';
    }
  }, 100);
}

generateBtn.addEventListener('click', generateQR);

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') generateQR();
});

downloadBtn.addEventListener('click', function() {
  if (!lastQRDataUrl) return;
  const a = document.createElement('a');
  a.href = lastQRDataUrl;
  a.download = 'qr-code.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

clearBtn.addEventListener('click', clearQR); 