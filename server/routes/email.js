const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

// POST /api/email/test - Test gửi email
router.post('/test', async (req, res) => {
  try {
    const result = await emailService.testEmail();
    
    if (result.success) {
      res.json({
        success: true,
        message: 'Email test đã được gửi thành công',
        messageId: result.messageId
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error testing email:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi test email'
    });
  }
});

// POST /api/email/send-custom - Gửi email tùy chỉnh
router.post('/send-custom', async (req, res) => {
  try {
    const { 
      type, // 'booking' | 'contact' | 'custom'
      to,
      subject,
      message,
      data 
    } = req.body;

    let result;

    switch (type) {
      case 'booking':
        if (!data) {
          return res.status(400).json({
            success: false,
            error: 'Dữ liệu booking là bắt buộc'
          });
        }
        result = await emailService.sendBookingNotification(data);
        break;

      case 'contact':
        if (!data) {
          return res.status(400).json({
            success: false,
            error: 'Dữ liệu contact là bắt buộc'
          });
        }
        result = await emailService.sendContactNotification(data);
        break;

      case 'custom':
        if (!to || !subject || !message) {
          return res.status(400).json({
            success: false,
            error: 'Email nhận, tiêu đề và nội dung là bắt buộc'
          });
        }
        
        // Gửi email tùy chỉnh
        const customResult = await emailService.sendCustomEmail(to, subject, message);
        result = customResult;
        break;

      default:
        return res.status(400).json({
          success: false,
          error: 'Loại email không hợp lệ. Chọn: booking, contact, hoặc custom'
        });
    }

    if (result.success) {
      res.json({
        success: true,
        message: 'Email đã được gửi thành công',
        messageId: result.messageId
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error
      });
    }

  } catch (error) {
    console.error('Error sending custom email:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi gửi email'
    });
  }
});

// GET /api/email/status - Kiểm tra trạng thái email service
router.get('/status', async (req, res) => {
  try {
    // Kiểm tra kết nối email service
    const isConnected = await emailService.verifyConnection();
    
    res.json({
      success: true,
      status: isConnected ? 'connected' : 'disconnected',
      adminEmail: 'phanduong182k1@gmail.com',
      service: 'Gmail SMTP',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error checking email status:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi kiểm tra trạng thái email'
    });
  }
});

module.exports = router;
