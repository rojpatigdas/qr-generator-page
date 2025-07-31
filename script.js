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
  
  // Create a temporary container for QR generation
  const tempContainer = document.createElement('div');
  tempContainer.style.display = 'none';
  document.body.appendChild(tempContainer);
  
  // Generate QR code
  const qr = new QRCode(tempContainer, {
    text: value,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H
  });
  
  // Wait for the image to be rendered
  setTimeout(() => {
    const img = tempContainer.querySelector('img');
    if (img) {
             // Create canvas with margin
       const margin = 16; // 16px margin on each side
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas size with margin
      canvas.width = 256 + (margin * 2);
      canvas.height = 256 + (margin * 2);
      
      // Fill background with white
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw QR code in center
      ctx.drawImage(img, margin, margin, 256, 256);
      
      // Convert canvas to data URL for download
      lastQRDataUrl = canvas.toDataURL('image/png');
      
      // Create display image (without margin for visual consistency)
      const displayImg = document.createElement('img');
      displayImg.src = img.src;
      displayImg.style.width = '256px';
      displayImg.style.height = '256px';
      qrContainer.appendChild(displayImg);
      
      outputGroup.style.display = 'block';
      
      // Clean up temporary container
      document.body.removeChild(tempContainer);
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