const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

// Mô phỏng database tạm thời
let bookings = [];

// GET /api/booking - Lấy danh sách đặt lịch
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: bookings,
    total: bookings.length
  });
});

// POST /api/booking - Tạo đặt lịch mới
router.post('/', (req, res) => {
  try {
    const { 
      customerName, 
      customerEmail, 
      customerPhone, 
      weddingDate, 
      serviceType, 
      venue, 
      guestCount, 
      budget, 
      notes 
    } = req.body;

    // Validation
    if (!customerName || !customerEmail || !customerPhone || !weddingDate || !serviceType) {
      return res.status(400).json({
        success: false,
        error: 'Thông tin khách hàng, ngày cưới và loại dịch vụ là bắt buộc'
      });
    }

    const newBooking = {
      id: Date.now().toString(),
      customerName,
      customerEmail,
      customerPhone,
      weddingDate,
      serviceType,
      venue: venue || '',
      guestCount: guestCount || 0,
      budget: budget || '',
      notes: notes || '',
      status: 'pending', // pending, confirmed, completed, cancelled
      createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);

    // Gửi email thông báo đến admin
    emailService.sendBookingNotification(newBooking).catch(error => {
      console.error('Lỗi gửi email thông báo:', error);
    });

    // Gửi email xác nhận đến khách hàng
    emailService.sendCustomerConfirmation(customerEmail, newBooking).catch(error => {
      console.error('Lỗi gửi email xác nhận khách hàng:', error);
    });

    res.status(201).json({
      success: true,
      message: 'Đặt lịch thành công',
      data: newBooking
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi đặt lịch'
    });
  }
});

// PUT /api/booking/:id - Cập nhật đặt lịch
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const bookingIndex = bookings.findIndex(booking => booking.id === id);
    
    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy đặt lịch'
      });
    }

    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Cập nhật đặt lịch thành công',
      data: bookings[bookingIndex]
    });

  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi cập nhật'
    });
  }
});

// DELETE /api/booking/:id - Hủy đặt lịch
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const bookingIndex = bookings.findIndex(booking => booking.id === id);
    
    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy đặt lịch'
      });
    }

    bookings.splice(bookingIndex, 1);

    res.json({
      success: true,
      message: 'Hủy đặt lịch thành công'
    });

  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi hủy đặt lịch'
    });
  }
});

module.exports = router;
