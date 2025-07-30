# Hướng dẫn setup EmailJS

## Bước 1: Tạo tài khoản EmailJS
1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí (có thể dùng Google Account)

## Bước 2: Tạo Email Service
1. Vào Dashboard → Email Services
2. Chọn "Add New Service" 
3. Chọn Gmail (hoặc email provider bạn muốn)
4. Đăng nhập Gmail của bạn: phanduong182k1@gmail.com
5. Copy Service ID (dạng: service_xxxxxxx)

## Bước 3: Tạo Email Template
1. Vào Email Templates → Create New Template
2. Template ID: `template_consultation`
3. Nội dung email template:

**Subject**: Yêu cầu tư vấn từ {{from_name}}

**Content**:
```
Chào SOHA Wedding,

Có một yêu cầu tư vấn mới từ website:

Tên khách hàng: {{from_name}}
Số điện thoại: {{phone_number}}
Ngày cưới dự kiến: {{wedding_date}}

Chi tiết:
{{message}}

--
Email này được gửi tự động từ website SOHA Wedding
```

4. Save template và copy Template ID

## Bước 4: Lấy Public Key
1. Vào Account → General
2. Copy Public Key (dạng: user_xxxxxxxxxxxxxxxxx)

## Bước 5: Cập nhật code
Thay thế trong file DetailConsultation.jsx:
- `serviceID`: Service ID từ bước 2
- `templateID`: Template ID từ bước 3  
- `publicKey`: Public Key từ bước 4

## Bước 6: Test
1. Chạy ứng dụng
2. Điền form và submit
3. Kiểm tra email phanduong182k1@gmail.com

## Lưu ý bảo mật
- Không commit Public Key lên Git
- Tạo file .env để lưu các key:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Sau đó sửa code thành:
```javascript
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```
