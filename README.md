# QR Code Generator

A simple, modern web-based QR code generator that allows you to create QR codes from URLs, text, or any other content. Built with HTML, CSS, and JavaScript.

## Features

- 🎯 **Simple & Clean Interface** - Modern, minimal design that's easy to use
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔗 **Multiple Input Types** - Generate QR codes from URLs, text, contact information, or any content
- 📥 **Download Support** - Download your generated QR codes as PNG images
- ⚡ **Instant Generation** - Real-time QR code generation with no server required
- 🎨 **High Quality** - Generates high-resolution QR codes with error correction

## How to Use

### 1. Open the Application
- Simply open `index.html` in any modern web browser
- No installation or setup required!

### 2. Generate a QR Code
1. **Enter your content** in the text input field
   - URLs (e.g., `https://www.example.com`)
   - Text messages
   - Contact information
   - WiFi credentials
   - Any other text content

2. **Click Generate QR Code** or press Enter
   - The QR code will appear instantly below the input field

3**Download your QR code** (optional)
   - Click the Download QR Code" button to save as PNG
   - The file will be saved as `qr-code.png`

4. **Clear and start over** (optional)
   - Click "Clear" to reset the form and generate a new QR code

## Supported Content Types

The QR code generator supports various types of content:

### URLs
```
https://www.google.com
https://github.com/yourusername
```

### Text Messages
```
Hello World!
Your custom message here
```

### Contact Information (vCard format)
```
BEGIN:VCARD
VERSION:30
FN:John Doe
TEL:+1234567890EMAIL:john@example.com
END:VCARD
```

### WiFi Credentials
```
WIFI:T:WPA;S:NetworkName;P:Password;;
```

### Phone Numbers
```
tel:+1234567890wser Compatibility

This QR code generator works in all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Technical Details

- **QR Code Library**: Uses [qrcodejs](https://davidshimjs.github.io/qrcodejs/) for reliable QR code generation
- **Error Correction**: High-level error correction for better scanning reliability
- **Image Format**: PNG format for high quality and transparency support
- **Resolution**: 256pixels for optimal clarity

## File Structure

```
qr-generator-page/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Node.js dependencies (for CLI version)
├── index.js            # CLI version (Node.js)
└── README.md           # This file
```

## CLI Version

This project also includes a command-line version for Node.js users:

### Installation
```bash
npm install
```

### Usage
```bash
node index.js
```

The CLI version will prompt you to enter a URL and generate both a QR code image and a text file with the URL.

## Customization

### Changing QR Code Size
Edit the `width` and `height` values in `script.js`:
```javascript
const qr = new QRCode(qrContainer, {
  text: value,
  width:256    // Change this value
  height: 256,   // Change this value
  correctLevel: QRCode.CorrectLevel.H
});
```

### Changing Colors
Modify the CSS in `style.css` to change the appsappearance:
```css
.generate-btn[object Object]  background: #77  /* Change button color */
}
```

## Troubleshooting

### QR Code Not Generating
- Make sure youre using a modern browser
- Check that all files are in the same directory
- Try refreshing the page

### Download Not Working
- Some browsers may block automatic downloads
- Try right-clicking the QR code and selecting "Save image as..."

### Mobile Issues
- Ensure the page is loaded over HTTPS if accessing from a mobile device
- Check that JavaScript is enabled in your browser

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the design
- Adding new functionality

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Open an issue on the project repository
3. Contact the maintainer

---

**Enjoy generating QR codes! 🎉**

