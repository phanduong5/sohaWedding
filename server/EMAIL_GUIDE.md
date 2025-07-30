# 📧 Email Service - SOHA Wedding

## Tính năng đã thêm

### ✅ **Email Service**
- Gửi email thông báo đặt lịch mới đến admin (`phanduong182k1@gmail.com`)
- Gửi email xác nhận đến khách hàng
- Gửi email thông báo liên hệ mới
- Gửi email tùy chỉnh
- Kiểm tra trạng thái email service

### 🎯 **Auto Email Tasks**
- **Đặt lịch mới** → Tự động gửi email đến admin + khách hàng
- **Liên hệ mới** → Tự động gửi email thông báo đến admin

## 📋 API Endpoints

### Email Management
- `POST /api/email/test` - Test gửi email
- `POST /api/email/send-custom` - Gửi email tùy chỉnh  
- `GET /api/email/status` - Kiểm tra trạng thái email service

### Booking với Email
- `POST /api/booking` - Tạo đặt lịch (tự động gửi email)

## 🔧 Cấu hình Email

### 1. Tạo App Password Gmail
1. Đăng nhập Gmail của bạn
2. Vào **Google Account Settings** → **Security**
3. Bật **2-Step Verification**
4. Tạo **App Password** cho ứng dụng

### 2. Cập nhật file `.env`
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
ADMIN_EMAIL=phanduong182k1@gmail.com
```

## 🚀 Test Email Service

### Test cơ bản
```bash
# Method: POST
# URL: http://localhost:5000/api/email/test
```

### Test email tùy chỉnh
```bash
# Method: POST
# URL: http://localhost:5000/api/email/send-custom
# Body:
{
  "type": "custom",
  "to": "phanduong182k1@gmail.com",
  "subject": "Test Email từ SOHA Wedding",
  "message": "<h2>Đây là email test!</h2><p>Email service hoạt động bình thường.</p>"
}
```

### Kiểm tra trạng thái
```bash
# Method: GET
# URL: http://localhost:5000/api/email/status
```

## 📧 Email Templates

### 🎉 **Email thông báo đặt lịch**
- Thông tin khách hàng đầy đủ
- Chi tiết đám cưới
- Design responsive đẹp mắt
- Gửi đến: `phanduong182k1@gmail.com`

### ✅ **Email xác nhận khách hàng**
- Xác nhận đặt lịch thành công
- Thông tin liên hệ SOHA Wedding
- Mã đặt lịch để tracking
- Gửi đến: Email khách hàng

### 📞 **Email thông báo liên hệ**
- Thông tin người liên hệ
- Nội dung tin nhắn
- Thời gian gửi
- Gửi đến: `phanduong182k1@gmail.com`

## 🔄 Auto Email Flow

### Khi khách hàng đặt lịch:
1. ✅ Lưu thông tin đặt lịch
2. 📧 Gửi email thông báo → Admin  
3. ✅ Gửi email xác nhận → Khách hàng
4. 📱 Trả response thành công

### Khi có liên hệ mới:
1. ✅ Lưu thông tin liên hệ
2. 📧 Gửi email thông báo → Admin
3. 📱 Trả response thành công

## 🛠️ Troubleshooting

### Lỗi thường gặp:
1. **Invalid login** → Kiểm tra EMAIL_USER và EMAIL_PASS
2. **Connection timeout** → Kiểm tra kết nối internet
3. **App password** → Đảm bảo đã tạo App Password đúng cách

### Debug:
```bash
# Kiểm tra logs server
npm run dev

# Test email service
curl -X POST http://localhost:5000/api/email/test
```

## 📝 Usage Examples

### JavaScript/React Frontend
```javascript
// Đặt lịch với auto email
const bookingData = {
  customerName: "Nguyễn Văn A",
  customerEmail: "customer@example.com", 
  customerPhone: "0123456789",
  weddingDate: "2024-12-25",
  serviceType: "Chụp ảnh cưới"
};

fetch('/api/booking', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bookingData)
});
// → Tự động gửi email đến admin + khách hàng
```

### cURL Test
```bash
# Test booking với email
curl -X POST http://localhost:5000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "customerPhone": "0123456789", 
    "weddingDate": "2024-12-25",
    "serviceType": "Chụp ảnh cưới"
  }'
```

## 🎨 Email Template Features

- ✅ **Responsive Design** - Hiển thị đẹp trên mọi thiết bị
- ✅ **Brand Colors** - Sử dụng màu sắc thương hiệu SOHA
- ✅ **Professional Layout** - Layout chuyên nghiệp
- ✅ **Rich Content** - Hỗ trợ HTML, CSS inline
- ✅ **Contact Info** - Thông tin liên hệ đầy đủ

---

**🎉 Email service đã sẵn sàng hoạt động!**
Mỗi khi có đặt lịch mới, bạn sẽ nhận được email thông báo ngay lập tức tại `phanduong182k1@gmail.com`
