/**
 * Google Apps Script for DZ Market Landing Page
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire code into the editor
 * 4. Replace SPREADSHEET_ID with your Google Sheet ID
 *    (found in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
 * 5. Create a Google Sheet with headers: Name | Phone | State | Address | Date
 * 6. Click Deploy > New Deployment
 * 7. Select type: "Web app"
 * 8. Execute as: "Me"
 * 9. Who has access: "Anyone"
 * 10. Click Deploy and copy the Web App URL
 * 11. Add the URL to your .env as GOOGLE_APPS_SCRIPT_URL
 */

// ⚠️ REPLACE THIS WITH YOUR SPREADSHEET ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'Orders';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      const newSheet = ss.insertSheet(SHEET_NAME);
      newSheet.appendRow(['Name', 'Phone', 'State', 'Address', 'Date']);
      // Format header row
      const headerRange = newSheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#16a34a');
      headerRange.setFontColor('#ffffff');
    }
    
    const targetSheet = ss.getSheetByName(SHEET_NAME);
    
    // Append the order data
    targetSheet.appendRow([
      data.name || '',
      data.phone || '',
      data.state || '',
      data.address || '',
      data.date || new Date().toLocaleString('fr-DZ', { timeZone: 'Africa/Algiers' })
    ]);
    
    // Auto-resize columns
    for (let i = 1; i <= 5; i++) {
      targetSheet.autoResizeColumn(i);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Order added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'active', 
      message: 'DZ Market Orders API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
