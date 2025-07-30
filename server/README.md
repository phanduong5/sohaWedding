# SOHA Wedding Server

Node.js Express server cho website SOHA Wedding.

## Tính năng

- ✅ RESTful API cho quản lý liên hệ
- ✅ API đặt lịch dịch vụ
- ✅ Quản lý gallery ảnh với upload
- ✅ Quản lý dịch vụ
- ✅ CORS configuration
- ✅ Security với Helmet
- ✅ File upload với Multer
- ✅ Environment configuration

## API Endpoints

### Health Check
- `GET /api/health` - Kiểm tra trạng thái server

### Contact Management
- `GET /api/contact` - Lấy danh sách liên hệ
- `POST /api/contact` - Tạo liên hệ mới
- `PUT /api/contact/:id` - Cập nhật trạng thái liên hệ
- `DELETE /api/contact/:id` - Xóa liên hệ

### Booking Management
- `GET /api/booking` - Lấy danh sách đặt lịch
- `POST /api/booking` - Tạo đặt lịch mới
- `PUT /api/booking/:id` - Cập nhật đặt lịch
- `DELETE /api/booking/:id` - Hủy đặt lịch

### Gallery Management
- `GET /api/gallery` - Lấy danh sách ảnh gallery
- `GET /api/gallery/:id` - Lấy chi tiết ảnh
- `POST /api/gallery` - Upload ảnh mới
- `PUT /api/gallery/:id` - Cập nhật thông tin ảnh
- `DELETE /api/gallery/:id` - Xóa ảnh

### Services Management
- `GET /api/services` - Lấy danh sách dịch vụ
- `GET /api/services/categories` - Lấy danh sách categories
- `GET /api/services/:id` - Lấy chi tiết dịch vụ
- `POST /api/services` - Tạo dịch vụ mới
- `PUT /api/services/:id` - Cập nhật dịch vụ
- `DELETE /api/services/:id` - Xóa dịch vụ

## Cài đặt

### Prerequisites
- Node.js (version 14 hoặc cao hơn)
- npm hoặc yarn

### Installation

1. Cài đặt dependencies:
```bash
npm install
```

2. Tạo file `.env` từ `.env.example` và cấu hình:
```bash
cp .env.example .env
```

3. Cấu hình environment variables trong `.env`

### Development

```bash
# Chạy server trong development mode với nodemon
npm run dev

# Hoặc chạy server bình thường
npm start
```

Server sẽ chạy tại `http://localhost:5000`

### Production

```bash
# Build và chạy
npm start
```

## Environment Variables

```env
NODE_ENV=development|production
PORT=5000
CLIENT_URL=http://localhost:3000
UPLOAD_MAX_SIZE=10485760
ALLOWED_ORIGINS=http://localhost:3000,https://sohawedding.com
```

## File Structure

```
server/
├── index.js              # Entry point
├── package.json          # Dependencies và scripts
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── routes/              # API routes
│   ├── contact.js       # Contact API
│   ├── booking.js       # Booking API
│   ├── gallery.js       # Gallery API
│   └── services.js      # Services API
└── uploads/             # Uploaded files (auto-created)
    └── gallery/         # Gallery images
```

## Tích hợp với React Client

Server được thiết kế để hoạt động với React client ở port 3000. CORS đã được cấu hình để cho phép requests từ client.

## Deployment

### Local Development
```bash
# Chạy cả client và server
npm run dev
```

### Production Deployment
1. Build React app: `npm run build`
2. Deploy server với static files được serve từ build folder
3. Cấu hình environment variables cho production
4. Cấu hình reverse proxy (nginx) nếu cần

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

ISC
