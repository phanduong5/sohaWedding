const express = require('express');
const router = express.Router();

// Mô phỏng database tạm thời (trong thực tế bạn sẽ dùng MongoDB, MySQL, etc.)
let contacts = [];

// GET /api/contact - Lấy danh sách liên hệ
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: contacts,
    total: contacts.length
  });
});

// POST /api/contact - Tạo liên hệ mới
router.post('/', (req, res) => {
  try {
    const { name, email, phone, message, service } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tên, email và tin nhắn là bắt buộc'
      });
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      message,
      service: service || '',
      createdAt: new Date().toISOString(),
      status: 'pending' // pending, processed, closed
    };

    contacts.push(newContact);

    res.status(201).json({
      success: true,
      message: 'Liên hệ đã được gửi thành công',
      data: newContact
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi gửi liên hệ'
    });
  }
});

// PUT /api/contact/:id - Cập nhật trạng thái liên hệ
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contactIndex = contacts.findIndex(contact => contact.id === id);
    
    if (contactIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy liên hệ'
      });
    }

    contacts[contactIndex].status = status;
    contacts[contactIndex].updatedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'Cập nhật trạng thái thành công',
      data: contacts[contactIndex]
    });

  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi cập nhật'
    });
  }
});

// DELETE /api/contact/:id - Xóa liên hệ
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    
    if (contactIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy liên hệ'
      });
    }

    contacts.splice(contactIndex, 1);

    res.json({
      success: true,
      message: 'Xóa liên hệ thành công'
    });

  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi xóa'
    });
  }
});

module.exports = router;
