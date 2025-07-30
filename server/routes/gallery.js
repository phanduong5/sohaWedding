const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Cấu hình multer để upload ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../uploads/gallery');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|webp|avif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Chỉ chấp nhận file ảnh (jpeg, jpg, png, gif, webp, avif)'));
    }
  }
});

// Mô phỏng database tạm thời
let galleryImages = [
  {
    id: '1',
    title: 'Ảnh cưới Studio',
    description: 'Bộ ảnh cưới chụp tại studio với concept vintage',
    category: 'studio',
    imageUrl: '/images/service/ảnh cưới studio.avif',
    tags: ['studio', 'vintage', 'classic'],
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Ảnh cưới Ngoại cảnh',
    description: 'Bộ ảnh cưới chụp tại Hồ Tây với xe Vespa cổ',
    category: 'outdoor',
    imageUrl: '/images/service/ảnh cưới studio + hồ tây.avif',
    tags: ['outdoor', 'vespa', 'lake'],
    createdAt: '2024-01-16T14:00:00Z'
  }
];

// GET /api/gallery - Lấy danh sách ảnh gallery
router.get('/', (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    
    let filteredImages = galleryImages;
    
    if (category && category !== 'all') {
      filteredImages = galleryImages.filter(img => img.category === category);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedImages = filteredImages.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedImages,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredImages.length / limit),
        totalItems: filteredImages.length,
        itemsPerPage: parseInt(limit)
      }
    });

  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi tải gallery'
    });
  }
});

// GET /api/gallery/:id - Lấy chi tiết một ảnh
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const image = galleryImages.find(img => img.id === id);

    if (!image) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy ảnh'
      });
    }

    res.json({
      success: true,
      data: image
    });

  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi tải ảnh'
    });
  }
});

// POST /api/gallery - Upload ảnh mới
router.post('/', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Vui lòng chọn file ảnh'
      });
    }

    const { title, description, category, tags } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        success: false,
        error: 'Tiêu đề và danh mục là bắt buộc'
      });
    }

    const newImage = {
      id: Date.now().toString(),
      title,
      description: description || '',
      category,
      imageUrl: `/uploads/gallery/${req.file.filename}`,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      createdAt: new Date().toISOString()
    };

    galleryImages.push(newImage);

    res.status(201).json({
      success: true,
      message: 'Upload ảnh thành công',
      data: newImage
    });

  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi upload ảnh'
    });
  }
});

// PUT /api/gallery/:id - Cập nhật thông tin ảnh
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, tags } = req.body;

    const imageIndex = galleryImages.findIndex(img => img.id === id);
    
    if (imageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy ảnh'
      });
    }

    galleryImages[imageIndex] = {
      ...galleryImages[imageIndex],
      title: title || galleryImages[imageIndex].title,
      description: description || galleryImages[imageIndex].description,
      category: category || galleryImages[imageIndex].category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : galleryImages[imageIndex].tags,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Cập nhật ảnh thành công',
      data: galleryImages[imageIndex]
    });

  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi cập nhật'
    });
  }
});

// DELETE /api/gallery/:id - Xóa ảnh
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const imageIndex = galleryImages.findIndex(img => img.id === id);
    
    if (imageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy ảnh'
      });
    }

    // Xóa file ảnh từ server (nếu là file upload)
    const image = galleryImages[imageIndex];
    if (image.imageUrl.startsWith('/uploads/')) {
      const filePath = path.join(__dirname, '..', image.imageUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    galleryImages.splice(imageIndex, 1);

    res.json({
      success: true,
      message: 'Xóa ảnh thành công'
    });

  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi xóa ảnh'
    });
  }
});

module.exports = router;
